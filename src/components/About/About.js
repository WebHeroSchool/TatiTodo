import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';
import message from '../../images/message.png';
import telegram from '../../images/telegram.png';
import github  from '../../images/github.png';
import instagram from '../../images/instagram.png';
import vk from '../../images/vk.png';
import star from '../../images/Star.png';
import union from '../../images/Union.png';

const octokit = new Octokit();

class About extends React.Component {	
	state ={
		isLoading: true,
		repoList:[],
		username: '6thSence', //'TatevikBelokon',
		fetchRepoSuccess: false,
        error: '',
        email:'man.tatevic@yandex.ru',
        phone:'+7 (963) 097 49 39',
        vkUrl:'https://vk.com/tatibelokon',
        instUrl:'https://www.instagram.com/tatevik.belokon/?igshid=15520254752v8',        
	}

	componentDidMount() {
		octokit.repos.listForUser({			
			username: this.state.username,
		})
		.then( ({data}) => {
			console.log(data);
			this.setState({
				isLoading: false,
				repoList: data,
				fetchRepoSuccess: true,
			})
		})
		.catch(err => {
			this.setState({
				isLoading: false,
				fetchRepoSuccess: false,
				error: err,
			})
		});

		octokit.users.getByUsername({
            username: this.state.username,
        })
        .then((userInfo) => { 
        	console.log(userInfo);            
            this.setState({
                avatarURL: userInfo.data.avatar_url,
                name: userInfo.data.name,
                bio: userInfo.data.bio,
                githubUrl: userInfo.data.html_url,

            });
        });
	}

	render(){
		const {isLoading, fetchRepoSuccess, error, repoList, 
			   avatarURL, name, bio, githubUrl,
			   email, phone, vkUrl, instUrl} = this.state;

		return(
			<div>
				{isLoading ? <LinearProgress color="secondary" /> : 				
					<div>
						{!fetchRepoSuccess ? 'Error: '+ error : 
							<div>
								<div className={styles.user}>
									<img src={avatarURL} alt={name} className={styles.userImg}/>
									<span className={styles.userInfo}>
										<h1>{name}</h1>
										<p>{bio}</p>
										<p className={styles.contact}> 
											<img src={message} alt='email icon' className={styles.contactIcon}/> 
											<span>{email}</span>
										</p>
										<p className={styles.contact}>
											<img src={telegram} alt='telegram icon' className={styles.contactIcon}/> 
											<span>{phone}</span>
										</p>
										<p className={styles.socialNetwork}>
											<a href={githubUrl}><img src={github} alt='github icon' className={styles.socialIcon}/></a> 
											<a href={vkUrl}><img src={vk} alt='vk icon' className={styles.socialIcon}/></a> 
											<a href={instUrl}><img src={instagram} alt='instagram icon' className={styles.socialIcon}/></a> 
										</p>
									</span>
								</div>								
								<ul className={styles.repoList}> 
								     {repoList.map(repo => (<li key={repo.id} className={styles.repo}>
								     							<a href={repo.html_url} className={styles.repoName}>{repo.name}</a>
								     							<p className={styles.repoDop}>
								     								
								     								<img src={star} alt='star icon'  className={styles.repoIcon}/>
								     									<span className={styles.repoSpan}>{repo.stargazers_count}</span>
								     								<img src={union} alt='union icon' className={styles.repoIcon}/>
								     									<span className={styles.repoSpan}>{repo.forks_count}</span>
								     								<span className={styles.repoSpan}>Updated on {repo.updated_at}</span>								     								
								     							</p>
								     				        </li>)
								     )}
								</ul>
							</div>
						}
					</div>
				}
			</div>
		);
	}
}

export default About;
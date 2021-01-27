import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {	
	state ={
		isLoading: true,
		repoList:[],
		username: 'TatevikBelokon',
		fetchRepoSuccess: false,
        error: '',
	}

	componentDidMount() {
		octokit.repos.listForUser({
			// username: '6thSence'
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
                name: userInfo.data.login,
            });
        });
	}

	render(){
		const {isLoading, repoList, avatarURL, name, fetchRepoSuccess, error} = this.state;

		return(
			<div>
				<h1>About</h1>
				<div className={styles.text}>
					Todo ― бесплатное приложение, способное держать все ваши дела под контролем.<br />
					Самый простой в использовании список дел и задач. <br />
					Позволяет: 
					<ul>
						<li>создавать и удалять дела в одно касание</li>
						<li>просматривать сразу все дела, невыполненные или завершенные дела на выбор</li>
						<li>подсказывает сколько осталось дел для выполнения</li>				
					</ul>
				</div>
				<h2>{isLoading ? <LinearProgress color="secondary" /> : 'User'}</h2>
				{!isLoading && 
					<div>
						{!fetchRepoSuccess ? 'Ошибка: '+ error : 
							<div>
								<img src={avatarURL} alt={name} width="200"></img>
								<h3>{name}</h3>
								<h2>Repositories list:</h2>
								<ol> 
								     {repoList.map(repo => (<li key={repo.id}>
								     							<a href={repo.html_url}>{repo.name}</a>
								     						</li>))}
								</ol>
							</div>
						}
					</div>
				}
			</div>
		);
	}
}

export default About;
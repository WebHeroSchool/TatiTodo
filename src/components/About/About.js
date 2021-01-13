import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {	
	state ={
		isLoading: true,
		repoList:[]
	}

	componentDidMount() {
		octokit.repos.listForUser({
		  username: '6thSence'
		}).then( ({data}) => {
			this.setState({
				isLoading: false,
				repoList: data
			})
		});
	}

	render(){
		const {isLoading, repoList} = this.state;

		return(
			<div>
				<h1>About</h1>
				<div className={styles.text}>
					Todo ― бесплатное приложение, способное держать все ваши дела под контролем.<br />
					Самый простой в использовании список дел и задач. <br />
					Позволяет 
					<ul>
						<li>создавать и удалять дела в одно касание</li>
						<li>просматривать сразу все дела, невыполненные или завершенные дела на выбор</li>
						<li>подсказывает сколько осталось дел для выполнения</li>				
					</ul>
				</div>
				<h1>{isLoading ? <LinearProgress color="secondary" /> : 'Repositories list:'}</h1>
				{!isLoading && <ol> 
							     {repoList.map(repo => (<li key={repo.id}>
							     						  {repo.name}
							     						</li>))}
							   </ol>}
			</div>
		);
	}
}
export default About;
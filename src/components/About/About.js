import React from 'react';
import styles from './About.module.css';

const About = () => (	
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
	</div>
	
);

export default About;
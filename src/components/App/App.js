import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const item = {
	fontSize:'18pt',
	fontFamily: 'Lora',
};

const App = () => (	
	<Router>
		<div className={styles.wrap}>
			<div>			
				<MenuList className={styles.linksList}>
					<NavLink to='/about' className={styles.link}
					 					 activeClassName={styles.linkSelect}>
						<MenuItem  style={item}>About</MenuItem>
					</NavLink>
					<NavLink to='/todo' className={styles.link}
					 					activeClassName={styles.linkSelect}>
						<MenuItem style={item}>To do List</MenuItem>
					</NavLink>					
				</MenuList>
			</div>

			<Route path='/' exact component={About} />
			<Route path='/about' component={About} />
			<Route path='/todo' component={Todo} />				
		</div>
	</Router>
);

export default App;


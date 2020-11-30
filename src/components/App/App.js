import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import classnames from 'classnames';

const App = () => (	
	<Router>
		<div className={styles.wrap}>
			<div>
				<MenuList className={styles.linksList}>
					<Link to='/' className={styles.link}><MenuItem>About</MenuItem></Link>
					<Link to='/todo' className={styles.link}><MenuItem>To do List</MenuItem></Link>					
				</MenuList>
			</div>

			<Route path='/' exact component={About} />
			<Route path='/todo' component={Todo} />				
		</div>
	</Router>
);

export default App;


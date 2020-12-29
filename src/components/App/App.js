import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

import classnames from 'classnames';

// import {useState, useEffect} from 'react';

const item = {
	fontSize:'18pt',
	fontFamily: 'Lora',
};

// const appState = {
// 	isSelected: false
// }

// const [isSelected, setSelected] = useState(appState.isSelected);

// const onClickSelect = ()=>{
// 	const newSelected = !isSelected;
// 	setSelected(newSelected);
// }

const App = () => (	
	<Router>
		<div className={styles.wrap}>
			<div>			
				<MenuList className={styles.linksList}>
					<Link to='/' 
						className={styles.link} 
						// isSelected={isSelected}
						// onClickSelect={onClickSelect}
						>
									<MenuItem style={item}>About</MenuItem>
					</Link>
					<Link to='/todo' 
						className={styles.link} 
						// isSelected={isSelected}
						// onClickSelect={onClickSelect}
						>
									<MenuItem style={item}>To do List</MenuItem>
					</Link>					
				</MenuList>
			</div>

			<Route path='/' exact component={About} />
			<Route path='/todo' component={Todo} />				
		</div>
	</Router>
);

export default App;


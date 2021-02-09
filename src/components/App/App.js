import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import classnames from 'classnames';

const item = {
	fontSize:'18pt',
	fontFamily: 'Lora',
};

let isAboutSelect = false;
let isTodoSelect = false;

const App = () => (	
	<Router>
		<div className={styles.wrap}>
			<div>			
				<MenuList className={styles.linksList}>
					<Link to='/'className={classnames({[styles.link]:true,
													   [styles.linkSelect]:isAboutSelect})}
								onClick={()=> {isAboutSelect = true; isTodoSelect = false;}}>
						<MenuItem  style={item}>About</MenuItem>
					</Link>
					<Link to='/todo' className={classnames({[styles.link]:true,
													        [styles.linkSelect]:isTodoSelect})}
									 onClick={()=> {isAboutSelect=false; isTodoSelect = true;}}>
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


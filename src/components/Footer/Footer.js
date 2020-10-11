import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({count})=> (
	<div className={styles.wrap}>
		<span className={styles.wrap}>{count} items left</span>
		<ButtonGroup aria-label="small 
					 outlined button group" 
					 size="small"
					 className={styles.btnGroup}>
			<Button>All</Button>
		    <Button>Active</Button>
		    <Button>Completed</Button>
      	</ButtonGroup>	
		<Button variant="outlined" size="small">Clear completed</Button>
	</div>
	);

export default Footer; 
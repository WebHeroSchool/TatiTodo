import React from 'react';
import styles from './Footer.module.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const StyledButton = withStyles({  
  label: {
    textTransform: 'capitalize',
        color: '#565555',
  },
})(Button);

const Footer = ({count, onClickClearCompleted})=> (
	<div className={styles.wrap}>
		<span className={styles.wrap}>{count} items left</span>
		<ButtonGroup aria-label="small outlined button group" size="small">
			<StyledButton>All</StyledButton>
		    <StyledButton>Active</StyledButton>
		    <StyledButton>Completed</StyledButton>
      	</ButtonGroup>			
		<StyledButton variant="outlined" size="small" onClick={onClickClearCompleted} >
			clear completed
		</StyledButton>
	</div>
	);

export default Footer; 
import React from 'react';
import styles from './Footer.module.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

const StyledButton = withStyles({  
  label: {
    textTransform: 'capitalize',
    color: '#565555',
  },
})(Button);

const Footer = ({count, onClickShowAll, onClickShowActive, onClickShowCompleted, onClickClearCompleted})=> (
	<div className={styles.wrap}>
		<span className={styles.wrap}>{count} items left</span>
		<ButtonGroup aria-label="small outlined button group" size="small">
			<StyledButton onClick={onClickShowAll}>All</StyledButton>
		    <StyledButton onClick={onClickShowActive}>Active</StyledButton>
		    <StyledButton onClick={onClickShowCompleted}>Completed</StyledButton>
      	</ButtonGroup>			
		<StyledButton variant="outlined" size="small" onClick={onClickClearCompleted} >
			clear completed
		</StyledButton>
	</div>
);

Footer.propTypes = {
	count: PropTypes.number.isRequired,
	onClickShowAll:PropTypes.func.isRequired,
	onClickShowActive:PropTypes.func.isRequired,
	onClickShowCompleted: PropTypes.func.isRequired,
	onClickClearCompleted: PropTypes.func.isRequired	
};

export default Footer; 
import React from 'react';
import styles from './Footer.module.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const StyledButton = withStyles({  
  label: {
    textTransform: 'capitalize',
    color: '#565555',
  },
})(Button);

const Footer = ({count, onClickShowAll, onClickShowActive, onClickShowCompleted, onClickClearCompleted, 
				        isAllSelect, isActiveSelect, isCompletedSelect})=> (
	<div className={styles.wrap}>
		<span className={styles.wrap}><span className={styles.count}>{count}</span> items left</span>
		<ButtonGroup aria-label="small outlined button group" size="small">
			<Button className={classnames({ [styles.filter]:true,
											[styles.filterSelect]:isAllSelect})} 
						  onClick={onClickShowAll}>
				All 
			</Button>		    
		    <Button className={classnames({ [styles.filter]:true,
											[styles.filterSelect]:isActiveSelect})} 
		    			  onClick={onClickShowActive}>
		    	Active
		    </Button>
		    <Button className={classnames({ [styles.filter]:true,
											[styles.filterSelect]:isCompletedSelect})} 
		    	          onClick={onClickShowCompleted}>
		    	Completed
		    </Button>
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
	onClickClearCompleted: PropTypes.func.isRequired,
	isAllSelect: PropTypes.bool.isRequired,
	isActiveSelect: PropTypes.bool.isRequired,
	isCompletedSelect: PropTypes.bool.isRequired
};

export default Footer; 
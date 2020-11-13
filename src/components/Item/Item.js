import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

class Item extends React.Component{
	render() {
		const {value, isDone, id, onClickDone, onClickDelete} = this.props;

		return(
			<span className={classnames({ [styles.item]:true,
							              [styles.done]:isDone})}>
			  	<ListItemIcon >
					<Checkbox 				
					    checked={isDone}
					    tabIndex={-1}			    
					    onClick={() => onClickDone(id)}			                
		            />
		        </ListItemIcon>
		        <ListItemText primary={value}/>
			    <ListItemSecondaryAction>
			        <IconButton aria-label="comments">
					    <DeleteIcon onClick={() => onClickDelete(id)}/>
					</IconButton>
				</ListItemSecondaryAction>				
			</span>
		)
	}
};

Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
}

export default Item;



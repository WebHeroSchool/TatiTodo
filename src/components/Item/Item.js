import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({value, isDone, onClickDone}) => 
	(<span className={
		classnames({ [styles.item]:true,
					 [styles.done]:isDone})
	  }>
	  	<ListItemIcon >
			<Checkbox 
				edge="start"
			    checked={isDone}
			    tabIndex={-1}			    
			    onClick = {() => onClickDone(isDone)}			                
            />
        </ListItemIcon>
        <ListItemText primary={`${value}`}/>
	    <ListItemSecondaryAction>
	        <IconButton edge="end" aria-label="comments">
			    <DeleteIcon />
			</IconButton>
		</ListItemSecondaryAction>
		
	 </span>);

export default Item;



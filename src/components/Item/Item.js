import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

/*const Item = ({value, isDone}) => 
	(<span className={
		classnames({ [styles.Item]:true,
					 [styles.done]:isDone})
	  }>
		
		{value}
	 </span>);

export default Item;*/

const Item = ({value, isDone}) => 
	(<span className={
		classnames({ [styles.Item]:true,
					 [styles.done]:isDone})
	  }>
						<ListItemIcon>
			              <Checkbox
			                edge="start"
			                // checked={checked.indexOf(value) !== -1}
			                tabIndex={-1}
			                disableRipple			                
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



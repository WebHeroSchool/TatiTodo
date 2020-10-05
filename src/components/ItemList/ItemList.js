import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// const ItemList = ({items}) => (
// 	<ul>
// 		{items.map((item, i)=>
// 			<li key={i}>
// 				<Item value={item.value} isDone={item.isDone}/>
// 			</li>)
// 		}	
// 	</ul>
// 	);

// export default ItemList;

export default function ItemList({items}) {  
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
    	{items.map((item, i) => {
	        const labelId = `checkbox-list-label-${item.value}`;

	        return (
	          <ListItem key={i} role={undefined} dense button onClick={handleToggle(item.value)}>
	            <ListItemIcon>
	              <Checkbox
	                edge="start"
	                checked={checked.indexOf(item.value) !== -1}
	                tabIndex={-1}
	                disableRipple
	                inputProps={{ 'aria-labelledby': labelId }}
	              />
	            </ListItemIcon>
	            <ListItemText id={labelId} primary={`${item.value}`} isDone={item.isDone}/>
	            <ListItemSecondaryAction>
	              <IconButton edge="end" aria-label="comments">
	                <DeleteIcon />
	              </IconButton>
	            </ListItemSecondaryAction>            
	          </ListItem>
	        );
      	})}
    </List>
  );     
}
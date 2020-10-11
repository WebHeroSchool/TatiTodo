import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
	          	<Item value={item.value} isDone={item.isDone}/>         
	          </ListItem>
	        );
      	})}
    </List>
  );     
}
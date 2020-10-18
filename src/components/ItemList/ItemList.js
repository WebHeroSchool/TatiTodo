import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ItemList = ({items, onClickDone}) => (
    <List>
    	{items.map(item =>  	       
	    	<ListItem key={item.value} role={undefined}>	            
	          	<Item value={item.value} 
	          		  isDone={item.isDone} 
	          		  id={item.id}
	          		  onClickDone={onClickDone}/>         
	        </ListItem>)
	    }
    </List>);     

export default ItemList;
import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ItemList = ({items, onClickDone, onClickDelete}) => (
    <List>
    	{items.map(item =>  	       
	    	<ListItem key={item.id}>	            
	          	<Item value={item.value} 
	          		  isDone={item.isDone} 
	          		  id={item.id}
	          		  onClickDone={onClickDone}
	          		  onClickDelete={onClickDelete}/>         
	        </ListItem>)
	    }
    </List>);     

export default ItemList;
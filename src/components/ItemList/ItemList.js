import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (
	<ul>
		<li><Item todoItem={todoItem}/></li>
		<li><Item todoItem={'Составить карту поиска'}/></li>
		<li><Item todoItem={'Почитать книгу'}/></li>
	</ul>);

export default ItemList;
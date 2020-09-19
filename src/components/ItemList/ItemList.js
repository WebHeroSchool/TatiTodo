import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => (
	<ul>
		{items.map((item, i)=>
			<li key={i}>
				<Item value={item.value}/>
			</li>)
		}	
	</ul>);

export default ItemList;

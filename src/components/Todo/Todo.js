import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import {useState, useEffect} from 'react';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		items: [
			{
				value: "Take the next React lesson",
				isDone: true,
				id: 1
			},
			{
				value: "Pick up a parcel from the mail",
				isDone: true, 
				id: 2
			},
			{
				value: "Сook dinner",
				isDone: false,
				id: 3
			},
			{
				value: "Read the book",
				isDone: false,
				id: 4
			}		
		],		
		count: 4,
		filtered:false, //isFiltered
		filteredItems:[{}],
		filteredCount:0
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

	const [filtered, setFiltered] = useState(initialState.filtered);
	const [filteredItems, setFilteredItems] = useState(initialState.filteredItems);
	const [filteredCount, setFilteredCount] = useState(initialState.filteredCount);

	useEffect( () => {
		console.log('mount');
	}, []);

	useEffect( () => {
		console.log('update');
	});

	const onClickAdd = value => {
		const newItem = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1

			}
		];
		setItems(newItem);
		setCount(count + 1);
	};

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = {...item};

			if(item.id === id){
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});
		
		setItems(newItemList);
	};

	const onClickDelete = id => {
		let newItemList = [...items];
		let newCount = count;

		let index = newItemList.map(item => item.id).indexOf(id);
		if (index !== -1){
			newItemList.splice(index, 1);			
			setItems(newItemList);
			setCount(newCount - 1);
		}
	};

	const onClickShowAll = () => {
		let newItemList = [...items];
		let newCount = count;

		console.log(newItemList, newCount);
		setItems(newItemList);
		setCount(newCount);
	};

	const onClickShowActive = () => {
		let newItemList = [...items];
		let newCount = count;

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === true).map(item => item.id);		

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);	
			if (index !== -1){
				newItemList.splice(index, 1);	
				newCount --;			
			}	
		}	

		console.log(newItemList, newCount)
		setFilteredItems(newItemList);
		setFilteredCount(newCount);	
	};

	const onClickShowCompleted = () => {
		// [...filteredItems] = [...items];
		// filteredCount = count;
		
		let newItemList = [...items];
		let newCount = count;
		// let newItemList = [...filteredItems];
		// let newCount = filteredCount;
		let newFiltered = filtered;
		newFiltered = true;

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone !== true).map(item => item.id);		

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);	
			if (index !== -1){
				newItemList.splice(index, 1);	
				newCount --;			
			}	
		}	

		console.log(newFiltered, newItemList, newCount);

		setFiltered(newFiltered);
		setFilteredItems(newItemList);
		setFilteredCount(newCount);	
		console.log('Attention:');console.log([...items], [...filteredItems]);	
	};

	const onClickClearCompleted = () => { 	
		let newItemList = [...items];
		let newCount = count;

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === true).map(item => item.id);

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);
			if (index !== -1){
				newItemList.splice(index, 1);	
				newCount --;			
			}	
		}				
		setItems(newItemList);
		setCount(newCount);
	};

	return(		
		<div>
			<h1 className={styles.title}>To do List</h1>
			<InputItem onClickAdd={onClickAdd}/>
			<ItemList items={items} 
					  onClickDone={onClickDone}
					  onClickDelete={onClickDelete}/>
			<Footer count={count} 	//if(filtered)   {count={filteredCount} 							
					onClickShowAll={onClickShowAll}
					onClickShowActive={onClickShowActive}
					onClickShowCompleted={onClickShowCompleted}
					onClickClearCompleted={onClickClearCompleted}/>
		</div>
		
	);	
}

export default Todo;
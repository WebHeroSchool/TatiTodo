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
		]
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(0);
	const [filteredItems, setFilteredItems] = useState(initialState.items);

	useEffect( () => {
		console.log('mount');
	}, []);

	useEffect( () => {
		console.log('update');
	});

	const onClickAdd = value => {
		const newItemList = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1

			}
		];
		setItems(newItemList);
		setFilteredItems(newItemList)
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
		setFilteredItems(newItemList);
	};

	const onClickDelete = id => {
		let newItemList = [...items];		

		let index = newItemList.map(item => item.id).indexOf(id);
		if (index !== -1){
			newItemList.splice(index, 1);			
			setItems(newItemList);
			setFilteredItems(newItemList);
			setCount(count - 1);
		}
		//setItems(items.filter(item => item.id !==id));
	};

	const onClickShowAll = () => {
		let newItemList = [...items];		
		setFilteredItems(newItemList);		
	};

	const onClickShowActive = () => {
		let newItemList = [...items];		

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === true).map(item => item.id);		

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);	
			if (index !== -1){
				newItemList.splice(index, 1);	
				setCount(count - 1);			
			}	
		}				
		setFilteredItems(newItemList);		
	};

	const onClickShowCompleted = () => {		
		let newItemList = [...items];	

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone !== true).map(item => item.id);		

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);	
			if (index !== -1){
				newItemList.splice(index, 1);	
				setCount(count - 1);			
			}	
		}			
		setFilteredItems(newItemList);			
	};

	const onClickClearCompleted = () => { 	
		let newItemList = [...items];
	
		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === true).map(item => item.id);

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);
			if (index !== -1){
				newItemList.splice(index, 1);	
				setCount(count - 1);			
			}	
		}				
		setItems(newItemList);
		setFilteredItems(newItemList);		
	};

	return(		
		<div>
			<h1 className={styles.title}>To do List</h1>
			<InputItem onClickAdd={onClickAdd}/>
			<ItemList items={filteredItems} 
					  onClickDone={onClickDone}
					  onClickDelete={onClickDelete}/>
			<Footer count={filteredItems.length} 							
					onClickShowAll={onClickShowAll}
					onClickShowActive={onClickShowActive}
					onClickShowCompleted={onClickShowCompleted}
					onClickClearCompleted={onClickClearCompleted}/>
		</div>
		
	);	
}

export default Todo;
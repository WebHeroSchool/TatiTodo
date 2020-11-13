import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import {useState, useEffect} from 'react';

const App = () => {
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
		count: 4
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

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
		<div className={styles.wrap}>
			<h1 className={styles.title}>To do List</h1>
			<InputItem onClickAdd={onClickAdd}/>
			<ItemList items={items} 
					  onClickDone={onClickDone}
					  onClickDelete={onClickDelete}/>
			<Footer count={count} 
					onClickClearCompleted={onClickClearCompleted} />
		</div>
	);	
}

export default App;
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
				value: "Finish the current task",
				isDone: true,
				id: 1
			},
			{
				value: "Have a rest",
				isDone: false, 
				id: 2
			}
		]
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(2);
	const [filteredItems, setFilteredItems] = useState(initialState.items);

	const [isAllSelect,       setAllSelect] = useState(true);
	const [isActiveSelect,    setActiveSelect] = useState(false);
	const [isCompletedSelect, setCompletedSelect] = useState(false);

	useEffect( () => {
		console.log('mount');
	}, []);

	useEffect( () => {
		console.log('update');
	});

	const onClickAdd = data => {		
		if (items.find(item => item.value === data) == undefined){
			const newItemList = [
				...items,
				{
					value: data,
					isDone: false,
					id: count + 1
				}
			];	

			setItems(newItemList);
			setFilteredItems(newItemList)
			setCount(count + 1);	
		}
		else{			
			console.log("Элемент сущесвует")
			document.getElementById('outlined-full-width').value = 'Элемент сущесвует';
			
		}
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
        let newItemList = items.filter(item => item.id !== id);
        setItems(newItemList);
        setFilteredItems(newItemList);
        setCount(count - 1);
	};

	const onClickShowAll = () => {
		let newItemList = [...items];		
		setFilteredItems(newItemList);
		
		setAllSelect(true);
		setActiveSelect(false);
		setCompletedSelect(false);
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

		setAllSelect(false);
		setActiveSelect(true);
		setCompletedSelect(false);
	};

	const onClickShowCompleted = () => {		
		let newItemList = [...items];	

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === false).map(item => item.id);		

		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);	
			if (index !== -1){
				newItemList.splice(index, 1);	
				setCount(count - 1);			
			}	
		}			
		setFilteredItems(newItemList);	
	
		setAllSelect(false);
		setActiveSelect(false);
		setCompletedSelect(true);	
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
					onClickClearCompleted={onClickClearCompleted}
					isAllSelect={isAllSelect}
					isActiveSelect={isActiveSelect}
					isCompletedSelect={isCompletedSelect}/>
		</div>
		
	);	
}

export default Todo;
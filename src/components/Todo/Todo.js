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
			},
			{
				value: "ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук",
				isDone: false,
				id: 5				
			},		
			{
				value: "ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук",
				isDone: false,
				id: 6				
			},
						{
				value: "ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук ауй йу еуке йук еукйе йукеуке йукеуйке йукейуе йуке йук ейукейук йуке уцк цук ецуке цуке укце цукецу ецукецукец уе цу цук еук",
				isDone: false,
				id: 7				
			}
		]
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(0);
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
		const arrayOfIds = newItemList.filter(item => item.isDone !== true).map(item => item.id);		

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
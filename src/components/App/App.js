import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
	const items = [
		{
			value: "Take the next React lesson",
			isDone: true
		},
		{
			value: "Pick up a parcel from the mail",
			isDone: false
		},
		{
			value: "Сook dinner",
			isDone: true
		},
		{
			value: "Read the book",
			isDone: true
		}		
	];

	return(
		<div className={styles.wrap}>
			<h1 className={styles.title}>To do List</h1>
			<InputItem />
			<ItemList items={items}/>
			<Footer count={6} />
		</div>);
}
export default App;
import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

class App extends React.Component{
  render(){
	const items = [
		{
			value: "Take the next React lesson",
			isDone: true
		},
		{
			value: "Pick up a parcel from the mail",
			isDone: true
		},
		{
			value: "Сook dinner",
			isDone: false
		},
		{
			value: "Read the book",
			isDone: false
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
}

export default App;
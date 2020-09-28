import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
	const items = [
		{
			value: "Выполнить следующее задание по React",
			isDone: true
		},
		{
			value: "Составить карту поиска работы",
			isDone: false
		},
		{
			value: "Почитать книгу",
			isDone: true
		}
	];

	return(
		<div className={styles.wrap}>
			<h1 className={styles.title}>Заголовок</h1>
			<InputItem />
			<ItemList items={items}/>
			<Footer count={6} />
		</div>);
}
export default App;
import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {
	const items = [
		{value: "Выполнить следующее задание по React"},
		{value: "Составить карту поиска работы"},
		{value: "Почитать книгу"}
	];

	return(
		<div>
			<h1>Заголовок</h1>
			<InputItem />
			<ItemList items={items}/>
			<Footer count={6} />
		</div>);
}
export default App;
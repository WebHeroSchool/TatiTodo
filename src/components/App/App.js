import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = "Выполнить следующее задание по React";

const App = () => (
	<div>
		<h1>Заголовок</h1>
		<InputItem />
		<ItemList todoItem={todoItem}/>
		<Footer count={3} />
	</div>);

export default App;
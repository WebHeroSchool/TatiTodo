import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

class App extends React.Component{
	state = {
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

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = {...item};

			if(item.id === id){
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({items: newItemList});
	}

	render(){
		return(
			<div className={styles.wrap}>
				<h1 className={styles.title}>To do List</h1>
				<InputItem />
				<ItemList items={this.state.items} onClickDone={this.onClickDone}/>
				<Footer count={6} />
			</div>);
	}
}

export default App;
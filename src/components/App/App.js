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
		],
		count: 4
	}

	onClickAdd = value => this.setState( state => ({
		items: [
			...state.items,
			{
				value,
				isDone: false,
				id: state.count + 1

			}
		],
		count: state.count + 1
	}));

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = {...item};

			if(item.id === id){
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({items: newItemList});
	};

	onClickDelete = id => {
		let newItemList = [...this.state.items];
		let newCount = this.state.count;

		let index = newItemList.map(item => item.id).indexOf(id);
		if (index !== -1){
			newItemList.splice(index, 1);
			this.setState({items: newItemList, count: newCount - 1});
		}
	};

	onClickClearCompleted = () => { 	
		let newItemList = [...this.state.items];
		let newCount = this.state.count;

		let id; 
		const arrayOfIds = newItemList.filter(item => item.isDone === true).map(item => item.id);
		for (id of arrayOfIds){			
			let index = newItemList.map(item => item.id).indexOf(id);
			if (index !== -1){
				newItemList.splice(index, 1);	
				newCount --;			
			}	
		}	
		this.setState({items: newItemList, count: newCount});	
	};

	render(){
		return(
			<div className={styles.wrap}>
				<h1 className={styles.title}>To do List</h1>
				<InputItem onClickAdd={this.onClickAdd}/>
				<ItemList items={this.state.items} 
						  onClickDone={this.onClickDone}
						  onClickDelete={this.onClickDelete}/>
				<Footer count={this.state.count} 
						onClickClearCompleted={this.onClickClearCompleted} />
			</div>);
	}
}

export default App;
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

const StyledButton = withStyles({  
  label: {
    textTransform: 'capitalize',        
  },
})(Button);

class InputItem extends React.Component{
	state = {
		inputValue: '',
		btnIsClicked: false,
		itemIsExist: false
	};

	onButtonClick = () => {	
		if(this.state.inputValue !== ''){

		 // console.log(this.props.items);
		
		 console.log( `0 - inputValue: ${this.state.inputValue} btnIsClicked: ${this.state.btnIsClicked} itemIsExist: ${this.state.itemIsExist}`);
		 	if (this.props.items.find(item => item.value === this.state.inputValue) === undefined){	
				this.props.onClickAdd(this.state.inputValue);
				this.setState({ inputValue : '', btnIsClicked: false,  itemIsExist: false});
				console.log( ` 1 Элемент НЕ существует- inputValue: ${this.state.inputValue} btnIsClicked: ${this.state.btnIsClicked} itemIsExist: ${this.state.itemIsExist}`);
			}
			else{			
				this.setState({ itemIsExist: true });
				console.log( `2 Элемент сущеcтвует- inputValue: ${this.state.inputValue} btnIsClicked: ${this.state.btnIsClicked} itemIsExist: ${this.state.itemIsExist}`);
			}
		}else{
			 this.setState({ btnIsClicked: true});
			 console.log( `3 - inputValue: ${this.state.inputValue} btnIsClicked: ${this.state.btnIsClicked} itemIsExist: ${this.state.itemIsExist}`);
		}
	}

	render(){
		const {onClickAdd, items} = this.props;

		return (<div className={styles.wrap}>	
	        <TextField
		          id="outlined-full-width"       
		          placeholder="Аdd a new task"          
			      fullWidth			     
		          variant="outlined"
		          color="secondary"		                   		       

		          value={this.state.inputValue}
		          onChange={event => this.setState({ inputValue: event.target.value })}

		          // error={this.state.inputValue === '' && this.state.btnIsClicked}
		          // helperText={this.state.inputValue === '' && this.state.btnIsClicked ? 'This field cannot be empty!' : ' '}

		          error={this.state.itemIsExist && this.state.btnIsClicked}
		          helperText={this.state.itemIsExist && this.state.btnIsClicked ? 'This task is already exists!' : ' '}	  

		          // error={this.state.inputValue === '' && this.state.btnIsClicked || this.state.inputValue === 'tt'}
		          // helperText={this.state.inputValue === '' && this.state.btnIsClicked ? 'This field cannot be empty!' : 
		          // 			              (this.state.inputValue === 'tt' ? 'This task is already exists!' : ' ')}	       
	        />
	        <StyledButton id="btnSave"
	        			  className={styles.btn} 
	        			  variant="contained"	        		
	        		      onClick={this.onButtonClick}
	        >
	        	Save
	        </StyledButton>
		</div>)
	}
}

InputItem.propTypes = {
	onClickAdd: PropTypes.func.isRequired
};

export default InputItem;


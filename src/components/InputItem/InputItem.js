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
		 	if (this.props.items.find(item => item.value === this.state.inputValue) === undefined){	
				this.props.onClickAdd(this.state.inputValue);
				this.setState({ inputValue : '', btnIsClicked: false,  itemIsExist: false});				
			}
			else{			
				this.setState({ itemIsExist: true });				
			}
		}else{
			 this.setState({ btnIsClicked: true });
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

		          error={this.state.inputValue === '' && this.state.btnIsClicked || this.state.itemIsExist}
		          helperText={ this.state.inputValue === '' && this.state.btnIsClicked ? 'This field cannot be empty!' : 
		          			  (this.state.itemIsExist ? 'This task is already exists!' : ' ') }	       
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


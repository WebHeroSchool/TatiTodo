import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css'

const StyledButton = withStyles({  
  label: {
    textTransform: 'capitalize',        
  },
})(Button);

class InputItem extends React.Component{
	state = {
		inputValue: ' ',
		btnIsClicked: false
	};

	onButtonClick = () => {			
// console.log(btnIsClicked);
		if(this.state.inputValue != ' '){			
			// this.setState({ inputValue : ' ', btnIsClicked: true });

			this.props.onClickAdd(this.state.inputValue);

			this.setState({ inputValue : ' ', btnIsClicked: false });
		}else{
			 this.setState({ btnIsClicked: true });
		}
	}

	render(){
		const {onClickAdd} = this.props;

		return (<div className={styles.wrap}>	
	        <TextField
		          id="outlined-full-width"       
		          placeholder="Аdd a new task"          
			      fullWidth			     
		          variant="outlined"
		          color="secondary"
		          bordercolor="#de2242"

		          value={this.state.inputValue}
		          onChange={event => this.setState({ inputValue: event.target.value })}
		          error={this.state.inputValue === ' ' && this.state.btnIsClicked}
		          helperText={this.state.inputValue === ' ' && this.state.btnIsClicked ? 'This field cannot be empty!' : ' '}
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

export default InputItem;
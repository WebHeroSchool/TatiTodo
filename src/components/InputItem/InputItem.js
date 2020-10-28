import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component{
	state = {
		inputValue: ' '
	};

	onButtonClick = () => {
		if(this.state.inputValue != '' && this.state.inputValue != ' ' ){
			this.setState({ inputValue : '' });

			this.props.onClickAdd(this.state.inputValue);
		}
	}

	render(){
		const {onClickAdd} = this.props;

		return (<div>	
	        <TextField
		          id="outlined-full-width"       
		          placeholder="Аdd a new task"          
			      fullWidth
		          variant="outlined"
		          color="secondary"
		          bordercolor="#de2242"

		          value={this.state.inputValue}
		          onChange={event => this.setState({ inputValue: event.target.value})}
		          error={this.state.inputValue === ''}
		          helperText={this.state.inputValue === '' ? 'This field cannot be empty!' : ' '}
	        />
	        <Button variant="contained"	        		
	        		onClick={this.onButtonClick}
	        >
	        	Add
	        </Button>
		</div>)
	}
}

export default InputItem;
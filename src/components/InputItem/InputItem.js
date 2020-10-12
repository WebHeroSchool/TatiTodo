import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ()=> (<div>	
        <TextField
          id="outlined-full-width"       
          placeholder="Аdd a new task"          
	      fullWidth
          variant="outlined"
          color="secondary"
          bordercolor="#de2242"
        />
	</div>);

export default InputItem;
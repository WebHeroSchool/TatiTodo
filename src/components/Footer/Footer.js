import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// style={{ margin: 20 }}
const Footer = ({count})=> (
	<div>
		<span>{count} items left</span>
		<ButtonGroup aria-label="small outlined button group" size="small">
			<Button>All</Button>
		    <Button>Active</Button>
		    <Button>Completed</Button>
      	</ButtonGroup>	
		<Button variant="outlined" size="small">Clear completed</Button>
	</div>
	);

export default Footer; 
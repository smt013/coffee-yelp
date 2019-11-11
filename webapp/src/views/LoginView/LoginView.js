import React from 'react'
//import {TextField, Button, Checkbox} from '@material-ui/core'
import {TextField, Button, Checkbox} from '@material-ui/core'
import './LoginView.css'

const LoginView = ({}) => {
	return (
		<div className="input" >
			<div className="text-field">
				<TextField classes="MuiFormControl-root MuiTextField-root" id="username" type="username" label="username" variant="outlined" />
			</div>

			<div className="text-field">
				<TextField classes="MuiFormControl-root MuiTextField-root" id="password" type="password" label="password" variant="outlined" />
			</div>

			<div className="button">
				<Button color="primary" variant="contained">
					Login
				</Button>
			</div>

		</div>
	)
}

export default LoginView

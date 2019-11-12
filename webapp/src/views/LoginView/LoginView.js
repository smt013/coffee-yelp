import React from 'react'
import {TextField, Button, Checkbox, Container, FormControlLabel,CssBaseline,
	Avatar, Grid, Typography} from '@material-ui/core'

import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import './LoginView.css'
import {setLogin} from '../../store/actions'
import { useDispatch } from 'react-redux'
import store from '../../store/store'

const LoginView = ({}) => {

	const dispatch = useDispatch()

	const dispatchLoginCreds = () => {
		let username = document.getElementById("username")
		let password = document.getElementById("password")
		let creds = {username, password}
		console.log("before")
		dispatch(setLogin(creds))
		console.log("HERE")
		console.log(store.getState())
	}

	const renderForm = () => {
		return (
			<form>
				<TextField classes="MuiFormControl-root MuiTextField-root"
					id="username" type="Email Address"
					label="Email Address *"
					variant="outlined"
					fullWidth="true"/>

				<TextField classes="MuiFormControl-root MuiTextField-root"
					id="password" type="Password" label="Password *"
					variant="outlined"
					fullWidth="true"/>

					<FormControlLabel
						control = {
							<Checkbox value="remember" color="primary"/>
						}
						label="Remember me"
					/>

				<Button
					color="primary"
					variant="contained"
					fullWidth="true"
					onClick={dispatchLoginCreds}>
					Login
				</Button>
			</form>
		)
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div id="input">
				<Grid container justify="center" alignItems="center">
					<Avatar variant="circle" sizes="large">
						<LocalCafeIcon fontSize="large"/>
					</Avatar>
				</Grid>
				<div className="signin">
					<Typography component="h1" variant="h5" align="center" className=".MuiTypography-root">
						Sign in
					</Typography>
				</div>
				{renderForm()}
			</div>
		</Container>
	)
}

export default LoginView

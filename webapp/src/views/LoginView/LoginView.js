import React from 'react'
import { Link } from 'react-router-dom'
import {
	TextField,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	CssBaseline,
	Avatar,
	Grid,
	Typography
} from '@material-ui/core'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import './LoginView.css'
import { setLogin } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
//import store from '../../store/store'

const LoginView = () => {

	const dispatch = useDispatch()
	const authErr = useSelector( state => state.authErr )

	const dispatchLoginCreds = () => {
		let username = document.getElementById("username").value
		let password = document.getElementById("password").value
		let creds = {username, password}

		dispatch(setLogin(creds))
	}

	const renderForm = () => {
		return (
			<form>
				<TextField id="username"
					type="Email Address"
					label="Email Address *"
					variant="outlined"
					fullWidth
				/>

				<TextField id="password"
					type="Password"
					label="Password *"
					variant="outlined"
					fullWidth
				/>

				<FormControlLabel
					control = {
						<Checkbox value="remember" color="primary"/>
					}
					label="Remember me"
				/>
				<Link to={authErr ? '/LoginView' : '/HomePage'}>
					<Button color="primary"
						variant="contained"
						fullWidth
						onClick={dispatchLoginCreds} >
						Login
					</Button>
				</Link>
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

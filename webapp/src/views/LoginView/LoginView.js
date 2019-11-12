import React from 'react'
//import {TextField, Button, Checkbox} from '@material-ui/core'
import {TextField, Button, Checkbox, Container, FormControlLabel,CssBaseline,
	Avatar, Grid, Typography} from '@material-ui/core'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import './LoginView.css'

const LoginView = ({}) => {
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

						<Button type="submit" color="primary" variant="contained" fullWidth="true">
							Login
						</Button>
					</form>
				</div>
		</Container>
	)
}

export default LoginView

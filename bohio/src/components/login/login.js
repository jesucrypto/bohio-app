import React from 'react';
import './login.css';
import logo from '../../assets/bohiologo-notext.png';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';

export function Login (props) {
  var progress="";
  if (props.isLoggingIn) progress = <LinearProgress/>;
  return (
    <div className="login">
      <img className="logo" alt="logo" src={logo}/>
      <div>Ingresa a tu cuenta de Bohio</div>
      <TextField
        color="primary"
        id="outlined-basic"
        label="email/username"
        variant="outlined"/>
      <TextField type="password" label="password" variant="outlined" />
      <div className="loginButtonContainer">
        <Button
          onClick={(e) => props.onSubmit(e)}
          variant="contained"
          disableElevation
          className="loginButton"
          style={style.loginButton}>
          <b>Ingresar</b>
        </Button>
      </div>
      <div className="register">
        <span class="registerText">Todavia no tienes cuenta? </span>
        <span class="registerText" id="register-link">Registrate aqui</span>
      </div>
      <div class="login-progress">
        {progress}
      </div>
    </div>
  );
}

const style = {
  loginButton : {
    background : 'linear-gradient(135deg, rgba(67,217,130,1) 40%, rgba(67,217,215,1) 100%)',
    color : 'white',
    //boxShadow : '-1px 1px 5px rgba(67,217,130,0.5)'
  }
}

export default Login;

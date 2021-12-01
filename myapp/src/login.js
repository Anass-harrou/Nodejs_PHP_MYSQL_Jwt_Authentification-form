import React,{ Component } from 'react';
import axios from 'axios';



class Login extends Component {
    state={email : "", password:"",err:''};
    
    fcn=(e)=>{
        var v=false;
        e.preventDefault();
        axios.post("http://localhost/php-login-registration-api/login.php",this.state)
        .then(user=>{
                if(user.data.success){
                    this.setState({err:user.data.message});
                    localStorage.setItem('token',user.data.token);
                    window.location.reload();
                }else{
                    this.setState({err:user.data.message});
                }
            }

        );
        console.log(this.state.username,this.state.password)       
   }

    render(){
    return (
        
        <div className="base-container" >
        <div className="header">Login</div>
        {(this.state.err) ? (<div>{this.state.err}</div>) : null}
            <form onSubmit={this.fcn} className="form">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="email" placeholder="username" required onChange={(e)=>this.setState({email:e.target.value})}/>
                
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" required onChange={(e)=>this.setState({password:e.target.value})}/>
                
                <button type="submit" className="btn">Login</button>
            </form>
    
        </div>
        );
    }
}

export default  Login;
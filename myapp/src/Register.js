import React from 'react';
import axios from "axios"

class Register extends React.Component {
    
    state={
        name:'',
        password:"",
        email:'',
        err:''
    }

    // const [errors,setError]=useState({});
    // const [formValues, setFormValues] = useState(user)

   fcnt=(e)=>{
		e.preventDefault();
        axios.post("http://localhost/php-login-registration-api/register.php",this.state)
        .then(
            u=>{
                console.log(u.data.message,u.data.success);
                if(u.data.success){
                    this.setState({err:u.data.message});
                }else{
                    this.setState({err:u.data.message});
                }
            }
        )
        
    }
    
    render(){
		
        return (
        <div className="base-container">
            <div className="header">Register</div>

            {(this.state.err) ? (<div>{this.state.err}</div>) : null}
            <div className="content">
                
                <form onSubmit={this.fcnt} className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="name" placeholder="username" required onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" required onChange={(e)=>this.setState({email:e.target.value})} value={ this.state.email}/>
                   
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" required onChange={(e)=>this.setState({password:e.target.value})} value={ this.state.password}/>
                    
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">Register</button>
                    </div>
                   
                </form>
                
            </div>
        </div>
        
  );
}
}

export default Register;

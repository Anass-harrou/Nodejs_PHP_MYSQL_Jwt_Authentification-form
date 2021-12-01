import React,{useEffect} from 'react';
import axios from 'axios';


const Axios = axios.create({
    baseURL: 'http://localhost/php-login-registration-api/'
});

class Home extends React.Component {

    state={
        name:''
    }


    logout=()=>{
        localStorage.removeItem("token");
        localStorage.clear();
    }


   useEffect=()=>{
        
        const loginToken = localStorage.getItem('token');
        if(loginToken){
            
            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                this.setState({name:data.user});
            }

        }
        
    }

 //localStorage.getItem("token")



render(){

  return (
        <div className="base-container" >
        <div className="header">Dashboard</div>
        <div className="xcnn">
            <p>Hello {this.state.name} that the dashboard page.<br /> <a onClick={this.logout} href="/">Logout</a></p>
            </div>
            <div class="footr">
        <h3>&copy; 2020 - 2021 | Anass</h3>
    </div>
        </div>
        
    )
  }
}

export default Home;
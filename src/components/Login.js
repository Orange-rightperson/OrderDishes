import React, {Component} from "react";
import "../assets/css/index.css";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
            flag: false,
         };
    }


    submit=(e)=>{
        e.preventDefault();
        var user = 'admin';
        var passw = '123456';
        console.log(this.state.username);
        if(this.state.username == user && this.state.password == passw)
        {
            this.setState({
                flag: true,
            })
        }
        else if(!this.state.username || !this.state.password) alert("账号或密码不能为空");
        else alert("账号或密码错误");
    }

    changeUN=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }

    changePW=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    render() {
        if(this.state.flag)
        {
            return(<Redirect to={{pathname: "/"}}></Redirect>)
        }        
        else   return (
                <form onSubmit={this.submit} className="login">
                    <div >
                        <h2>用户名</h2>
                        <input value={this.state.username} className="username" onChange={this.changeUN}></input>
                    </div>
                    <br></br>
                    <div >
                        <h2>密码</h2>
                        <input value={this.state.password} className="password" onChange={this.changePW}></input>
                    </div>
                    <br></br>
                    <input  className="subs" type="submit" value="登录"></input>
                </form>
        );
    }
}

export default Login;
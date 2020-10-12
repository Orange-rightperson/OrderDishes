import React, {Component} from "react";
import {
    Link
  } from "react-router-dom";
  import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:"http://a.itying.com/",
         };
    }


    getDataByUrl=()=>{
        axios.get(`${this.state.domain}api/productlist`)
        .then((response)=>{
            this.setState({
                list: response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount(){
        this.getDataByUrl();
    }


    render() {
        return (
            <div className="home">
                <div className="header">
                    <Link to="/login"><button>登录</button></Link>
                </div>
                <div className="list">
                {this.state.list.map((value, key)=>{
                    return(
                        <div className="item" key={key}>
                            <h3 className="item_cate">{value.title}</h3>
                            <ul className="item_list">
                                {value.list.map((v, k)=>{
                                    return(
                                    <li key={k}>
                                        <Link to={`/content?id=${v._id}`}>
                                            <div className="inner">
                                                <img src={`${this.state.domain}${v.img_url}`}></img>
                                                <p className="title">{v.title}</p>						
                                                <p className="price">{v.price}元</p>
                                            </div>
                                        </Link>
                                    </li>
                                    )
                                })}
                            </ul>

                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default Home;
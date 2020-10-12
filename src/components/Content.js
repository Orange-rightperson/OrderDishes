import React, {Component} from "react";
import axios from "axios";
import url from "url";
import "../assets/css/pcontent.css";
import {Link} from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain1:"http://a.itying.com/api/productcontent?id=",
            domain: "http://a.itying.com/",
         };
    }

    getData=()=>{
        var id = url.parse(this.props.location.search, true).query.id;
        axios.get(`${this.state.domain1}${id}`)
        .then((response)=>{
            this.setState({
                list: response.data.result[0]
            })
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div className="pcontent">

            <div className="back">  <Link to='/'>返回</Link></div>
            
            <div className="p_content">		
                <div className="p_info">				
                    {this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`} ></img>:""}	
                    <h2>{this.state.list.title}</h2>				
                    <p className="price">{this.state.list.price}/份</p>
                </div>
                <div className="p_detial">
                    <h3>
                        商品详情					
                    </h3>
                    <div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}>                       
                    </div>
                </div>
            </div>           
            <footer className="pfooter">
                
                <div className="cart">				
                    <strong>数量:</strong>
                    <div className="cart_num">
                    <div className="input_left">-</div>
                    <div className="input_center">
                        <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
                    </div>
                    <div className="input_right">+</div>				      
                    </div>								
                
                </div>
                
                <button className="addcart">加入购物车</button>			
            </footer>
            </div>
        );
    }
}

export default Content;

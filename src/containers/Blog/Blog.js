import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Posts from '../../containers/Blog/Posts/Posts'
import NewPost from '../../containers/Blog/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    state ={
        auth:false
    }
    render () {     
        return (
            <div className ="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to ="/posts" exact activeStyle = {{color:'orange',textDecoration:'underline'}}>Posts</NavLink></li>
                            <li><NavLink to ={{pathname:'/new-post',hash:'#submit',search:'?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth?<Route  path ="/new-post" component = {NewPost}/>:null}
                    {/* <Route  path ="/new-post" component = {NewPost}/> */}
                    <Route  path ="/posts"  component = {Posts}/>
                    <Redirect from = "/" to="/posts"/>
                </Switch>
               
            </div>
        );
    }
}

export default Blog;
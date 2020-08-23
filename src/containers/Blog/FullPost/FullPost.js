import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state ={
        loadedPost:null
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.loadData();
    }
    componentDidUpdate(){
        this.loadData();
    }
    loadData(){
        if(this.props.match.params.id){
            //console.log(this.state.loadedPost)
            if(!this.state.loadedPost||(this.state.loadedPost&&this.state.loadedPost.id!== +this.props.match.params.id)){
                axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
           .then(response=>{
               console.log(response.data);
               this.setState({
                   loadedPost:response.data
               });
           }) 
            }
           
        }
    }
    render () {
        let post = <p style ={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style ={{textAlign:'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost){
            const title = this.state.loadedPost.title
            post = (
                <div className="FullPost">
                    <h1>{title}</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;
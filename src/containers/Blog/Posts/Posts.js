import React,{Component} from 'react'
import axios from 'axios';
import Post from '../../../components/Post/Post';
// import {Link} from 'react-router-dom';
import './Posts.css'
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';
class Posts extends Component{
    state ={
        posts:[],
        selectedPost:null
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post=>{
                return {...post,author:'max'}
            })
            console.log(updatedPosts);
            this.setState({
                posts:updatedPosts
            })
            //console.log(response.data);
        })
    }
    postClicked = (id)=>{
        // this.setState({
        //     selectedPost:id
        // })
        this.props.history.push({pathname:'/posts/'+id})
        //this.props.history.push('/'+id);
    }
    render(){
        const posts = this.state.posts.map(post=>{
            return (
                // <Link to ={'/'+ post.id} key = {post.title}>
                    <Post  key = {post.title} title = {post.title} author = {post.author}
                    clicked ={()=>this.postClicked(post.id)}/>
                // </Link>
                );
        })
        return (
            <div>
                <section className="Posts">
                     {posts}
                </section>
                <Route path= {this.props.match.url+'/:id'} exact component ={FullPost}/> 
            </div>
            
        )  
    }
}
export default Posts;
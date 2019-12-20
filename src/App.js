import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Blog from './components/Blog'
import Post from "./components/Post";
import NotFound from "./components/NotFound";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount = async () => {
        console.log('@App.componentDidMount')
        const res = await fetch('http://localhost:3001/blog')
        const blog = await res.json()
        this.setState({
            posts: blog
        })
    }

    render() {
        const {posts} = this.state
        return <Router>
            <div>
                <ul>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/blog/1">Post1</Link></li>
                    <li><Link to="/blog/2">Post-2</Link></li>
                </ul>
                <hr/>
                <p>Default Header</p>
                <Switch>
                    <Route path="/" exact render={() => <Blog posts={posts}/>}/>
                    <Route path="/blog/:slug" render={({match}) => <Post post={posts.find(post => post.url === match.url)}/>}/>
                    <Route component={NotFound}/>
                </Switch>
                <p>Default Footer</p>
            </div>
        </Router>
    }

}


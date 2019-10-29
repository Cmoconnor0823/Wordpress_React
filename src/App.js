import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    let postsURL = "http://localhost/wp-json/wp/v2/posts"
    fetch(postsURL)
    .then(response => response.json())
    .then(response =>{
      this.setState({
        posts: response
      })
    })
  }
render () {
  let posts = this.state.posts.map((post,index) => {
    return (
      <div key = {index}>
        <img src={post.featured_media.alt_text} alt="failed to load" />
        <p><strong>Title:</strong> {post.title.rendered}</p>
        <p><strong>Post contents:</strong> {post.content.rendered}</p>
      </div>
    )
  })
  return (
    <div className="App">
      <h1>Test wordpress react</h1>
      {posts}
    </div>
  );
}

}

export default App;

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

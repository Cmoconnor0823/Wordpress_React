import React, {Component} from 'react';
import './App.css';

class WPPost extends React.Component { 
  render() {
    return (
      <article>
      <h2 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h2>
      <p dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}}></p>
        <a target="_blank" href={this.props.post.link}>Read More</a>
       </article>
    )
  }
}
class WPSitePosts extends React.Component {
  render() {
    let posts = '';
    if( this.props.posts.length == 0 ) {
      posts = <p>Nothing to See</p>;
    } else {
      posts = this.props.posts.map(post => {
        return(
         <WPPost post={post}/>
        )
      });
    }
    return (
      <div>
      {posts}
      </div>
    )
  }
}
class WPSitesSelector extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.getPostsOnChange(e.target.value);
  }
  render() {
    const data = [
      {
        url: 0,
        title: 'Select a Site'
      },
      {
        url: 'http://localhost/wp-json/wp/v2/posts',
        title: 'Home'
      },
      {
        url: 'http://localhost',
        title: 'About'
      },
      {
        url: 'http://http://www.bluewillowtucson.com/wp-json/wp/v2/posts',
        title: 'blue willow'
      },
    ];
     
    const links = data.map( ( link, index ) => {
      return (
      <option key={index} value={link.url}>
        {link.title}
      </option>)
    });
   
    return (
      <select onChange={this.handleChange}>
      {links}
      </select>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {posts : []};
  }
  getPosts(url) {
     
    if( url !== '0' ) {
      let json = fetch(url)
      .then(response => { return response.json()})
      .then(posts => {this.setState({posts: posts})});
    } else {
      this.setState({posts: []});
    }
  }
  render() {
    return (
     <div>
        <WPSitesSelector getPostsOnChange={this.getPosts}/>
        <WPSitePosts posts={this.state.posts} />
     </div>
    )
  }
}

//the code below is an example of a static page that loads in 
// posts from wordpress 


  // class App extends Component {
  //   constructor (props){
  //     super(props);
  //     this.state = {
  //       posts: []
  //     }
  //   }
  //   componentDidMount() {
  //     let postsURL = "http://localhost/wp-json/wp/v2/posts"
  //     fetch(postsURL)
  //     .then(response => response.json())
  //     .then(response =>{
  //       this.setState({
  //         posts: response
  //       })
  //     })
  //   }
  // render () {
//   let posts = this.state.posts.map((post,index) => {
//     return (
//       <div key = {index}>
//         <img src={post.featured_media.alt_text} alt="failed to load" />
//         <p><strong>Title:</strong> {post.title.rendered}</p>
//         <p><strong>Post contents:</strong> {post.content.rendered}</p>
//       </div>
//     )
//   })
//   return (
//     <div className="App">
//       <h1>Test wordpress react</h1>
//       <WPSitesSelector/>
//       {posts}
//     </div>
//   );
// }

//}

export default App;

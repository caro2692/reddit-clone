import React from 'react';
import Header from './Header';
import Post from './Post';
import samplePosts from '../sample-posts';
import AddPostForm from './AddPostForm';

class App extends React.Component {
  constructor(){
    super();

    //bind custom methods to app class
    this.addPost = this.addPost.bind(this);
    this.modifyLike = this.modifyLike.bind(this);
    this.showHideForm = this.showHideForm.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //initial state
    this.state = {
      posts:samplePosts,
      showForm:{isShown: false},
      search: {value:''}
    };
  }

  handleSearch(search_val){
    let search = {...this.state.search};
    search = search_val;
    this.setState({search});
  }

  addPost(post){
    //copy state first
    //... is a spread that takes every item from object and spread into new object (copy)
    const posts = {...this.state.posts};
    //add in new fish
    //get timestamp so key can be unique
    const timestamp = Date.now();
    posts[`post-${timestamp}`] = post;
    //set state
    this.setState({ posts });
  }

  modifyLike(index, val){
    const posts = {...this.state.posts};
    //update or add the new number of fish ordered
    posts[index].likes = posts[index].likes + val;
    //update our state
    this.setState({posts});
  }

  showHideForm(boolean){
    console.log(boolean);
    const showForm = {...this.state.showForm};
    //update or add the new number of fish ordered
    showForm.isShown = boolean;
    //update our state
    this.setState({showForm});
  }

  addComment(index, comment){
    const posts = {...this.state.posts};
    //update or add the new number of fish ordered
    posts[index].comments = posts[index].comments.concat(comment);
    //update our state
    this.setState({posts});
  }

  render() {
    const showForm = this.state.showForm.isShown;
    let form = null;
    if(showForm){
      form = <AddPostForm addPost={this.addPost} showHideForm={this.showHideForm}/>;
    }
    let filteredPosts =
    Object
      .keys(this.state.posts)
      .filter(
        (key) => {
          return this.state.posts[key].title.toLowerCase().indexOf(this.state.search.value.toLowerCase()) !== -1;
        }
       )
     console.log(filteredPosts);
    return (
      <div className="App">
        <Header showHideForm={this.showHideForm} handleSearch={this.handleSearch}/>
        <div className="container">
        {form}
        {
          filteredPosts
          .map(key => <Post key={key} index={key} details={this.state.posts[key]} modifyLike={this.modifyLike} addComment={this.addComment}/>)
        }
        </div>
      </div>
    );
  }
}

export default App;

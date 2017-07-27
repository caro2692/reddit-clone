import React from 'react';

class AddPostForm extends React.Component {
  createPost(e){
    e.preventDefault();
    //get all info from form and make object
    const post = {
      title: this.title.value,
      image: this.image.value,
      desc: this.desc.value,
      createdAt: Date.now(),
      likes: 0,
      comments: []
    };
    this.props.addPost(post);
    //clear form after submit
    this.postForm.reset();
    this.props.showHideForm(false);
  }
  render() {
    return (
      <div className='row'>
        <form ref={(input) => this.postForm = input} className="post-edit" onSubmit={(e) => this.createPost(e)}>
          <div className="form-group">
            <label for="inputTitle">Title</label>
            <input ref={(input) => this.title = input} type="text" id="inputTitle" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="inputImage">Image</label>
            <input ref={(input) => this.image = input} type="text" placeholder="Paste in URL here" id="inputImage" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="inputDesc">Description</label>
            <input ref={(input) => this.desc = input} type="text" id="inputDesc" className="form-control"/>
          </div>
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddPostForm;

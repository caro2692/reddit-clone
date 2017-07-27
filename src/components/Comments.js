import React from 'react';

class Comments extends React.Component{

  addComment(index){
    this.props.addComment(index,this.comment.value);
    this.commentForm.reset();
  }


  render(){
    const comments = this.props.comments
    return (
      <div>
        <ul className="list-unstyled">
          {comments.map((comment, index) => <li>{comment}</li>)} </ul>
        <form ref={(input) => this.commentForm = input} className="form-inline" onSubmit={()=> this.addComment(this.props.index)}>
          <div className="form-group">
            <input ref={(input) => this.comment = input} className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Comments;

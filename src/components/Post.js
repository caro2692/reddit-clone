import React from 'react';
import Comments from './Comments';

class Post extends React.Component {
  constructor(){
    super();
    //initial state
    this.state = {
      showComments:{isShown: false}
    };
  }

  addLike(index){
    this.props.modifyLike(index, 1);
  }

  removeLike(index){
    this.props.modifyLike(index, -1);
  }

  toggleComments(boolean){
    const showComments = {...this.state.showComments};
      //update or add the new number of fish ordered
    showComments.isShown = boolean;
      //update our state
    this.setState({showComments});
  }

  render() {
    const {details, key} = this.props;

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="well">
              <div className="media-left">
                <img className="media-object" src={details.image}/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {details.title}
                  |
                  <a onClick={() => this.addLike(this.props.index)}><i className="glyphicon glyphicon-arrow-up"></i></a>
                  <a onClick={() => this.removeLike(this.props.index)}><i className="glyphicon glyphicon-arrow-down"></i></a>
                  {details.likes}
                </h4>
                <div className="text-right">
                  Some Author
                </div>
                <p>
                  {details.desc}
                </p>
                <div>
                  Some time ago
                  |
                  <i className="glyphicon glyphicon-comment"></i>
                  <a onClick={()=> {this.state.showComments.isShown ? this.toggleComments(false) : this.toggleComments(true)}}>
                    Show comments
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-offset-1">
                    <hr/>
                    {this.state.showComments.isShown ? <Comments addComment={this.props.addComment} index={this.props.index} comments={details.comments}/> : <p></p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

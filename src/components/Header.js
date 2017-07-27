import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  showHideForm(){
    this.props.showHideForm(true);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({value:event.target.value}, ()=>{
      this.props.handleSearch(this.state)
    });
  }

  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Reddit Clone</a>
          </div>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <button onClick={() => this.showHideForm()} type="button" className="btn btn-default navbar-right">New Post</button>
        </div>
      </nav>
    );
  }
}

export default Header;

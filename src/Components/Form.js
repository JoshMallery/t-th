import React , { Component } from 'react';

class Form extends Component {
  constructor({ getPoke }) {
    super();
    this.state = {
      search: ''
    }
  }

handleChange = event => {
this.setState({search:event.target.value})
this.props.getPoke(event.target.value)
}

render() {
  return(
    <form>
    <input
      type="text"
      placeholder="search for pokemon"
      value={this.state.search}
      name="search"
      onChange={(event) => this.handleChange(event)}
     />

    </form>
  )
}

}

export default Form;

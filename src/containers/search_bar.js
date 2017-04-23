import React, {Component} from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return(
      <form className="input-group" onClick={this.handleSubmit}>
        <input
            placeholder = "Get a five-day forecast "
            className = "form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
        <span className="input-group-btn">
        <button onClick={this.handleSubmit}type="submit" className="btn btn-secondary"> Submit</button>
        </span>
      </form>
    );

  }
}

import React from 'react';
import PropTypes from 'prop-types';
import SearchBoxIcon from './SearchBoxIcon';
import './SearchBox.css';

class SearchBox extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    query: PropTypes.string
  };

  static defaultProps = {
    onSubmit: () => {},
    query: ''
  };

  constructor(props) {
    super(props);
    const { query } = this.props;

    this.state = {
      query: query || ''
    };
  }

  handleChange = e =>
    this.setState({
      query: e.target.value
    });

  handleSubmit = e => {
    if (e) e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (query) {
      onSubmit(query);
    }
  };

  render() {
    const { query } = this.state;

    return (
      <form
        className="SearchBox"
        onSubmit={this.handleSubmit}
      >
        <input
          value={query}
          onChange={this.handleChange}
          className="SearchBox-input"
          placeholder="Search"
          required
        />
        <button className="SearchBox-submitButton">
          <SearchBoxIcon />
        </button>
      </form>
    );
  }
}

export default SearchBox;

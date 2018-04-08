import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import nasaLogo from '../../assets/nasa-logo.png';
import './Home.css';



export class Home extends React.Component {
  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    return (
      <div>
        <div className="Home-background">
          <div className="Home-foreground">
            <iframe src="https://www.youtube.com/embed/EaM9kDPa_AY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=EaM9kDPa_AY" title="Nasa" ></iframe>
          </div>
        </div>
        <div className="Home-wrapper">
          <div className="Home-content">
            <div className="Home-logo">
              <img src={nasaLogo} alt="NASA" width="175" title="NASA" />
            </div>
            <SearchBox onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

import React, { Component } from 'react';
import spinner from '../images/gifs/LoadingSpinner.gif';

class LoadingSpinner extends Component{
  render() {
    return (
    <div className="loadingSpinner">
        <img src={spinner} alt="loading..." width={100}/>
    </div>
    );
  }
}

export default LoadingSpinner;

import React from 'react'

export default React.createClass({
  render(){
  return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="video-overlay">
          <h1 className="main_title">Jeremy's Motorcycle Ride!</h1>
            <button className="money_button">Give Jeremy Money</button>
            <button className="gold_button">Give Jeremy Gold</button>
          </div>
          <video id="player" src="/styles/movie.mp4" controls autoPlay></video>
          <video id="player" src="/styles/movie.mp4" controls autoPlay></video>
        </div>
      </div>
    )
  }
})

import React from 'react'
import $ from 'jquery'

$(document).ready(function() {
  //Calculate the height of <header>
  //Use outerHeight() instead of height() if have padding
  var aboveHeight = $('header').outerHeight();
  var aboveHeight = 640
  //when scroll
  $(window).scroll(function(){
    //if scrolled down more than the header’s height
    if ($(window).scrollTop() > aboveHeight){
      // if yes, add “fixed” class to the <nav>
      // add padding top to the #content  (value is same as the height of the nav)
      $('nav').addClass('fixed')
      $('text').addClass('nav_placeholder_grow')
    } else {
      // when scroll up or less than aboveHeight,    remove the “fixed” class, and the padding-top
      $('nav').removeClass('fixed')
      $('text').removeClass('nav_placeholder_grow')
    }
  })
})

export default React.createClass({
  render(){
  return (
    <div>
      <div className="outer-container">
        <div className="inner-container">
          <div className="video-overlay">
          <h1 className="main_title">SA Realty Website!</h1>
            <button className="left_button">A Button</button>
            <button className="right_button">B Button</button>
          </div>
          <video id="player" src="/styles/movie.mp4" autoPlay></video>
        </div>
      </div>

      <div className="wrapper">
        <text className="nav_placeholder">
        </text>
        <nav>
          <p className="nav_content">Navigation Content</p>
        </nav>
        <section>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </div>

    </div>
    )
  }
})

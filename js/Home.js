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
      $(".nav_wrapper").addClass('fixed')
      $('.nav_placeholder').addClass('nav_placeholder_grow')
      $('.page2_wrapper_content').css('margin-top','10em')
    } else {
      // when scroll up or less than aboveHeight,    remove the “fixed” class, and the padding-top
      $(".nav_wrapper").removeClass('fixed')
      $('.nav_placeholder').removeClass('nav_placeholder_grow')
      $('.page2_wrapper_content').css('margin-top','5em')
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
          <h1 className="main_title">First Last</h1>
            <button className="left_button">A Button</button>
            <button className="right_button">B Button</button>
          </div>
          <video id="player" src="/styles/movie.mp4" autoPlay></video>
        </div>
      </div>

      <div className="page2_wrapper">
        <article className="nav_placeholder"></article>
        <nav className="nav_wrapper">
          <article className="nav_left">
            <h1 className="nav_content_left">First Last</h1>
          </article>
          <article className="nav_right">
              <ul className="nav_content_right">
                <li>
                  <a className="nav_options" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="nav_options" href="#">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="nav_options" href="#">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="nav_options" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
          </article>
        </nav>
        <div className="page2_wrapper_content">
          <section className="page2_left_area">
            <h1 className="page2_name_title">First Last</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="empty_box">Empty #1</div>
            <div className="empty_box">Empty #2</div>
          </section>
          <aside className="page2_right_area">
            <h1 className="page2_name_title">Other Stuff</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="empty_box">Empty #1</div>
            <div className="empty_box">Empty #2</div>
          </aside>
        </div>
      </div>
    </div>
    )
  }
})

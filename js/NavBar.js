import React from "react"
import { Link } from "react-router"
// import $ from 'jquery'


// $(document).ready(function() {
//   //Calculate the height of <header>
//   //Use outerHeight() instead of height() if have padding
//   var aboveHeight = $('header').outerHeight();
//   var aboveHeight = 0
//   //when scroll
//   $(window).scroll(function(){
//     //if scrolled down more than the header’s height
//     if ($(window).scrollTop() > aboveHeight){
//       // if yes, add “fixed” class to the <nav>
//       // add padding top to the #content  (value is same as the height of the nav)
//       $(".nav_wrapper").addClass('fixed')
//       $('.nav_placeholder').addClass('nav_placeholder_grow')
//       $('.page2_wrapper_content').css('margin-top','10em')
//     } else {
//       // when scroll up or less than aboveHeight,    remove the “fixed” class, and the padding-top
//       $(".nav_wrapper").removeClass('fixed')
//       $('.nav_placeholder').removeClass('nav_placeholder_grow')
//       $('.page2_wrapper_content').css('margin-top','5em')
//     }
//   })
// })

export default React.createClass({
  getInitialState(){
    return {
      imgSrc: '/styles/facebook.png'
    }
  },
   handleMouseOver() {
     this.setState({
       imgSrc: '/styles/facebook_name.png'
     })
   },
   handleMouseOut() {
     this.setState({
       imgSrc: '/styles/facebook.png'
     })
   },
  render(){
    return (
      <nav className="nav_wrapper">
        <article className="nav_left">
          <h1 className="nav_name_left">Johnny Ramirez</h1>
        </article>
        <article className="nav_middle">
            <a href="https://www.facebook.com/JohnnySellsRE/?ref=py_c" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
            <img className="facebook" ref="facebookImage" src={this.state.imgSrc}/>
          </a>
        </article>
        <article className="nav_right">
            <ul className="nav_content_right">
              <li>
                <a className="nav_options" href="#">
                  HOME
                </a>
              </li>
              <li>
                <Link to="/Services" className="nav_options">SERVICES</Link>
              </li>
              <li>
                <Link to="/AboutMe" className="nav_options">ABOUT ME</Link>
              </li>
              <li>
                <Link to="/ContactMe" className="nav_options">CONTACT ME</Link>
              </li>
            </ul>
        </article>
      </nav>
    )
  }
})

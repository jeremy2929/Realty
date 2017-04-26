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

// <a className="nav_options" href="#">
//   HOME
  // <Link to="/Services" className="nav_options">SERVICES</Link>
  // <Link to="/AboutMe" className="nav_options">ABOUT ME</Link>
  // <Link to="/ContactMe" className="nav_options">CONTACT ME</Link>



export default React.createClass({
  getInitialState(){
    return {
      imgSrc: '/styles/facebook.png'
    }
  },
  onClickHome(){
    this.props.onClickHome()
  //  this.refs.services.className = "hidden"
  },
  onClickServices(){
    this.props.onClickServices()
  //  this.refs.services.className = "hidden"
  },
  onClickAboutMe(){
    this.props.onClickAboutMe()
  //  this.refs.services.className = "hidden"
  },
  onClickContactMe(){
    this.props.onClickContactMe()
  //  this.refs.services.className = "hidden"
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
                  <a className="nav_options" onClick={this.onClickHome}>HOME</a>
              </li>
              <li>
                <a className="nav_options" onClick={this.onClickServices}>SERVICES</a>
              </li>
              <li>
                <a className="nav_options" onClick={this.onClickAboutMe}>ABOUT ME</a>
              </li>
              <li>
                <a className="nav_options" onClick={this.onClickContactMe}>CONTACT ME</a>
              </li>
            </ul>
        </article>
      </nav>
    )
  }
})

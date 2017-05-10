import React from "react"
import { Link } from "react-router"

export default React.createClass({
  getInitialState(){
    return {
      imgSrc: '/styles/facebook.png'
    }
  },
  onClickHome(){
    this.props.onClickHome()
  },
  onClickServices(){
    this.props.onClickServices()
  },
  onClickAboutMe(){
    this.props.onClickAboutMe()
  },
  onClickContactMe(){
    this.props.onClickContactMe()
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

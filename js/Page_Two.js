import React from "react"
import { Link } from "react-router"

export default React.createClass({
  onClickServices(){
    this.refs.services.className="services_window_display"
    this.refs.page2.className="page2_wrapper_content_hidden"
  },
  render(){
  return (
    <div id="Page2" className="page2_wrapper">
      <article className="nav_placeholder"></article>
      <nav className="nav_wrapper">
        <article className="nav_left">
          <h1 className="nav_name_left">Johnny Ramirez</h1>
        </article>
        <article className="nav_middle">
          <a className="fa fa-facebook fa-3x" href="#">
            <i  aria-hidden="true"></i>
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
                <a className="nav_options" href="#" onClick={this.onClickServices}>
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
        <div className="services_window_hidden" ref="services">
          <p className="services_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      <div className="page2_wrapper_content" ref="page2">
        <section className="page2_left_area">
          <h1 className="page2_name_title">Johnny Ramirez</h1>
          <p className="page2_text">I am very proud of my service in the US Marine Corps and US Army. As a successful Real Estate Entrepreneur-my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
          <p className="page2_text">With that said, not all real estate agents are created equal. .</p>
          <p className="page2_text">I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
          <img className="page2_image_box" src="/styles/house1.jpg"/>
          <img className="page2_image_box" src="/styles/house2.jpg"/>
        </section>
        <aside className="page2_right_area">
          <h1 className="page2_name_title">Contact me</h1>
          <p className="page2_contact_text">
                                    210-884-5873
                                    jrramirez65@gmail.com
                                    1111 Austin Hwy
                                    San Antonio, TX 78209
                                    state license:  #609589</p>
          <img className="page2_agent_right" src="/styles/agent.jpg"/>
          <div className="page2_contact_area">
            <h1 className="page2_contact_title">Or, simply enter your information and we will contact you:</h1>
            <div className="page2_contact_buttons">
              <input placeholder="name" className="page2_contact_input"></input>
              <input placeholder="phone number" className="page2_contact_input"></input>
              <button className="page2_contact_submit">Submit</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
})

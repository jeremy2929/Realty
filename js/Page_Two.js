import React from "react"
import { Link } from "react-router"

export default React.createClass({
  onClickServices(){
    this.refs.services.className="services_window_display"
    this.refs.page2.className="page2_wrapper_content_hidden"
  },
  render(){
  return (
    <div className="page2_wrapper">
      <article className="nav_placeholder"></article>
      <nav className="nav_wrapper">
        <article className="nav_left">
          <h1 className="nav_name_left">First Last</h1>
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
          <h1 className="page2_name_title">First Last</h1>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img className="empty_box" src="/styles/house1.jpg"/>
          <img className="empty_box" src="/styles/house2.jpg"/>
        </section>
        <aside className="page2_right_area">
          <h1 className="page2_name_title">Other Stuff</h1>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img className="agent_right_page2" src="/styles/agent.jpg"/>
          <div className="contact_area">
            <h1 className="contact_title">Just enter your info and we will contact you:</h1>
            <div className="contact_buttons">
              <input placeholder="name" className="contact_input"></input>
              <input placeholder="number" className="contact_input"></input>
              <button className="contact_submit">Submit</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
})

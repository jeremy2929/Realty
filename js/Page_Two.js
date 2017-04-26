import React from "react"
import { Link } from "react-router"
import NavBar from './NavBar'

// import Services from './Services'
// import AboutMe from './AboutMe'

// <table className="contact_info">
//   <tbody >
//     <tr>
//       <th className="contact_detail">MAIN:</th>
//       <td className="contact_detail">210-884-5873</td>
//     </tr>
//     <tr>
//       <th className="contact_detail">EMAIL:</th>
//       <td className="contact_detail">jrramirez65@gmail.com</td>
//     </tr>
//     <tr>
//       <th className="contact_detail">ADDRESS:</th>
//       <td className="contact_detail">
//         1111 Austin Hwy
//         <br/>
//         San Antonio, TX 78209
//       </td>
//     </tr>
//   </tbody>
// </table>

// <a className="fa fa-facebook fa-3x" href="#">
// <i  aria-hidden="true"></i>
// <img className="facebook" src="/styles/facebook.png"/>
  // <img className="facebook" ref="facebookImage" src="/styles/facebook.png" onMouseOver={this.hoverOnFacebook}/>


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
    <div id="Page2" className="page2_wrapper">
      <article className="nav_placeholder"></article>
      <NavBar/>
      <div className="page2_wrapper_content" ref="page2">
        <section className="page2_left_area">
          <h1 className="page2_name_title">Johnny Ramirez</h1>
          <p className="page2_text">I am very proud of my service in the US Marine Corps and US Army. As a successful Real Estate Entrepreneur-my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
          <p className="page2_text">With that said, not all real estate agents are created equal.</p>
          <p className="page2_text">I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
          <img className="page2_image_box" src="/styles/house1.jpg"/>
          <img className="page2_image_box" src="/styles/house2.jpg"/>
        </section>
        <aside className="page2_right_area">
          <h1 className="page2_name_title">All City Real Estate</h1>
          <div>
            <table className="page2_contact_info">
              <tbody>
                <tr>
                  <th className="contact_detail">main:</th>
                  <td className="contact_detail">210-884-5873</td>
                </tr>
                <tr>
                  <th className="contact_detail">email:</th>
                  <td className="contact_detail">
                    <a href="mailto:jrramirez65@gmail.com" data-rel="external">jrramirez65@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <th className="contact_detail">address:</th>
                  <td className="contact_detail" style={{lineHeight: "1em"}}>
                    1111 Austin Hwy
                    <br />
                    San Antonio, TX 78209
                  </td>
                </tr>
                <tr>
                  <th className="contact_detail">state license #</th>
                  <td className="contact_detail">609589</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img className="page2_agent_right" src="/styles/facebook_house.jpg"/>
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

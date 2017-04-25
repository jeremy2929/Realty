import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router"
import NavBar from './NavBar'

export default React.createClass({
  componentDidUpdate() {
     window.scrollTo(0, 0)
  },
  render(){
    // <h1 className="contact_name_title" >Johnny Ramirez</h1>

  return (
    <div>
      <NavBar/>
      <section className="contact_page">
        <table className="contact_info">
          <tbody >
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
              <th className="contact_detail" style={{verticalAlign: "top"}}>address:</th>
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
          <img className="allCity_image_right" src="/styles/allCity_image.jpg"/>
        </table>
        <img className="contact_johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
      </section>
    </div>
    )
  }
})

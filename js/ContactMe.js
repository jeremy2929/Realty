import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router"
import $ from 'jquery'

export default React.createClass({
  componentDidUpdate() {
     window.scrollTo(0, 0)
  },

  render(){
  return (
    <div>
      <section className="contact_page">
        <table className="contact_info">
          <h1 className="contact_name_title" >Johnny Ramirez</h1>
          <tbody >
            <tr>
              <th className="contact_detail">MAIN:</th>
              <td className="contact_detail">210-884-5873</td>
            </tr>
            <tr>
              <th className="contact_detail">EMAIL:</th>
              <td className="contact_detail">jrramirez65@gmail.com</td>
            </tr>
            <tr>
              <th className="contact_detail">ADDRESS:</th>
              <td className="contact_detail">
                1111 Austin Hwy
                <br/>
                San Antonio, TX 78209
              </td>
            </tr>
          </tbody>
        </table>
        <img className="contact_johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
      </section>

    </div>
    )
  }
})

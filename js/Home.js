import React from 'react'
import $ from 'jquery'
import NavBar from './NavBar'

export default React.createClass({
  DownClick(){
    var element = document.getElementById("Page2")
    // var alignWithTop = true
    element.scrollIntoView({behavior: "smooth"})
  },
  onClickHome(){
    this.refs.services.className="services_page_hidden"
    this.refs.aboutMe.className="aboutMe_page_hidden"
    this.refs.contactMe.className="contactMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper"
  },
  onClickServices(){
    this.refs.services.className="services_page"
    this.refs.aboutMe.className="aboutMe_page_hidden"
    this.refs.contactMe.className="contactMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper_hidden"
  },
  mainServicesDisplay(){
    this.refs.services.className="services_page_hidden"
    this.refs.mainWrapper.className="main_wrapper"
  },
  onClickAboutMe(){
    this.refs.aboutMe.className="aboutMe_page"
    this.refs.services.className="services_page_hidden"
    this.refs.contactMe.className="contactMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper_hidden"
  },
  mainAboutMeDisplay(){
    this.refs.aboutMe.className="aboutMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper"
  },
  onClickContactMe(){
    this.refs.contactMe.className="contactMe_page"
    this.refs.services.className="services_page_hidden"
    this.refs.aboutMe.className="aboutMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper_hidden"
  },
  mainContactMeDisplay(){
    this.refs.contactMe.className="contactMe_page_hidden"
    this.refs.mainWrapper.className="main_wrapper"
  },
  render(){
  return (
    <div>
      <div className="outer-container">
        <div className="inner-container">
          <div className="video-overlay">
            <section className="main_wrapper" ref="mainWrapper">
              <h1 className="main_title">Johnny Ramirez</h1>
              <h2 className="main_subtitle">Finding your next home...</h2>
              <button className="left_button">A Button</button>
              <button className="right_button">B Button</button>
              <button className="down_button" onClick={this.DownClick}>&#8595;</button>
            <iframe className='connect_mlsidx' src='http://sabor-idx.connectmls.com/idx/spr/4EAD01484EE316ECE0537401020AAD47/search'></iframe>
            </section>
            <section className="services_page_hidden" ref="services">
              <div>
                <img className="close_x" src="/styles/close.png" onClick={this.mainServicesDisplay}/>
                <h1 className="services_title">Services</h1>
                <p className="services_text">From beginning to end, Johnny Ramirez makes the process of buying or selling you home seamless. He not only keeps his finger on the pulse of the market, but also possesses an expansive network of service people to assist his clients before, during, and after their sale or purchase.
                Selling is more than just listing a property on MLS. Johnny throws a wide net of marketing and promotional tools to get your property SOLD. Combined with his promotional tools, professional and personal network, and his resources at All City Real Estate, he’s prepared to engage every effort to find the perfect buyer for your home.
                Buying a home means finding the picture perfect dream home.  This requires an elite real estate agent with an extensive network who understands the importance of trust.
                </p>
              </div>
              <img className="services_johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
            </section>
            <section className="aboutMe_page_hidden" ref="aboutMe">
                <img className="close_x" src="/styles/close.png" onClick={this.mainAboutMeDisplay}/>
                <h1 className="aboutMe_name_title">Johnny Ramirez</h1>
                <h2 className="aboutMe_army">MAJOR, US ARMY RETIRED</h2>
                <p className="aboutMe_text">I am very proud of my service in the US Marine Corps and US Army. As a successful Real Estate Entrepreneur-my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
                <p className="aboutMe_text">With that said, not all real estate agents are created equal.</p>
                <p className="aboutMe_text">I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
              <img className="aboutMe_johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
            </section>
            <section className="contactMe_page_hidden" ref="contactMe">
              <img className="close_x" src="/styles/close.png" onClick={this.mainContactMeDisplay}/>
              <h1 className="contactMe_name_title">Johnny Ramirez</h1>
              <img className="contactMe_allCity_image" src="/styles/allCity_image.jpg"/>
              <table className="contactMe_info">
                <tbody >
                  <tr>
                    <th className="contactMe_detail">main:</th>
                    <td className="contactMe_detail">210-884-5873</td>
                  </tr>
                  <tr>
                    <th className="contactMe_detail">email:</th>
                    <td className="contactMe_detail">
                      <a href="mailto:jrramirez65@gmail.com" data-rel="external">jrramirez65@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <th className="contactMe_detail" style={{verticalAlign: "top"}}>address:</th>
                    <td className="contactMe_detail" style={{lineHeight: "1em"}}>
                      1111 Austin Hwy
                      <br />
                      San Antonio, TX 78209
                    </td>
                  </tr>
                  <tr>
                    <th className="contactMe_detail">state license #</th>
                    <td className="contactMe_detail">609589</td>
                  </tr>
                </tbody>
              </table>
              <img className="contactMe_johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
            </section>
          </div>
          <video id="player" src="/styles/movie.mp4" autoPlay loop></video>
        </div>
      </div>
      <NavBar onClickHome={this.onClickHome}
              onClickServices={this.onClickServices}
              onClickAboutMe={this.onClickAboutMe}
              onClickContactMe={this.onClickContactMe}
      />
    </div>
    )
  }
})

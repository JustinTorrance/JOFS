import React from 'react'
import map from '../../assets/map.png'
import office from '../../assets/office.jpg'

const Home = () => {
  return (
    <main className='home'>
      <section className='office-img-container'>
        <img src={office} alt="The Jackson Office" className='office-img'/>
        <div className='home-name-div'>
          <h1 className='home-office-name'>Jackson Oral and Facial Surgery</h1>
          <h3 className='home-doctor-name'>Dr. Riley J. Hicks, DDS</h3>
        </div>
      </section>
      <section className="home-bottom">
        <article>
          <h3 className='call-visit'>Call or Visit Us Today</h3>
        </article>
        <section className='home-contact-section'>
          <article className='home-contact-info'>
            <p className='bold'>Jackson Oral and Facial Surgery</p>
            <p>120 Aspen Ln #100</p>
            <p>Jackson, WY 80125</p>
            <p><span className='bold' >Phone:</span> (208) 555 - 1234</p>
            <p><span className='bold' >Fax:</span> (208) 555 - 1235</p>
            <p><span className='bold' >Hours:</span> Mon - Fri: 8am - 5pm</p>
          </article>
          <article className='map-article-wrapper'>
            <a className='map-link' href='https://www.google.com/maps/place/Pearl+Street+Bagels/@43.4791376,-110.7636907,17.28z/data=!4m13!1m7!3m6!1s0x53531a58fccf7f4b:0x3d1c01cbb13a835c!2sJackson,+WY!3b1!8m2!3d43.4799291!4d-110.7624282!3m4!1s0x53531a686b4b4e8d:0x36272250c755beba!8m2!3d43.4787181!4d-110.7641125'>
              <img className='office-map' src={map} alt='Map of the office location' width='400px'/>
              <div className='view-map-div'>
                <p className='view-map'>View Map</p>
              </div>
            </a>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Home;
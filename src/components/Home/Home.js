import React from 'react'
import map from '../../assets/map.png'

const Home = () => {
  return (
    <main className='home'>
      <section className='office-img'>
        <div className='home-name-div'>
          <h1 className='home-office-name'>Jackson Oral and Facial Surgery</h1>
          <h3 className='home-doctor-name'>Dr. Riley J. Hicks</h3>
        </div>
      </section>
      <section className="home-bottom">
        <article>
          <h3 className='call-visit'>Call or Visit Us Today</h3>
        </article>
        <section className='home-contact-section'>
          <article className='home-contact-info'>
            <p>Jackson Oral and Facial Surgery</p>
            <p>120 Aspen Ln #100</p>
            <p>Jackson, WY 80125</p>
            <p>Phone: (208) 555 - 1234</p>
            <p>Fax: (208) 555 - 1235</p>
            <p>Hours: Mon - Fri: 8am - 5pm</p>
          </article>
          <article className='map-article'>
            <img src={map} alt='Map of the office location' width='400px'/>
            <div className='view-map-div'>
              <p className='view-map'>View Map</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Home;
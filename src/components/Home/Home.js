import React from 'react'
import office from '../../assets/office.jpg'

const Home = () => {
  return (
    <main>
      <header>
        <h1>Jackson Oral and Facial Surgery</h1>
        <h3>Dr. Riley J. Hicks</h3>
      </header>
      <section className="contact-section">
        <article>
          <h3>Call or Visit Us Today</h3>
        </article>
        <article>
          <p>Jackson Oral and Facial Surgery</p>
          <p>120 Aspen Ln #100</p>
          <p>Jackson, WY 80125</p>
          <p>Phone: (208) 555 - 1234</p>
          <p>Fax: (208) 555 - 1235</p>
          <p>Hours: Mon - Fri: 8am - 5pm</p>
        </article>
        <article className='map-article'>
          <img src={office} alt='Map of the office location' width='400px'/>
          <div className='view-map-div'>
            <p>View Map</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Home;
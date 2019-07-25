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
            <p>1325 South Hwy 89 #105</p>
            <p>Jackson, WY 83001</p>
            <p><span className='bold'>Phone:</span> (307) 201 - 5668</p>
            <p><span className='bold'>Fax:</span> (307) 201 - 5669</p>
            <p><span className='bold'>Cell:</span> (307) 690 - 5990</p>
            <p><span className='bold'>Hours:</span> Thursday: 8am - 5pm</p>
            <p className='friday-hours'>Friday: 8am - 4pm</p>
          </article>
          <article className='map-article-wrapper'>
            <a className='map-link' href='https://www.google.com/maps/place/1325+US-89+APT+105,+Jackson,+WY+83001/@43.4597739,-110.7964651,17z/data=!3m1!4b1!4m5!3m4!1s0x535310bc0a54a6fd:0xddf5df58b9d7eeda!8m2!3d43.4597739!4d-110.7949129'>
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
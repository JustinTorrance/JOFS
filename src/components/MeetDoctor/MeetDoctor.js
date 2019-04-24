import React from 'react';
import doctorHeadshot from '../../assets/doctorHeadshot.jpg'
import drHicks from '../../assets/dr-hicks2.jpg'
import motorcycle from '../../assets/motorcycle.jpg'

const MeetDoctor = () => {

  return(
    <main>
      <h1 className='meet-doctor-name'>Meet Dr. Hicks</h1>
      <section className='about-doctor'>
        <div className='headshot-div'>
          <img src={doctorHeadshot} alt="Doctor Riley Hicks" className='headshot-img'/>
          <h6 className='headshot-h6'>Dr. Riley Hicks DDS, Board Certified Specialist</h6>
        </div>

        <article className='education'>
          <h3 className='meet-header'>Education and Training</h3>
          <p className='meet-p1 about-p'>
            Dr. Hicks is board certified by the American Board of Oral and Maxillofacial 
            Surgery. Board certified doctors complete an intensive application and examination 
            process every 10 years. The certification procedure involves letters of recommendation 
            from other board certified oral and maxillofacial surgeons attesting to the applicant’s 
            ethical and moral standing in the profession and community. Applicants are required to 
            provide surgical case histories and, continuing education certifications for the Board 
            to review. A rigorous 5-hour written test and a full day of oral examinations complete 
            the process. Board Certification is not required to receive a license or practice as an 
            Oral Surgeon; it is a voluntary certification. Dr. Hicks passed his second Board exam in 
            October 2010.
          </p>
          <p className='meet-p2 about-p'>
            Dr. Hicks is a graduate of Brigham Young University. He received his Doctorate of 
            Dentistry from the University of Iowa, College of Dentistry in 1993. He served a one-year 
            fellowship in Oral & Maxillofacial Surgery at the University of Texas Southwestern Medical 
            Center in Dallas, Texas. He returned to the University of Iowa to complete his four-year 
            hospital based residency training in Oral and Maxillofacial surgery.
          </p>
        </article>

        <article className='memberships'>
          <h3 className='meet-header'>Dr. Hicks Maintains Professional Memberships With:</h3>
          <ul>
            <li>American Association of Oral and Maxillofacial Surgeons</li>
            <li>American College of Oral and Maxillofacial Surgeons</li>
            <li>Idaho Society of Oral and Maxillofacial Surgeons</li>
            <li>International Team for Implantology</li>
            <li>Academy of Osseointegration</li>
            <li>American Dental Association</li>
            <li>Idaho State Dental Association</li>
            <li>Omicron Kappa Upsilon the National Honorary Dental Society</li>
          </ul>
        </article>

        <article className='experience'>
          <h3 className='meet-header'>Specialization and Experience</h3>
          <p>
            Dr. Hicks brings many years of clinical and surgical experience to his practice. 
            Patients can feel confident in his ability to perform the most delicate surgical 
            procedures. Idaho Falls Oral and Facial Surgery opened in June 1998. For the past 
            18 years, Dr. Hicks has provided a full range of surgical services to patients from 
            Eastern Idaho, Western Wyoming and even Salt Lake City.
          </p>
          <p>
            Dr. Hicks, with his highly trained staff, provide in-office surgical services for 
            removal of third molars, extraction of decayed or damaged teeth in preparation for 
            dentures, or restoration of missing teeth using Straumann dental implants. Dr. Hicks 
            also performs corrective jaw surgery and trauma repair. These services can all be completed 
            while the patient is comfortably asleep using IV anesthesia.
          </p>
          <p>
            He has also developed a particular specialty in the area of oral and facial lesion 
            removal and pathology. He has shared his knowledge with the local dental community 
            by presenting several seminars for area dentists and hygienists to increase the 
            knowledge base and awareness of oral cancers and lesions.
          </p>
          <p>
            Dr. Hicks stays on the cutting edge of his field by attending continuing education 
            courses and conferences where he invests significant time learning the latest in 
            treatments and techniques. He is credentialed at both Idaho Falls hospitals and takes 
            on-call for any oral/facial trauma.
          </p>
          <img src={drHicks} alt="Doctor Hicks preparing to see a patient" width='400px' />
        </article>
        
        <article className='beyond'>
          <h3 className='meet-header' >Beyond The White Coat</h3>
          <p>
            Dr. Hicks goes the extra mile in more than just his professional pursuits. His 
            latest hobby is ultra distance running.  His longest race was 69 miles taking him just 
            under 22 hours of continuous running and hiking to complete. He also loves the 
            mountains and has scaled Mt. Timpanogos, the Middle Teton and Mt. Borah several times 
            each. In high school, he got hooked on downhill skiing and has recently branched out 
            to backcountry skiing. Dr. Hicks’ adrenaline junky tendencies show when he rides his 
            motorcycle. He has taken his need for speed to the racetrack where he enjoys racing 
            with his sons.  Dr. Hicks is originally from Pleasant Grove, Utah and he and his wife, 
            Lisa, have four wonderful children.
          </p>
        </article>
      </section>

      <section className='hobbies-section'>
      
        <article className='hobby'>
          <img src={motorcycle} alt="Doctor Hicks racing motorcyles with his children" width='200px' />
          <h6>
            Dr. Hicks (center) with sons Tanner (front), and Colton (back left) at Miller Motorsports race track.
          </h6>
        </article>

      </section>

    </main>
  )
}

export default MeetDoctor
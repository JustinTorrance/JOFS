import React from 'react'
import doctorHeadshot from '../../assets/doctorHeadshot.jpg'
import drHicks from '../../assets/dr-hicks2.jpg'
import surgery from '../../assets/dr-hicks3.jpg'
import motorcycle from '../../assets/motorcycle.jpg'
import family from '../../assets/family.jpg'
import running from '../../assets/running.jpg'
import climbing from '../../assets/climbing.jpg'

const MeetDoctor = () => {

  return(
    <main className='meet-main'>
      <h1 className='meet-doctor-name'>Meet Dr. Hicks</h1>
      <section className='about-doctor'>
        
      <section className='education-container'>
        <article className='education'>
          <img src={doctorHeadshot} alt="Doctor Riley Hicks" className='headshot-img'/>
          <h3 className='meet-header education-h3'>Education and Training</h3>
          <p className='meet-p1 about-p education-p'>
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
          <p className='meet-p2 about-p education-p'>
            Dr. Hicks is a graduate of Brigham Young University. He received his Doctorate of 
            Dentistry from the University of Iowa, College of Dentistry in 1993. He served a one-year 
            fellowship in Oral & Maxillofacial Surgery at the University of Texas Southwestern Medical 
            Center in Dallas, Texas. He returned to the University of Iowa to complete his four-year 
            hospital based residency training in Oral and Maxillofacial surgery.
          </p>
        </article>

      </section>

        <section className='memberships-container'>
          <article className='memberships'>
            <img src={drHicks} className='preparation-img' alt="Doctor Hicks preparing to see a patient" width='400px' />
            <h3 className='meet-header memberships-h3'>Dr. Hicks Maintains Professional Memberships With:</h3>
            <ul className='about-ul'>
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
        </section>

        <section className='experience-container'>
          <article className='experience'>
            <h3 className='meet-header experience-h3'>Specialization and Experience</h3>
            <p className='about-p experience-p1'>
              Dr. Hicks brings many years of clinical and surgical experience to his practice. 
              Patients can feel confident in his ability to perform the most delicate surgical 
              procedures. Idaho Falls Oral and Facial Surgery opened in June 1998. For the past 
              18 years, Dr. Hicks has provided a full range of surgical services to patients from 
              Eastern Idaho, Western Wyoming and even Salt Lake City.
            </p>
            <img src={surgery} className='operation-img' alt="Doctor Hicks with staff operating on a patient" width='400px' />
            <p className='about-p experience-p2'>
              Dr. Hicks, with his highly trained staff, provide in-office surgical services for 
              removal of third molars, extraction of decayed or damaged teeth in preparation for 
              dentures, or restoration of missing teeth using Straumann dental implants. Dr. Hicks 
              also performs corrective jaw surgery and trauma repair. These services can all be completed 
              while the patient is comfortably asleep using IV anesthesia.
            </p>
            <p className='about-p experience-p3'>
              He has also developed a particular specialty in the area of oral and facial lesion 
              removal and pathology. He has shared his knowledge with the local dental community 
              by presenting several seminars for area dentists and hygienists to increase the 
              knowledge base and awareness of oral cancers and lesions.
            </p>
            <p className='about-p experience-p4'>
              Dr. Hicks stays on the cutting edge of his field by attending continuing education 
              courses and conferences where he invests significant time learning the latest in 
              treatments and techniques. He is credentialed at both Idaho Falls hospitals and takes 
              on-call for any oral/facial trauma.
            </p>
          </article>
        </section>
        
        <section className='beyond-container'>
          <article className='beyond'>
            <h3 className='meet-header' >Beyond The White Coat</h3>
            <p className='about-p hobbies-p'>
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

        <section className='hobbies-container'>
          <article className='hobby motorcycle'>
            <img src={motorcycle} alt="Doctor Hicks racing motorcyles with his children" width='800px' />
            <h6>
              Dr. Hicks (center) with sons Tanner (front), and Colton (back left) at Miller Motorsports race track
            </h6>
          </article>
          
          <article className='hobby family'>
            <img src={family} alt="Doctor Hicks with his wife and children" width='800px' />
            <h6>
              Hicks family on Jackson Pass. From Left to Right, Colton, Tanner, Riley, Levi, Lisa, and Jasmyn
            </h6>
          </article>

          <article className='hobby ultra'>
            <img src={running} alt="Doctor Hicks running an ultra marathon" width='400px' />
            <h6>
              Dr. Hicks frequently runs ultra marathons
            </h6>
          </article>

          <article className='hobby climbing'>
            <img src={climbing} alt="Doctor Hicks climbing in the Tetons" width='400px' />
            <h6>
              Dr. Hicks ascending Cube Point, overlooking Jenny Lake near Jackson Hole, Wyoming.
            </h6>
          </article>
        </section>
      </section>
      </section>

    </main>
  )
}

export default MeetDoctor
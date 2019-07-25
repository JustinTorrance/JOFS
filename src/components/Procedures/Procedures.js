import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import tetons3 from '../../assets/tetons3.jpg'

const Procedures = () => {

  return (
    <section className='procedures-section'>
      <h1 className='patient-care-header'>Procedures and Services</h1>
      <img src={tetons3} alt="The Tetons" className='tetons'/>
      <ExpansionPanel className='card'>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Anesthesia</h3>
          </ExpansionPanelSummary >
          <p>
            Anesthesia helps to make your surgery as pleasant and comfortable as possible. Anesthesia allows complex surgery to be performed with little or no discomfort.
          </p>
          <br/>
          <p>
            Oral and Maxillofacial Surgeons receive extensive training in all aspects of anesthesia administration during their hospital based residency program. They are able to provide the anesthetic that is most appropriate for your specific procedure in order to minimize your anxiety and discomfort. Rest assured knowing that you will be continuously monitored during and after surgery.
          </p>
          <br/>
          <p>
            Dr. Hicks offers his patients a full scope of anesthesia services including: 
          </p>
          <ul className='patient-care-list'>
            <br />
            <li>
              Local anesthesia (numbing the area of surgery)
            </li>
            <li>
              Local anesthesia (numbing the area of surgery)
            </li>
            <li>
              General anesthesia (patient is fully asleep)
            </li>
          </ul>
          <br/>
          <p>
            We want you to understand and feel confident with the anesthetic technique that you will choose for your surgery. Your comfort is a top priority in our practice, and we want you to have a relaxed and comfortable experience.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Wisdom Teeth</h3>
          </ExpansionPanelSummary>
          <br/>
          <h4 className='sub-header'>What are wisdom teeth? </h4>
          <p>
            Wisdom teeth, or third molars, are the last teeth to develop and appear in your mouth. They come in between the ages of 17 and 25. 
          </p>
          <br/>
          <h4 className='sub-header'>Do I need my wisdom teeth removed? </h4>
          <p>
            Wisdom teeth may not need to be removed if they grown in completely and are properly cared for. Sometimes a tooth doesn’t fully grow in. This is called an "impacted" tooth. Often wisdom teeth become impacted and do not fully break through the gums because there isn’t enough room. 9 out of 10 people have at least one impacted wisdom tooth.
          </p>
          <br/>
          <p>
            An impacted wisdom tooth can cause problems including:
          </p>
          <ul className='patient-care-list'>
            <li>
              Damaging neighboring teeth
            </li>
            <li>
              Becoming infected
            </li>
            <li>
              Inviting bacteria that lead to gum disease
            </li>
            <li>
              Oral bacteria can also travel through your bloodstream and lead to infections and illnesses that affect your heart, kidneys and other organs
            </li>
            <li>
              In some cases, a cyst or tumor can form around the base of the impacted tooth, which can lead to more serious problems as it hollows out the jaw and damages surrounding nerves, teeth and other parts of your mouth and face
            </li>
          </ul>
          <br/>
          <p>
            The majority of wisdom teeth need to be extracted. You can be evaluated by an Oral and Maxillofacial Surgeon to determine if you could benefit from wisdom teeth removal.
          </p>
          <br/>
          <h4 className='sub-header'>When should I have my wisdom teeth removed?</h4>
          <p>
            It is advantageous to have wisdom teeth removed before they cause problems especially since some problems can be irreversible or have long-term effects. As people age, the roots of the wisdom teeth finish growing and become more firmly embedded in the bone. This can make them more difficult to remove and increase the risk of complications. 
          </p>
          <br />
          <p>
            The ideal is to have your wisdom teeth removed when the roots are ½ to 2/3 formed. Removal recommendations can be as early as age 12, or may be delayed until patients are in their later teens.
          </p>
          <br />
          <h4 className='sub-header'>What can I expect from the surgery? </h4>
          <p>
            Before the surgery, you will have a consultation with Dr. Hicks where you can ask any questions you might have.
          </p>
          <br/>
          <p>
            Wisdom teeth can be extracted under local anesthetic, or IV sedation. Most patients choose IV sedation, as it is a very comfortable way to have the teeth extracted. When sedated, most patients have no recollection of the procedure, and they wake up comfortable, relaxed, and pain free.
          </p>
          <br/>
          <h4 className='sub-header'>What happens after the surgery? </h4>
          <p>
            A typical recovery involves some soreness and swelling that last a few days. You will have a follow up visit with Dr. Hicks one week after surgery to ensure that you are healing properly and recovering smoothly. Please see the complete list of instructions under "Patient Care".
          </p>
          <br/>
          <h4 className='sub-header'>How long until I can return to my normal activities? </h4>
          <p>
            Everyone responds to surgery differently, but most patients recover within three to five days.
          </p>
          <br/>
          <p>
            You play a large role in how quickly and smoothly you recover from surgery. You can create the conditions that enable your body optimal healing by eating healthy and getting enough rest. Or, if you choose not to eat and sleep well, your body’s healing may be slowed or you may encounter complications.
          </p>
          <br/>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Dental Implants</h3>
          </ExpansionPanelSummary>
          <br/>
          <h4 className='sub-header'>What are dental implants? </h4>
          <p>
            Implants can be used to replace missing teeth so that the replacements look and feel like natural teeth.  An implant consists of a titanium metal cylinder, or “post”, that is placed in the jawbone to replace the tooth root. The bone grows around the post and locks it in to place and it becomes an anchor, or base, for the crown. The crown, which looks and feels like a real tooth, is placed on top of the post. Whether you have lost teeth to gum disease, tooth decay, a failed root canal or injury, an implant can make a major difference for your quality of life.
          </p>
          <br/>
          <p>
            Oral and Maxillofacial Surgeons are implant specialists. They are uniquely qualified to safely and permanently secure dental implants. They can reconstruct bone (link to bone grafting page) in areas where more bone is needed to be able to place the implant. They can also modify the gum tissue around implants to make the new teeth look even more natural.
          </p>
          <br />
          <h4 className='sub-header'>Are dental implants the right choice for me? </h4>
          <p>
            A patient with missing teeth is confronted with multiple treatment options. These options include dentures, a fixed bridge, and dental implants. Implants are regarded by many as one of the most important advances in dentistry in the last 50 years and have a 95% success rate.
          </p>
          <br/>
          <p>
            While the initial cost of implants is slightly more than alternatives, their longevity, functionality and durability make them a good investment. They can last a lifetime and are the better investment in the long run for your overall health, appearance, and well being.
          </p>
          <br/>
          <p>
            Implants have several advantages over <strong>dentures</strong> including:
          </p>
          <ul className='patient-care-list'>
            <li>
              Implants have more biting force than dentures. 400 lbs. per square inch vs. 40-50 lbs. of dentures. It’s close to the psi of real teeth
            </li>
            <li>
              Implants don’t require adhesives or cleaning equipment like dentures
            </li>
            <li>
              Implants offer a higher quality of life because you can live confidently without worrying about slipping or clicking dentures or having to limit the foods you eat
            </li>
            <li>
              Implants preserve the jawbone, where dentures may result in bone loss. When one or more teeth are missing you can experience bone loss, which can effect denture fit and incur costs of adjustment or replacement of dentures
            </li>
            <li>
              Since implants look and feel natural, you can have better self-assurance and self-image, and you don’t have to think about your teeth between regular dental checkups
            </li>
          </ul>
          <br/>
          <p>
            Implants also offer advantages to <strong>fixed bridges</strong> including:
          </p>
          <ul className='patient-care-list'>          
            <li>
              95% of implants last 20 or more years. Fixed bridges have an 85% success rate for 10 years and 66% for 15 years
            </li>
            <li>
              Implants do not harm the adjacent teeth. Fixed bridges may require the shaping or cutting down of adjacent healthy teeth
            </li>
          </ul>
          <br/>
          <h4 className='sub-header'>Will the procedure hurt?</h4>
          <p>
            The procedure is usually performed under local anesthesia to minimize discomfort. Some postoperative soreness may be involved but it is usually minimal, due to the training and expertise of Oral and Maxillofacial Surgeons.
          </p>
          <br />
          <h4 className='sub-header'>How much will it cost?</h4>
          <p>
            While the initial cost of implants is slightly more than alternatives, their longevity, functionality, and durability make them a good investment. When properly cared for, dental implants can last a lifetime. Price varies depending on the number of teeth you will be replacing and the type of implant. To get an accurate estimate, schedule a consultation with your Oral and Maxillofacial Surgeon.
          </p>
          <br />
          <h4 className='sub-header'>Steps for receiving an implant:</h4>
          <p><strong>1. Decide</strong> - Visit your dentist to discuss options for replacing missing, broken or soon to be extracted teeth.</p>
          <p><strong>2. Plan</strong> -  You meet with your Oral and Maxillofacial surgeon for an examination, x-rays, and consultation.</p>
          <p><strong>3. Placement</strong> -  Oral and Maxillofacial Surgeon surgically places posts, or implants, in your jaw.</p>
          <p><strong>4. Healing</strong> -  Implants need a couple weeks to stabilized and fully fuse to the jawbone.</p>
          <p><strong>5. Placement of abutment</strong> -  the dentist or prosthedontist places the abutment (a small piece that connects the post to the crown) and makes an impression of the upper and lower jaws.</p>
          <p><strong>6. Building the crown</strong> -  The lab uses this impression to create a crown (or prosthetic tooth) that will match and perfectly fit with your natural teeth. </p>
          <p><strong>7. Final crown</strong> -  Dentist secures the crown in the post.</p>
          <p><strong>8. Follow up</strong> -  You will meet with Dr. Hicks one last time.</p>
          <br />
          <h4 className='sub-header'>For more information on dental implants:</h4>
          <p>
            <a href='http://myoms.org/procedures/dental-implant-surgery'>The American Association of Oral and Maxillofacial Surgeons</a>
          </p>
          <p>
            <a href='http://www.aaid-implant.org/about-dental-implants/what-are-dental-implants/'>The American Academy of Implant Dentistry</a>
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Corrective Jaw Surgery (Orthognathic Surgery)</h3>
          </ExpansionPanelSummary>
          <br/>
          <h4 className='sub-header'>What is Corrective Jaw Surgery? </h4>
          <p>
            Corrective Jaw Surgery is also known as orthognathic surgery.  Orthognathic comes from the Greek words “ortho” which means “straight” and “gnathic” which means “jaws”.  Therefore, orthognathic surgery corrects the misalignment of jaws and teeth (i.e. an overbite, under bite, or open bite). 
          </p>
          <br/>
          <p>
            While orthodontics can straighten teeth, jaw surgery is required to reposition misaligned jaws. Surgery can improve chewing, speaking and breathing. Patients also gain great satisfaction and confidence from improved appearance due to the correct positioning of the facial and jaw bones.
          </p>
          <br />
          <h4 className='sub-header'>Do I need corrective jaw surgery? </h4>
          <p>
            Jaw misalignment can be caused by genetics, birth defects, or injury. In some cases, the upper and lower jawbones grow at different rates causing the teeth and jaws to not line up properly. 
          </p>
          <br/>
          <p>
            If you experience any of the following conditions, you may benefit from corrective jaw surgery:
          </p>
          <ul className='patient-care-list'>
            <li>Difficulty chewing, or biting food</li>
            <li>Difficulty swallowing</li>
            <li>Chronic jaw or jaw joint (TMJ) pain and headache</li>
            <li>Excessive wear of the teeth</li>
            <li>Open bite (space between the upper and lower teeth when the mouth is closed)</li>
            <li>Unbalanced facial appearance from the front, or side</li>
            <li>Facial injury</li>
            <li>Birth defects</li>
            <li>Receding lower jaw and chin</li>
            <li>Protruding jaw</li>
            <li>Inability to make the lips meet without straining</li>
            <li>Chronic mouth breathing</li>
            <li>Sleep apnea (breathing problems when sleeping, including snoring)</li>
          </ul>
          <br/>
          <p>
            Dr. Hicks will work with you to determine whether you are a candidate for corrective jaw surgery.
          </p>
          <br />
          <p>
            At our office we can perform a full range of orthognathic procedures including:
          </p>
          <ul className='patient-care-list'>   
            <li>Single and Double Jaw Surgery to correct undergrowth or overgrowths</li>
            <li>Closure of Anterior Open Bites</li>
            <li>Surgical expansion or narrowing of jaw abnormalities</li>
            <li>Correction of Facial Asymmetries</li>
            <li>Cosmetic and Functional Chin Enhancements</li>
          </ul>
          <br />
          <p>
            For more information on Corrective Jaw Surgery, visit <a href='http://myoms.org/procedures/corrective-jaw-surgery'>myoms.org</a> to watch a short video.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Tooth Extraction</h3>
          </ExpansionPanelSummary>
          <p>
            One of the most common procedures performed at our office is tooth extraction, or removal. Most often patients need teeth removed for these reasons:
          </p>
          <ul className='patient-care-list'>
            <li>Removal of diseased teeth</li>
            <li>Surgical extraction of impacted wisdom teeth (make this a link to the wisdom teeth page)</li>
            <li>Exposure of impacted canine teeth for orthodontic therapy</li>
            <li>Preparing jaws for dentures</li>
          </ul>
        </ExpansionPanel>



    </section>
  )
}

export default Procedures
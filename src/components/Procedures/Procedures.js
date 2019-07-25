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
    </section>
  )
}

export default Procedures
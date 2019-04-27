  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  // import ExpansionPanel from '@material-ui/core/ExpansionPanel';
  // import ExpansionPanelSummary from '@material-ui/core/CardHeader';
  import CardContent from '@material-ui/core/CardContent';
  // // import Collapse from '@material-ui/core/Collapse';
  import ExpansionPanel from '@material-ui/core/ExpansionPanel';
  import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
  import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  
  const Patients = () => {
  
    return (
      <section className='patient-care-section'>
        <h1 className='patient-care-header'>Patient Care Information</h1>
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Preparing for Intravenous Anesthesia</h3>
          </ExpansionPanelSummary>
          <p>
            Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
            with an empty stomach and an escort. This is essential for your safety and welfare. 
            Please carefully read and follow these directions:No solid foods for 6 hours prior to 
            your scheduled appointment. Solid foods include milk products of any kind and non-clear 
            juices like orange or pineapple
          </p>
          <br/>
          <p>
            Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
          </p>
          <br/>
          <p>
            Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia
          </p>
          <br/>
          <p>
            Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks
          </p>
          <br/>
          <p>
            <span className='sub-header'>Parent / Guardian: </span>
            Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
          </p>
          <br/>
          <p>
            Escorts are required for all patients who will be receiving intravenous anesthesia. Dr. Hicks expects them to remain in the office to receive directions in caring for the patient they are to be assisting postoperatively.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Diabetic Patients: </span>
            If you are planning on having your anesthesia and surgery on the same day as your consultation, please call Dr. Hicks for directions prior to your scheduled appointment to modify your diabetic medicine regiment.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Blood Thinners: </span>
            Patients taking Coumadin, Warfarin, or Plavix (or a generic brand) must notify Dr. Hicks at least one week prior to your appointment for directions and laboratory studies that may be needed prior to your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Clothing: </span>
            Please wear comfortable, loose fitting clothing the day of your anesthesia and surgery. Short sleeves are helpful.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Illness: </span>
            If you develop an illness such as the flu, a cold, or have a cough or runny nose please call to reschedule your appointment
          </p>
          <br/>
          <p>
            <span className='sub-header'>Post-Anesthesia: </span>
            Patients who have been given IV anesthesia medications should not operate any vehicle or machinery, or make any business decisions for 24 hours.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Optimal Healing After Tooth Extractions</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Keep foods away from the surgical site. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Do not use a straw. Avoid eating hot foods while your mouth is still numb to avoid burns.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Bleeding: </span>
            A gauze bandage will have been placed by the surgery team. Leave this in place for about 10 minutes and then remove and discard. It is expected that a wound in the mouth will ooze small amounts of blood for 12-24 hours which will make your saliva tinged red in color. Gauze should not be replaced unless you experience active bleeding which will be evident by blood clots forming in your mouth. If this should occur, rinse your mouth gently with ice water and then place new gauze, moistened with water, over the area of bleeding and apply continuous pressure by biting for 10 minutes.Keep your fingers and tongue away from the area where the teeth were removed.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain is controlled best when you take your pain medicines prior to the local anesthesia wearing off. It is wise to always eat some food prior to taking narcotic pain medicines. Take your medicine as prescribed the first day- every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol,(acetaminophen) as it is already mixed with your narcotic pain medication. If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Swelling: </span>
            Keep your head elevated when laying down or sleeping (Head above Heart). This will help minimize your swelling from the surgery. Swelling will be proportionate to your surgery, i.e.; bigger surgery=bigger swelling. It will be at its greatest on the 3rd and 4th day after surgery.
          </p>
          <br/>
          <p>
            Keep your head elevated when laying down or sleeping (Head above Heart). This will help minimize your swelling from the surgery. Swelling will be proportionate to your surgery, i.e.; bigger surgery=bigger swelling. It will be at its greatest on the 3rd and 4th day after surgery.
          </p>
          <br/>
          <p>
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Post-Anesthesia: </span>
            Patients who have been given IV anesthesia medications should not operate any vehicle or machinery, or make any business decisions for 24 hours.
          </p>
        </ExpansionPanel>
        
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Healing After Implant Placement</h3>
          </ExpansionPanelSummary>
          <p>
            Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
            with an empty stomach and an escort. This is essential for your safety and welfare. 
            Please carefully read and follow these directions:No solid foods for 6 hours prior to 
            your scheduled appointment. Solid foods include milk products of any kind and non-clear 
            juices like orange or pineapple
          </p>
          <br/>
          <p>
            Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
          </p>
          <br/>
          <p>
            Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia
          </p>
          <br/>
          <p>
            Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks
          </p>
          <br/>
          <p>
            <span className='sub-header'>Parent / Guardian: </span>
            Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
          </p>
          <br/>
          <p>
            Escorts are required for all patients who will be receiving intravenous anesthesia. Dr. Hicks expects them to remain in the office to receive directions in caring for the patient they are to be assisting postoperatively.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Diabetic Patients: </span>
            If you are planning on having your anesthesia and surgery on the same day as your consultation, please call Dr. Hicks for directions prior to your scheduled appointment to modify your diabetic medicine regiment.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Blood Thinners: </span>
            Patients taking Coumadin, Warfarin, or Plavix (or a generic brand) must notify Dr. Hicks at least one week prior to your appointment for directions and laboratory studies that may be needed prior to your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Clothing: </span>
            Please wear comfortable, loose fitting clothing the day of your anesthesia and surgery. Short sleeves are helpful.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Illness: </span>
            If you develop an illness such as the flu, a cold, or have a cough or runny nose please call to reschedule your appointment
          </p>
          <br/>
          <p>
            <span className='sub-header'>Post-Anesthesia: </span>
            Patients who have been given IV anesthesia medications should not operate any vehicle or machinery, or make any business decisions for 24 hours.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Escort Instructions for Patients Post-Anesthesia Care</h3>
          </ExpansionPanelSummary>
          <p>
            The effects of Intravenous Anesthesia can persist up to twelve hours after a patient is discharged from the office. Observation and assistance from the patient’s escort/ caregiver is essential for their full recovery and a speedy return to normal activities. Your assistance with the following is appreciated:
          </p>
          <br/>
          <ul className='anesthesia-care'>
            <li>
              Assist the Patient with a Steady Hand: The patient’s balance and reaction time will be impaired. The risk of falling is increased. You will need to provide direct assistance by holding the patient’s arm as you move them from your vehicle to their home. This is especially important on stairs or uneven surfaces.
            </li>
            <br/>
            <li>
              Keep the patient under observation for at least three hours after anesthesia and surgery.
            </li>
            <br/>
            <li>
              Assist the patient in following the post-operative directions for medication use, dietary intake, and head elevation when resting.
            </li>
            <br/>
            <li>
              Remind the patient not to drive, operate machinery, or make any business decisions for 24 hours.
            </li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Healing After Sinus Surgery</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Keep foods away from the surgical site. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery. Do not use a straw and avoid hot foods while still numb from the anesthesia.
          </p>
          <br/>
          <span className='sub-header'>Cautions: </span>
          <ul className='anesthesia-care'>
            <li>
              Do not blow your nose for 2-3 weeks
            </li>
            <br/>
            <li>
              Do not try to suppress a sneeze. If you feel a sneeze coming on, open your mouth and let it go.
            </li>
            <br/>
            <li>
              Do not use a straw, the sucking action can open the surgical site.
            </li>
            <br/>
            <li>
              Do not rinse your mouth vigorously for the next two weeks.
            </li>
            <br/>
            <li>
              Never use Hydrogen Peroxide as an oral rinse.
            </li>
            <br/>
            <li>
              Smoking will decrease your healing ability.
            </li>
          </ul>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. Patients should eat prior to the taking this medicine. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely, but lessens it to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the package directions on the Ibuprofen label. Do not take more than the label directions recommend. Do not take any extra Tylenol; it is already mixed with your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more medication than directed.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Medication: </span>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Healing After Implant Placement</h3>
          </ExpansionPanelSummary>
          <p>
            Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
            with an empty stomach and an escort. This is essential for your safety and welfare. 
            Please carefully read and follow these directions:No solid foods for 6 hours prior to 
            your scheduled appointment. Solid foods include milk products of any kind and non-clear 
            juices like orange or pineapple
          </p>
          <br/>
          <p>
            Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
          </p>
          <br/>
          <p>
            Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia
          </p>
          <br/>
          <p>
            Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks
          </p>
          <br/>
          <p>
            <span className='sub-header'>Parent / Guardian: </span>
            Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
          </p>
          <br/>
          <p>
            Escorts are required for all patients who will be receiving intravenous anesthesia. Dr. Hicks expects them to remain in the office to receive directions in caring for the patient they are to be assisting postoperatively.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Diabetic Patients: </span>
            If you are planning on having your anesthesia and surgery on the same day as your consultation, please call Dr. Hicks for directions prior to your scheduled appointment to modify your diabetic medicine regiment.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Blood Thinners: </span>
            Patients taking Coumadin, Warfarin, or Plavix (or a generic brand) must notify Dr. Hicks at least one week prior to your appointment for directions and laboratory studies that may be needed prior to your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Clothing: </span>
            Please wear comfortable, loose fitting clothing the day of your anesthesia and surgery. Short sleeves are helpful.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Illness: </span>
            If you develop an illness such as the flu, a cold, or have a cough or runny nose please call to reschedule your appointment
          </p>
          <br/>
          <p>
            <span className='sub-header'>Post-Anesthesia: </span>
            Patients who have been given IV anesthesia medications should not operate any vehicle or machinery, or make any business decisions for 24 hours.
          </p>
        </ExpansionPanel>

      </section>
    );
  }
  
  Patients.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default Patients
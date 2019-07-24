  import React from 'react';
  import ExpansionPanel from '@material-ui/core/ExpansionPanel';
  import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import tetons from '../../assets/tetons.jpg'
  
  const Patients = () => {
  
    return (
      <section className='patient-care-section'>
        <img src={tetons} alt='Tetons' className='tetons' />
        <h1 className='patient-care-header'>Patient Care Information</h1>
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Before Intravenous Anesthesia</h3>
          </ExpansionPanelSummary>
          <p>
            Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
            with an empty stomach and an escort. This is essential for your safety. 
            Please carefully read and follow these directions:
          </p>
          <br/>
          <h4 className='sub-header'>The Week Before:</h4>
          <p>
            Get lots of sleep and eat healthy foods.
          </p>
          <br/>
          <p>
            Read all directions carefully and call the office with any questions (escort should do the same)
          </p>
          <br/>
          <p>
            If you have any cold or flu like symptoms notify the office as soon as possible. The surgery will need to be rescheduled for your safety.
          </p>
          <br/>
          <h4 className='sub-header'>Dietary Restrictions:</h4>
          <p>
            Continue taking any daily medications, as prescribed, at your regularly scheduled time with a small sip of water
            (If you are on diabetic medications, please contact the office for individual directions).
          </p>
          <br/>
          <h4 className='sub-header'>Six hours before surgery: </h4>
          <p>
            Do not take any herbal supplements or vitamins
          </p>
          <br/>
          <p>
            Do not eat any solid foods or milk products
          </p>
          <br/>
          <p>
            You may drink a small amound of clear liquid (no more than 4-6 oz total) up to 2 hours before your surgery. Clear liquids include:
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>
              Water
            </li>
            <li>
              Clear fruit juices (apple, grape, cranberry)
            </li>
            <li>
              Coffee or tea without creamer
            </li>
            <li>
              Clear soda
            </li>
          </ul>
          <br/>
          <p>
            Milk is NOT a clear liquid. Do not have any milk products 6 hours before surgery
          </p>
          <br/>
          <h4 className='sub-header'>Two hours before surgery: </h4>
          <ul className='patient-care-list'>
            <li>DO NOT drink any liquids</li>
            <li>DO NOT eat any foods</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Blood Thinners: </h4>
          <p>
            Patients taking Coumadin, Warfarin, or Plavix (or a generic brand) must notify Dr. Hicks at least one week prior to your appointment for directions and laboratory studies that may be needed prior to your surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Clothing: </h4>
          <p>
            Please wear comfortable, loose fitting clothing the day of your anesthesia and surgery. Short sleeves are helpful.
          </p>
          <br/>
          <h4 className='sub-header'>For 24 hours after IV anesthesia, or while taking prescription narcotic pain medicine, DO NOT: </h4>
          <ul className='patient-care-list'>
            <li>Drive a car</li>
            <li>Operate machinery</li>
            <li>Make business decisions</li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Escort Instructions for Patients Post-Anesthesia Care</h3>
          </ExpansionPanelSummary>
            <p>
              Observation and assistance from an escort is essential for the patient’s full recovery and speedy return to normal activities. The effects of Anesthesia can persist up to 12 hours after a patient is discharged from the office.
            </p>
            <br/>
          <ul className='patient-care-list'>
            <li>
              Assist the patient with a steady hand: The patient’s balance and reaction time will be impaired. Hold the patient by the arm as you move them from your vehicle to their home. This is especially important on stairs or uneven surfaces.
              Keep the patient under observation for at least 3 hours
            </li>
            <li>
              Keep the patient under observation for at least three hours after anesthesia and surgery.
            </li>
            <li>
              Assist the patient in following the post-operative directions for medication use, dietary intake, and head elevation when resting.
            </li>
            <li>
              Remind the patient not to drive, operate machinery, or make any business decisions for 24 hours.
            </li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Tooth Extractions</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
            <h4 className='sub-header'>Bleeding: </h4>
          <p>
            A gauze bandage will have been placed by the surgery team. Leave this in place for about 10 minutes and then remove and discard. It is expected that a wound in the mouth will ooze small amounts of blood for 12-24 hours which will make your saliva tinged red in color. Gauze should not be replaced unless you experience active bleeding which will be evident by blood clots forming in your mouth. If this should occur, rinse your mouth gently with ice water and then place new gauze, moistened with water, over the area of bleeding and apply continuous pressure by biting for 10 minutes. Keep your fingers and tongue away from the area where the teeth were removed.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
          Swelling will be proportionate to your surgery. The more extensive your surgery, the more swelling you will experience. Swelling will be at its greatest 3 to 4 days after surgery.
          </p>
          <br/>
          <p>
            To minimize swelling: Keep your head elevated while lying down or sleeping (head above heart).  
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <h4 className='sub-header'>Cleaning Your Mouth: </h4>
          <ul className='patient-care-list'>
            <li>Begin oral hygiene the day after surgery.</li>
            <li>Do NOT brush the surgical site. Only brush the teeth next to it.</li>
            <li>If surgical site is next to teeth, gently brush teeth with a soft bristled brush. </li>
            <li>For the first week, do NOT use ultrasonic or powered brushes.</li>
            <li>For ten days, do NOT use mouthwash that contains high amounts of alcohol.</li>
            <li>Do NOT use hydrogen peroxide as a mouth rinse.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Antibiotic Mouth Rinse: </h4>
          <p>
            If you are prescribed Chlorhexidine Gluconate, commonly called Peridex, you should begin using it the morning after surgery following gently cleaning your teeth. Very gently rinse it around your mouth and spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
        </ExpansionPanel>
        
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Direction for Optimal Healing after Implant Placement</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
          Swelling will be proportionate to your surgery. The more extensive your surgery, the more swelling you will experience. Swelling will be at its greatest 3 to 4 days after surgery.
          </p>
          <br/>
          <p>
            To minimize swelling: Keep your head elevated while lying down or sleeping (head above heart).  
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <h4 className='sub-header'>Antibiotic Mouth Rinse: </h4>
          <p>
            If you are prescribed Chlorhexidine Gluconate, commonly called Peridex, you should begin using it the morning after surgery following gently cleaning your teeth. Very gently rinse it around your mouth and spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Sinus Surgery</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Cautions: </h4>
          <ul className='patient-care-list'>
            <li>
              Do NOT blow your nose for 2-3 weeks
            </li>
            <li>
              Do NOT try to suppress a sneeze. If you feel a sneeze coming on, open your mouth and let it go.
            </li>
            <li>
              Do NOT use a straw, the sucking action can open the surgical site.
            </li>
            <li>
              Do NOT rinse your mouth vigorously for the next two weeks.
            </li>
            <li>
              Never use Hydrogen Peroxide as an oral rinse.
            </li>
            <li>
              Smoking will decrease your healing ability.
            </li>
            <li>
              Do NOT use mouthwashes like Listerine or Scope.
            </li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Antibiotics: </h4>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Oral Biopsy</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
            <h4 className='sub-header'>Bleeding: </h4>
          <p>
            A gauze bandage will have been placed by the surgery team. Leave this in place for about 10 minutes and then remove and discard. It is expected that a wound in the mouth will ooze small amounts of blood for 12-24 hours which will make your saliva tinged red in color. Gauze should not be replaced unless you experience active bleeding which will be evident by blood clots forming in your mouth. If this should occur, rinse your mouth gently with ice water and then place new gauze, moistened with water, over the area of bleeding and apply continuous pressure by biting for 10 minutes. Keep your fingers and tongue away from the area where the teeth were removed.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Cleaning Your Mouth: </h4>
          <ul className='patient-care-list'>
            <li>Begin oral hygiene the day after surgery.</li>
            <li>Do NOT brush the surgical site. Only brush the teeth next to it.</li>
            <li>If surgical site is next to teeth, gently brush teeth with a soft bristled brush. </li>
            <li>For the first week, do NOT use ultrasonic or powered brushes.</li>
            <li>For ten days, do NOT use mouthwash that contains high amounts of alcohol.</li>
            <li>Do NOT use hydrogen peroxide as a mouth rinse.</li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Face/Skin Biopsy</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
            <h4 className='sub-header'>Bleeding: </h4>
          <p>
            A gauze bandage will have been placed by the surgery team. Leave this in place for about 10 minutes and then remove and discard. It is expected that a wound in the mouth will ooze small amounts of blood for 12-24 hours which will make your saliva tinged red in color. Gauze should not be replaced unless you experience active bleeding which will be evident by blood clots forming in your mouth. If this should occur, rinse your mouth gently with ice water and then place new gauze, moistened with water, over the area of bleeding and apply continuous pressure by biting for 10 minutes. Keep your fingers and tongue away from the area where the teeth were removed.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Skin Care and Hygiene: </h4>
          <p>
            Keep the surgical area dry and clean for the first 3-4 days. If white bandaging strips were applied (Steri-Strips) keep these dry for 3-4 days. They will help take the tension from the incision site. If they come off before this, begin cleaning the area as described below.
          </p>
          <br/>
          <p>
            If no bandages were used, take a Q-tip and dip it in Hydrogen Peroxide and clean the incision line, starting the night of surgery. Remove any dried blood and then, using a clean O-tip, cover the area with a thin layer ofantibiotic ointment. This should be done every morning and evening for 5-6 days then discontinue this practice. You may have quick showers and gently clean with a wash cloth and mild soap after 3-4 days. Quickly dry off afterward, do not let the water cover the incision for long periods of time for the first 10 days.
          </p>
          <br/>
          <p>
            Avoid placing makeup on the surgical site for two weeks.
          </p>
          <br/>
          <p>
            If you are going out in the sun, protect the surgical site with a hat for shade. Sunscreen should only be used after 10 days from your surgery and should be used for the next six months when going out in the sun to minimize scarring.
          </p>
          <br/>
          <h4 className='sub-header'>Suture Removal: </h4>
          <p>
            If skin surface sutures have been placed, they will need to be removed 5-6 days after the biopsy.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Jaw or Facial Fractures</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>If your jaw is wired together: </h4>            
          <ul className='patient-care-list'>
            <li>You will be on a liquid diet. </li>
            <li>You will need 4-6 meals per day to meet your nutritional requirements.</li>
            <li>Liquid supplements, like Ensure, are an extra help.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>If your jaw is NOT wired together: </h4>            
          <ul className='patient-care-list'>
            <li>You will eat a soft diet for 4 weeks. </li>
            <li>Scrambled eggs and pasta type foods are the firmest foods you should eat.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
            Swelling will be proportionate to your surgery. The more extensive your surgery, the more swelling you will experience. Swelling will be at its greatest 3 to 4 days after surgery.
          </p>
          <br/>
          <p>
            To minimize swelling: Keep your head elevated while lying down or sleeping (head above heart).  
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <h4 className='sub-header'>Oral and Facial Hygiene: </h4>
          <p>
            Oral hygiene is essential to help avoid infections. 
          </p>
          <ul className='patient-care-list'>
            <li>If your teeth are wired together you can only clean the outside of your teeth. </li>
            <li>Brushing twice per day is essential and should include teeth and wires around the teeth too. </li>
            <li>Water rinses can be used after each meal. </li>
            <li>Use your antibiotic mouth wash twice per day after brushing. </li>
            <li>Do NOT use ultrasonic or powered brushes for two weeks.</li>
          </ul>
          <br/>
          <p>
            If you have facial lacerations or skin incisions:
          </p>
          <ul className='patient-care-list'>
            <li>Clean them twice daily with a Q-tip dipped in Hydrogen Peroxide. </li>
            <li>Do this to remove any clotted or dried blood. </li>
            <li>Then cover the wound with a thin layer of antibiotic ointment. </li>
            <li>Do this for only one week, then discontinue the cleaning practice.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Activity: </h4>
          <p>
            You must be cautious to avoid further injury to your jaws and face. Bumps from others may cause movement of your fractured bones and then require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. 
          </p>
          <br/>
          <p>
            If you desire to exercise: 
          </p>
          <ul className='patient-care-list'>
            <li>You may use a stationary bike after one week.</li>
            <li>You may run or jog after three weeks. </li>
            <li>No contact sports should be played for three months.</li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Orthognathic Surgery</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            You will be eating a <span className='bold'>non-chew</span> diet. No chewing is essential for 4-6 weeks.
          </p>
          <br/>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>If your jaw is wired together: </h4>            
          <ul className='patient-care-list'>
            <li>You will be on a liquid diet. </li>
            <li>You will need 4-6 meals per day to meet your nutritional requirements.</li>
            <li>Liquid supplements, like Ensure, are an extra help.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Bleeding: </h4>
          <p>
            Blood will ooze from the oral incision for one to two days following surgery. Some bleeding may also come from the nose if upper jaw surgery was performed. Use your nasal spray (Afrin) for nose bleeding. A gauze dressing may be helpful under the nose as well. After several days, some teas colored fluid will drain from the sinuses and come out the nose. 
          </p>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
            Swelling is a natural process after major surgery and will be proportionate to your surgery. The more extensive your surgery, the more swelling you will experience. Swelling will be at its greatest 3 to 4 days after surgery.
          </p>
          <br/>
          <p>
            To minimize swelling, keep your head elevated while lying down or sleeping (head above heart). Ice packs or heat packs may be used as desired.
          </p>
          <br/>
          <h4 className='sub-header'>Hygiene: </h4>
          <ul className='patient-care-list'>
            <li>Clean your teeth braces and stent carefully and thoroughly twice daily. </li>
            <li>Rinse your mouth with warm water after each meal. </li>
            <li>Use your antibiotic mouth wash (Peridex) twice daily after brushing.</li>
            <li>Do NOT use hydrogen peroxide or pressure water cleaning instruments.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
          <h4 className='sub-header'>Activity: </h4>
          <p>
            You must be cautious to avoid further injury to your jaws and face. Bumps from others may cause movement of your fractured bones and then require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. 
          </p>
          <br/>
          <p>
            If you desire to exercise: 
          </p>
          <ul className='patient-care-list'>
            <li>You may use a stationary bike after one week.</li>
            <li>You may run or jog after three weeks. </li>
            <li>No contact sports should be played for three months.</li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Jaw Joint Arthrocentisis</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
          Swelling will be proportionate to your surgery. The more extensive your surgery, the more swelling you will experience. Swelling will be at its greatest 3 to 4 days after surgery.
          </p>
          <br/>
          <p>
            To minimize swelling: Keep your head elevated while lying down or sleeping (head above heart).  
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <h4 className='sub-header'>Eye Precautions: </h4>
          <p>
            The local anesthesia which is given for pain control during the procedure may temporarily affect the nerve that closes the eyelid. If this happens use over the counter eye drops to keep the eye moist. This will usually resolve within 2-3 hours.
          </p>
          <br/>
          <h4 className='sub-header'>Jaw Exercises: </h4>
          <p>
            Three times per day hold your tongue up and back to the roof of your mouth. Keep it there and then open and close your mouth ten times. This will help with motion and muscle strengthening. Do not do more than this. No side to side motion please.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Bone or Soft Tissue Grafting</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods is essential for healing to begin and progress normally. 
          </p>
          <ul className='patient-care-list'>
            <li>Soft foods are best because they won’t injure the surgical site. </li>
            <li>Keep food away from the surgical site by chewing on the opposite side of your mouth as the surgical site. </li>
            <li>High calorie and high protein foods are ideal for the first few days. </li>
            <li>Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery.</li>
            <li>Do NOT use a straw</li>
            <li>Avoid hot foods while still numb from the anesthesia to avoid burns.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            It is important to understand that no pain medicine removes your pain sensation completely. The goal is to lessen your pain to a tolerable level.  You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. If you cannot obtain adequate pain control, please call us.
          </p>
          <br/>
          <ul className='patient-care-list'>
            <li>Use your pain medicines prior to the local anesthesia wearing off </li>
            <li>Eat some food prior to taking your pain medicine</li>
            <li>On the first day take your pain medicine every 4-6 hours</li>
            <li>Do NOT take extra Tylenol. It is already mixed in with your narcotic pain medication</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Cleaning Your Mouth: </h4>
          <ul className='patient-care-list'>
            <li>Begin oral hygiene the day after surgery.</li>
            <li>Do NOT brush the surgical site. Only brush the teeth next to it.</li>
            <li>If surgical site is next to teeth, gently brush teeth with a soft bristled brush. </li>
            <li>For the first week, do NOT use ultrasonic or powered brushes.</li>
            <li>For ten days, do NOT use mouthwash that contains high amounts of alcohol.</li>
            <li>Do NOT use hydrogen peroxide as a mouth rinse.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Antibiotic Mouth Rinse: </h4>
          <p>
            If you are prescribed Chlorohexidine Gluconate (commonly called Peridex), you should: 
          </p>
          <ul className='patient-care-list'>
            <li>Begin using it the morning after surgery after gently cleaning your teeth. </li>
            <li>Very gently rinse it around your mouth and spit it out carefully. </li>
            <li>Do this each morning and at bedtime for 7 to 10 days. </li>
            <li>Never rinse your mouth with hydrogen peroxide.</li>
          </ul>
          <br/>
          <h4 className='sub-header'>Cautions: </h4>
          <ul className='patient-care-list'>
            <li>
              Do NOT blow your nose for 2-3 weeks
            </li>
            <li>
              Do NOT try to suppress a sneeze. If you feel a sneeze coming on, open your mouth and let it go.
            </li>
            <li>
              Do NOT use a straw, the sucking action can open the surgical site.
            </li>
            <li>
              Do NOT rinse your mouth vigorously for the next two weeks.
            </li>
            <li>
              Never use Hydrogen Peroxide as an oral rinse.
            </li>
            <li>
              Smoking will decrease your healing ability.
            </li>
            <li>
              Do NOT use mouthwashes like Listerine or Scope.
            </li>
          </ul>
        </ExpansionPanel>
      </section>
    );
  }
  
  export default Patients
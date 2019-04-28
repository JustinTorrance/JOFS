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
            <h3 className='card-header'>Preparing for Intravenous Anesthesia</h3>
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
            <h3 className='card-header'>Directions for Optimal Healing After Tooth Extractions</h3>
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
          <p>
            Oral hygiene may begin the morning after your surgery. Gently clean your teeth with a soft bristled toothbrush and toothpaste. Do not brush the surgical site, only the teeth next to it. You should be very gentle but thorough on the teeth next to the surgical site. Avoid ultrasonic or power brushes for the first week after surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Antibiotic Mouth Rinse: </h4>
          <p>
            If you are prescribed Chlorhexidine Gluconate, commonly called Peridex, you should begin using it the morning after surgery following gently cleaning your teeth. Very gently rinse it around your mouth and spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
        </ExpansionPanel>
        
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Direction for Optimal Healing After Implant Placement</h3>
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
            <h3 className='card-header'>Directions for Optimal Healing After Sinus Surgery</h3>
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
              Do not blow your nose for 2-3 weeks
            </li>
            <li>
              Do not try to suppress a sneeze. If you feel a sneeze coming on, open your mouth and let it go.
            </li>
            <li>
              Do not use a straw, the sucking action can open the surgical site.
            </li>
            <li>
              Do not rinse your mouth vigorously for the next two weeks.
            </li>
            <li>
              Never use Hydrogen Peroxide as an oral rinse.
            </li>
            <li>
              Smoking will decrease your healing ability.
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
            <h3 className='card-header'>Directions for Optimal Healing after Oral Biopsy</h3>
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
            <li>If surgical site is next to teeth, gently brush teeth with a soft bristled brush. </li>
            <li>For the first week, do NOT use ultrasonic or powered brushes.</li>
            <li>For ten days, do NOT use mouthwash that contains high amounts of alcohol.</li>
            <li>Do NOT use hydrogen peroxide as a mouth rinse.</li>
          </ul>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Optimal Healing after Face/Skin Biopsy</h3>
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
            <h3 className='card-header'>Directions for Optimal Healing After Jaw or Facial Fractures</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Avoid hot foods while still numb from the anesthesia. You may be on a liquid diet because your jaws are wired together. If so, you will need 4 -6 meals per day to meet your nutritional requirements. Liquid supplements like Ensure are an extra help. If your jaws are not wired together you should eat a soft diet, nothing firmer than scrambled eggs or pasta typefoods for the next four weeks.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol; it is already mixed with your narcotic pain medication. If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol, it is already mixed with your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more pain medication than directed.
          </p>
          <br/>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
          <h4 className='sub-header'>Oral and Facial Hygiene: </h4>
          <p>
            Oral hygiene is essential to help avoid infections. If your teeth are wired together you can only clean the outside of your teeth. Brushing twice per day is essential and should include teeth and wires around the teeth too. Water rinses can be used after each meal. Use your antibiotic mouth wash twice per day after brushing. Do not use ultrasonic or powered brushes for two weeks.
          </p>
          <br/>
          <p>
            If you have facial lacerations or skin incisions they should be cleaned twice daily with a Q-tip dipped in Hydrogen Peroxide. Do this to remove any clotted or dried blood. Then cover the wound with a thin layer of antibiotic ointment. This cleaning practice should be done for the first week and then discontinue it. Thoseplaced on the skin will need to be removed 5-6 days after your surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
            Keep your head elevated while laying down or sleeping (Head above Heart). This will help minimize your swelling from the surgery. Swelling will be experienced to the magnitude of your surgery, bigger trauma=bigger surgery=bigger swelling. It will be at its greatest on day 3-4 after surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Activity: </h4>
          <p>
            You must be cautious to avoid further injury to your jaws and face. Bumps from others may cause movement of your fractured bones and then require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. If you desire to exercise, a stationary bike can be used after one week and running or jogging after three weeks. No contact sports should be playedfor three months.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing after Orthognathic Surgery</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Keep food away from the surgical site. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Avoid hot foods while still numb from the anesthesia or surgery.
          </p>
          <br/>
          <p>
            You will be eating a non-chew diet. No chewing is essential for 4-6 weeks.
          </p>
          <br/>
          <p>
            If your jaws are wired together you will be eating a liquid diet and will need 4-6 meals per day to meet your nutrition needs.
          </p>
          <br/>
          <h4 className='sub-header'>Bleeding: </h4>
          <p>
            Blood will ooze from the oral incisions for 1-2 days following surgery. Some bleeding may also come from the nose if upper jaw surgery was performed. Use your nasal spray (Afrin) for nose bleeding. A gauze dressing may be helpful under the nose as well. After several days some tea colored fluid will be draining from the sinuses and come out the nose.
          </p>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
            This is a natural process after major surgery and will be related to the extent of surgery. Keep your head above heart level when sleeping or reclining. Maximal swelling will be on the 3-4 day. Ice packs or heat packs, as you desire, may be used.
          </p>
          <br/>
          <h4 className='sub-header'>Hygiene: </h4>
          <p>
            Oral hygiene done well can reduce risk of infection. Clean your teeth, braces and stent carefully and thoroughly twice daily. Rinse your mouth with warm water after each meal. Use your antibiotic mouth wash (Peridex) twice daily after brushing. Never use Hydrogen Peroxide or pressure water cleaning instruments.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            Pain control is best obtained and maintained when you use your pain medicines on a regular basis for the first two or three days. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first few days-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol; it is already mixed with your narcotic pain medication. If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
          <h4 className='sub-header'>Activity: </h4>
          <p>
            You must be cautious to avoid injury to your jaws and face. Bumps from others may cause movement at the surgery site and require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. If you desire to exercise, a stationary bike can be used after one week and running or jogging after three weeks. No contact sports should be played for three months.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing After Jaw Joint Arthrocentisis</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best for the first 4 weeks, nothing harder than pasta consistency. Drink extra amounts of non-carbonated fluids to avoid dehydration, especially the day of your surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. Do not take extra Tylenol, it is already mixed with your narcotic pain medication.Part of your pain control strategy is taking an anti-inflammatory drug. You should continue to take this as prescribed and not stop until directed otherwise.If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <h4 className='sub-header'>Swelling: </h4>
          <p>
            Some swelling will be present after this procedure. It will be localized to the cheek and in front of the ear, directly over the jaw joint. This will resolve readily and application of a heat pack may help speed the resolution of the swelling.
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
            <h3 className='card-header'>Directions for Optimal Healing After Bone or Soft Tissue Grafting</h3>
          </ExpansionPanelSummary>
          <h4 className='sub-header'>Rest and Nutritious Foods: </h4>
          <p>
            Resting and getting nutritious foods are essential for healing to begin and progressing normally. Soft foods are best to avoid injury to the surgical site. Keep food away from the surgical site. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Do not use a straw. Avoid hot foods while still numb from the anesthesia.
          </p>
          <br/>
          <h4 className='sub-header'>Pain Control: </h4>
          <p>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely, but it should lessen it so it is tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol (acetaminophen), it is already a part of your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more pain medication than directed.
          </p>
          <br/>
          <h4 className='sub-header'>Cleaning Your Mouth: </h4>
          <p>
            Oral hygiene may begin the morning after your surgery. Gently clean your teeth with a soft bristled tooth brush and tooth paste. Do not brush the surgical site, only the teeth next to it. You should be very gentle but thorough on the teeth next to the surgical site. Avoid ultrasonic or power brushes for the first week after surgery.
          </p>
          <br/>
          <h4 className='sub-header'>Antibiotic Mouth Rinse: </h4>
          <p>
            If you are prescribed Chlorhexidine Gluconate, (Peridex, PerioRx etc), you should begin using it the morning after surgery. After gently cleaning your teeth, very gently rinse it around your mouth, being sure to cover the surgery site, then spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
          <br/>
          <h4 className='sub-header'>Cautions: </h4>
          <ul className='patient-care-list'>
            <li>
              Keep your finger out of your mouth. There is no need to be touching or feeling the surgical site. Keep your tongue away as well. The tension and pressure from fingers and /or the tongue can disrupt the healing process and may affect the desired outcome.
            </li>
            <br/>
            <li>
              Never rinse your mouth with Hydrogen Peroxide and it is best to avoid mouthwashes (Listerine ,Scope etc). These will damage the healing tissue and may cause increased pain.
            </li>
          </ul>
        </ExpansionPanel>
      </section>
    );
  }
  
  export default Patients
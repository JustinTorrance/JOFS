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
            with an empty stomach and an escort. This is essential for your safety and welfare. 
            Please carefully read and follow these directions:
          </p>
          <br/>
          <p>
            No solid foods for 6 hours prior to 
            your scheduled appointment. Solid foods include milk products of any kind and non-clear 
            juices like orange or pineapple.
          </p>
          <br/>
          <p>
            Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
          </p>
          <br/>
          <p>
            Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia.
          </p>
          <br/>
          <p>
            Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks.
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
            If you develop an illness such as the flu, a cold, or have a cough or runny nose please call to reschedule your appointment.
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
            Sutures, if used, will usually dissolve after 7-10 days.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Cleaning Your Mouth: </span>
            Oral hygiene may begin the morning after your surgery. Gently clean your teeth with a soft bristled toothbrush and toothpaste. Do not brush the surgical site, only the teeth next to it. You should be very gentle but thorough on the teeth next to the surgical site. Avoid ultrasonic or power brushes for the first week after surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Antibiotic Mouth Rinse: </span>
            If you are prescribed Chlorhexidine Gluconate, commonly called Peridex, you should begin using it the morning after surgery following gently cleaning your teeth. Very gently rinse it around your mouth and spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
        </ExpansionPanel>
        
        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Direction for Optimal Healing After Implant Placement</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Do not eat hot foods while you are still numb. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control will be most effective when you take your pain medicines prior to the local anesthesia (numbness) wearing off. Eat some food prior to taking your medicine to avoid nausea. Take your medicine every four to six hours, as prescribed, the first day. Pain medicine will not remove your pain sensation completely but will lessen it so it is tolerable. Ibuprofen may be added as a second pain medicine. Follow the Ibuprofen label directions. Do not take additional Tylenol, it is already included in your narcotic pain medication. If adequate pain control is not obtained please call us.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Cleaning Your Mouth: </span>
            Oral hygiene should begin the morning after your surgery. You or your escort will be given instructions to care for your implant based on the surgical technique used to place your implants. Neverrinse your mouth with hydrogen peroxide, OTC mouthwash like Listerine or Scope or salt water rinses. These can hurt the healing tissue and may cause increased pain. Follow the care plan marked for you below:
          </p>
          <br/>
          <p>
            <span className='sub-header'>1. Punch Technique: </span>
            Start brushing the implant and gently massaging tissue around the implant beginning the morning after surgery. Do this by dipping the post-operative brush you have been provided into a small amount of the prescription mouth rinse and brushing the area thoroughly. Your remaining teeth can be brushed normally using a manual toothbrush. Avoid ultrasonic or power toothbrushes during the first three weeks.
          </p>
          <br/>
          <p>
            <span className='sub-header'>2. Open Technique: </span>
            (You have stitches). 
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
            <h3 className='card-header'>Directions for Optimal Healing after Oral Biopsy</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Keep food away from the surgicalsite. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery. Do not use a straw and avoid hot foods while still numb from the anesthesia.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Bleeding: </span>
            The majority of surgical sites for biopsy will be closed with dissolvable sutures. This diminishes the potential for bleeding. However, oozing of blood from the site will occur for 12-24 hours, which will cause your saliva to be tinged red. It is best to keep your fingers and tongue away from this site to avoid further bleeding or disrupting the healing.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol, it is already mixed with your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more pain medication than directed.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Clean Your Mouth: </span>
            Oral hygiene may begin the morning after your surgery. If the surgical site is next to the teeth, gently brush them with a soft bristled brush. Avoid ultrasonic or powered brushes for one week. Avoid mouthwash that contains high amounts of alcohol for 10 days (Listerine or Scope). Never use Hydrogen Peroxide as a mouth rinse.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Optimal Healing after Face/Skin Biopsy</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best to avoid injury to the surgical site. Keep food away from the surgicalsite. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of surgery. Do not use a straw and avoid hot foods while still numb from the anesthesia.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Bleeding: </span>
            The majority of skin biopsy sites will be closed with sutures. Some sutures will be under the skin and some on the surface. These will help control any bleeding. A small amount of ooze can come out of the incision line and will dry and clot. If bleeding persists apply gentle pressure over the site with a bandage andcall the office. Keep your fingers away from the site, especially the fingernail.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first day, every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so it will be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the ibuprofen (Advil, Motrin) label directions. Do not take extra Tylenol (acetaminophen), it is already in your narcotic pain medication. If adequate pain control is not obtained, please call us. Do not take more medication than directed.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Skin Care and Hygiene: </span>
            Keep the surgical area dry and clean for the first 3-4 days. If white bandaging strips were applied (Steri-Strips) keep these dry for 3-4 days. They will help take the tension from the incision site. If they come off before this, begin cleaning the area as described below.
          </p>
          <br/>
          <p>
            If no bandages were used, take a Q-tip and dip it in Hydrogen Peroxide and clean the incision line, starting the night of surgery. Remove any dried blood and then, using a clean O-tip, cover the area with a thin layer ofantibiotic ointment. This should be done every morning and evening for 5-6 days then discontinue this practice. You may have quick showers and gently clean with a wash cloth and mild soap after 3-4 days. Quickly dry off afterward, do not let the water cover the incision for long periods of time for the first 10 days.
          </p>
          <br/>
          <p>
            Avoid placing makeup on the surgical site for 2 weeks.
          </p>
          <br/>
          <p>
            If you are going out in the sun, protect the surgical site with a hat for shade. Sunscreen should only be used after 10 days from your surgery and should be used for the next six months when going out in the sun to minimize scarring.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Suture Removal: </span>
            If skin surface sutures have been placed an appointment will need to be made to remove them 5 to 6 days post-operatively.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing After Jaw or Facial Fractures</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Avoid hot foods while still numb from the anesthesia. You may be on a liquid diet because your jaws are wired together. If so, you will need 4 -6 meals per day to meet your nutritional requirements. Liquid supplements like Ensure are an extra help. If your jaws are not wired together you should eat a soft diet, nothing firmer than scrambled eggs or pasta typefoods for the next four weeks.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol; it is already mixed with your narcotic pain medication. If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol, it is already mixed with your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more pain medication than directed.
          </p>
          <br/>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Oral and Facial Hygiene: </span>
            Oral hygiene is essential to help avoid infections. If your teeth are wired together you can only clean the outside of your teeth. Brushing twice per day is essential and should include teeth and wires around the teeth too. Water rinses can be used after each meal. Use your antibiotic mouth wash twice per day after brushing. Do not use ultrasonic or powered brushes for two weeks.
          </p>
          <br/>
          <p>
            If you have facial lacerations or skin incisions they should be cleaned twice daily with a Q-tip dipped in Hydrogen Peroxide. Do this to remove any clotted or dried blood. Then cover the wound with a thin layer of antibiotic ointment. This cleaning practice should be done for the first week and then discontinue it. Thoseplaced on the skin will need to be removed 5-6 days after your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Swelling: </span>
            Keep your head elevated while laying down or sleeping (Head above Heart). This will help minimize your swelling from the surgery. Swelling will be experienced to the magnitude of your surgery, bigger trauma=bigger surgery=bigger swelling. It will be at its greatest on day 3-4 after surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Activity: </span>
            You must be cautious to avoid further injury to your jaws and face. Bumps from others may cause movement of your fractured bones and then require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. If you desire to exercise, a stationary bike can be used after one week and running or jogging after three weeks. No contact sports should be playedfor three months.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing after Orthognathic Surgery</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
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
          <p>
            <span className='sub-header'>Bleeding: </span>
            Blood will ooze from the oral incisions for 1-2 days following surgery. Some bleeding may also come from the nose if upper jaw surgery was performed. Use your nasal spray (Afrin) for nose bleeding. A gauze dressing may be helpful under the nose as well. After several days some tea colored fluid will be draining from the sinuses and come out the nose.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Swelling: </span>
            This is a natural process after major surgery and will be related to the extent of surgery. Keep your head above heart level when sleeping or reclining. Maximal swelling will be on the 3-4 day. Ice packs or heat packs, as you desire, may be used.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Hygiene: </span>
            Oral hygiene done well can reduce risk of infection. Clean your teeth, braces and stent carefully and thoroughly twice daily. Rinse your mouth with warm water after each meal. Use your antibiotic mouth wash (Peridex) twice daily after brushing. Never use Hydrogen Peroxide or pressure water cleaning instruments.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines on a regular basis for the first two or three days. It is wise to eat some food prior to the taking this medicine. Take your medicine on a scheduled basis the first few days-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol; it is already mixed with your narcotic pain medication. If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <p>
            If you are prescribed an antibiotic use it as directed until it is gone.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Activity: </span>
            You must be cautious to avoid injury to your jaws and face. Bumps from others may cause movement at the surgery site and require further surgery. You may return to work after your strength is adequate and you are not taking narcotic pain medicines. If you desire to exercise, a stationary bike can be used after one week and running or jogging after three weeks. No contact sports should be played for three months.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing After Jaw Joint Arthrocentisis</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and eating nutritious foods are essential for healing to begin and progress normally. Soft foods are best for the first 4 weeks, nothing harder than pasta consistency. Drink extra amounts of non-carbonated fluids to avoid dehydration, especially the day of your surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely but lessens it so as to be tolerable. Do not take extra Tylenol, it is already mixed with your narcotic pain medication.Part of your pain control strategy is taking an anti-inflammatory drug. You should continue to take this as prescribed and not stop until directed otherwise.If adequate pain control isn’t obtained please call us.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Swelling: </span>
            Some swelling will be present after this procedure. It will be localized to the cheek and in front of the ear, directly over the jaw joint. This will resolve readily and application of a heat pack may help speed the resolution of the swelling.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Eye Precautions: </span>
            The local anesthesia which is given for pain control during the procedure may temporarily affect the nerve that closes the eyelid. If this happens use over the counter eye drops to keep the eye moist. This will usually resolve within 2-3 hours.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Jaw Exercises: </span>
            Three times per day hold your tongue up and back to the roof of your mouth. Keep it there and then open and close your mouth ten times. This will help with motion and muscle strengthening. Do not do more than this. No side to side motion please.
          </p>
        </ExpansionPanel>

        <ExpansionPanel className='card' >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3 className='card-header'>Directions for Optimal Healing After Bone or Soft Tissue Grafting</h3>
          </ExpansionPanelSummary>
          <p>
            <span className='sub-header'>Rest and Nutritious Foods: </span>
            Resting and getting nutritious foods are essential for healing to begin and progressing normally. Soft foods are best to avoid injury to the surgical site. Keep food away from the surgical site. High calorie and high protein foods are ideal for the first few days. Drink extra non-carbonated fluids to avoid dehydration, especially the day of your surgery. Do not use a straw. Avoid hot foods while still numb from the anesthesia.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Control Your Pain: </span>
            Pain control is best obtained and maintained when you use your pain medicines prior to the local anesthesia wearing off. It is wise to eat some food prior to the taking this medicine as well. Take your medicine on a scheduled basis the first day-every four to six hours. You should realize that no pain medicine removes your pain sensation completely, but it should lessen it so it is tolerable. You may also use Ibuprofen as a second pain medicine. Follow the Ibuprofen label directions. Do not take extra Tylenol (acetaminophen), it is already a part of your narcotic pain medication. If adequate pain control is not obtained please call us. Do not take more pain medication than directed.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Cleaning Your Mouth: </span>
            Oral hygiene may begin the morning after your surgery. Gently clean your teeth with a soft bristled tooth brush and tooth paste. Do not brush the surgical site, only the teeth next to it. You should be very gentle but thorough on the teeth next to the surgical site. Avoid ultrasonic or power brushes for the first week after surgery.
          </p>
          <br/>
          <p>
            <span className='sub-header'>Antibiotic Mouth Rinse: </span>
            If you are prescribed Chlorhexidine Gluconate, (Peridex, PerioRx etc), you should begin using it the morning after surgery. After gently cleaning your teeth, very gently rinse it around your mouth, being sure to cover the surgery site, then spit it out carefully. This will need to be done each morning and at bedtime for 7-10 days. Never rinse your mouth with Hydrogen Peroxide.
          </p>
          <br/>
          <span className='sub-header'>Cautions: </span>
          <ul className='anesthesia-care'>
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
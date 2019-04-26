  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import classnames from 'classnames';
  import Card from '@material-ui/core/Card';
  import CardHeader from '@material-ui/core/CardHeader';
  import CardContent from '@material-ui/core/CardContent';
  import CardActions from '@material-ui/core/CardActions';
  import Collapse from '@material-ui/core/Collapse';
  import IconButton from '@material-ui/core/IconButton';
  import Typography from '@material-ui/core/Typography';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  
  const styles = theme => ({
    card: {
      maxWidth: 500,
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 16px 20px -12.125px rgba(0,0,0,0.3)',
      },
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    title: {
      color: '#263e76',
    },
    span: {
      color: '#263e76',
      fontWeight: '800',
    },
  });
  
  class Patients extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <Card className={classes.card} onClick={this.handleExpandClick} >
          <CardHeader
            classes={{
              title: classes.title,
            }}
            title="Preparing for Intravenous Anesthesia"
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p>
                Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
                with an empty stomach and an escort. This is essential for your safety and welfare. 
                Please carefully read and follow these directions:No solid foods for 6 hours prior to 
                your scheduled appointment. Solid foods include milk products of any kind and non-clear 
                juices like orange or pineapple
              </p>
              <br></br>
              <p>
                Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
              </p>
              <br></br>
              <p>
                Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia
              </p>
              <br></br>
              <p>
                Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks
              </p>
              <p>
              <br></br>
              <span className={classes.span}>Parent / Guardian:</span>
                Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Parent / Guardian:</span>
                Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
              </p>
              <br></br>
              <p>
                Escorts are required for all patients who will be receiving intravenous anesthesia. Dr. Hicks expects them to remain in the office to receive directions in caring for the patient they are to be assisting postoperatively.
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Diabetic Patients:</span>
                If you are planning on having your anesthesia and surgery on the same day as your consultation, please call Dr. Hicks for directions prior to your scheduled appointment to modify your diabetic medicine regiment.
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Blood Thinners:</span>
                Patients taking Coumadin, Warfarin, or Plavix (or a generic brand) must notify Dr. Hicks at least one week prior to your appointment for directions and laboratory studies that may be needed prior to your surgery.
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Clothing:</span>
                Please wear comfortable, loose fitting clothing the day of your anesthesia and surgery. Short sleeves are helpful.
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Illness:</span>
                If you develop an illness such as the flu, a cold, or have a cough or runny nose please call to reschedule your appointment
              </p>
              <br></br>
              <p>
              <span className={classes.span}>Post-Anesthesia:</span>
                Patients who have been given IV anesthesia medications should not operate any vehicle or machinery, or make any business decisions for 24 hours.
              </p>
            </CardContent>
          </Collapse>
        </Card>
      );
    }
  }
  
  Patients.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Patients);
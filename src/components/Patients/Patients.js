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
              <Typography paragraph>
                Patient’s who desire to receive IV anesthesia (be asleep) for their surgery must come 
                with an empty stomach and an escort. This is essential for your safety and welfare. 
                Please carefully read and follow these directions:No solid foods for 6 hours prior to 
                your scheduled appointment. Solid foods include milk products of any kind and non-clear 
                juices like orange or pineapple
              </Typography>
              <Typography paragraph>
                Small amounts of clear liquids may be consumed until 2 (two) hours before your appointment. Examples include water, soda pop, apple, grape, or cranberry juice and black coffee or tea (no creamer).
              </Typography>
              <Typography paragraph>
                Nothing, including water, can be taken during the 2 (two) hours just before your surgery or you will not be able to receive IV anesthesia
              </Typography>
              <Typography paragraph>
                Medicines that you use regularly should be taken at the normally scheduled time with a sip of water, unless you are directed differently by Dr. Hicks
              </Typography>
              <Typography paragraph>
              <Typography className={classes.span} span>Parent / Guardian:</Typography>
                Patients who are under the age of 18 or are handicapped must have a parent or legal guardian attend their consultation and surgery appointments.
              </Typography>
              <Typography paragraph>
              
              </Typography>
              <Typography paragraph>
              
              </Typography>
              <Typography paragraph>
              
              </Typography>
              <Typography paragraph>
              
              </Typography>
              <Typography paragraph>
              
              </Typography>
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
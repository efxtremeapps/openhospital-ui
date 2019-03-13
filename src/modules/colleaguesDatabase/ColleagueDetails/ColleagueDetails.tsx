import * as React from "react";
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter, LinkProps } from 'react-router-dom';
import { MaterialNavLinkRouter, MaterialLinkRouter } from '../../utils/LinkHelper';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Sms';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import maleAvatar from "../../../assets/images/male.png";
import femaleAvatar from '../../../assets/images/female.png';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Colleague from './Colleague';

import styles from './ColleagueDetails.style';
export interface Props extends WithStyles<typeof styles> { }

interface State {
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  items: any;
}

class ColleagueDetails extends React.Component<Props, State> {

  state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    // fetch("https://uinames.com/api/?ext&amount=9")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {

    //       setTimeout(() => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result
    //         });
    //       }, 300)
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }


  public render() {
    const { classes } = this.props;
    // const { items, isLoaded, error } = this.state;

    return (
      <div className={classes.root}>
        <Grid container className={classes.gridContainer} justify='center' spacing={24}>
          <Grid container item spacing={24}>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="Breadcrumb" className={classes.breadCrumb}>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/dashboard">
                  Home
              </MaterialLinkRouter>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/colleagues">
                  <Typography color="inherit">Your colleagues</Typography>
                </MaterialLinkRouter>
                <Typography color="inherit">Colleague details</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="inherit" className={classes.colleaguesTitle}>
                COLLEAGUE DETAILS
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justify='center' spacing={24}>
            <Paper className={classes.paperHeader}>
              <Grid item xs={12} className={classes.colleagueProfileHeader}>
                <Avatar alt="Remy Sharp" src={_.sample([maleAvatar, femaleAvatar])} className={classes.avatar} />
                <div style={{ flexDirection: 'column', textAlign: 'left' }}>
                  <Typography color="inherit" className={classes.colleagueName}>Dr. Marcus Gross</Typography>
                  <Typography color="inherit" className={classes.colleagueProfession}>Profession: <b>Pneumologist</b></Typography>
                </div>
                <Button variant="outlined" color="inherit" classes={{ root: classes.chatButton, label: classes.chatButtonLabel }}>
                  <ChatIcon className={classes.buttonIcon} />
                  Chat with doctor
                    </Button>
              </Grid>
            </Paper>
            <Grid container item justify='center' spacing={24}>
              <Grid item xs={12} sm={3} className={classes.sidebar}>
                <Typography color="inherit" className={classes.contacts}>CONTACTS</Typography>
                <Divider className={classes.divider} />
                <div className={classes.contactsContainer}>
                  <Typography color="inherit" className={classes.iconAndText}><PhoneIcon color="secondary" style={{ marginRight: '5px' }} />3451234567</Typography>
                  <Typography color="inherit" className={classes.iconAndText}><MailIcon color="secondary" style={{ marginRight: '5px' }} />doc@hospital.com</Typography>
                </div>
                <Typography color="inherit" className={classes.contacts}>LAST VISITED PATIENTS</Typography>
                <Divider className={classes.divider} />
                <Grid item xs={12} className={classes.sidebarPatients}>
                  <div className={classes.sidebarPatientsItem}>
                    <Avatar alt="Remy Sharp" src={_.sample([maleAvatar, femaleAvatar])} className={classNames(classes.avatar, 'avatarSmall')} />
                    <div style={{ flexDirection: 'column', textAlign: 'left' }}>
                      <Typography color="inherit"><b>Gross</b></Typography>
                      <Typography color="inherit">Marcus</Typography>
                    </div>
                  </div>
                  <div className={classes.sidebarPatientsItem}>
                    <Avatar alt="Remy Sharp" src={_.sample([maleAvatar, femaleAvatar])} className={classNames(classes.avatar, 'avatarSmall')} />
                    <div style={{ flexDirection: 'column', textAlign: 'left' }}>
                      <Typography color="inherit"><b>Gross</b></Typography>
                      <Typography color="inherit">Marcus</Typography>
                    </div>
                  </div>
                  <div className={classes.sidebarPatientsItem}>
                    <Avatar alt="Remy Sharp" src={_.sample([maleAvatar, femaleAvatar])} className={classNames(classes.avatar, 'avatarSmall')} />
                    <div style={{ flexDirection: 'column', textAlign: 'left' }}>
                      <Typography color="inherit"><b>Gross</b></Typography>
                      <Typography color="inherit">Marcus</Typography>
                    </div>
                  </div>
                  <div className={classes.sidebarPatientsItem}>
                    <Avatar alt="Remy Sharp" src={_.sample([maleAvatar, femaleAvatar])} className={classNames(classes.avatar, 'avatarSmall')} />
                    <div style={{ flexDirection: 'column', textAlign: 'left' }}>
                      <Typography color="inherit"><b>Gross</b></Typography>
                      <Typography color="inherit">Marcus</Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={9} className={classes.colleagueContent}>
                <Typography color="inherit" className={classes.roster}>DUTY ROSTER</Typography>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined"
                    className={classNames(classes.formField, classes.formFieldSelect)}>
                    <InputLabel
                      ref={ref => {
                        this.InputLabelRef = ref;
                      }}
                      htmlFor="​profession"
                      classes={{
                        root: classes.formFieldInputLabel,
                        focused: classes.selectLabel
                      }}
                    >
                      Profession / Specialization / Usergroup
                      </InputLabel>
                    <Select
                      className={classes.select}
                      // value={this.state.age}
                      // onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.InputLabelRef}
                          name="​professionSpecializationUsergroup"
                          id="profession"
                          // inputProps={{                          
                          classes={{
                            // root: classes.formFieldSelectInput,
                            input: classes.formFieldSelectInput
                          }}
                        // }}
                        />
                      }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} classes={{ item: classes.detailButtonContainer }}>
                  <Button variant="outlined" color="inherit" classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}>
                    Go
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.rosterInfo}>
                  <Card className={classNames(classes.rosterInfoItem, 'itemDay')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Day</Typography>
                      <Typography className="subTitle" color="inherit">Wednesday</Typography>
                      <Typography className="value" color="inherit">18</Typography>
                      <Typography className="subValue" color="inherit">May</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemHours')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Hours</Typography>
                      <Typography className="value" color="inherit">06</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemFrom')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">From</Typography>
                      <Typography className="value" color="inherit">03</Typography>
                      <Typography className="subValue" color="inherit">am</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemTo')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">To</Typography>
                      <Typography className="value" color="inherit">09</Typography>
                      <Typography className="subValue" color="inherit">pm</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemHospital')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Hospital</Typography>
                      <Typography className="subTitle" color="inherit">St. Democrito</Typography>
                      <Typography className="value" color="inherit">114</Typography>
                      <Typography className="subValue" color="inherit">Room/East wing</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} className={classes.rosterInfo}>
                  <Card className={classNames(classes.rosterInfoItem, 'itemDay')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Day</Typography>
                      <Typography className="subTitle" color="inherit">Wednesday</Typography>
                      <Typography className="value" color="inherit">18</Typography>
                      <Typography className="subValue" color="inherit">May</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemHours')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Hours</Typography>
                      <Typography className="value" color="inherit">06</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemFrom')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">From</Typography>
                      <Typography className="value" color="inherit">03</Typography>
                      <Typography className="subValue" color="inherit">am</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemTo')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">To</Typography>
                      <Typography className="value" color="inherit">09</Typography>
                      <Typography className="subValue" color="inherit">pm</Typography>
                    </CardContent>
                  </Card>
                  <Card className={classNames(classes.rosterInfoItem, 'itemHospital')}>
                    <CardContent style={{ width: '100%' }}>
                      <Typography className="title" color="inherit">Hospital</Typography>
                      <Typography className="subTitle" color="inherit">St. Democrito</Typography>
                      <Typography className="value" color="inherit">114</Typography>
                      <Typography className="subValue" color="inherit">Room/East wing</Typography>
                    </CardContent>
                  </Card>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}


const styledComponent = withStyles(styles, { withTheme: true })(ColleagueDetails);
export default styledComponent;
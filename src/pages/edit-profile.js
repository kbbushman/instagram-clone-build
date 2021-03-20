import React from 'react';
import {
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Layout from '../components/shared/Layout';
import ProfilePicture from '../components/shared/ProfilePicture';
import { useEditProfilePageStyles } from '../styles';
import { defaultCurrentUser } from '../data';

function EditProfilePage({ history }) {
  const classes = useEditProfilePageStyles();
  const [showDrawer, setDrawer] = React.useState(false);
  const path = history.location.pathname;

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }

  function handleSelected(index) {
    switch (index) {
      case 0:
        return path.includes('edit');
      default:
        break;
    }
  }

  function handleListClick(index) {
    switch (index) {
      case 0:
        history.push('/accounts/edit');
        break;
      default:
        break;
    }
  }

  const options = [
    'Edit Profile',
    'Change Password',
    'Apps and Websites',
    'Email and SMS',
    'Push Notifications',
    'Manage Contacts',
    'Privacy and Security',
    'Login Activity',
    'Emails from Instagram',
  ];

  const drawer = (
    <List>
      {options.map((option, index) => (
        <ListItem
          key={option}
          selected={handleSelected(index)}
          onClick={() => handleListClick(index)}
          classes={{
            selected: classes.listItemSelected,
            button: classes.listItemButton,
          }}
          button
        >
          <ListItemText primary={option} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Layout title='Edit Profile'>
      <section className={classes.section}>
        <IconButton
          edge='start'
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <nav>
          <Hidden smUp implementation='css'>
            <Drawer
              variant='temporary'
              anchor='left'
              open={showDrawer}
              onClose={handleToggleDrawer}
              classes={{ paperAnchorLeft: classes.temporaryDrawer }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css' className={classes.permanentDrawerRoot}>
            <Drawer
              variant='permanent'
              classes={{
                paper: classes.permanentDrawerPaper,
                root: classes.permanentDrawerRoot,
              }}
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main>
          {path.includes('edit') && <EditUserInfo user={defaultCurrentUser} />}
        </main>
      </section>
    </Layout>
  );
}

function EditUserInfo({ user }) {
  const classes = useEditProfilePageStyles();

  return (
    <section className={classes.container}>
      <div className={classes.pictureSectionItem}>
        <ProfilePicture size={38} user={user} />
        <div className={classes.justifySelfStart}>
          <Typography className={classes.typography}>
            {user.username}
          </Typography>
          <Typography
            color='primary'
            variant='body2'
            className={classes.typographyChangePic}
          >
            Change Profile Photo
          </Typography>
        </div>
      </div>
      <form className={classes.form}>
        <SectionItem text='Name' formItem={user.name} />
        <SectionItem text='Username' formItem={user.username} />
        <SectionItem text='Website' formItem={user.website} />
        <div className={classes.sectionItem}>
          <aside>
            <Typography className={classes.bio}>Bio</Typography>
          </aside>
          <TextField
            variant='outlined'
            rowsMax={3}
            rows={3}
            value={user.bio}
            fullWidth
            multiline
          />
        </div>
        <div className={classes.sectionItem}>
          <div />
          <Typography color='textSecondary' className={classes.justifySelfStart}>
            Personal Information
          </Typography>
        </div>
        <SectionItem text='Email' formItem={user.email} type='email' />
        <SectionItem text='Phone Number' formItem={user.phone_number} />
        <div className={classes.sectionItem}>
          <div />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.justifySelfStart}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

function SectionItem({ type = 'text', text, formItem }) {
  const classes = useEditProfilePageStyles();

  return (
    <div className={classes.sectionItemWrapper}>
      <aside>
        <Hidden xsDown>
          <Typography className={classes.typography} align='right'>
            {text}
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography className={classes.typography}>
            {text}
          </Typography>
        </Hidden>
      </aside>
      <TextField
        variant='outlined'
        value={formItem}
        type={type}
        className={classes.textField}
        inputProps={{
          className: classes.textFieldInput,
        }}
        fullWidth
      />
    </div>
  );
}

export default EditProfilePage;

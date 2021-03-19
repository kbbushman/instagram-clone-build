import React from 'react';
import { Card, CardContent, Hidden } from '@material-ui/core';
import Layout from '../components/shared/Layout';
import { useProfilePageStyles } from '../styles';
import { defaultCurrentUser } from '../data';
import ProfilePicture from '../components/shared/ProfilePicture';

function ProfilePage() {
  const classes = useProfilePageStyles();

  return (
    <Layout title={`${defaultCurrentUser.name} @${defaultCurrentUser.username}`}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Card className={classes.cardLarge}>
            <ProfilePicture />
            <CardContent className={classes.cardContentLarge}>
              <ProfileNameSection />
              <PostCountSection />
              <NameBioSection />
            </CardContent>
          </Card>
        </Hidden>
        <Hidden smUp>
          <Card className={classes.cardSmall}>
            <CardContent>
              <section className={classes.sectionSmall}>
                <ProfilePicture />
                <ProfileNameSection />
              </section>
              <NameBioSection />
            </CardContent>
            <PostCountSection />
          </Card>
        </Hidden>
      </div>
    </Layout>
  );
}

function ProfileNameSection() {
  return (
    <>
      ProfileNameSection
    </>
  );
}

function PostCountSection() {
  return (
    <>
      PostCountSection
    </>
  );
}

function NameBioSection() {
  return (
    <>
      ProfileNameSection
    </>
  );
}

export default ProfilePage;

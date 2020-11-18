import React from 'react';
import TabBar from '../components/tabbar/tabBar';
import UserProfile from '../components/cards/userProfile';

const Settings = () => (
  <>
    <div className="content">
      <UserProfile/>
    </div>
    <TabBar/>
  </>
);

export default Settings;

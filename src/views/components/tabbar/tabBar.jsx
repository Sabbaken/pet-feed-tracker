import React from 'react';
import TabBarItem from './tabBarItem';
import Spacer from './spacer';

const TabBar = () => (
  <>
    <nav className="tab-bar__wrapper">
      <div className="tab-bar">
        <TabBarItem
          label="Главная"
          icon="/images/icons/home.svg"
          route="/"
          exact
        />

        <TabBarItem
          label="Статьи"
          icon="/images/icons/book.svg"
          route="/articles"
          exact
        />

        <TabBarItem
          label="Настройки"
          icon="/images/icons/settings.svg"
          route="/settings"
          exact
        />
      </div>
    </nav>
    <Spacer />
  </>
);

export default TabBar;

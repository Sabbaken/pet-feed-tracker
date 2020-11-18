import React from 'react';
import { NavLink } from 'react-router-dom';

const TabBarItem = ({ label, icon, route, exact = false }) => {

  const style = {
    item: {
      opacity: '60%',
    },
    itemActive: {
      opacity: '100%',
    },
    icon: {
      height: '27px',
      width: '27px',
      marginBottom: '2px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${icon})`,
    },
  };

  return (
    <NavLink
      style={style.item}
      activeStyle={style.itemActive}
      className="tab-bar__item"
      activeClassName="tab-bar__item navigation__link--current"
      exact={exact}
      to={route}
    >
      <div style={style.icon} />
      <div>{label}</div>
    </NavLink>
  );
};

export default TabBarItem;

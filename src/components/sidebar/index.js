import React from 'react';
import logo from '../../assets/images/l.png';
import './index.css';
import Sidebar_item from '../../assets/data/sidebar.json';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  const active = props.active ? 'active' : '';

  return (
    <div className='sidebar_item'>
      <div className={`sidebar_item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = Sidebar_item.findIndex(
    (item) => item.route === props.location.pathname,
  );
  return (
    <div className='sidebar'>
      <div className='sidebar_logo'>
        <img src={logo} alt='' />
      </div>
      {Sidebar_item.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

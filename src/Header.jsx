import React from 'react'
import './css/header.css'

import logo from './assets/facebook_logo.png'

import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import StorefrontIcon from "@material-ui/icons/Storefront";

import AddIcon from "@material-ui/icons/Add";
import NotificationsIcon from "@material-ui/icons/Notifications";

import profileAvatar from './images/profile_avatar.jpeg'

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'

const Header = () => {
  const active = useSelector(store => store.active)
  return (
    <header className="header">
      {/* Header Left */}
      <div className="header__left">
        <img src={logo} alt="" className="logo" />
        <div className="search">
          <SearchIcon className="search__icon" />
          <input
            type="text"
            className="input__search"
            placeholder="Busca en Facebook"
          />
        </div>
      </div>

      {/* Header Middle */}
      <div className="header__middle">
        <ul>
          <li>
            <Link to="/" className={active == "home" ? "active" : null}>
              <HomeIcon className="header__middle__icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className={active == "friends" ? "active" : null}
            >
              <PeopleOutlineIcon className="header__middle__icon" />
            </Link>
          </li>
          <li>
            <Link to="/watch" className={active == "watch" ? "active" : null}>
              <AddToQueueIcon className="header__middle__icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/marketplace"
              className={active == "marketplace" ? "active" : null}
            >
              <StorefrontIcon className="header__middle__icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Header Right */}
      <div className="header__right">
        <a href="#" className="buscar__amigos">
          Buscar Amigos
        </a>
        <ul>
          <li>
            <a href="#">
              <AddIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <NotificationsIcon />
            </a>
          </li>
        </ul>
        <img src={profileAvatar} alt="" />
      </div>
    </header>
  );
}

export default Header

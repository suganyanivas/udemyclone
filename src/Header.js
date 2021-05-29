import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import LanguageIcon from '@material-ui/icons/Language';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Header() {
    const [{user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
  
    return (
        <div className="header">
           
           
            <img className="header__logo"
            src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="">
           
            </img>
           <span class="header__optionLineOne">Categories</span>
        <div className="header__search">
        <SearchIcon className="header__searchIcon" />
            <input className="header__searchInput" type="text" placeholder="Search for anything"  />
           
        </div>
      
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Udemy For Business</span>
          <span className="header__optionLineOne">Teach on Udemy</span>
          <span class="header__optionLineOne">My Learning</span>
        </div>
      </div>  
      <div className="header__optionBasket">
           
      <ShoppingCartIcon />
            <FavoriteBorderIcon />
            <span className="header__optionLineOne header__basketCount">
            { /*{basket?.length} */}
            </span>
          </div>
         
              
      
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <button className="login">{!user ? 'Log in' : user.email}</button>
           
            <button className="signup">{user ? 'Sign Out' : 'Sign Up'}</button>
          </div>
        </Link>
        
          <LanguageIcon />
        
    </div>
    )
}

export default Header






import { useState } from 'react'
import { Link } from 'react-router-dom'

import close from '../../../public/icons/close.png'
import downArrow from '../../../public/icons/down-arrow.png'
import rightArrow from '../../../public/icons/right-arrow1.png'
import profilePic from '../../../public/images/profilepic.jpg'

import css from './AddRestaurantMobileNavbar.module.css';

let AddRestaurantMobileNavbar = ({ toogleMenu, setToggleMenu }) => {

    let [state, setState] = useState(true);

    let dropdownOptions = state ? css.optionsBox : `${css.optionsBox} ${css.dnone}`;

    return <div>
        <div className={css.menu}>
            <img className={css.menuBar} src={close} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
            <div className={css.title}>Tomato</div>
        </div>
        <div className={css.navbar} onClick={() => setState(val => !val)}>
            <span className={css.profile}>
                <img src={profilePic} alt="profile pic" className={css.profilePic} />
                <div className={css.profileName}>Profile</div>
            </span>
            <img src={downArrow} className={css.downArrow} alt='down arrow' />
        </div>
        <div className={dropdownOptions}>
            <Link to='/my-restaurants' className={css.options}>
                <div className={css.profileName}>My Restaurants</div>
                <img src={rightArrow} className={css.rightArrow} alt='right arrow' />
            </Link>
            <Link to='/logout' className={css.options}>
                <div className={css.profileName}>Logout</div>
                <img src={rightArrow} className={css.rightArrow} alt='right arrow' />
            </Link>
        </div>
    </div >
}

export default AddRestaurantMobileNavbar;
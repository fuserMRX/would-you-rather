import React from 'react';
import { NavLink } from 'react-router-dom';

// Local Import
import LoggedInUserNav from './LoggedInUserNav';
import Logout from './Logout';

const Nav = () => {
    const home = 'Home';
    const newQuestion = 'New Question';
    const leaderboard = 'LeaderBoard';
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        {home}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        {newQuestion}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        {leaderboard}
                    </NavLink>
                </li>
                <li>
                    <LoggedInUserNav />
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
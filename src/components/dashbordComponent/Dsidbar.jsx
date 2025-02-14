import React from 'react';
import { Link } from 'react-router-dom';

const Dsidbar = () => {
    return (
        <div>
            <h3>BISTRO BOSS</h3>
            <ul>
                <li> <Link to='dashbord/userHome'> User home</Link></li>
                <li><Link to='dashbord/reservation'> Reservation</Link></li>
                <li> <Link to='dashbord/prementHistory'>Prement History</Link></li>
                <li> <Link to='dashbord/mycard'> My Card</Link></li>
                <li><Link to='dashbord/addReview'> Add Review</Link></li>
                <li> <Link to='dashbord/myBokking'> My Booking </Link></li>
            </ul>
        </div>
    );
};

export default Dsidbar;
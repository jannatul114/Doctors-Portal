import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    const selectedDate = date ? date : new Date()
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinments date={selectedDate}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;
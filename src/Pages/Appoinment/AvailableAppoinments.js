import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('https://doctors-portal-server-mithila.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center text-secondary my-12'>Available Appoinments on : {format(date, 'PP')}</h1>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;
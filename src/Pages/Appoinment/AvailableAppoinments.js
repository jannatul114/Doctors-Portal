import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query';

const AvailableAppoinments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    // const [services, setServices] = useState([]);
    const formettedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formettedDate], () => fetch(`https://doctors-portal-server-mithila.herokuapp.com/available?date=${formettedDate}`).then(res =>
        res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formettedDate}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data)
    //             console.log(data);
    //         })
    // }, [formettedDate])

    return (
        <div>
            <h1 className='text-2xl text-center text-secondary my-12'>Available Appoinments on : {format(date, 'PP')}</h1>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;
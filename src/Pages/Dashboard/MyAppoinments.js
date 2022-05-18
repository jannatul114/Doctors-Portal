import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-server-mithila.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accesstoken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {
                    setAppoinments(data)
                })
        }
    }, [user])
    return (
        <div>
            <h1>my appoinments: {appoinments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>position</th>
                            <th>Name</th>
                            <th>Serial</th>
                            <th>Date</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            appoinments.map((appoinment, index) =>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{appoinment.patientName}</td>
                                    <td>{appoinment.date}</td>
                                    <td>{appoinment.slot}</td>
                                    <td>{appoinment.treatment}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;
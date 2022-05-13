import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth)

    const handleBooking = event => {

        event.preventDefault()
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const bookings = { name, email, phone, slot };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-secondary text-black absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center my-4">Booking for: {name}</h3>
                    <div className=''>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                            <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs my-2" />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                {
                                    slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Your name" value={user.displayName || user.name} disabled className="input input-bordered w-full max-w-xs my-2" />
                            <input type="email" disabled value={user.email} name='email' placeholder="email" className="input input-bordered w-full max-w-xs my-2" />
                            <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs my-2" />
                            <input className='btn btn-secondary text-white' type="submit" value="Submit" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
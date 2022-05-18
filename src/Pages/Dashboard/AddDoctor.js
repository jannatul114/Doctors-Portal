import { es } from 'date-fns/locale';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()))

    const imgStorageKey = '0ec541e48a677692bf1fb48cf5ed3edb'
    /**
     * 3 ways to store images
     * 1.third party storage
     * 2.your own storage in your own server (file system)
     * 3. Database : Mongodb
     * 
     * YUP: to validate file
     *  
     * 
     */
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log('data', data);
    };
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-3xl'>Add a New doctor</h2>
            <ToastContainer />
            <div className='flex justify-center h-screen items-center mt-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-3xl">Signup</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is require'
                                        }
                                    })}
                                />

                            </div>



                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Speciality</span>
                                </label>

                                <select {...register('speciality')} class="select input-bordered w-full max-w-xs my-6">

                                    {
                                        services.map(service => <option key={service._id}
                                            value={service.name}>{service.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Photo is require'
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input type="submit" placeholder="Type here" className=" my-4 btn btn-assert w-full max-w-xs" value='Add doctor' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
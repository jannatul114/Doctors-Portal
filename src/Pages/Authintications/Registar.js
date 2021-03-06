import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';

const Registar = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = useToken(user || gUser)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };


    if (token) {
        navigate('/appoinment')

    }
    useEffect(() => {
        if (error || updateError || gError) {
            toast.error(error.message || updateError.message || gError.message)
        }

    }, [error, updateError, gError])

    if (loading || updating || gLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
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
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input type="submit" placeholder="Type here" className=" my-4 btn btn-assert w-full max-w-xs" value='Signup' />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link className='text-primary' to={'/login'}>Login</Link></p>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                            <button onClick={() => signInWithGoogle()} className='btn btn-outline border-solid border-assert'>continue with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registar;
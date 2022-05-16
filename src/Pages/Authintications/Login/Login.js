import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin';
import useToken from '../../../hooks/useToken';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (error || gError) {
            toast.error(error.message || gError.message)
        }
    }, [error, gError])


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    const { ref, ...rest } = register('email');

    const handleresetPass = () => {

    }
    return (
        <div>
            <ToastContainer />
            <div className='flex justify-center h-screen items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-3xl">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                <input type="submit" placeholder="Type here" className=" my-4 btn btn-assert w-full max-w-xs" value='Login' />
                            </div>
                        </form>
                        <p className='text-center'>New to doctors portal? <Link className='text-primary' to={'/registar'}>Create account</Link></p>
                        <p className='text-center'>Forget password? <button onClick={() => handleresetPass} className='btn text-primary' to={'/registar'}>reset</button></p>
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

export default Login;
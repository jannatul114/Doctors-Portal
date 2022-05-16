import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (gError) {
        toast.error(gError.message)
    }
    if (gLoading) {
        return <Loading></Loading>
    }
    if (gUser) {
        console.log(gUser);
    }
    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline border-solid border-assert'>continue with google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
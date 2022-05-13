import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline border-solid border-assert'>continue with google</button>
        </div>
    );
};

export default SocialLogin;
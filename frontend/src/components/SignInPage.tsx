// SignInPage.tsx
import React, { useContext } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignInPage: React.FC = () => {
    const auth = useContext(AuthenticationContext);

    const signInWithGoogle = async () => {
        if (auth === "undefined") {
            console.error("Firebase Auth not initialized");
            return;
        }

        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Signed in successfully!");
            // Redirect or perform additional actions after successful sign in
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default SignInPage;

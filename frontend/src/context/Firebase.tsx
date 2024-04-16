import {FirebaseApp, initializeApp} from "firebase/app";
import React, {FC, createContext} from "react";

export const FirebaseContext = createContext<FirebaseApp | "undefined">("undefined"),
    FirebaseContextProvider: FC<{ children: JSX.Element }> = ({children}) => {

        const firebaseConfig = {
            apiKey: "AIzaSyCZ1wcxl-XLfITSyLmhXXDuF2KqJmTfe_c",
            authDomain: "heritage-93004.firebaseapp.com",
            projectId: "heritage-93004",
            storageBucket: "heritage-93004.appspot.com"
            },
            firebaseApp = initializeApp(firebaseConfig);

        return <FirebaseContext.Provider value={firebaseApp}>
            {children}
        </FirebaseContext.Provider>;

    };

export default FirebaseContextProvider;
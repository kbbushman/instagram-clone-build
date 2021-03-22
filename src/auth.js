import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp({
  apiKey: "AIzaSyDKW85OEMG-Cjw8oLzVj7fzJtzDzl5jH5A",
  authDomain: "instagram-clone-build-1b126.firebaseapp.com",
  databaseURL: "https://instagram-clone-build-1b126-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-build-1b126",
  storageBucket: "instagram-clone-build-1b126.appspot.com",
  messagingSenderId: "1023639639808",
  appId: "1:1023639639808:web:f53fee7ab554cb9a2c85e5"
});

export const AuthContext = React.createContext();


function AuthProvider({ children }) {
  const [authState, setAuthState] = React.useState({ status: "loading" });

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
        // if (idTokenResult) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref(`metadata/${user.uid}/refreshTime`);

          metadataRef.on("value", async (data) => {
            if(!data.exists) return
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  async function signInWithGoogle() {
    await firebase.auth().signInWithPopup(provider);
  };

  async function signOut() {
    setAuthState({ status: "loading" });
    await firebase.auth().signOut();
    setAuthState({ status: "out" });
  };

  if (authState.status === "loading") {
    return null;
  } else {
    return (
      <AuthContext.Provider
        value={{
          authState,
          signInWithGoogle,
          signOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;

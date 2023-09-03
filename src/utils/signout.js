const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

logout.addEventListener("click", (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Logout successful");
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
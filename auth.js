const firebaseConfig = {
  apiKey: "AIzaSyAt4uqhaKoDUS6lsq5O03TyObFj03LHwjk",
  authDomain: "glass-59fe9.firebaseapp.com",
  databaseURL: "https://glass-59fe9-default-rtdb.firebaseio.com",
  projectId: "glass-59fe9",
  storageBucket: "glass-59fe9.appspot.com",
  messagingSenderId: "899374852173",
  appId: "1:899374852173:web:fd5bca39ee0ec906e6d404",
  measurementId: "G-BFPNK6YMVT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//                                      SIGNUP / SIGNOUT
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      const email = user.email;
      if(user.emailVerified){
        console.log("You are now customer, with email: " + email)
      }else{
        console.log("Verify email")
      }
  }else{
    console.log("guest")
  }
});
function signUpWithEmailPassword() {
  // [START auth_signup_password]
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log("Регистрация прошла успешна")
      firebase.auth().currentUser.sendEmailVerification()
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Неверно указан логин/пароль")
    });
  // [END auth_signup_password]
}
function signInWithEmailPassword() {
  // [START auth_signin_password]
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user.emailVerified)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Неверный логин/пароль")
    });
  // [END auth_signin_password]
}
function GoogleLogin(){
  let provider = new firebase.auth.GoogleAuthProvider()
  console.log('Login Btn Call')
  firebase.auth().signInWithPopup(provider).then(res=>{
    console.log(res.user)
  }).catch(e=>{
    console.log(e)
  })
}

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    console.log("signOut")
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}

function resetPassword(){
  let email = document.getElementById("email").value
  firebase.auth().sendPasswordResetEmail(email)
  .then((userCredential)=>{
    console.log('email sent!')
  }).catch((error)=>{
    alert("error!")
  });
}
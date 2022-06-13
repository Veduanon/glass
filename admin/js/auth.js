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
      db.collection("collection").doc("main").onSnapshot(snapshot=>{
        show(snapshot.data())
        showNav(user)
        calcul()
    })
    } else{
      showNav(user)
        db.collection("collection").doc("main").get().then(snapshot=>{
            let emptyObj = Object.keys(snapshot.data())
            emptyObj = {}
            show(emptyObj)
        })
  }
});


function signUpWithEmailPassword() {
  // [START auth_signup_password]
  const email = loginInputs['email'].value;
  const password = loginInputs['password'].value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    return db.collection("users").doc(userCredential.user.uid).set({
      email: loginInputs['email'].value,
      first_name: loginInputs['first_name'].value,
      second_name: loginInputs['second_name'].value,
      city: loginInputs['city'].value,
      addres: loginInputs['addres'].value,
      phoneNumber: loginInputs['phone_number'].value,
      timeRegistration: new Date(),
    })
    // firebase.auth().currentUser.sendEmailVerification()
  }).then(()=>{
    console.log("Регистрация прошла успешна! Подтвердите email, для этого перейдете в свой почтовый ящик email")
  }).catch((error) => {
      var errorMessage = error.message;
      if(errorMessage == "The email address is already in use by another account."){
        console.log("Email уже зарегестрирован")
      }else{
        console.log("Введите email/пароль")
      }
    });
  // [END auth_signup_password]
}
function signInWithEmailPassword() {
  // [START auth_signin_password]
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let emailVerified = userCredential.user.emailVerified != true ? "Подтвердите email":"Ваш email подтвержден"
      console.log(emailVerified)
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
  firebase.auth().signInWithPopup(provider).then(res=>{
    let emailVerified = userCredential.user.emailVerified != true ? "Подтвердите email":"Ваш email подтвержден"
      console.log(emailVerified)
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
//                              end SIGN
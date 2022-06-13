const createForm = document.querySelector("#create-form");
const loginButtons = document.querySelectorAll(".login")
const exit = document.querySelector(".signOut")
const statusEmail = document.querySelector(".status-email")
const statusFname = document.querySelector(".status-fname")
const status = document.querySelector(".status")
const statusGuest = document.querySelector(".status")
const calculator = document.querySelector(".calculator")
const loginInputs = document.getElementById("login-inputs")
function show(data) {
    const realDiv = document.querySelector(".goods")
    if (Object.keys(data).length) {
        let html = '';
        let div = `
        <h5>${data.header1}</h5>
        <h5>${data.text1}</h5>
        <button>Купить</button>
        <h5>${data.header2}</h5>
        <h5>${data.text2}</h5>
        <button>Купить</button>
        `
        html += div;
        realDiv.innerHTML = html
    } else {
        let html = '';
        let logDiv = `
        <h5>Login</h5>
        `
        html += logDiv
        realDiv.innerHTML = html
    }
}

function showNav(user) {
    if (user) {
        status.innerHTML = `
        <h3>Customer</h3>
        `
        db.collection('users').doc(user.uid).get().then((doc)=>{
            const html = `
            <div> ${user.email} </div>
            <p> ${doc.data().first_name}</p>
            <p> ${doc.data().second_name}</p>
            <input placeholder="Адрес" value='${doc.data().addres}'>
            <input placeholder="Город" value='${doc.data().city}'>
            <input placeholder="Номер телефона" value='${doc.data().phoneNumber}'>
            <button id="change">Изменить</button>
            `
            statusEmail.innerHTML = html
            change.addEventListener('click', (e)=>{
                    db.collection('users').doc(user.uid).update({
                        addres: statusEmail.children[3].value,
                        city: statusEmail.children[4].value,
                        phoneNumber: statusEmail.children[5].value,
                    }).then(()=>{
                        console.log("Изменения внесены")
                    })
                })
        })
        loginButtons.forEach(item=>item.style.display = 'none')
        exit.style.display = 'block'
        loginInputs['email'].style.display = 'none'
        loginInputs['password'].style.display = 'none'
        loginInputs['first_name'].style.display = 'none'
        loginInputs['second_name'].style.display = 'none'
        loginInputs['city'].style.display = 'none'
        loginInputs['addres'].style.display = 'none'
        loginInputs['phone_number'].style.display = 'none'
        calculator.style.display = 'block'
    } else {
        statusEmail.innerHTML = ``
        status.innerHTML = `
        <h3>Guest</h3>
        `
        loginButtons.forEach(item=>item.style.display = 'block')
        exit.style.display = 'none'
        loginInputs['first_name'].style.display = 'block'
        loginInputs['second_name'].style.display = 'block'
        loginInputs['email'].style.display = 'block'
        loginInputs['password'].style.display = 'block'
        loginInputs['city'].style.display = 'block'
        loginInputs['addres'].style.display = 'block'
        loginInputs['phone_number'].style.display = 'block'
        calculator.style.display = 'none'
    }
}
//                               ADD to collection
function create() {
    db.collection("collection").doc("main").update({
        header1: createForm['h1-main'].value,
        header2: createForm['h2-main'].value,
        text1: createForm['t1-main'].value,
        text2: createForm['t2-main'].value,
    }).then(()=>{
        console.log("Отправлено")
    }
    )
}
function gener() {
    db.collection("collection").doc("main").get().then(snapshot=>{
        let data = snapshot.data()
        let createForm = document.getElementById("create-form")
        createForm['h1-main'].setAttribute('value', data.header1)
        createForm['h2-main'].setAttribute('value', data.header2)
        createForm['t1-main'].setAttribute('value', data.text1)
        createForm['t2-main'].setAttribute('value', data.text2)
    }
    )
}

function calcul() {
    let vse = document.getElementById('kalkylator')
    let valueSelecta1 = vse["select_vid_material"].value
    let height = vse['height'].value;
    let width = vse['width'].value;
    let kolVo = vse['kol-vo'].value
    if (vse['r1'].checked) {
        var r1 = vse['r1'].value;
        document.getElementById('suma').innerHTML = (Number(valueSelecta1) + Number(r1) +Number(width) + Number(height)) * Number(kolVo) +  ' тг'
        
    } else if (vse['r2'].checked) {
        var r2 = vse['r2'].value;
        document.getElementById('suma').innerHTML = (Number(valueSelecta1) + Number(r2) +Number(width) + Number(height)) * Number(kolVo) +  ' тг'

    } else {
        var r3 = vse['r3'].value;
        document.getElementById('suma').innerHTML = (Number(valueSelecta1) + Number(r3) +Number(width) + Number(height)) * Number(kolVo) +  ' тг'
        
    }
}

class User {
    constructor(email, password, first_name, second_name, city, addres, phoneNumber) {
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.second_name = second_name;
        this.city = city;
        this.addres = addres;
        this.phoneNumber = phoneNumber;
    }
}

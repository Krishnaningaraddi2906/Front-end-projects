let loginButton=document.getElementById('loginButton')
let username=document.getElementById('username')
let password=document.getElementById('password')

let usernamedata=localStorage.setItem("username","krishna")
let passdata=localStorage.setItem("password","9880768244@Kk")

loginButton.addEventListener('click',(e)=>{
    e.preventDefault();

    let usernamedata=localStorage.getItem("username")
    let passdata=localStorage.getItem("password")

    if((username.value)==usernamedata && (password.value)==passdata)
    {
        console.log(username.value)
        console.log(password.value)
        window.location='http://127.0.0.1:5501/MusicPlayer.html'
    }

    else{
        alert("invalid username or password")
    }

})




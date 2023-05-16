let a=document.getElementById("anchor")
a.addEventListener("click",(e)=>
{
    e.preventDefault()
    document.getElementById("content").innerText=" The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for generalsecurity purposes (it is not used for personalised advertising by Google).";
    
})
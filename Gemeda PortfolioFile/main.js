 // Header Toggle
let MenuBtn = document.getElementById ('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('#auto-input', {
    String:['Front-End!', 'Jinka Unversity Computer scince student!', 'Lab Techncian!']
    typeSpead:100,
    backSpead:100,
    backDelay:100,
    loop:true,
    
})
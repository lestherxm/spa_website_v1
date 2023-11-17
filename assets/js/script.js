window.onload = function (){
    window.addEventListener('scroll', function(e){
        if(window.scrollY > 100){
            this.document.querySelector("header").classList.add('is-scrolling');
        }else{
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    const menuBtn = document.querySelector('#hamburger');
    const mobileNav = document.querySelector('#mobile-nav');

    menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
    });
}
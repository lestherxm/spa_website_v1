window.onload = function (){
    window.addEventListener('scroll', function(e){
        if(window.scrollY > 100){
            this.document.querySelector("header").classList.add('is-scrolling');
        }else{
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    })
}
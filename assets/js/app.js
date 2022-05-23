let cl = console.log;

let navigation = document.getElementById('navigation');
cl(navigation);

let navToggle = document.getElementById('nav-toggle');
cl(navToggle);



navToggle.addEventListener('click', function(){
    navigation.classList.toggle('active');
})
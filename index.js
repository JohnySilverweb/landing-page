document.querySelector('.burger').onclick = function() {
    document.querySelector('.nav-link').classList.toggle('open');
};

document.querySelector('.close-menu').onclick = function() {
    document.querySelector('.nav-link').classList.remove('open');
};
// hamburger menu 
const menuButton = document.querySelector('.button--menu');

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.page-navigation');
    menu.classList.toggle('page-navigation__hide');  
});


// removing concerts button
const concertsButton = document.querySelectorAll('.button--concerts');

concertsButton.forEach(button => {
    button.addEventListener('click', () => {
        const afterClick = document.createElement('div');
        const newText = document.createTextNode('Have fun!');
        afterClick.classList.add('concerts__message')
        afterClick.appendChild(newText);
        button.replaceWith(afterClick);
    });
});

// logging submitting form
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
});

function loadHome() {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('class', 'home-container');

    if (homeContainer) {
        console.log('homeContainer is ok');
    }

    const homeImg = document.createElement('img');
    homeImg.setAttribute('id', 'home-image');
    homeImg.setAttribute('src', '../src/image2.jpeg');
    homeImg.setAttribute('alt', 'smoking steak meal');
    homeContainer.appendChild(homeImg);

    const headLine = document.createElement('p');
    headLine.textContent = "Steak: Done Right, Every Time";
    headLine.classList.add('tag-line');
    homeContainer.appendChild(headLine);

    const list = document.createElement('ul');
    list.setAttribute('id', 'about-restaurant');
    homeContainer.appendChild(list);

    const li_1 = document.createElement('li');
    li_1.textContent = 'Our restaurant serves classic American fare, with a focus on fresh, locally-sourced ingredients.';
    list.appendChild(li_1);

    const li_2 = document.createElement('li');
    li_2.textContent = 'The menu features a wide variety of dishes, including steaks, seafood, pasta, and pizzas.';
    list.appendChild(li_2);

    const li_3 = document.createElement('li');
    li_3.textContent = 'The interior of our restaurant is warm and inviting, with dark wood accents and soft lighting.';
    list.appendChild(li_3);

    const content = document.querySelector('#content');
    content.appendChild(homeContainer);

    const homeBtn = document.getElementById('home');
    homeBtn.style.borderBottom = '2px solid white';

}

export default loadHome;
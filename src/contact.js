const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');

// const contactHead = document.createElement('h2');
// contactHead.classList.add('-contact-head');
// contactHead.textContent = 'Contact Us';
// contactContainer.appendChild(contactHead);

const addressDiv = document.createElement('div');
addressDiv.classList.add('contacts-info');
contactContainer.appendChild(addressDiv);

const addHead = document.createElement('p');
addHead.classList.add('contact-head');
addHead.textContent = 'Address';
const addLine_1 = document.createElement('p');
addLine_1.textContent = '123 Main Street';
const addLine_2 = document.createElement('p');
addLine_2.textContent = 'Anytown, CA 12345';

addressDiv.appendChild(addHead);
addressDiv.appendChild(addLine_1);
addressDiv.appendChild(addLine_2);

const operationsDiv = document.createElement('div');
operationsDiv.classList.add('contacts-info');
contactContainer.appendChild(operationsDiv);

const operationsHead = document.createElement('p');
operationsHead.classList.add('contact-head');
operationsHead.textContent = 'Hours of Operation';
const operationsLine_1 = document.createElement('p');
operationsLine_1.textContent = 'Sunday - Thursday: 11am - 10pm';
const operationsLine_2 = document.createElement('p');
operationsLine_2.textContent = 'Friday - Saturday: 11am - 11pm';

operationsDiv.appendChild(operationsHead);
operationsDiv.appendChild(operationsLine_1);
operationsDiv.appendChild(operationsLine_2);

const reservationDiv = document.createElement('div');
reservationDiv.classList.add('contacts-info');
contactContainer.appendChild(reservationDiv);

const reservationHead = document.createElement('p');
reservationHead.classList.add('contact-head');
reservationHead.textContent = 'Reservstions';
const reservationPara = document.createElement('p');
reservationPara.textContent = 'We accept reservations for parties of 6 or more. Please call us at (555) 555-5555 to make a reservation.';

reservationDiv.appendChild(reservationHead);
reservationDiv.appendChild(reservationPara);

export default contactContainer;









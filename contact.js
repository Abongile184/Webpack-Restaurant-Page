function contact() {
    const content = document.getElementById('content');
    
    const contact = document.createElement('div');
    contact.setAttribute('class', 'contact-us');
    contact.id = 'reservation'; 

    const reservationContainer = document.createElement('div');
    reservationContainer.setAttribute('class', 'contact-reservation');
    const container = document.createElement('div');
    container.setAttribute('class', 'row-container');

    //left side of row container 
    const left_aligned = document.createElement('div');
    left_aligned.setAttribute('class', 'left-side');
    const headingSection = document.createElement('div');
    headingSection.setAttribute('class', 'section-heading');

    const h6 = document.createElement('h6');
    h6.textContent = `Contact Us`;
    const h2 = document.createElement('h2');
    h2.innerHTML = `Here You Can Make A <br>Reservation Or Just walk in to</br> Our 4 Star Michelin restaurant`;
    const p = document.createElement('p');
    p.innerHTML = `Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a 
    <br>eleifend riqsie, namei sollicitudin urna diam, sed commodo </br> purus porta ut.`;

    headingSection.appendChild(h6);
    headingSection.appendChild(h2);
    left_aligned.appendChild(headingSection);
    left_aligned.appendChild(p);

    const rowIcons = document.createElement('div');
    rowIcons.setAttribute('class', 'row-icons');
    const phone = document.createElement('div');
    phone.setAttribute('class', 'phone');

    const phoneIcon = document.createElement('i');
    phoneIcon.setAttribute('class', 'fa fa-phone');
    const h4 = document.createElement('h4');
    h4.textContent = `Phone Numbers`;
    const numberOne = document.createElement('span');
    numberOne.innerHTML = `080-090-0990 <br> 080-090-0880`;

    phone.appendChild(phoneIcon);
    phone.appendChild(h4);
    phone.appendChild(numberOne);
    rowIcons.appendChild(phone);
    left_aligned.appendChild(rowIcons);

    const message = document.createElement('div');
    message.setAttribute('class', 'message');

    const messageIcon = document.createElement('i');
    messageIcon.setAttribute('class', 'fa fa-envelope');
    const h8 = document.createElement('h4');
    h8.textContent = `Emails`;
    const anchor = document.createElement('a');
    const emailUs = document.createElement('span');
    emailUs.classList.add('email-link');
    emailUs.innerHTML = `AbongileFineCuisine@finedine.com <br>info@AbongileFineCuisine.com`;

    message.appendChild(messageIcon);
    message.appendChild(h8);
    message.appendChild(emailUs);
    rowIcons.appendChild(message)
    left_aligned.appendChild(rowIcons)

    container.appendChild(left_aligned);
    reservationContainer.appendChild(container);
    contact.appendChild(reservationContainer);
    content.appendChild(contact);
}

export default contact;
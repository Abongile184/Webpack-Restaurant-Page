import "./styles.css";
import loadHomePage from './home';
import about from './about';
import menu from './menu';
import chefs from './chefs';
import contact from './contact';
import logoImage from "./images/logo_transparent.png";


function loadImage(){
   const headerContainer = document.querySelector('.header-container'); 
   const logo = document.createElement("img");
   logo.setAttribute('class', 'business-logo');
   logo.setAttribute('alt', 'restaurant');
   
   logo.src = logoImage;
   // Insert the logo before the first child of the header
   headerContainer.insertBefore(logo, headerContainer.firstChild);

}


// Function to handle the tab switching logic
function setupTabSwitching() {
    const buttons = document.querySelectorAll('nav button');
    const content = document.getElementById('content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            content.innerHTML = ''; // Clear current content

            switch (button.id) {
                case 'home':
                    loadHomePage();   
                    break;
                case 'about':
                    about();  
                    break;
                case 'menu':
                    menu();  
                    break;
                case 'chefs':
                    chefs();  
                    break; 
                case 'contact':
                    contact();  
                    break; 
            }
        });
    });
}


setupTabSwitching();

document.addEventListener(`DOMContentLoaded`,loadImage);{
    loadHomePage();
}


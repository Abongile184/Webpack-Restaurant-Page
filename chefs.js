import chefs01 from './images/chefs-01.jpg';
import chefs02 from './images/chefs-02.jpg';
import chefs03 from './images/chefs-03.jpg';

function chefs() {
    const content = document.getElementById('content');
    
    // Create and append chef heading
    const chef = document.createElement('div');
    chef.setAttribute('class', 'chef-heading');
    
    const h6 = document.createElement('h6');
    h6.innerHTML = `OUR CHEFS`;
    const h2 = document.createElement('h2');
    h2.innerHTML = `We Offer The Best Ingredients For You`;
    
    chef.appendChild(h6);
    chef.appendChild(h2);
    content.appendChild(chef);
    
    // Create chef profile section
    const chefImages = [chefs01, chefs02, chefs03]; //an array for all 3 images 
    const chefNames = ['Randy Walker', 'David Martin', 'Peter Perkson'];
    const chefRoles = ['Pastry Chef', 'Gourmet Chef', 'Mediterranean Chef']
    const chefProfile = document.createElement('div');
    chefProfile.setAttribute('class', 'chef-profile');
    
    // Create 3 chef-item elements with their child elements
    for (let i = 0; i < 3; i++) {
        const profileItem = document.createElement('div');
        profileItem.setAttribute('class', 'chef-item');
        const thumb = document.createElement('div');
        thumb.setAttribute('class', 'thumb');
    
        const img = document.createElement('img');
        img.src = chefImages[i];  // Set src to the specific image based on index
        img.alt = 'Chef Image';
        thumb.appendChild(img);
    
        const innerContent = document.createElement('div');
        innerContent.setAttribute('class', 'down-content');
        const h4 = document.createElement('h4');
        h4.textContent = chefNames[i];

        const roles = document.createElement('span');
        roles.textContent = chefRoles[i];

        innerContent.appendChild(h4);
        innerContent.appendChild(roles)
        
        profileItem.appendChild(thumb);
        profileItem.appendChild(innerContent);
        chefProfile.appendChild(profileItem);
    }
    
        content.appendChild(chefProfile);

}

export default chefs;
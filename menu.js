function menu() {
    const content = document.getElementById('content');

    const h6 = document.createElement('h6');
    h6.setAttribute('class', 'Menu-heading');
    h6.textContent = `Our Menu`;

    const h2 = document.createElement('h2');
    h2.textContent = `Our Menu Changes Daily Based On The Availability Of Local Ingredients.`;

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    // Create appetizer, mainDish, and desserts divs
    const appetizer = document.createElement('div');
    appetizer.setAttribute('class', 'appetizer-menu');
    const h1 = document.createElement('h2')
    h1.textContent = `Appetizers`;
    const p1 = document.createElement('p');
    p1.innerHTML = `<br><b>Salmon tartare (90g) - R140 </b></br> served with caper berries, onions, coriander and caviar`;
    const p2 = document.createElement('p');
    p2.innerHTML = `<br><b>Marinated Locally Sourced Oyster Mashroom Salad - R235</b></br> 
    served with pig ear terrine, pickled plum jelly, Jerusalem artichoke, Bosc pear with half portions`;
    const p3 = document.createElement('p');
    p3.innerHTML = `<br><b>Basturma Armenian Curing Meat - R 245</b></br> served with Smoked Beef, Fresh Garlic, Olive Oil`;

    appetizer.appendChild(h1);
    appetizer.appendChild(p1);
    appetizer.appendChild(p2);
    appetizer.appendChild(p3);

    const mainDish = document.createElement('div');
    mainDish.setAttribute('class', 'mainDish-menu');
    const h3 = document.createElement('h2')
    h3.textContent = `Main Entrée`;
    const p4 = document.createElement('p');
    p4.innerHTML = `<br><b>Portobello Welington - R365</b></br> served with Portobello mashroom duxelles with shallot and spinach <br>
    wrapped and baked in a puff pastry crust and served with a creamy morel and mashroom sauce`;
    const p5 = document.createElement('p');
    p5.innerHTML = `<br><b>Crispy Duck in Port Cherry Sauce - R320 </b></br> served with roasted turnips, parsnips, rutabaga and carrots
    with cornmeal, <br>Johnnycake wrapped duck conflit and bok choy </br>`;
    const p6 = document.createElement('p');
    p6.innerHTML = `<br><b>Beef Prime Rib, pasture raised and grilled - R375</b></br> served with 
    Eringi mushroom, glazed baby turnip, celery, crispy nero kale`;

    mainDish.appendChild(h3);
    mainDish.appendChild(p4);
    mainDish.appendChild(p5);
    mainDish.appendChild(p6);

    const desserts = document.createElement('div');
    desserts.setAttribute('class', 'desserts-menu');
    const h4 = document.createElement('h2');
    h4.textContent = `Desserts`;
    const p7 = document.createElement('p');
    p7.innerHTML = `<br><b>Tres Lenches Cake - R176</b></br> served with Strawberry compote, strawberry balsamic
    -Jorge Ordonez & Co.Victoria 2 - Malaga, Spain glass`;
    const p8 = document.createElement('p');
    p8.innerHTML = `<br><b>Mango crémeux douglas-fir - R198</b></br> served with caramelised puffed rice and yoghurt sorbet, white cookie dough`;
    const p9 = document.createElement('p');
    p9.innerHTML = `<br><b>Dark chocolate cylinder - R165</b></br> served with smoked hazelnut praline and salted milk ice cream`;

    desserts.appendChild(h4);
    desserts.appendChild(p7);
    desserts.appendChild(p8);
    desserts.appendChild(p9);

    // Append elements to menu div in the correct order
    menu.appendChild(h2);
    menu.appendChild(appetizer);
    menu.appendChild(mainDish);
    menu.appendChild(desserts);

    // Append h6 and menu to content in the desired order
    content.appendChild(h6);
    content.appendChild(menu);
}

export default menu;
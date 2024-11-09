import thumb01 from './images/about-thumb-01.jpg';
import thumb02 from './images/about-thumb-02.jpg';
import thumb03 from './images/about-thumb-03.jpg';
import about_video_bg from  './images/about-video.jpg';

function about(){
    const content = document.getElementById('content');
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('class','section');
    aboutSection.id = 'about';

    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('class', 'row');

    const leftContent = document.createElement('div');
    leftContent.setAttribute('class', 'left-text-content');

    const sectionHeading = document.createElement('div');
    sectionHeading.setAttribute('class', 'section-heading');
    const h6 = document.createElement('h6');
    h6.textContent = `About Us`
    const h2 = document.createElement('h2');
    h2.innerHTML  = 'We leave A Delicious <br> Memory For You </br>';

    const p1 = document.createElement('p');
    p1.innerHTML = `My Name is Abongile Arthur Mavela, an award-winning chef based in Cape Town South Africa<br>
    has been crafting innovative Mediterranean and Gourmet dishes for over a decade.</br>`;

    const p2 = document.createElement('p');
    p2.innerHTML= `From humble beginnings at a family-owned trattoria to leading the kitchen at Abongile 'S Fine Cuisine<br>
    I believe in the magic of fresh ingredients and traditional techniques.</br>`;

    const p3 = document.createElement('p');
    p3.innerHTML = `As a Winner of the 2024 World Culinary Award’s its not just about the food—<br>
    but about creating memorable experiences as well.</br> Connect with people for collaboration opportunities`;

    const pictureRow = document.createElement('div');
    pictureRow.setAttribute('class', 'row');

    const images = [thumb01, thumb02, thumb03];
    images.forEach((imageSrc, index) => {
    const column = document.createElement('div'); // Move column creation inside the loop
    column.setAttribute('class', 'cols-4'); // Optional: Set a class for styling columns

    const img = document.createElement('img');
    img.src = imageSrc;

    // Optional: Add a unique class name based on index
    img.classList.add(`about-thumb-${index + 1}`);

    column.appendChild(img); // Append img to the new column
    pictureRow.appendChild(column); // Append each column to pictureRow
    });

    sectionHeading.appendChild(h6);
    sectionHeading.appendChild(h2);
    leftContent.appendChild(sectionHeading);
    leftContent.appendChild(p1);
    leftContent.appendChild(p2);
    leftContent.appendChild(p3);
    leftContent.appendChild(pictureRow);

    //the right side content
    const rightContent = document.createElement('div');
    rightContent.setAttribute('class', 'right-text-content');

    const videobg = document.createElement('img');
    videobg.src = about_video_bg;
    videobg.setAttribute('class', ' videobackground');

    rightContent.appendChild(videobg);
    

    aboutContainer.appendChild(leftContent);
    aboutContainer.appendChild(rightContent);
    aboutSection.appendChild(aboutContainer);
    content.appendChild(aboutSection);
}

export default about;
import app1 from './app-1.jpg';
import app2 from './app-2.jpeg';
import app3 from './app-3.jpg';
import app4 from './app-4.jpg';
import main1 from './main-1.jpg';
import main2 from './main-2.jpeg';
import main3 from './main-3.jpg';
import main4 from './main-4.jpg';
import side1 from './side-1.jpg';
import side2 from './side-2.jpg';
import side3 from './side-3.jpg';
import side4 from './side-4.jpg';

const menuSection = (idName) => {
    const divEle = document.createElement('div');
    divEle.setAttribute('id', idName);
    divEle.classList.add('menu-section');
    return divEle;
};

const createCategoryHeading = (category) => {
    const categoryHead = document.createElement('p');
    categoryHead.classList.add('menu-category');
    categoryHead.textContent = category;
    return categoryHead;
};

const foodItem = (pic, altName, foodDes) => {
    const foodContainer = document.createElement('div');
    foodContainer.setAttribute('class', 'food-container');

    const foodPic = document.createElement('img');
    foodPic.classList.add('food-img');
    foodPic.setAttribute('src', pic);
    foodPic.setAttribute('alt', altName);

    const foodDesEle = document.createElement('p');
    foodDesEle.setAttribute('class', 'food-des');
    foodDesEle.textContent = foodDes;

    foodContainer.appendChild(foodPic);
    foodContainer.appendChild(foodDesEle);

    return foodContainer;
};


const menuContainer = document.createElement('div');
menuContainer.setAttribute('class', 'menu-container');

const appetizerHead = createCategoryHeading('Appetizers');
menuContainer.appendChild(appetizerHead);

const appetizers = menuSection('appetizers');
menuContainer.appendChild(appetizers);

const appetizer_1 = foodItem(app1, 'Fried calamari with marinara sauce', 'Fried calamari with marinara sauce ($12)');
const appetizer_2 = foodItem(app2, 'Quesadilla with grilled chicken or steak, cheese, and guacamole', 'Quesadilla with grilled chicken or steak, cheese, and guacamole ($10)');
const appetizer_3 = foodItem(app3, 'French onion soup with grilled cheese croutons', 'French onion soup with grilled cheese croutons ($11)');
const appetizer_4 = foodItem(app4, 'Classic Caesar salad', 'Classic Caesar salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing ($12)');

appetizers.appendChild(appetizer_1);
appetizers.appendChild(appetizer_2);
appetizers.appendChild(appetizer_3);
appetizers.appendChild(appetizer_4);

const mainCourseHead = createCategoryHeading('Main Courses');
menuContainer.appendChild(mainCourseHead);

const mains = menuSection('main-course');
menuContainer.appendChild(mains);

const mainCourse_1 = foodItem(main1, 'New York strip steak', 'New York strip steak with mashed potatoes and grilled vegetables ($28)');
const mainCourse_2 = foodItem(main2, 'Grilled salmon', 'Grilled salmon with roasted asparagus and risotto ($26)');
const mainCourse_3 = foodItem(main3, 'Chicken parmesan', 'Chicken parmesan with spaghetti and marinara sauce ($22)');
const mainCourse_4 = foodItem(main4, 'Meatloaf with mashed potatoes', 'Meatloaf with mashed potatoes and green beans ($18)');

mains.appendChild(mainCourse_1);
mains.appendChild(mainCourse_2);
mains.appendChild(mainCourse_3);
mains.appendChild(mainCourse_4);

const sideDishHead = createCategoryHeading('Side Dishes');
menuContainer.appendChild(sideDishHead);

const sides = menuSection('side-dishes');
menuContainer.appendChild(sides);

const sideDish_1 = foodItem(side1, 'Mashed potatoes ', 'Mashed potatoes ($5)');
const sideDish_2 = foodItem(side2, 'French fries', 'French fries ($4)');
const sideDish_3 = foodItem(side3, 'Coleslaw', 'Coleslaw ($3)');
const sideDish_4 = foodItem(side4, 'Steamed vegetables', 'Steamed vegetables ($4)');

sides.appendChild(sideDish_1);
sides.appendChild(sideDish_2);
sides.appendChild(sideDish_3);
sides.appendChild(sideDish_4);

export default menuContainer;



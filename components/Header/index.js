// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    // CREATE ELEMENTS
    const headCont = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // ADD STYLES

    headCont.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // APPEND 
    headCont.append(date, title, temp);

    // ADD DATA

    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';
    
    return headCont;
}

// Save new Header in Var
let newHeader = Header();


// Select Header Container
let headerDiv = document.getElementsByClassName('header-container')[0];


// Append Header Container
headerDiv.appendChild(newHeader);
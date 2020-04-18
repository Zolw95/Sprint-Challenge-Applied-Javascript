// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function (response) {
    console.log(response)
    let articles = response.data.articles;
    console.log(articles);
    let cardCont = document.getElementsByClassName('cards-container')[0];    

    for (var key in articles) {
        console.log(articles[key]);
        let articleList = articles[key];
        articleList.forEach(article => {
            let card = createCard(article);
            cardCont.appendChild(card);
        })
    }
    /*
    let keys = Object.keys(articles);
    keys.forEach(key => {
        console.log(articles[key]);
        let articleList = articles[key];
        articleList.forEach(article => {
            let card = createCard(article);
            cardCont.appendChild(card);
        })
    })
    */
    


})
.catch(function (error) {
    console.log(error);
})


let createCard = (article) => {
    // Create Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const byAuthor = document.createElement('span'); 

    // Add Styles
    card.classList.add('card');
    headline.classList.add('headling');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.setAttribute('src', article.authorPhoto);

    // Add Data to Elements
    headline.textContent = article.headline;
    byAuthor.textContent = article.authorName;

    // Append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.append(byAuthor);

    // Return

    return card;
}

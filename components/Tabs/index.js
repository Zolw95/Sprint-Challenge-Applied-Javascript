// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let data = axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( function (response) {
    console.log(response);
    /*
    // Save All Topics in variable
    let topicDiv = createTopic(response.data.topics);
    console.log(topicDiv);

    // Select Topics Element
    let topicsDiv = document.getElementsByClassName('topics')[0];
    
    // Append Topics Element
    topicsDiv.appendChild(topicDiv);
    */

    // Save All Topics in variable
    let topicArr = response.data.topics;
    console.log(topicArr);
   
    topicArr.forEach(topic => {
        let newTopic = createTopic(topic)
        // Select Topics Element
        let topicsDiv = document.getElementsByClassName('topics')[0];
       
        // Append Topics Element
        topicsDiv.appendChild(newTopic);
    })
})
.catch(function (error) {
    console.log(error);
});



// Topic Component
const createTopic = (topic) => {

    // Create Element
    const newTopic = document.createElement('div');

    // Add Style
    newTopic.classList.add('tab');

    // Add Content
    newTopic.textContent = topic;

    return newTopic;
}

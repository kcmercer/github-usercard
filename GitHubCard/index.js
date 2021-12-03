/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
 const cards = document.querySelector('.cards');

function githubAPI(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    // console.log(resp)
    cards.appendChild(gitHub(resp.data))
    return resp.data;
  }).catch(error => {
    console.log(error);
  }).finally(() => console.log('woo'))
}

// console.log(githubAPI())
// githubAPI(``)
// githubAPI(`https://api.github.com/users/kcmercer`)
// githubAPI(`https://api.github.com/users/kcmercer/followers`)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [`kcmercer`, `cklmercer`, 'tetondan', 'dustinmyers', 'justsml' ];

function userLoop(arr) {
  for (let i = 0; i < arr.length; i++){
    githubAPI(arr[i]);
  }
}

userLoop(followersArray);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHub(obj){
  const ghDiv = document.createElement('div');
  const ghimg = document.createElement('img')
  const ghInfoDiv = document.createElement('div');
  const ghH3 = document.createElement('h3');
  const ghP1 = document.createElement('p');
  const ghP2 = document.createElement('p');
  const ghP3 = document.createElement('p');
  const ghA = document.createElement('a');
  const ghP4 = document.createElement('p');
  const ghP5 = document.createElement('p');
  const ghP6 = document.createElement('p');
  ghDiv.appendChild(ghimg);
  ghDiv.appendChild(ghInfoDiv);
  ghInfoDiv.appendChild(ghH3);
  ghInfoDiv.appendChild(ghP1);
  ghInfoDiv.appendChild(ghP2);
  ghInfoDiv.appendChild(ghP3);
  ghInfoDiv.appendChild(ghP4);
  ghInfoDiv.appendChild(ghP5);
  ghInfoDiv.appendChild(ghP6);
  ghDiv.classList.add('card');
  ghInfoDiv.classList.add('card-info')
  ghH3.classList.add('name');
  ghP1.classList.add('username');
  ghimg.src = `${obj.avatar_url}`;
  ghH3.textContent = `${obj.name}`;
  ghP1.textContent = `${obj.login}`;
  ghP2.textContent = `${obj.location}`;
  ghP3.textContent = 'Profile: ';
  ghA.textContent = `${obj.html_url}`;
  ghA.href = obj.html_url;
  ghP3.appendChild(ghA);
  ghP4.textContent = `Followers: ${obj.followers}`;
  ghP5.textContent = `Following: ${obj.following}`;
  ghP6.textContent = `Bio: ${obj.bio}`;

// console.log(ghDiv);
  return ghDiv;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

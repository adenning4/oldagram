const posts = [
  {
    name: "Vincent van Gogh", // id 'poster-name'
    username: "vincey1853", // id 'poster-username'
    location: "Zundert, Netherlands", // id 'poster-location'
    avatar: "images/avatar-vangogh.jpg", // id 'poster-avatar'
    post: "images/post-vangogh.jpg", // id 'poster-image'
    comment: "just took a few mushrooms lol", // id 'poster-comment'
    likes: 21, // id 'post-likes'
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

//grab the element where the html will be written to
const postsEl = document.getElementById("posts");

// console.log(postsEl.innerHTML);
//iterate through the posts array, and write the values to the posts object
let generatedHtml = "";
for (let i = 0; i < posts.length; i++) {
  generatedHtml += `
    <section class="poster-info-section">
        <img
          class="poster-avatar"
          src="${posts[i].avatar}"
          alt=""
        />
        <p id="poster-name">
          ${posts[i].name} <span class="poster-location">${posts[i].location}</span>
        </p>
      </section>
      <section class="img-section">
        <img
            id='poster-image${i}'
          class="poster-image"
          src="${posts[i].post}"
          alt=""
        />
      </section>
      <section class="poster-message-section">
        <img class="icon" id='heart-icon${i}' src="./images/icon-heart.png" alt="heart icon" />
        <img class="icon" src="./images/icon-comment.png" alt="comment icon" />
        <img class="icon" src="./images/icon-dm.png" alt="message icon" />
        <p id='likes${i}'class="post-likes">${posts[i].likes} likes</p>
        <p>
          <span class="poster-username">${posts[i].username}</span>
          <span class="poster-comment">${posts[i].comment}</span>
        </p>
      </section>`;
  //generate unique event listeners for each image and associated heart icon
}

//push the generated html to the #posts div
// console.log(generatedHtml);
postsEl.innerHTML = generatedHtml;

//create arrays for the unique images, hearts, and like counts
//ditto for their event listeners
const heartIconEls = [];
const imageIdEls = [];
const likesArr = [];

for (let i = 0; i < posts.length; i++) {
  //push the element to its array
  heartIconEls.push(document.getElementById(`heart-icon${i}`));
  imageIdEls.push(document.getElementById(`poster-image${i}`));
  likesArr.push(document.getElementById(`likes${i}`));

  //add the event listener to the previously created element, use the index to access the associated likes number in the posts array and iterate by one, then modify the likes text content with the updated likes number || see pushLike function below
  heartIconEls[i].addEventListener("click", function () {
    pushLike(i);
  });

  //same method as the heart icon but with the image
  imageIdEls[i].addEventListener("dblclick", function () {
    pushLike(i);
  });
}

//create a function to use the dry principle in the above for loop
function pushLike(index) {
  posts[index].likes += 1;
  likesArr[index].textContent = `${posts[index].likes} likes`;
}

//unsure how the above works given that the event listener array shows undefined when logged
// console.log(heartIconEventListeners);

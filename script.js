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

//grab the post likes element
const postLikesEl = document.getElementById("post-likes");

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
          class="poster-image"
          src="${posts[i].post}"
          alt=""
        />
      </section>
      <section class="poster-message-section">
        <img class="icon" src="./images/icon-heart.png" alt="heart icon" />
        <img class="icon" src="./images/icon-comment.png" alt="comment icon" />
        <img class="icon" src="./images/icon-dm.png" alt="message icon" />
        <p class="poster-message-section-text post-likes">${posts[i].likes} likes</p>
        <p class="poster-message-section-text>
          <span class="poster-username">${posts[i].username}</span>
          <span class="poster-comment">${posts[i].comment}</span>
        </p>
      </section>`;
}

//push the generated html to the #posts div
// console.log(generatedHtml);
postsEl.innerHTML = generatedHtml;

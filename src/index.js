//Import css
import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Helper Function
function setAttributes(el, attrs) {
  for(let prop in attrs){
    el.setAttribute(prop, attrs[prop]);
  }
}
function appendChilds(el, childs){
  for(let i=0; i<childs.length; i++){
    el.appendChild(childs[i]);
  }
}

// dom manupulation
const $ = document;
const app = $.getElementById("app");

(function(){  
  const postInsertWrap = $.createElement('div');
  const postInsert = $.createElement('div');
  const titleField = $.createElement('input');
  const contentField = $.createElement('textarea');
  const postButton = $.createElement('button');
  const viewPosts = $.createElement('div');
  const allPosts = $.createElement('ul');

  
  // Post Area
  function postArea(){
    postInsertWrap.setAttribute('class', 'post-wrapper d-flex');
    app.appendChild(postInsertWrap);
    const postHeading = $.createElement('h4');
    postHeading.innerHTML = "Insert New Post";
    postHeading.setAttribute("class", "newpost-header");
    postInsert.prepend(postHeading);
    postInsert.classList.add('post-insert');
    
    setAttributes(titleField, {
      "type": "text",
      "placeholder": "Post Title",
      "class": "form-control mb-3",
      "id": "post_name"
    });
    setAttributes(contentField, {
      "type": "textarea",
      "placeholder": "Enter Post Content",
      "class": "form-control mb-3",
      "id": "post_text"
    });
    setAttributes(postButton, {
      "type": "submit",
      "class": "btn btn-default add-post"
    });
    postButton.innerHTML = "Post Now";
    postInsertWrap.appendChild(postInsert);
    appendChilds(postInsert, [
      titleField,
      contentField,
      postButton
    ]);
    viewPosts.setAttribute("class", "view-posts-wrap")
    postInsertWrap.appendChild(viewPosts);
  }
  // init post area
  postArea();

  //Live Edit Post
  function liveEdit(){
    const liveEdit = $.createElement('div');
    const viewPostsWrap = $.querySelector('.view-posts-wrap');
    var date = new Date();
    var currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    liveEdit.setAttribute("class", "live-edit");
    const postHeading = $.createElement('h4');
    postHeading.innerHTML = "All Posts";
    postHeading.setAttribute("class", "post-header");
    app.appendChild(postHeading);
    allPosts.setAttribute("class", "all-posts")
    app.appendChild(allPosts);
    const liveHeading = $.createElement('h4');
    liveHeading.innerHTML = "Live Edit";
    liveHeading.setAttribute("class", "live-header");
    viewPostsWrap.prepend(liveEdit);
    viewPostsWrap.prepend(liveHeading);

    //Live Edit
    if(liveEdit.innerHTML == 0){
      liveEdit.innerHTML = `<h3 class="empty-value">Empty!</h3>`;
    }
    postInsert.addEventListener('keyup', function(){
      liveEdit.innerHTML = `
      <p>Published Date: ${currentDate}</p>
      <h3><span class="first-letter">${titleField.value.charAt(0)}</span>${titleField.value}</h3>
      <p>${contentField.value}</p>
      `;
      if (titleField.value.length == 0){
        $.querySelector('.first-letter').setAttribute("style", "display: none");
      }
    })

    //add post
    $.querySelector('.add-post').addEventListener("click", function(e){
      var newPost = `
      <li>
        <p>Published Date: ${currentDate}</p>
        <h3><span class="first-letter">${titleField.value.charAt(0)}</span>${titleField.value}</h3>
        <p>${contentField.value}</p>
      </li>
      `;
      if (titleField.value && contentField.value) {
        allPosts.insertAdjacentHTML('afterbegin', newPost)
      } else{
        alert("Missing data!");
      }

      // clear field value
      titleField.value = '';
      contentField.value = '';
      liveEdit.innerHTML = '';
      if (liveEdit.innerHTML == 0) {
        liveEdit.innerHTML = `<h3 class="empty-value">Empty!</h3>`;
      }
    })

  }
  liveEdit();

  //Avater
  // var avater = 
})();

var test = "";
console.log(test);
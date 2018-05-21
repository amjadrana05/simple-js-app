(function () {
  let $ = document,
    app = $.getElementById("app"),
    appView  = $.querySelector('.app-view .all-posts'),
    newPost  = '',
    postName = '',
    postText = '',
    months   = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    currentDate = `${new Date().getDate()}th/ ${months[new Date().getMonth()]}/ ${new Date().getFullYear()} ${new Date().getHours()}: ${new Date().getMinutes()}`;
  
  // Main Structure
  {

  }

  $.querySelector('.add-post').addEventListener('click', function (e) {
    e.preventDefault();

    postName = $.getElementById('post_name').value;
    postText = $.getElementById('post_text').value;
    if (postName.length === 0) {
      alert("Insert Post Title")
      return 0;
    } else if (postText.length === 0) {
      alert("Insert Post Content")
      return 0;
    }

    newPost = `
    <li>
      <span>Published Date: ${currentDate}</span>
      <h3>${postName}</h3>
      <p>${postText}</p>
    </li>
    `;

    // import data
    appView.insertAdjacentHTML('afterbegin', newPost);

    //clear field
    $.getElementById('post_name').value = '';
    $.getElementById('post_text').value = '';
  })

  //lIVE Edit
  $.querySelector('.post-insert').addEventListener('keyup', function(){

    $.querySelector('.live-edit').innerHTML = `
    <span>Published Date: ${currentDate}</span>
    <h3>${$.getElementById('post_name').value}</h3>
    <p>${$.getElementById('post_text').value}</p>
    `;
  });
})()

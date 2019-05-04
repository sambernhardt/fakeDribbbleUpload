window.fakeDribbbleUpload = {
  addStyles: function () {
    var styles = '\
      .removeNode {color: salmon; font-weight: bold; cursor: pointer; pointerEvents: all;}\
      .removeNode:hover {opacity: .5};\
    '

    // add global styles
    var styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.querySelector('body').appendChild(styleEl);
  },
  closeModal: function () {
    var modal = document.querySelector('.dribbleTestUpload');
    modal.remove();
  },
  openModal: function () {
    this.addStyles();
    if (window.fakeDribbbleUpload.modal) {
      alert("You already have a window open");
    } else {
      var modal = document.createElement('div');
      window.fakeDribbbleUpload.modal = modal;
      window.fakeDribbbleUpload.modal.style = '\
        position: fixed;\
        right: 20px;\
        top: 20px;\
        background: white;\
        border-radius: 5px;\
        box-shadow: 0 0 30px rgba(0,0,0,.45);\
        padding: 20px;\
        z-index: 9997;\
        ';
      modal.classList.add('dribbleTestUpload');
      modal.innerHTML = '\
        <p onclick="window.fakeDribbbleUpload.closeModal()" style="cursor: pointer;">Close</p>\
        <br />\
        <h1>Choose an image to upload</h1>\
        <br />\
        <input type="file" id="uploader"/>\
        <br />\
        <br />\
        <button class="uploadTest contact form-btn message-btn messaged">Upload Test</button>\
      ';
      document.querySelector('body').appendChild(modal);
      document.querySelector('.uploadTest').addEventListener('click', function (e) {
        if (document.querySelector('#uploader').files[0]) {
          uploadShot(document.querySelector('#uploader').files[0]);
        } else {
          alert("Please add an image to upload.");
        }
      });
    }
  },
  removeNode: function(e) {
    var id = e.target.dataset.id;
    var parent = document.querySelector('li[data-id="' + id + '"]');
    parent.remove();
  }
};

function css(url) {
  return '\
    background-image: url(\'' + url + '\');\
    background-size: cover;\
    background-position: center;\
    background-repeat:no-repeat;';
}
function uploadShot(file) {
  var id = new Date().getTime();
  var shotContainer = document.querySelector('ol.dribbbles');
  var shots = shotContainer.querySelectorAll('li');

  var firstShot;
  // clone the first shot, and remove the images
  if (window.fakeDribbbleUpload.modelElement) {
    firstShot = window.fakeDribbbleUpload.modelElement;
  } else {
    firstShot = shots[0];
    window.fakeDribbbleUpload.modelElement = firstShot;
  }
  var newShot = firstShot.cloneNode([true]);
  newShot.dataset.id = id;
  var imageContainer = newShot.querySelector('.dribbble-img');
  var oldImages = newShot.querySelector('.dribbble-link');
  oldImages.innerHTML = '';

  // remove links
  newShot.querySelectorAll('a').forEach(function(a) {
    a.href = "#";
    // a.style.pointerEvents = 'none';
  })

  // add remove node text
  var overlay = newShot.querySelector('.dribbble-over');
  // console.log(overlay);
  var removeNode = document.createElement('small');
  removeNode.classList.add('removeNode');
  removeNode.innerHTML = 'Delete';
  removeNode.dataset.id = id;
  removeNode.onclick = window.fakeDribbbleUpload.removeNode;
  overlay.appendChild(removeNode);

  // read uploaded image and set it as the image for the fake shot
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    var img = reader.result;
    imageContainer.style = css(img);
    document.querySelector('#uploader').value = '';
  };
  shotContainer.insertBefore(newShot, shots[0]);
}

try {
  window.fakeDribbbleUpload.openModal()
} catch (error) {
  alert("There was a problem loading the bookmarklet. Check the console for more details.")
  console.log(error);
}

window.fakeDribbbleUpload = {
  closeModal: function closeModal() {
    var modal = document.querySelector('.dribbleTestUpload');
    modal.remove();
  },
  openModal: function openModal() {
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
      console.log(modal);

      document.querySelector('.uploadTest').addEventListener('click', function (e) {
        if (document.querySelector('#uploader').files[0]) {
          uploadShot(document.querySelector('#uploader').files[0]);
        } else {
          alert("Please add an image to upload.");
        }
      });
    }
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
  var shotContainer = document.querySelector('ol.dribbbles');
  var shots = shotContainer.querySelectorAll('li');

  var firstShot = shots[0];

  var newShot = firstShot.cloneNode([true]);
  var imageContainer = newShot.querySelector('.dribbble-img');
  imageContainer.innerHTML = '';

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    var img = reader.result;
    imageContainer.style = css(img);
    document.querySelector('#uploader').value = '';
  };
  shotContainer.insertBefore(newShot, shots[0]);
}

// alert("Hey")

window.fakeDribbbleUpload.openModal()

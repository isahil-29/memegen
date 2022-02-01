let topTextInput, bottomTextInput, imageInput, generateBtn, canvas, ctx;

//This funtion will generate the meme and it takes the image , toptext, bottomtext as parameter.
function generateMeme(img, toptext, bottomtext) {
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  let fontsize = canvas.width / 8;
  ctx.font = fontsize + "px Imapact";
  ctx.fillStyle = "Yellow";
  ctx.strokeStyle = "black";
  ctx.lineWidth = fontsize / 16;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(toptext, canvas.width / 2, 0, canvas.width);

  ctx.textBaseline = "bottom";
  ctx.fillText(bottomtext, canvas.width / 2, canvas.height, canvas.width);
}

//This is the initialization function.
function init () {
  // Initialize variables
  topTextInput = document.getElementById('top-text');
  bottomTextInput = document.getElementById('bottom-text');
  imageInput = document.getElementById('image-input');
  generateBtn = document.getElementById('btn');
  canvas = document.getElementById('meme-canvas');
  
  ctx = canvas.getContext('2d');

  // Generate button click listener
  generateBtn.addEventListener('click', function () {
      // Read image as DataURL using the FileReader API
      let reader = new FileReader();
      reader.onload = function () {
          let img = new Image;
          img.src = reader.result;
          generateMeme(img, topTextInput.value, bottomTextInput.value);
      };
      reader.readAsDataURL(imageInput.files[0]);
  });
}
init();

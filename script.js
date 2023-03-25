// Retrieve images from server
let header= new Headers();
console.log(header)
header("Access-Control-Allow-Origin:*"); header("Access-Control-Allow-Methods:GET"); 
header("Access-Control-Allow-Headers:Content-Type"); header("Access-Control-Allow-Credentials:true");

//xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
//    xmlhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
//    xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "GET");
//    xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
fetch('https://example.com/images')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery');
    
    // Create image elements and add to gallery
    data.forEach(image => {
      const img = document.createElement('img');
      img.src = image.url;
      img.alt = image.description;
      img.addEventListener('click', e => showModal(image.url));
      gallery.appendChild(img);
    });
  })
  .catch(error => console.error(error));

// Display modal when image is clicked
function showModal(url) {
  const modal = document.getElementById('myModal');
  const modalImg = document.querySelector('.modal-content');
  modal.style.display = 'block';
  modalImg.src = url;

  // Close modal when user clicks on 'x' button
  const close = document.querySelector('.close');
  close.addEventListener('click', () => modal.style.display = 'none');
}
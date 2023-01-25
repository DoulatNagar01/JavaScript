function uploadimages(e) {
  e.preventDefault();
  let imgs  = e.target.files;

  console.log(imgs);
  for (let img of imgs.value) {
    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', () => {
      const arrOfImg = localStorage.getItem('images');
      let images = [];
      if (arrOfImg) {
        images = [...JSON.parse(arrOfImg)];
        images.push(reader.result); 
      } else {
        images.push(reader.result);
      }
      localStorage.setItem('images', JSON.stringify(images));
    });
  }
};
// Add to fav image--------------------------------------



document.onload = function addtofav(favimg) {
    console.log('fffffffffff', favimg)
    localStorage.setItem('favimg',JSON.stringify(favimg.src));
    if (localStorage.key(favimg)) {
        console.log("hello");
        let img = [];
        if (JSON.parse(localStorage.getItem('favimg'))) {
            img.push(JSON.parse(localStorage.getItem('favimg')));
        } else {
            img = [JSON.parse(localStorage.getItem('favimg'))];
        }
        console.log(img);
        localStorage.setItem('favimg',img);
        console.log("hlo");
        let imgs = JSON.parse(localStorage.getItem('favimg'));
        let previewfav = document.getElementById('favimgofgallery');
        previewfav.innerHTML = '<h1>heloo</h1>';
    }
    // console.log(showfavimg)
}


//add to gellary page-----------------------------------
window.onload = function gettimgFromLcStg() {
    const images = JSON.parse(localStorage.getItem('images'));
    console.log('images', images);
    images.map((val,idx,arr)=>{
        let preview = document.getElementById('imglists');
        preview.innerHTML += ['<img ondblclick="addtofav(this)" class="gelleryimg" src="',val,'" id= "',idx,'"/>'].join('');
    });
}

function uploadimages(e) {
    let file = e.target.files;
    let reader = new FileReader();
    // var name = document.getElementById('files').files[0].name;
    reader.addEventListener('load',function () {
        if (this.result && localStorage) {
            const imagesArray = localStorage.getItem('images');
            let images = [];
            if (imagesArray) {
                images = [...JSON.parse(imagesArray)];
                images.push(reader.result);
            } else {
                images.push(reader.result);
            }
            localStorage.setItem('images', JSON.stringify(images));
            alert("Image Storage in gellery page")
            gettimgFromLcStg();
        } else{
            alert('not success');
        }
    })
    reader.readAsDataURL(document.getElementById('files').files[0]);
}


//show the selected image to uploading page------------------------------------------------
function UploadimgAtMainPg(e) {
    var files = e.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('imglist').insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
document.getElementById('files').addEventListener('change', UploadimgAtMainPg, false);


//for cancel the selected image on uploading page-------------------------------------------------
function clearimg() {
    location.reload();
}

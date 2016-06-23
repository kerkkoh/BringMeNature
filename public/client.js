//This function gets those images from the server and loads them up for the client
function cbChanged() {
  var cb = document.getElementById("cb").value;
  document.getElementById("load").innerHTML = "Loading...";
  $.get('/images?' + $.param({id: cb}), function(images) {
      console.log(images);
      images.forEach(function(image, index) {
        var id = "#img" + index;
        $(id).attr("src", "");
        //for full pictures access .full of urls, they seem to take too long to load for a normal internet connection to load nicely
        $(id).attr("src", image.urls.regular);
      });
      document.getElementById("load").innerHTML = "";
  });
}

cbChanged();
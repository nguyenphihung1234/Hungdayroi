document.addEventListener("DOMContentLoaded", function(event) {
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if (event.keyCode == 13){
            loadVideo(this.value);
        }
    }
    loadVideo("Đen vâu");
});

// Get the modal
var modal = document.getElementById('myModal');

//Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var videoFrame = document.getElementsById("video-frame");

//when the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeVideo();
}

// When the user clicks anywhere outside of the modal,close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeVideo();
    }
}

function loadVideo(keyword){
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword +
    "&type=video&maxResults=9&part=snippet&key=AIzaSyARxlO6YYNKSZqVHI10fHLBEKHSEn5kQs8";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API,true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // Parse ket qua tra ve thanh kieu json.
            var reponseJson = JSON.parse(this.responseText);
            var htmlContent = "";

            for (var i = 0; i < reponseJson.items.length; i++) {
                if(reponseJson.items[i].id.kind == 'youtube#channel'){
                    continue;
                }
            var videoId = reponseJson.items[i].id.videoId;
            var videoTiltle = reponseJson.items[i].snippet.title;
            var videoDescription = reponseJson.items[i].snippet.description;
            var videoThumbnail = reponseJson.items[i].snippet.thumbnails.medium.url;
            htmlContent += '<div class="video" onclick="showVideo(\''+ videoId + '\')">'
             htmlContent += '<img src="' + videoThumbnail +'">'
             htmlContent += '<div class="tiltle">' + videoId +'</div>'
            htmlContent += '</div>'
        }

        document.getElementById("list-video").innerHTML = htmlContent
    } else if(this.readyState == 4) {
        console.log("Fails");
    }
};
xhr.send();
}

function closeVideo(){
    modal.style.display = "none";
     videoFrame.src ="";
}

function showVideo(videoId){
    videoFrame.src = "https://ww.youtube.com/embed/" + videoId +"?autoplay=1";
    setTimeout(function(){
        modal.style.display = "block";
    },300);
}
document.getElementById("SearchLogoV").addEventListener("click", redirect);
function redirect(event) {
  event.preventDefault();
  let val = document.getElementById("inputTagSearch").value;
  localStorage.setItem("searchVal", JSON.stringify(val));
  location.href = "index.html";
}

showVideoOnFullScreen();
function showVideoOnFullScreen() {
  let videoIDS = localStorage.getItem("videoOfYouTube");
  let data = ` <iframe

    id="videoPlayer"
  src="https://www.youtube.com/embed/${videoIDS}"
  title="YouTube video player"
  frameborder=0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; `;
  let div = document.createElement("div");
  div.innerHTML = data;
  document.getElementById("containerVideo").append(div);
}

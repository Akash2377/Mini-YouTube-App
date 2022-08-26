let displaySearch = () => {
  document.getElementById("SearchLogo").style.display = "block";
  document.getElementById("serachParent").style.border = "1px solid blue";
};
document.querySelector("form").addEventListener("submit", displayDataBase);
function displayDataBase(event) {
  event.preventDefault();
  let inputValue = document.getElementById("inputTagSearch").value;
  localStorage.setItem("searchVal", JSON.stringify(inputValue));
  showData();
}

if (JSON.parse(localStorage.getItem("searchVal")) == null) {
  localStorage.setItem("searchVal", JSON.stringify(""));
}
showData();
async function showData() {
  document.getElementById("SearchLogo").style.display = "none";
  document.getElementById("serachParent").style.border = "1px solid gray";
  try {
    let API_Key = "AIzaSyDq721ZEm-k4Gw4lsM7PdHupdVSho59-EY";
    // let API_Key = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
    let val = JSON.parse(localStorage.getItem("searchVal"));
    let url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=20&q=${val}&key=${API_Key}`;
    let res = await fetch(url);
    let data = await res.json();
    displayYouTubeVideo(data.items);
  } catch (error) {
    console.log(error);
  }
}
let displayYouTubeVideo = (dataArr) => {
  document.getElementById("mainContent").innerHTML = "";

  dataArr.forEach((ele) => {
    let val = `
         <img src="${ele.snippet.thumbnails.high.url}" alt="" />
          <h3>${ele.snippet.title}</h3>
          <p>${ele.snippet.channelTitle}</p>
          <p>${ele.snippet.publishTime}</p>`;
    let div = document.createElement("div");
    div.innerHTML = val;
    div.setAttribute("onclick", `playVideo('${ele.id.videoId}')`);
    document.getElementById("mainContent").append(div);
  });
};

let playVideo = (elem) => {
  localStorage.setItem("videoOfYouTube", elem);
  location.href = "playVideoNEW.html";
};

// async function playvideo() {
//   try {
//     let url = ``
//     let res = await fetch(url);
//     let data  = await res.json();
//     disspla(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

// let url = ``;
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

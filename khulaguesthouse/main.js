let picsArray = ["./assets/pics/pic1", "./assets/pics/pic2", "./assets/pics/pic3"];

let currentPicNo = 0;

let mypic = document.getElementById("myimg");



function nextPic() {
    currentPicNo = currentPicNo + 1;// change this line
    mypic.src = picsArray[currentPicNo];
    console.log(picsArray[currentPicNo]);
}

function prevPic() {
    currentPicNo = currentPicNo - 1;
    mypic.src = picsArray[currentPicNo];
    console.log(picsArray[currentPicNo])
}
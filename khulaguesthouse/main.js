let picsArray = ["pic1", "pic2", "pic3"];

let currentPicNo = 0;

console.log(picsArray[currentPicNo]);

nextPic();


function nextPic() {
    currentPicNo = 1;
    console.log(picsArray[currentPicNo]);
}

function prevPic() {
    console.log(picsArray[currentPicNo])
}
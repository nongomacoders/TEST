let picsArray = ["pic1", "pic2", "pic3"];

let currentPicNo = 0;

console.log(picsArray[currentPicNo]);

nextPic();
nextPic();


function nextPic() {
    currentPicNo = 1;// change this line
    console.log(picsArray[currentPicNo]);
}

function prevPic() {
    console.log(picsArray[currentPicNo])
}
const pic = document.querySelector("#pic");
const trash = document.querySelector("#trash");

trash.addEventListener("drop" , ()=> {
    removePic();
});

function removePic() {
    pic.parentNode.removeChild(pic)
};


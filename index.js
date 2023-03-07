
// font-family: 'Climate Crisis', cursive;
// font-family: 'Gentium Book Basic', serif;
// font-family: 'M PLUS Rounded 1c', sans-serif;

function spinWheel(){
    const min = 1024
    const max = 9999
    const deg = Math.floor(Math.random() * (max-min +1) + min)
    document.getElementById("box").style.transform = "rotate("+deg+"deg)"
    const element = document.getElementById("mainbox")
    element.classList.remove("animate")



    setTimeout(function(){
        element.classList.add("animate");
    }, 5000)
}


// const comment = document.getElementById("commentsList")

function addComment(e) {
    const comment = document.getElementById("commentsList")
    const li = document.createElement("li")
    li.innerText = e.target.commentInput.value

    comment.append(li)
}








//CODE FOR POPUP WINDOWS NOT NEEDED UNLESS WE DECIDE TO GET FANCY MY GUY
/*document.querySelector('.spin-button').addEventListener('animationend', showPopup)

document.querySelector('.spin-wheel').addEventListener('animationend', showPopup)

/*function showPopup() {
    document.getElementById('popup').style.display = 'block'
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none'
}*/

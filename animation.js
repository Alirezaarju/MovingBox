let blue_box = document.getElementById("box");
let wrapperHeight = document.getElementById("wrapper").offsetHeight;
let animateDirection = 0;

const animationBox = () => {

    let LeftPosition = blue_box.offsetLeft;
    let TopPosition = blue_box.offsetTop;

    if ((LeftPosition + 100) >= screen.width || (TopPosition + 100) >= wrapperHeight) {
        animateDirection = 1;
    } else if (blue_box.offsetLeft < 0) {
        animateDirection = 0;
    }

    if (animateDirection === 0) {
        LeftPosition = LeftPosition + 10;
        TopPosition= TopPosition + 10;
    } else {
        LeftPosition = LeftPosition - 10;
        TopPosition =  TopPosition - 10;
    }

    blue_box.style.left = LeftPosition + "px";
    blue_box.style.top = TopPosition + "px";

    setTimeout(function () { animationBox() }, 1000);//1000 = 1s
}

setTimeout(function () { 
	animationBox();
	console.log('called')
}, 1000);
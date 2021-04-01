let load_txt = document.getElementById('loading');
let background = document.querySelector('.container');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    load_txt.innerText = `${load}%`;

    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    load_txt.style.opacity = scale(load, 0, 100, 1, 0);

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
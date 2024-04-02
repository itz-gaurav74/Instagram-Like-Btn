let icon = document.querySelector('.post i');
let post = document.querySelector('.post');


post.addEventListener('dblclick', () => {


    icon.style.transform = "translate(-50%, -50%) scale(1.5)";
    icon.style.opacity = 0.9;

    setTimeout(() => {
        icon.style.opacity = 0;
    }, 900)

    setTimeout(() => {
        icon.style.opacity = 0;
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)
})






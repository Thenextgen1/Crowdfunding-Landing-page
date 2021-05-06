const bookmark = document.querySelector('.bookmark');
const bookmarkImg = document.querySelector('.bookmark-img');
const closeM = document.querySelector('.close-m');
const modalContainer = document.querySelector('#modals-bg');
const choice = document.querySelectorAll('#choice');
const radio = document.querySelectorAll('input[name="radio"]');
const body = document.querySelector('body');
const select = document.querySelectorAll('.select');
const submit = document.querySelectorAll('.continue');
const courtsey = document.querySelector('.courtsey');
const reset = document.querySelector('.reset');
const bookmarkCont = document.querySelector('.bookmarkCont');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const backp = document.querySelector('.backP')

let amountleft1 = document.querySelector('.amount_left');
let amountleft2 = document.querySelector('.amount_left2');

let num2 = 64;
let num1 = 101;

backp.addEventListener('click', () => {
    setTimeout(() => {
        modalContainer.style.visibility = 'visible'
        body.style.backgroundColor = 'rgba(0,0,0,0.2)'
        modalContainer.style.display = 'flex';
    }, 500)
})


function modalsOpen() {
    closeM.addEventListener('click', () => {
        modalContainer.classList.add('exit');
        body.style.backgroundColor = 'rgb(122, 122, 122, 0.1)';
        location.reload();
    })
    bookmark.addEventListener('click', (e) => {
        bookmark.innerText = 'Bookmarked';
        bookmark.style.color = 'hsl(176, 72%, 28%)';
        bookmarkImg.style.filter = 'invert(27%) sepia(84%) saturate(4957%) hue-rotate(165deg) brightness(88%) contrast(84%)';
    })
    bookmarkImg.addEventListener('click', (e) => {
        bookmark.innerText = 'Bookmark';
        bookmark.style.color = 'hsl(0, 0%, 48%)';
        bookmarkImg.style.filter = 'none';

    })
    radio.forEach((elem) => {
        elem.addEventListener('change', () => {
            modalContainer.style.top = '6em'
            choice.forEach((elems) => {

                if (elem.checked = true) {
                    elems.style.display = 'flex'
                } else if (elem.checked = false) {
                    elems.style.display = 'none'
                }
            })
        })
    })

}
modalsOpen();

function modalClose() {
    reset.addEventListener('click', () => {
        courtsey.style.visibility = 'hidden'
        body.style.backgroundColor = 'rgb(122, 122, 122, 0.1)';

    })

    submit.forEach((items) => {
        items.addEventListener('click', () => {
            courtsey.style.visibility = 'visible'
            modalContainer.style.display = 'none';
        })
    })



}
modalClose();

function updateNum() {
    select1.addEventListener('click', () => {
        num1--;
        amountleft1.innerText = num1;
        courtsey.style.visibility = 'visible'
    })
    select2.addEventListener('click', () => {
        num2--;
        amountleft2.innerText = num2;
        courtsey.style.visibility = 'visible'
    })
}
updateNum();






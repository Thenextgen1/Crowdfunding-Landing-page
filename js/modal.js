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




function modalsOpen() {
    closeM.addEventListener('click', () => {
        modalContainer.classList.add('exit');
        body.style.backgroundColor = 'rgb(122, 122, 122, 0.1)';
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
        location.reload();
    })

    submit.forEach((items) => {
        items.addEventListener('click', () => {
            courtsey.style.visibility = 'visible'
            modalContainer.style.display = 'none';

        })
    })

    select.forEach((item) => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                modalContainer.style.visibility = 'visible'
                body.style.backgroundColor = 'rgba(0,0,0,0.2)'
            }, 500)
        })
    })

}
modalClose();









const bookmark = document.querySelector('.bookmark');
const bookmarkImg = document.querySelector('.bookmark-img');
const closeM = document.querySelector('.close-m');
const modalContainer = document.querySelector('#modals-bg');

closeM.addEventListener('click', () => {
    modalContainer.classList.add('exit');
})










bookmark.addEventListener('click', (e) => {
    bookmark.innerText = 'Bookmarked';
    bookmark.style.color = 'hsl(176, 72%, 28%)';
    bookmarkImg.style.filter = 'invert(27%) sepia(84%) saturate(4957%) hue-rotate(165deg) brightness(88%) contrast(84%)';
    e.stopPropagation();
})
bookmarkImg.addEventListener('click', (e) => {
    bookmark.innerText = 'Bookmark';
    bookmark.style.color = 'hsl(0, 0%, 48%)';
    bookmarkImg.style.filter = 'none';
    e.stopPropagation();
})

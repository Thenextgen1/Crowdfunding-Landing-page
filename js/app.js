const toogle = document.querySelector('.toogle');
const navList = document.querySelectorAll('.navlist li');
const navli = document.querySelector('.navlist');
const exit = document.querySelector('.backend');
const mediaQuery = window.matchMedia('(max-width: 414px)');


function touch() {
    toogle.addEventListener('click', (e) => {
        if (mediaQuery.matches) {
            for (let i = 0; i < navList.length; i += 1) {
                navList[i].style.display = 'block';
                navList[i].style.textAlign = 'left';
                navList[i].style.borderTop = '1px solid rgb(122, 122, 122, 0.3)'
                navList[i].style.paddingTop = '15px';
                navList[i].style.paddingTop = '15px';
            } navli.classList.add('active');
            toogle.style.visibility = 'hidden';
            exit.style.background = "url(images/icon-close-menu.svg)";
            exit.style.backgroundRepeat = 'no-repeat';
            exit.style.backgroundSize = 'auto';
            e.stopPropagation();
        }

    })
}
touch();

function close() {
    exit.addEventListener('click', () => {
        navli.classList.remove('active');
        for (var i = 0; i < navList.length; i += 1) {
            navList[i].style.display = 'none';
        } toogle.style.visibility = 'visible';
        exit.style.background = 'none';

    })
}

close();

var data = [
    {
        id: 1,
        name: 'MAE101',
        links: 'https://drive.google.com/drive/folders/15csFjyHrJuujtb7yWRMEITKHKmZ_wp15?usp=sharing',
        image: 'img/MAE.png',
        review_link: 'https://www.youtube.com/watch?v=OlPz77uGlY0&list=PLqTAydrVWhlV35naBrMbYOXHDZbew9gba'
    },
    {
        id: 2,
        name: 'PRF192',
        links: 'https://drive.google.com/drive/folders/1oi5fgTapqr2gv9QQFz__MLPvBR5WEgH4?usp=sharing',
        image: 'img/PRF.png',
        review_link: 'https://quizlet.com/240902833/prf-192-flash-cards/',
    },
    {
        id: 3,
        name: 'CEA201',
        links: 'https://drive.google.com/drive/folders/1oYkIezq53rcTyCSrayKSVeG4puYfPyGX?usp=sharing',
        image: 'img/CEA.png',
        review_link: 'https://quizlet.com/vn/237972095/cea-201-full-flash-cards/'
    },
    {
        id: 4,
        name: 'CSI104',
        links: 'https://drive.google.com/drive/folders/1ssDMcH_jbImXWYEMsskuM4geQhKW5PhR?usp=sharing',
        image: 'img/CSI.png',
        review_link: 'https://quizlet.com/vn/606010979/csi-104-full-flash-cards/'
    },
    {
        id: 5,
        name: 'SSL101c',
        links: 'https://drive.google.com/drive/folders/10WmYdnaeGk2BKFvUGdOI41JX0So4mCPY?usp=sharing',
        image: 'img/SSL101c.png',
        review_link: 'https://quizlet.com/vn/505793928/ssl101c-academic-skills-fullset-flash-cards/'
    }
];
var container = document.getElementById('data');
var render = data.map(function(value,key){
    return `
    <li class="item">
        <img src="${value.image}" alt="${value.name}">
        <h5>${value.name}</h5>
        <div class="option">Ôn tập</div>
    </li>
    `
}).join(' ');
container.innerHTML = render;
//////////////////////
var listitem = document.getElementsByClassName('item');
for(let i=0; i<listitem.length; i++) {
    listitem[i].addEventListener('click',function(){
        window.open(data[i].links, '_blank');
    })
};
var listoption = document.getElementsByClassName('option');
for(let i=0; i<listoption.length; i++) {
    listoption[i].addEventListener('click',function(){
        window.open(data[i].review_link, '_blank');
    })
};
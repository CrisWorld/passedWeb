var data = [
    {
        id: 1,
        name: 'MAE101',
        links: 'https://drive.google.com/drive/folders/15csFjyHrJuujtb7yWRMEITKHKmZ_wp15?usp=sharing',
        image: 'img/MAE.png'
    },
    {
        id: 2,
        name: 'PRF192',
        links: 'https://drive.google.com/drive/folders/1oi5fgTapqr2gv9QQFz__MLPvBR5WEgH4?usp=sharing',
        image: 'img/PRF.png'
    },
    {
        id: 3,
        name: 'CEA201',
        links: 'https://drive.google.com/drive/folders/1oYkIezq53rcTyCSrayKSVeG4puYfPyGX?usp=sharing',
        image: 'img/CEA.png'
    },
    {
        id: 4,
        name: 'CSI104',
        links: 'https://drive.google.com/drive/folders/1oYkIezq53rcTyCSrayKSVeG4puYfPyGX?usp=sharing',
        image: 'img/CSI.png'
    }
];
var container = document.getElementById('data');
var render = data.map(function(value,key){
    return `
    <li class="item">
        <img src="${value.image}" alt="${value.name}">
        <h5>${value.name}</h5>
    </li>
    `
}).join(' ');
container.innerHTML = render;
//////////////////////
var listitem = document.getElementsByClassName('item');
console.log(listitem);
for(let i=0; i<listitem.length; i++) {
    listitem[i].addEventListener('click',function(){
        window.open(data[i].links, '_blank');
    })
};
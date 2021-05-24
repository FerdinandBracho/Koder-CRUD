console.log('BOM')

// DOM -> Document Object Model
// BOM -> Browser Object Model

// window
//     document // DOM

//     location // Bom
//     navigator // Bom
//     history // Bom




            let listKoder = document.querySelector('.lista-koders')
let itemKoder = ''

koders.forEach(koder => {
    itemKoder += `
    <a href="koder.html?idkoder=${koder.id}"><li> 
            Koder - ${koder.id} 

        </li></a>
    
    
    `
});

listKoder.innerHTML = itemKoder

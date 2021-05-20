// !Array de objetos a manipular
let wishList = [
    {
        iditem : 9,
        name : 'Adidas Grand Court TEST',
        description : 'Adidas Grand Court Base EE7905 Tenis para Hombre',
        price : 859,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 2,
        name : 'Zike Metcon',
        description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price : 90,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    },
    {
        iditem : 3,
        name : 'Nike Carreras',
        description : 'Nike Carreras de mujer',
        price : 1200,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 4,
        name : 'Xike Carreras',
        description : 'Nike Carreras de mujer',
        price : 1200,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 5,
        name : 'Nike Metcon',
        description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price : 990,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    }
]

// !Funcion para mostar array de objetos en tabla 
const displayArray = arr => {
    let itemTable = document.querySelector(".tbody-items")
    let itemList = ""
    
    arr.forEach(item => {
        let {iditem, name, description, price, imgurl} = item
        
        itemList += `
        <tr>
        <td>${iditem}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td>$${price}</td>
        <td><img src="${imgurl}" alt="Img ${name}" style="width: 5vw;"></td>
        </tr>
        `
    })
    itemTable.innerHTML = itemList
}

// !Funcion para ordenar lista por id 
const sortID = arr => arr.sort((a, b) => a.iditem - b.iditem)

// !Funcion para ordenar lista por nombre
const sortName = arr => arr.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

// !Funcion para ordernar lista por precio
const sortPrice = arr => arr.sort((a, b) => a.price - b.price)

displayArray(wishList)

const btnId = document.querySelector(".btn-id")
const btnName= document.querySelector(".btn-name")
const btnPrice = document.querySelector(".btn-price")

btnId.addEventListener("click", () => {
    let sortedID = sortID(wishList)
    displayArray(sortedID)
})

btnName.addEventListener("click", () => {
    let sortedName = sortName(wishList)
    displayArray(sortedName)
})

btnPrice.addEventListener("click", () => {
    let sortedPrice = sortPrice(wishList)
    displayArray(sortedPrice)
})




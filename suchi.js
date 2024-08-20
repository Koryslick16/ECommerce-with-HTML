const products = [
    {
        id: 1,
        name: "Leather Purse",
        price: 7400.0,
        desc: "Women's bag of red color, genuine leather.",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 2,
        name: "Leather Purse",
        price: 6100.0,
        desc: "Women's bag of peach color, genuine leather.",
        img: "https://images.unsplash.com/photo-1685800750376-f4497f5da428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhdGhlciUyMGhhbmRiYWdzfGVufDB8fDB8fHww"
    },
    {
        id: 3,
        name: "Hand Bag",
        price: 4200.0,
        desc: "Women's bag of baby pink color, genuine leather.",
        img: "https://images.unsplash.com/photo-1682364853446-db043f643207?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        name: "Shoulder Bag",
        price: 5250.0,
        desc: "Women's bag of white color, genuine leather.",
        img: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        name: "Leather Bucket Bag",
        price: 9200.0,
        desc: "Women's bag of black color, genuine leather.",
        img: "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        name: "Ladies Bag",
        price: 705.0,
        desc: "Women's bag of flowered pattern, genuine leather.",
        img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 7,
        name: "Hand Bag",
        price: 5940.0,
        desc: "Women's bag of brown color, genuine leather.",
        img: "https://images.unsplash.com/photo-1624687943971-e86af76d57de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 8,
        name: "Ladies Purse",
        price: 8800.0,
        desc: "Women's bag of white color, genuine leather.",
        img: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 9,
        name: "Shoulder Bag",
        price: 7100.0,
        desc: "Women's bag of black color, genuine leather.",
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 10,
        name: "Ladies Purse",
        price: 10000.0,
        desc: "A Micheal Kors Bag, genuine leather.",
        img: "https://images.unsplash.com/photo-1682364853177-b69f92750a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlYXRoZXIlMjBoYW5kYmFnc3xlbnwwfHwwfHx8MA%3D%3D"
    }
]

let cart = [];
let countCart = 0;

function displayProducts(){
    const productContainer = document.getElementById("product");
    productContainer.innerHTML = "";

    products.forEach((item) => {
        const Card = document.createElement("div");
        Card.classList.add("productContainer");
        Card.innerHTML = `
            <img class= "img" src="${item.img} alt="${item.name}"/>
             <div class="title">${item.name}</div>
             <div class="desc">${item.desc}</div>
             <div class="box">
                  <div class="price">$${item.price.toFixed(1)}</div>
                  <button class="btn" onclick="addToCart(${item.id})"> Buy Now!</button>
             </div>
        `;
        productContainer.appendChild(Card);
    })

}
let count = document.getElementById("cartCount");
if(cart.length === 0){
    count.innerHTML = `<span>0</span>`;
}

function addToCart (productId) {  
    count.innerHTML = "";
    const item = products.find((item) => item.id === productId);
    
    if(item){
        countCart++;
        count.innerHTML = `<span>${countCart}</span>`;
        cart.push(item);
        displayProducts();
        cartSection();
    }     
    }

    let cartIcon = document.getElementById("cartIcon");
    cartIcon.addEventListener("click", displayModal);

    
    function displayModal (){
        let modalBox = document.getElementById("modalBox");
        modalBox.style.display = "flex";
        modalBox.style.alignItems= "center";
        modalBox.style.justifyContent= "center";
    }

    function closeModal (){
        let modalBox = document.getElementById("modalBox");
        modalBox.style.display="none";
    }

   
function cartSection(){
    
    let modal = document.getElementById("modal");
    let modalBox = document.getElementById("modalBox");

    // modalBox.style.display = "block";
    // modal.innerHTML = "";
   
    if(cart.length === 0){
        modal.style.alignItems="center";
        modal.style.justifyContent="center";
        modal.innerHTML= ` 
        <button id="close" onclick="closeModal()"> &cross;</button>
        <p> NO ITEMS HAVE BEEN ADDED TO YOUR CART.</p>
        `
    }else{
        modal.innerHTML = `
             <button id="close" onclick="closeModal()"> &cross;</button>
        `
        cart.forEach((item) => {
            const cartItem = document.createElement(`div`);
            cartItem.classList.add("cartProduct");
            cartItem.innerHTML = `
                 <img src="${item.img}" alt="${item.name}"/>
                 <div className="cartDesc">${item.desc}</div>
                 <div className= "cartTitle">${item.name}</div>
                 <div className= "cartPrice">$${item.price}</div>
            `;
            modal.appendChild(cartItem);
        })
    }
    
}

displayProducts();
cartSection();

console.log();

const products = [
    {
        id: 1,
        name: "Leather Purse",
        price: 7400.0,
        desc: "Women's bag of red color, genuine leather.",
        img: "https://www.istockphoto.com/photo/womens-bag-of-red-color-genuine-leather-grey-painted-wooden-background-space-for-text-gm1335392524-417140841?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fleather-handbags&utm_medium=affiliate&utm_source=unsplash&utm_term=leather+handbags%3A%3A%3A"
    },
    {
        id: 2,
        name: "Leather Purse",
        price: 6100.0,
        desc: "Women's bag of lilac color, genuine leather.",
        img: "https://www.istockphoto.com/photo/stylish-female-blue-leather-flap-bag-with-top-handle-and-gold-hardware-on-a-graphic-gm1771506182-545882222"
    },
    {
        id: 3,
        name: "Hand Bag",
        price: 4200.0,
        desc: "Women's bag of bergurndy color, genuine leather.",
        img: "https://media.istockphoto.com/id/991811996/photo/close-up-fashionable-women-leather-bag-with-business-documents-and-files-inside-for-meeting.jpg?s=612x612&w=0&k=20&c=O6jvRjPH1ECfju7h6Xa_dbDAyRlQKrotDGYh152DLoU="
    },
    {
        id: 4,
        name: "Hand Bag",
        price: 5250.0,
        desc: "Women's bag of brown color, genuine leather.",
        img: "https://www.istockphoto.com/photo/bag-brown-color-on-red-velvet-background-gm529989152-93332925"
    },
    {
        id: 5,
        name: "Hand Bag",
        price: 9200.0,
        desc: "Women's bag of yellow color, genuine leather.",
        img: "https://media.istockphoto.com/id/654112944/photo/yellow-handbag-on-emerald-green-background.jpg?s=612x612&w=0&k=20&c=OLNPCKx8s5WxKdpGrzTPzTxf8qTbcODLXuplVIvh0DI="
    },
    {
        id: 6,
        name: "Ladies Bag",
        price: 705.0,
        desc: "Women's bag of brown color, genuine leather.",
        img: "https://media.istockphoto.com/id/995132402/photo/ladies-bag-still-life-photography.jpg?s=612x612&w=0&k=20&c=1uPuNGT-WorxyvEUF90zT683ni1nxAas6AEZjjrPhVI="
    },
    {
        id: 7,
        name: "Hand Bag",
        price: 5940.0,
        desc: "Women's bag of brown & black color, genuine leather.",
        img: "/pics/suchima_4.jpg"
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

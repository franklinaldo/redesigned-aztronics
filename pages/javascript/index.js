/** Data for recently viewed */

let recently_viewed_root = document.getElementById("recently_viewed_id")
let recently_viewed_data = [
    {
        product_name: "C0610 - 57mm 0.7W 8 Ohm Mini Speaker",
        product_price: "$3.75",
        image_location: "img/products/Mask Group 3.png"
    },
    {
        product_name: "S6127A - Indoor Piezo Siren 12V",
        product_price: "$15.25",
        image_location: "img/products/Image 8.png"
    }
]
recently_viewed_root.innerHTML += printCard(recently_viewed_data)


/** Data for popular items */
let popular_items_root = document.getElementById("popular_items_id")
let popular_items_data = [
    {
        product_name: "Raspberry Pi 4 4GB RAM 32GB MicroSD",
        product_price: "$70.00",
        image_location: "img/products/Image 18.png"
    },
    {
        product_name: "W4208A - 287/0.30 160A Black Power Cable",
        product_price: "$11.25",
        image_location: "img/products/Image 12.png"
    },
    {
        product_name: "S6104 - 3-16V Mini Piezo Sealed PCB Mount Buz..",
        product_price: "$5.25",
        image_location: "img/products/Image 5.png"
    },
    {
        product_name: "C2107 - Twin Cone EWIS PA Driver Speaker",
        product_price: "$36.50",
        image_location: "img/products/Image 6.png"
    },
    {
        product_name: "S9179B - Solar Powered Dummy Security Camera",
        product_price: "$37.50",
        image_location: "img/products/Image 7.png"
    },
    {
        product_name: "C0616 - 100mm 5W 4/8 Ohm Paper Cone Speaker",
        product_price: "$4.60",
        image_location: "img/products/Image 35.png"
    },
    {
        product_name: "C3640 - 50mm Diameter Adjustable Speaker Box Port",
        product_price: "$7.20",
        image_location: "img/products/Image 37.png"
    },
    {
        product_name: "C3700 - Speaker Grille Clips Pk 4",
        product_price: "$5.25",
        image_location: "img/products/Image 38.png"
    },
    {
        product_name: "C0606 - 30mm 0.4W 8 Ohm Flat Mini Speaker",
        product_price: "$5.20",
        image_location: "img/products/Image 25.png"
    },
    {
        product_name: "C0613 - 63mm 5W 8 Ohm Mylar Cone Speaker",
        product_price: "$7.50",
        image_location: "img/products/Image 27.png"
    }
]

popular_items_root.innerHTML += printCard(popular_items_data)

 
/** function to create HTML from the data */
function printCard(data) {
    let text = ""

    for (eachData of data) {
        text += `
            <div class="card__container mui-shadow">
                    <a href="./pages/product_detail.html">
                        <div class="card__media mui-shadow">
                            <img src="${eachData.image_location}"/>
                        </div>
                    </a>
                    <div class="btn btn-item btn--floating">
                        <img src="img/icons/cart_plus.svg" class="icon">
                    </div>
                    <a href="/pages/product_detail.html">
                        <div class="item_info">

                            <p class="product_name">${eachData.product_name}</p>
                            <p class="product_price">${eachData.product_price}</p>

                            <div class="btn-container">
                                <div class="btn btn-item">
                                    <img src="img/icons/cart_plus.svg" class="icon">
                                </div>
                                <div class="btn btn-item" >
                                    <img src="img/icons/compare_plus.svg" class="icon">
                                </div>
                            </div>
                        </div>
                    </a>
                
            </div>
        `
    }

    return text

}
var products = {
    1: {
        id: 1,
        order: 1,
        'title': 'Product Title 1',
        'price': 'Starting at $500',
        'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>' +
            '<ul>' +
            '     <li><span class=\'one\'></span>Non porta dui euismod nec</li>' +
            '     <li><span class=\'two\'></span>Non porta dui euismod nec</liUt tristique ipsum velit</li>' +
            '     <li> <span class=\'three\'></span>Non porta dui euismod nec</liQuisque mollis justo</li>' +
            '</ul>',
        'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src': './images/cereal_b.jpg'
    },
    2: {
        id: 2,
        order: 2,
        'title': 'Product Title 2',
        'price': 'Starting at $1900',
        'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src': './images/flower_b.jpg'
    },
    3: {
        id: 3,
        order: 3,
        'title': 'Product Title 3',
        'price': 'Starting at $2730',
        'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src': './images/machine_b.jpg'
    },
    4: {
        id: 4,
        order: 4,
        'title': 'Product Title 4',
        'price': 'Starting at $731',
        'desc': 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
        'uri-stub': '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
        'src': './images/candy_b.jpg'
    }
};

// OPEN PRODUCT INFO BOX
function displayDetails(id) {
    const productDetailDiv = document.querySelector('#product-detail');
    let product = products[id];

    productDetailDiv.style.display = "block";
    productDetailDiv.innerHTML = `
        <div>
            <h2 class='product-title'>${product.title}</h2>
            <span class="price">${product.price}</span>
            <span onclick='closeProductDetail()' id="close">
                <img src="./images/close.png" alt="">
            </span>
        </div>
        <div class="row">
            <div class='col-md-6 col-sm-12'>${product.desc}</div>
            <figure class='col-md-6 col-sm-12'>
                <img src="${product.src}" alt="">
            </figure>
        </div>
        <a href="#" class="btn btn-blue">Buy Online
        <span class="arrow"><img src="./images/arrow-btn-white.png" alt=""></span>
        </a>
    `;
}

// CLOSES PRODUCT INFO BOX
function closeProductDetail() {
    const productDetailDiv = document.querySelector('#product-detail');
    productDetailDiv.innerHTML = '';
    productDetailDiv.style.display = "none";
}


// DROPDOWN PRICE FILTER
const selectPrice = document.querySelector('#select-price');

selectPrice.addEventListener('change', function (e) {
    let productList = document.querySelectorAll('.product-item');
    let priceRange = e.target.value;

    console.log(productList);

    for (let i = 0; i < productList.length; i++) {
        let productPrice = parseFloat(productList[i].dataset.price);
        
        // SHOW ALL PRODUCT ITEMS
        if (priceRange === 'all') {
            productList[i].style.display = 'flex';
            continue;
        }

        //CHECK IF PRICE IS LESS THAN $500 
        if (priceRange === '500' && productPrice < 500) {
            productList[i].style.display = 'block'
            continue;
        } else {
            productList[i].style.display = 'none';
        }

        // CHECK IF PRICE IS BETWEEN $500 AND $1000
        if (priceRange === '500-1000' && productPrice >= 500 && productPrice <= 1000) {
            productList[i].style.display = 'block'
            continue;
        } else {
            productList[i].style.display = 'none';
        }

        // CHECK IF PRICE IS BETWEEN $1,00 AND $2,000
        if (priceRange === '1000-2000' && productPrice >= 1000 && productPrice <= 2000) {
            productList[i].style.display = 'block'
            continue;
        } else {
            productList[i].style.display = 'none';
        }

        // CHECK IF PRICE IS BETWEEN $1,00 AND $2,000
        if (priceRange === '2000' && productPrice >= 2000) {
            productList[i].style.display = 'block'
            continue;
        } else {
            productList[i].style.display = 'none';
        }
    } // END OF FOR LOOP 

});


// fonction qui simule un retour en arriere sur la meme page en cliquant sur le bouton retour 
function returnPage() {

    $('.test').show();
    $('.banner').show();
    $('.container1').hide()
    $('.container2').hide();
    $('.container3').hide();
    $('.container4').hide();
    $('.container5').hide();
    $('.container6').hide();
    $('.container7').hide();
    $('.container8').hide();
    $('.container9').hide();
    $('.container10').hide();
    $('.container11').hide();
    $('.container12').hide();
    $('.container13').hide();
    $('.container14').hide();
    $('.container15').hide();
    $('.container16').hide();
    $('section').hide();
    $('.footer').show()
    
};
// fin fonction bouton retour 


// Quand on clique sur le nom d'un casque tout les elements disparaissent 
function hideAll() {

    $('.test').hide();
    $('.banner').hide();
    $('.container1').show();
    $('.footer').hide()
};


function hideAll2() {

    $('.test').hide();
    $('.banner').hide();
    $('.container2').show();
    $('.footer').hide()
};

function hideAll3() {

    $('.test').hide();
    $('.banner').hide();
    $('.container3').show();
    $('.footer').hide()
};

function hideAll4() {

    $('.test').hide();
    $('.banner').hide();
    $('.container4').show();
    $('.footer').hide()
};

function hideAll5() {

    $('.test').hide();
    $('.banner').hide();
    $('.container5').show();
    $('.footer').hide()
};

function hideAll6() {

    $('.test').hide();
    $('.banner').hide();
    $('.container6').show();
    $('.footer').hide()
};

function hideAll7() {

    $('.test').hide();
    $('.banner').hide();
    $('.container7').show();
    $('.footer').hide()
};

function hideAll8() {

    $('.test').hide();
    $('.banner').hide();
    $('.container8').show();
    $('.footer').hide()
};

function hideAll9() {

    $('.test').hide();
    $('.banner').hide();
    $('.container9').show();
    $('.footer').hide()
};

function hideAll10() {

    $('.test').hide();
    $('.banner').hide();
    $('.container10').show();
    $('.footer').hide()
};

function hideAll11() {

    $('.test').hide();
    $('.banner').hide();
    $('.container11').show();
    $('.footer').hide()
};

function hideAll12() {

    $('.test').hide();
    $('.banner').hide();
    $('.container12').show();
    $('.footer').hide()
};
// fin des fonctions Hide





// TOUT LES CASQUES SONT CACHES QUAND ON CLIQUE POUR ALLER VERS LA PAGE PRODUIT 


function hideProduct() {

    $('.container1').hide();
    $('.container2').hide();
    $('.container3').hide();
    $('.container4').hide();
    $('.container5').hide();
    $('.container6').hide();
    $('.container7').hide();
    $('.container8').hide();
    $('.container9').hide();
    $('.container10').hide();
    $('.container11').hide();
    $('.container12').hide();
    $('.container13').hide();
    $('.container14').hide();
    $('.container15').hide();
    $('.container16').hide();
    $('section').hide();


};
// fin fonction page produit


// Cliquer sur le panier
function cartShow() {

    $('.test').hide();
    $('.banner').hide();
    $('section').show()
    $('.container1').hide();
    $('.container2').hide();
    $('.container3').hide();
    $('.container4').hide();
    $('.container5').hide();
    $('.container6').hide();
    $('.container7').hide();
    $('.container8').hide();
    $('.container9').hide();
    $('.container10').hide();
    $('.container11').hide();
    $('.container12').hide();
    $('.container13').hide();
    $('.container14').hide();
    $('.container15').hide();
    $('.container16').hide();
};
// 


// debut  panier
if (document.readyState == 'chargement') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
// 
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
// Fonction qui simule l'achat, vide le panier et affiche un message 
function purchaseClicked() {
    alert('Nous vous remercions de votre commande !')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Cet article est deja dans votre panier')
            return
        }
    }
    // Création d'un panier dynamique qui recupere les infos des articles grace a ses classes
    var cartRowContents = `
        <div class="cart-item cart-column">
          
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">SUPPRIMER</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =   total+'€'
}

// Ici la fonction qui permet de calculer le cout total du panier et qui peremet une conversion avec la methode Math


// fin du panier





// filtres
// En fonction de la classe attribuée les casques seront visibles ou non sur la page 
$(".btn").click(function(){
    var attr = $(this).attr("data-li");

    $(".btn").removeClass("active");
    $(this).addClass("active");

    $(".item").hide();

    if(attr == "silence"){
        $("." + attr).show();
    }
    else if(attr == "sport"){
        $("." + attr).show();
    }
    else if(attr == "high-end"){
        $("." + attr).show();
    }
    else if(attr == "gaming"){
        $("." + attr).show();
    }
   
    else{
        $(".item").show();
    }
});
// fin des filtres 
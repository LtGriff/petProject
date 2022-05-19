// product shop page images

const shop = [
    {
      image: 'img/cat-food1.jpeg',
      price: '0.56', 
      description: "Purina Friskies Classic Paté Cat Food 5.5oz"
    },

  
    {
      image:
      price: 
      description:
    },
]

let postHTML = " ";
  
 
for (let i = 0; i < shop.length; i++) {
    let heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
    let image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
    let price = '<div><p>' + '<span class="price"> $' + shop[i].price + '</span>';
    let description = shop[i].description + '</p><a class="cart" href="#"><i class="fas fa-cart-plus"></i></a> <a class="view" href="#" target="_blank"> View Item</a></div></div>';
    let concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis;
  }
document.getElementById('market').innerHTML = postHTML;


const db = require("./config/db");
const Product = require("./models/Product");

const productos = [
  {
    name: "Aji de gallina",
    price: 340,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHnaN0frWeNNOoHm-3zaapRx-y_gb2FC9U8HkNt6aXjBi77QK&s",
    country: "Peru",
    description:
      "Chicken chili is a typical dish of Peruvian cuisine, specifically from the coast, which consists of a chili or thick cream with frayed chicken breast."
  },
  {
    name: "Lomo salteado",
    price: 300,
    img:
      "https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-jugoso.jpg",
    country: "Peru",
    description:
      "It is said to have an Inca influence, Spanish and especially from China, consists of beef, cooked rice and french fries. It is one of the most popularly consumed dishes in Peru."
  },
  {
    name: "Empanadas",
    price: 45,
    img:
      "https://t1.rg.ltmcdn.com/es/images/5/8/4/img_empanadas_de_carne_cortada_a_cuchillo_7485_600.jpg",
    country: "Argentina",
    description: "aaa"
  },
  {
    name: "Ravioles",
    price: 200,
    img: "http://biencasero.clarin.com/advf/imagenes/522748b9dbac2.jpg",
    country: "Argentina",
    description: "aaa"
  },
  {
    name: "taco salad tradicional",
    price: 150,
    img:
      "https://scm-assets.constant.co/scm/unilever/a6798e909fa57bfd19c3e7f00737e5d6/da9dcad5-93e1-41bf-b846-95e9c93a2632.jpg",
    country: "Mexico",
    description:
      "Tortilla shell layered with beans, seasoned ground beef, lettuce, cheese, salsa, guacamole, sour cream, garnished with pico de gallo & olive."
  },
  {
    name: "Burrito especial",
    price: 150,
    img:
      "https://www.goya.com/media/4141/chipotle-pork-burritos.jpg?quality=80",
    country: "Mexico",
    description:
      "Beef or chicken, beans, with ranchera sauce and melted cheese, our."
  },
  {
    name: "Nachos and creamy guacamole",
    price: 450,
    img:
      "https://unareceta.com/wp-content/uploads/2014/06/nachos-con-guacamole.jpg",
    country: "Mexico",
    description:
      "Tortilla chips topped with fresh avocados with tomatoes, onions, cilantro, chilies and spices."
  },
  {
    name: "Feijoada",
    price: 130,
    img:
      "https://images-gmi-pmc.edge-generalmills.com/8a38b3a2-6b88-4f0f-ae46-e39d7fd8dacf.jpg",
    country: "Brazil",
    description:
      "Is a dish made with beans and fresh pork or beef. In Brazil, it is usually made with black beans (feijoada à brasileira). The stew is best prepared over low heat in a thick clay pot."
  },
  {
    name: "Vatapa",
    price: 500,
    img:
      "http://www.hojetemfrango.com.br/wp-content/uploads/2019/02/shutterstock_1193208283.jpg",
    country: "Brazil",
    description:
      "Is an Afro-Brazilian dish made from bread, shrimp, coconut milk, finely ground peanuts and palm oil mashed into a creamy paste."
  }
];

Product.bulkCreate(productos).then(() => {
  console.log("created products");
});


const initialState = {
    products : [
        {
            id: 1, name: "Camera", image :"five.jpg", price: 85, discount:7, discountPrice : 85-7/100*85, quantity : 1, desc : "Caméra de surveillance d'intérieur HD 1080p, qui se branche sur une prise électrique, avec détection de mouvements et système audio bidirectionnel pour surveiller votre maison de jour comme de nuit."
        },
        {
            id: 2, name: "Nouvel Echo Dot", image :"four.jpg", price: 30, discount:2, discountPrice : 30-2/100*30, quantity : 1, desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel cumque sunt reiciendis laboriosam nisi! Facere sit, est itaque deleniti error in facilis porro! Labore eligendi odit officia exercitationem ratione?"
        },
        {
            id: 3, name: "Tablette Fire 7", image :"six.jpg", price:250.99, discount:20, discountPrice : 250-20/100*250.99, quantity : 2, desc : "Tablette Fire 7 d'Amazon : tout ce dont vous avez besoin pour regarder Prime Video ou Netflix, rester connecté aux réseaux sociaux et jouer à des jeux amusants comme Candy Crush Saga."
        },
        {
            id: 4, name: "STRONG SRT32 HD TV LED", image :"seven.jpg", price: 199, discount:15, discountPrice : 199-15/100*199, quantity : 2, desc : "TV LED avec diagonale d'écran 80 cm (32 pouces), noir, dimensions sans pieds en cm (LxPxH) 73x8,3x42,7 , dimensions avec pieds en cm (LxPxH) 73x16,1x46,9. Poids avec pieds 3,7 kg et 3,6 Kg sans pieds."
        }
        , {
            id: 5, name: "Montre Connectée Femme", image :"nine.jpg", price: 89.90, discount:12, discountPrice : 89.90-12/100*89.90, quantity : 2, desc : "[Super Léger et Mince] Doté d'un verre 2,5D incurvé pour mettre en valeur vos tenues les plus tendance, le design sans frontière1 de GTS 2 mini montre connectée a un poids léger de 19,5g et une épaisseur de 8,95mm (sans la base du capteur), ainsi qu'un bracelet en silicone doux pour la peau."
        },
        {
            id: 6, name: "PS4 Slim Console", image :"two.jpg", price: 399, discount:10, discountPrice : 399-10/100*399, quantity : 2, desc : "PlayStation 4 SLIM Noir 500Go + 2 DualShock Noir 4 neuf V2, câble HDMI, câble USB, câble d'alimentation EU"
        },
        {
            id: 7, name: "Shadow and Bone", image :"three.jpg", price: 9, discount:5, discountPrice : 9-5/100*9, quantity : 2, desc : "Shadow and Bone (Anglais) Broché – 28 juin 2018"
        },
        {
            id: 8, name: "SADES SA816 Xbox One", image :"ten.jpg", price: 19.99, discount:6, discountPrice : 19.99-6/100*19.99, quantity : 2, desc : "【 son supérieur 】 splendide isolation acoustique ambiante. Le conducteur magnétique de néodyme de haute précision de 50mm vous apporte le champ sain vif, la clarté saine, le bruit de sentiment de choc."
        }
    ],
   product:[]
}

const ProductsReducer = (state = initialState, action) =>{
    switch(action.type){
    case "PRODUCT":
        return {...state, product : state.products.find(product => product.id === parseInt(action.id))}
    default :
        return state;
    }
}

export default ProductsReducer;
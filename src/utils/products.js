const products = [
  // FRUITS
  {
    name: 'Amora',
    price: 14.99,
    thumbnail: './images/products/fruits/amora.webp',
    category: 'fruits',
  },
  {
    name: 'Banana Prata',
    price: 2.00,
    thumbnail: './images/products/fruits/banana-prata.webp',
    category: 'fruits',
  },
  {
    name: 'Limão',
    price: 0.48,
    thumbnail: './images/products/fruits/limao.webp',
    category: 'fruits',
  },
  {
    name: 'Laranja',
    price: 1.25,
    thumbnail: './images/products/fruits/laranja.webp',
    category: 'fruits',
  },
  {
    name: 'Banana Nanica',
    price: 1.32,
    thumbnail: './images/products/fruits/banana-nanica.webp',
    category: 'fruits',
  },
  {
    name: 'Mamão Papaia',
    price: 8.44,
    thumbnail: './images/products/fruits/mamao-papaia.webp',
    category: 'fruits',
  },
  {
    name: 'Manga',
    price: 2.88,
    thumbnail: './images/products/fruits/manga.webp',
    category: 'fruits',
  },
  {
    name: 'Ameixa',
    price: 2.77,
    thumbnail: './images/products/fruits/ameixa.webp',
    category: 'fruits',
  },
  {
    name: 'Mexerica',
    price: 2.43,
    thumbnail: './images/products/fruits/mexerica.webp',
    category: 'fruits',
  },
  {
    name: 'Maçã',
    price: 2.66,
    thumbnail: './images/products/fruits/maça.webp',
    category: 'fruits',
  },
  {
    name: 'Maracujá',
    price: 6.00,
    thumbnail: './images/products/fruits/maracuja.webp',
    category: 'fruits',
  },
  {
    name: 'Morango',
    price: 8.99,
    thumbnail: './images/products/fruits/morango.webp',
    category: 'fruits',
  },
  {
    name: 'Melancia',
    price: 13.47,
    thumbnail: './images/products/fruits/melancia.webp',
    category: 'fruits',
  },
  {
    name: 'Uva Preta',
    price: 8.99,
    thumbnail: './images/products/fruits/uva.webp',
    category: 'fruits',
  },
  // GREENS
  {
    name: 'Brócolis',
    price: 8.49,
    thumbnail: './images/products/greens/brocolis.webp',
    category: 'greens',
  },
  {
    name: 'Couve-Flor',
    price: 9.99,
    thumbnail: './images/products/greens/couve-flor.webp',
    category: 'greens',
  },
  {
    name: 'Espinafre',
    price: 3.99,
    thumbnail: './images/products/greens/espinafre.webp',
    category: 'greens',
  },
  {
    name: 'Alface',
    price: 5.99,
    thumbnail: './images/products/greens/alface.webp',
    category: 'greens',
  },
  {
    name: 'Couve',
    price: 3.69,
    thumbnail: './images/products/greens/couve.webp',
    category: 'greens',
  },
  {
    name: 'Cheiro Verde',
    price: 3.99,
    thumbnail: './images/products/greens/cheiro-verde.webp',
    category: 'greens',
  },
  {
    name: 'Alho Poró',
    price: 4.49,
    thumbnail: './images/products/greens/alho-poro.webp',
    category: 'greens',
  },
  {
    name: 'Rúcula',
    price: 3.59,
    thumbnail: './images/products/greens/rucula.webp',
    category: 'greens',
  },
  {
    name: 'Repolho',
    price: 5.99,
    thumbnail: './images/products/greens/repolho.webp',
    category: 'greens',
  },
  {
    name: 'Agrião',
    price: 3.49,
    thumbnail: './images/products/greens/agriao.webp',
    category: 'greens',
  },
  {
    name: 'Cebolinha',
    price: 3.99,
    thumbnail: './images/products/greens/cebolinha.webp',
    category: 'greens',
  },
  // VEGETABLES
  {
    name: 'Batata Inglesa',
    price: 1.20,
    thumbnail: './images/products/vegetables/batata-inglesa.webp',
    category: 'vegetables',
  },
  {
    name: 'Tomate',
    price: 1.49,
    thumbnail: './images/products/vegetables/tomate.webp',
    category: 'vegetables',
  },
  {
    name: 'Cebola',
    price: 1.25,
    thumbnail: './images/products/vegetables/cebola.webp',
    category: 'vegetables',
  },
  {
    name: 'Cenoura',
    price: 1.28,
    thumbnail: './images/products/vegetables/cenoura.webp',
    category: 'vegetables',
  },
  {
    name: 'Alho',
    price: 2.09,
    thumbnail: './images/products/vegetables/alho.webp',
    category: 'vegetables',
  },
  {
    name: 'Batata Doce',
    price: 1.45,
    thumbnail: './images/products/vegetables/batata-doce.webp',
    category: 'vegetables',
  },
  {
    name: 'Batata Baroa',
    price: 2.88,
    thumbnail: './images/products/vegetables/batata-baroa.webp',
    category: 'vegetables',
  },
  {
    name: 'Abobrinha',
    price: 3.08,
    thumbnail: './images/products/vegetables/abobrinha.webp',
    category: 'vegetables',
  },
  {
    name: 'Inhame',
    price: 1.75,
    thumbnail: './images/products/vegetables/inhame.webp',
    category: 'vegetables',
  },
  {
    name: 'Chuchu',
    price: 1.92,
    thumbnail: './images/products/vegetables/chuchu.webp',
    category: 'vegetables',
  },
  {
    name: 'Beterraba',
    price: 1.47,
    thumbnail: './images/products/vegetables/beterraba.webp',
    category: 'vegetables',
  },
  {
    name: 'Berinjela',
    price: 2.10,
    thumbnail: './images/products/vegetables/berinjela.webp',
    category: 'vegetables',
  },
  {
    name: 'Pepino',
    price: 1.80,
    thumbnail: './images/products/vegetables/pepino.webp',
    category: 'vegetables',
  },
  {
    name: 'Tomate',
    price: 2.40,
    thumbnail: './images/products/vegetables/tomate.webp',
    category: 'vegetables',
  },
  {
    name: 'Aipim',
    price: 2.25,
    thumbnail: './images/products/vegetables/aipim.webp',
    category: 'vegetables',
  },
  {
    name: 'Pimentão Verde',
    price: 1.70,
    thumbnail: './images/products/vegetables/pimentao-verde.webp',
    category: 'vegetables',
  },
  {
    name: 'Pimentão Amarelo',
    price: 3.90,
    thumbnail: './images/products/vegetables/pimentao-amarelo.webp',
    category: 'vegetables',
  },
  {
    name: 'Abóbora',
    price: 3.84,
    thumbnail: './images/products/vegetables/abobora.webp',
    category: 'vegetables',
  },
  {
    name: 'Quiabo',
    price: 9.99,
    thumbnail: './images/products/vegetables/quiabo.webp',
    category: 'vegetables',
  },
  {
    name: 'Milho Verde',
    price: 9.09,
    thumbnail: './images/products/vegetables/milho-verde.webp',
    category: 'vegetables',
  },
  {
    name: 'Vagem',
    price: 14.99,
    thumbnail: './images/products/vegetables/vagem.webp',
    category: 'vegetables',
  },
  {
    name: 'Gengibre',
    price: 2.34,
    thumbnail: './images/products/vegetables/gengibre.webp',
    category: 'vegetables',
  },
  {
    name: 'Cogumelo',
    price: 11.99,
    thumbnail: './images/products/vegetables/cogumelo.webp',
    category: 'vegetables',
  },
  {
    name: 'Ervilha Congelada',
    price: 8.99,
    thumbnail: './images/products/vegetables/ervilha-congelada.webp',
    category: 'vegetables',
  },
  // ORGANICS
  {
    name: 'Leite de Aveia',
    price: 21.69,
    thumbnail: './images/products/organics/leite-de-aveia.webp',
    category: 'organics',
  },
  {
    name: 'Ovo Caipira 10un',
    price: 15.99,
    thumbnail: './images/products/organics/ovo-caipira.webp',
    category: 'organics',
  },
  {
    name: 'Bebida de Aveia Baunilha',
    price: 6.59,
    thumbnail: './images/products/organics/bebida-de-aveia-baunilha.webp',
    category: 'organics',
  },
  {
    name: 'Kombucha de Maçã',
    price: 15.99,
    thumbnail: './images/products/organics/kombucha.webp',
    category: 'organics',
  },
  {
    name: 'Bebida de Aveia Baunilha Sem Glúten',
    price: 22.49,
    thumbnail: './images/products/organics/bebida-de-aveia-sem-gluten.webp',
    category: 'organics',
  },
  {
    name: 'Arroz Orgânico',
    price: 16.29,
    thumbnail: './images/products/organics/arroz-organico.webp',
    category: 'organics',
  },
  {
    name: 'Café em Cápsula',
    price: 28.99,
    thumbnail: './images/products/organics/cafe-em-capsula.webp',
    category: 'organics',
  },
  {
    name: 'Papinha de Maçã',
    price: 13.49,
    thumbnail: './images/products/organics/papinha-de-maça.webp',
    category: 'organics',
  },
  {
    name: 'Macarrão Talharim',
    price: 17.99,
    thumbnail: './images/products/organics/macarrao-talharim.webp',
    category: 'organics',
  },
  {
    name: 'Molho Pesto',
    price: 42.99,
    thumbnail: './images/products/organics/molho-pesto.webp',
    category: 'organics',
  },
  {
    name: 'Ketchup',
    price: 23.99,
    thumbnail: './images/products/organics/ketchup.webp',
    category: 'organics',
  },
  {
    name: 'Isotônico Uva',
    price: 8.19,
    thumbnail: './images/products/organics/isotonico-uva.webp',
    category: 'organics',
  },
  // DRINKS
  {
    name: 'Água Minalba 1.5L',
    price: 2.89,
    thumbnail: './images/products/drinks/agua-minalba.webp',
    category: 'drinks',
  },
  {
    name: 'Água Crystal 1.5L',
    price: 1.99,
    thumbnail: './images/products/drinks/agua-crystal.webp',
    category: 'drinks',
  },
  {
    name: 'Cerveja Heineken 330ML',
    price: 5.99,
    thumbnail: './images/products/drinks/cerveja-heineken.webp',
    category: 'drinks',
  },
  {
    name: 'Coca-Cola Zero 2.25L',
    price: 8.79,
    thumbnail: './images/products/drinks/coca-zero.webp',
    category: 'drinks',
  },
  {
    name: 'Cerveja Heineken Lata 350ML',
    price: 4.99,
    thumbnail: './images/products/drinks/cerveja-heineken-lata.webp',
    category: 'drinks',
  },
  {
    name: 'Água de Coco 1L',
    price: 8.99,
    thumbnail: './images/products/drinks/agua-coco.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Uva 1.5L',
    price: 16.99,
    thumbnail: './images/products/drinks/suco-uva.webp',
    category: 'drinks',
  },
  {
    name: 'Coca-Cola Sem Açucar Lata 350ML',
    price: 3.79,
    thumbnail: './images/products/drinks/coca-sem-açucar.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Laranja 1L',
    price: 14.99,
    thumbnail: './images/products/drinks/suco-laranja.webp',
    category: 'drinks',
  },
  {
    name: 'Água Tônica Zero 350ML',
    price: 2.99,
    thumbnail: './images/products/drinks/agua-tonica-lata.webp',
    category: 'drinks',
  },
  {
    name: 'Água de Coco Natural 1L',
    price: 14.99,
    thumbnail: './images/products/drinks/agua-coco-natural.webp',
    category: 'drinks',
  },
  {
    name: 'Chá Matte Leão Zero 1.5L',
    price: 6.99,
    thumbnail: './images/products/drinks/cha-matte-leao-zero.webp',
    category: 'drinks',
  },
  {
    name: 'Suco Laranja Natural 1.7L',
    price: 23.99,
    thumbnail: './images/products/drinks/suco-laranja-natural.webp',
    category: 'drinks',
  },
  {
    name: 'Guaraná Antarctica Zero 350ML',
    price: 3.19,
    thumbnail: './images/products/drinks/guarana-antartica-zero.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Maçã Yakult 200ML',
    price: 4.29,
    thumbnail: './images/products/drinks/suco-maça-yakult.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Açaí 1L',
    price: 19.99,
    thumbnail: './images/products/drinks/suco-açai.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Auva Sem Açucar 200ML',
    price: 3.79,
    thumbnail: './images/products/drinks/suco-uva-sem-açucar.webp',
    category: 'drinks',
  },
  {
    name: 'Suco Verde 1L',
    price: 16.99,
    thumbnail: './images/products/drinks/suco-verde.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Melancia 1L',
    price: 13.99,
    thumbnail: './images/products/drinks/suco-melancia.webp',
    category: 'drinks',
  },
  {
    name: 'Suco de Goiaba 1L',
    price: 10.99,
    thumbnail: './images/products/drinks/suco-goiaba.webp',
    category: 'drinks',
  },
  {
    name: 'Cerveja Spaten Lata 350ML',
    price: 4.49,
    thumbnail: './images/products/drinks/cerveja-spaten.webp',
    category: 'drinks',
  },
  {
    name: 'Bebida Alcoólca Smirnoff Ice 275ML',
    price: 8.99,
    thumbnail: './images/products/drinks/smirnoff-ice.webp',
    category: 'drinks',
  },
  {
    name: 'Cerveja Brahma',
    price: 3.39,
    thumbnail: './images/products/drinks/cerveja-brahma.webp',
    category: 'drinks',
  },
  {
    name: 'Pão Francês',
    price: 1.25,
    thumbnail: './images/products/bakery/pao-frances.webp',
    category: 'bakery',
  },
  // BAKERY
  {
    name: 'Pão de Queijo',
    price: 2.40,
    thumbnail: './images/products/bakery/pao-de-queijo.webp',
    category: 'bakery',
  },
  {
    name: 'Pão de Forma Plus Vita 480g',
    price: 8.49,
    thumbnail: './images/products/bakery/pao-forma-plus-vita.webp',
    category: 'bakery',
  },
  {
    name: 'Pão de Forma Wickbold 500g',
    price: 13.49,
    thumbnail: './images/products/bakery/pao-forma-wickbold.webp',
    category: 'bakery',
  },
  {
    name: 'Bisnaguito Plus Vita 300g',
    price: 7.89,
    thumbnail: './images/products/bakery/bisnaguito-plus-vita.webp',
    category: 'bakery',
  },
  {
    name: 'Pão de Forma Seven Boys 450g',
    price: 6.99,
    thumbnail: './images/products/bakery/pao-forma-seven-boys.webp',
    category: 'bakery',
  },
  {
    name: 'Torrada Integral Banducco 142g ',
    price: 5.79,
    thumbnail: './images/products/bakery/torrada-banducco.webp',
    category: 'bakery',
  },
  {
    name: 'Pão Integral Castanha-Do-Pará E Quinoa 500g',
    price: 16.79,
    thumbnail: './images/products/bakery/pao-integral-castanha-do-para.webp',
    category: 'bakery',
  },
  {
    name: 'Torrada Banducco Multigrão',
    price: 5.79,
    thumbnail: './images/products/bakery/torrada-banducco-multigrao.webp',
    category: 'bakery',
  },
  {
    name: 'Pão de Leite',
    price: 12.38,
    thumbnail: './images/products/bakery/pao-de-leite.webp',
    category: 'bakery',
  },
  {
    name: 'Bisnaguinha Panco 300g',
    price: 9.89,
    thumbnail: './images/products/bakery/bisnaguinha-panco.webp',
    category: 'bakery',
  },
  {
    name: 'Madeleine Longa Paderrí Com Chocolate 200g',
    price: 11.99,
    thumbnail: './images/products/bakery/madeleine.webp',
    category: 'bakery',
  },
  {
    name: 'Sonho de Creme',
    price: 5.99,
    thumbnail: './images/products/bakery/sonho-de-creme.webp',
    category: 'bakery',
  },
];

products.forEach((product, index) => {
  const { category } = product;
  const categoryPrefix = category[0];
  return product.productId = `${categoryPrefix}-${index}`;
});

export default products;

const productos = [
    {
      id: 1,
      title: 'Draco Celestial',
      price: '5000',
      category: 'Monturas',
      stock: 10,
      description: 'Los primeros angeles de Avaloren llegaron montados por estos poderosos dracos, segun dicen sus huevos crecen en las tormentas donde se forjan las nubes.',
      image:
        'https://th.bing.com/th/id/OIP.OkwZLPcAY_A8vKpkEDS8nAAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      title: 'Aberrus',
      price: '2000',
      category: 'Armas',
      stock: 5,
      description: 'La espada esta viva, y siempre tiene hambre.',
      image:
        'https://staticdelivery.nexusmods.com/mods/110/images/56031-1-1405524190.png',
    },
    {
      id: 3,
      title: 'Placas de Cerberos',
      price: '3000',
      category: 'Armaduras',
      stock: 3,
      description: 'Colocarse esta armadura por primera vez quema y arde, pero una vez que el metal se funde con tu piel, sientes una comodidad expecional, y una fuerza gigantesca.',
      image:
        'https://th.bing.com/th/id/OIP.bcFbiOZTIx63gnnNIQMkNgAAAA?rs=1&pid=ImgDetMain',
    },
    
  ];


  //firebase
export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });


  export const getProduct = (id) => {
    return productos.find((prod) => prod.id == id);
  };

  export const getStock = (stock) => {
    return productos.find((prod) => prod.stock == stock);
  };



  export const getCategory = (category) => {
    return new Promise((resolve) => {
      const result = productos.filter((prod) => prod.category === category);
      resolve(result);
    });
  };
  
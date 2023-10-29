// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)


export const categories = [
    {
        id: 1,
        category: 'Cuisine'
    },

    {
        id:2,
        category: 'Price'
    },

    {
        id:3,
        category: 'Availability'
    },

    {
        id:4,
        category: 'Speed'
    }


]
export const Cuisine = [
    {
        id: 1,
        type: "Chinese",
    },
    {
        id: 2,
        type: "Japanese",
    },
    {
        id: 3,
        type: "Korean",
    },
    {
        id: 4,
        type: "Thai",
    },
    {
        id: 5,
        type: "Indian",
    },

    {
        id: 6,
        type: "Italian",
    },

    {
        id: 7,
        type: "French",
    },
  ]

  export const Price = [
    {
        id: 1,
        type: "$",
    },

    {
        id:2,
        type: "$$",
    },

    {
        id:3,
        type: "$$$",
    },

    {
        id:4,
        type: "$$$$",
    },

  ]

  export const Speed = [
    {
        id: 1,
        type: "Swift",
    },

    {
        id: 2,
        type: "Moderate",
    },

    {
        id: 3,
        type: "Leisurely"
    },
  ]

  export const Availability = [

    {
        id: 1,
        type: 'Open',
    },
    {
        id: 2,
        type: 'Closed',
    },
  ]


  
  export const restaurantItems = [
    {
      id: 1,
      name: 'Imm Thai Street Food',
      cuisineType: 'Thai',
      price: '$$',
      miles: '0.2 mi',
      stars: '4.5',
      image: require('../assets/images/immthai.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
    },
    
    {
      id: 2,
      name: 'Berkeley Thai House',
      cusineType: 'Thai',
      price: '$$',
      miles: '1.1 mi',
      stars: '4.3',
      image: require('../assets/images/Berkeleythai.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
    },
    
    {
        id: 3,
        name: 'Nikko Sushi',
        cusineType: 'Japanese',
        price: '$$$',
        miles: '0.7 mi',
        stars: '4.0',
        image: require('../assets/images/nikko.png'),
        desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
    {
      id: 4,
      name: 'Great China',
      cusineType: 'Chinese',
      price: '$$$',
      miles: '0.5 mi',
      stars: '3.5',
      image: require('../assets/images/greatchina.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
    {
      id: 5,
      name: 'Chengdu Style Restaurant',
      cusineType: 'Chinese',
      price: '$$',
      miles: '1.5 mi',
      stars: '4.7',
      image: require('../assets/images/chengdu.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },

    {
      id: 6,
      name: 'Crepe La Moi',
      cusineType: 'French',
      price: '$$',
      miles: '1.5 mi',
      stars: '4.7',
      image: require('../assets/images/chengdu.png'),
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
    
  
  ]
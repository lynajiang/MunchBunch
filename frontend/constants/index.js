// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)

export const cards = [
    {
        id: 1,
        name: "Eureka!",
        photoURL: "https://s3-media0.fl.yelpcdn.com/bphoto/_xWByD8LFF2pFiDDmFcmLw/348s.jpg",
        price: "$$",
        rating: "4.0",
        address: "2601 Center St",
        cuisine1: "American",
        cuisine2: "",
        cuisine3: "",
        review1: "test1",
        review2: "test2",
        review3: "test3",
        review4: "test4",
        review5: "test5",
        review6: "test6",
        review7: "test7",
        review8: "test8",
        review9: "test9",
        review10: "test10",
    },

    {
        id: 2,
        name: "NIHAO!",
        photoURL: "https://s3-media2.fl.yelpcdn.com/bphoto/JZyCHH5vbr4phHequQn-zA/o.jpg",
        price: "$$",
        rating: "4.0",
        address: "2601 Center St",
        cuisine1: "American",
        cuisine2: "Tex-Mexican",
        cuisine3: "Trying it's best",
        review1: "test1",
        review2: "test2",
        review3: "test3",
        review4: "test4",
        review5: "test5",
        review6: "test6",
        review7: "test7",
        review8: "test8",
        review9: "test9",
        review10: "test10",
    },
]
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
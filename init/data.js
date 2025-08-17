const sampleListings =  [
  {
    title: "Lake House",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 4033,
    location: "Goa",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 8423,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 2134,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 3635,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 2015,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Lake House",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 5326,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 2793,
    location: "Manali",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 3695,
    location: "Manali",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 9749,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 5971,
    location: "Manali",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 8434,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 2549,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 6952,
    location: "Leh",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 5129,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 7920,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 7726,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 2400,
    location: "Leh",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 2308,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 7620,
    location: "Goa",
    country: "India"
  },
  {
    title: "Forest Lodge",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 5630,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 2393,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 5996,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 5050,
    location: "Manali",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 6259,
    location: "Goa",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 8727,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 3369,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 4681,
    location: "Leh",
    country: "India"
  },
  {
    title: "Forest Lodge",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 5311,
    location: "Manali",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 4873,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 2999,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 9618,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 8815,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 3564,
    location: "Goa",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 8438,
    location: "Leh",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 3436,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 3546,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 2542,
    location: "Manali",
    country: "India"
  },
  {
    title: "Forest Lodge",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 5132,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 6871,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 2516,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 8056,
    location: "Goa",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 5294,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 7364,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 5428,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 2263,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 6797,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Forest Lodge",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 5411,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Desert Tent",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 4378,
    location: "Leh",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 6065,
    location: "Leh",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 7303,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 7938,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 8308,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 4630,
    location: "Goa",
    country: "India"
  },
  {
    title: "Forest Lodge",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 6927,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 5023,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 4062,
    location: "Manali",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 8785,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lake House",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 7530,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 4475,
    location: "Leh",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 6979,
    location: "Goa",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 4356,
    location: "Kerala",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 2204,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "A scenic villa with panoramic views.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 6284,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 9311,
    location: "Manali",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 5092,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 5437,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 3538,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 3449,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 8810,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 5930,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 3470,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 8263,
    location: "Manali",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 5782,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 7107,
    location: "Goa",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 2486,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1551524551-968d16a1b192",
    price: 5842,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Lake House",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 2631,
    location: "Manali",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 6581,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 8242,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 4877,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Enjoy the sounds of the river nearby.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 3639,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 3094,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 6876,
    location: "Shimla",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 5067,
    location: "Leh",
    country: "India"
  },
  {
    title: "Desert Tent",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 3882,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 5167,
    location: "Leh",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8a4d65b8a",
    price: 2428,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Lake House",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d4183043a",
    price: 3833,
    location: "Goa",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 7240,
    location: "Munnar",
    country: "India"
  },
  {
    title: "City Apartment",
    description: "Stay warm in a snowy retreat.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 5156,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "A unique desert experience.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    price: 8935,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Live the farm life in comfort.",
    image: "https://images.unsplash.com/photo-1533674689016-54f58c7401d7",
    price: 4275,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 5859,
    location: "Leh",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 7472,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Riverfront Cottage",
    description: "Relax and unwind near the water.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 3903,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Rustic Barn Stay",
    description: "Explore the city from this central location.",
    image: "https://images.unsplash.com/photo-1597090069090-e286d4d11883",
    price: 6798,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A cozy place with beautiful views.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 4553,
    location: "Goa",
    country: "India"
  },
  {
    title: "Beachside Bungalow",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 6371,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Desert Tent",
    description: "Peaceful home by the lake.",
    image: "https://images.unsplash.com/photo-1499696010184-73defc3b6a57",
    price: 4480,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "Surrounded by lush forests.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 4442,
    location: "Leh",
    country: "India"
  },
];

module.exports = { data: sampleListings };
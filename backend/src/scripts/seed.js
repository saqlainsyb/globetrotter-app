// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Destination = require('../models/destination');

const destinations = [
  {
    "city": "Paris",
    "country": "France",
    "clues": [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art."
    ],
    "fun_fact": [
      "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
      "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
    ],
    "trivia": [
      "This city is famous for its croissants and macarons. Bon appétit!",
      "Paris was originally a Roman city called Lutetia."
    ]
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "clues": [
      "This city has the busiest pedestrian crossing in the world.",
      "You can visit an entire district dedicated to anime, manga, and gaming."
    ],
    "fun_fact": [
      "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
      "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
    ],
    "trivia": [
      "The city has over 160,000 restaurants, more than any other city in the world.",
      "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
    ]
  },
  {
    "city": "New York",
    "country": "USA",
    "clues": [
      "Home to a green statue gifted by France in the 1800s.",
      "Nicknamed 'The Big Apple' and known for its Broadway theaters."
    ],
    "fun_fact": [
      "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
      "Times Square was once called Longacre Square before being renamed in 1904."
    ],
    "trivia": [
      "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
      "The Empire State Building has its own zip code: 10118."
    ]
  },
  {
    "city": "London",
    "country": "United Kingdom",
    "clues": [
      "A city where historic royal palaces sit alongside modern skyscrapers.",
      "Famous for its red double-decker buses and iconic black cabs."
    ],
    "fun_fact": [
      "London’s Big Ben is not the clock tower, but the bell inside it!",
      "The London Underground is the world's first metro system."
    ],
    "trivia": [
      "London hosts more than 170 museums, many of which offer free entry.",
      "It is said that the famous red phone boxes were designed to be visible even in fog."
    ]
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "clues": [
      "Known for its dynamic arts scene and modern history.",
      "A city that was once divided by a famous wall."
    ],
    "fun_fact": [
      "The Berlin Wall fell in 1989, symbolizing the end of the Cold War.",
      "Berlin is home to more than 180 museums, making it a cultural hub."
    ],
    "trivia": [
      "Berlin has over 1,000 bridges, more than Venice.",
      "The city is famous for its street art and vibrant nightlife."
    ]
  },
  {
    "city": "Madrid",
    "country": "Spain",
    "clues": [
      "This city is known for its lively plazas and late-night tapas.",
      "Home to one of the world's most famous art museums."
    ],
    "fun_fact": [
      "Madrid is the highest capital city in Europe at over 650 meters above sea level.",
      "The Prado Museum features masterpieces from renowned Spanish artists."
    ],
    "trivia": [
      "Madrid’s park, El Retiro, was once the royal family’s private garden.",
      "The city comes alive at night with numerous festivals and cultural events."
    ]
  },
  {
    "city": "Rome",
    "country": "Italy",
    "clues": [
      "A city that blends ancient ruins with vibrant street life.",
      "Famous for its historic amphitheater and mouthwatering cuisine."
    ],
    "fun_fact": [
      "Rome is often called the 'Eternal City' due to its long, rich history.",
      "The Colosseum could seat up to 50,000 spectators in ancient times."
    ],
    "trivia": [
      "Rome has over 900 churches, many of which are architectural marvels.",
      "The city’s fountains are a testament to its advanced ancient engineering."
    ]
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "clues": [
      "Home to a world-renowned opera house with a unique design.",
      "Famous for its beautiful harbor and vibrant beaches."
    ],
    "fun_fact": [
      "Sydney's Opera House took 14 years to build and is an iconic symbol of Australia.",
      "The harbor bridge is affectionately known as the 'Coathanger' by locals."
    ],
    "trivia": [
      "Sydney hosted the 2000 Summer Olympics, showcasing its modern infrastructure.",
      "The city has over 100 beaches along its extensive coastline."
    ]
  },
  {
    "city": "Beijing",
    "country": "China",
    "clues": [
      "A city where ancient palaces and modern skyscrapers coexist.",
      "Famous for a grand imperial palace complex."
    ],
    "fun_fact": [
      "The Forbidden City in Beijing has 980 buildings over 720,000 square meters.",
      "Beijing is known for its traditional Peking duck cuisine."
    ],
    "trivia": [
      "The city has a history spanning over 3,000 years.",
      "Beijing was the host of the 2008 Summer Olympics."
    ]
  },
  {
    "city": "Moscow",
    "country": "Russia",
    "clues": [
      "This city features an iconic onion-domed cathedral.",
      "The heart of Russia's political and cultural life."
    ],
    "fun_fact": [
      "Moscow's Kremlin is one of the oldest fortified complexes in the world.",
      "The Moscow Metro is renowned for its ornate, palace-like station designs."
    ],
    "trivia": [
      "Moscow experiences a phenomenon called 'White Nights' during the summer.",
      "It is one of the largest cities in the world by land area."
    ]
  },
  {
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "clues": [
      "Famous for its annual carnival and vibrant beach culture.",
      "Home to a towering statue overlooking the city."
    ],
    "fun_fact": [
      "The Christ the Redeemer statue is one of the New Seven Wonders of the World.",
      "Rio's carnival attracts millions of visitors every year."
    ],
    "trivia": [
      "The city is known for its samba music and dance.",
      "Rio de Janeiro hosted the 2016 Summer Olympics."
    ]
  },
  {
    "city": "Cape Town",
    "country": "South Africa",
    "clues": [
      "Nestled between mountains and the sea, offering stunning landscapes.",
      "Famous for its scenic harbor and vibrant cultural scene."
    ],
    "fun_fact": [
      "Table Mountain in Cape Town is one of the New Seven Natural Wonders of the World.",
      "The city is known for its diverse flora and fauna."
    ],
    "trivia": [
      "Cape Town is a melting pot of cultures and cuisines.",
      "It is a popular destination for adventure sports like paragliding and surfing."
    ]
  },
  {
    "city": "Dubai",
    "country": "United Arab Emirates",
    "clues": [
      "Known for its futuristic skyscrapers and luxurious shopping malls.",
      "Home to one of the tallest structures in the world."
    ],
    "fun_fact": [
      "The Burj Khalifa stands at over 800 meters tall.",
      "Dubai has turned its desert landscape into a global business hub."
    ],
    "trivia": [
      "The city hosts extravagant events and festivals year-round.",
      "Dubai's man-made islands are engineering marvels."
    ]
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "clues": [
      "A city-state known for its cleanliness and modern architecture.",
      "Famous for its lush, garden-filled urban spaces."
    ],
    "fun_fact": [
      "Singapore is one of the few city-states in the world.",
      "The Gardens by the Bay feature futuristic Supertrees that light up at night."
    ],
    "trivia": [
      "Despite its small size, Singapore is a global financial center.",
      "It is renowned for its multicultural cuisine."
    ]
  },
  {
    "city": "Los Angeles",
    "country": "USA",
    "clues": [
      "The heart of the entertainment industry with a famous sign on a hill.",
      "Known for its sprawling urban sprawl and sunny weather."
    ],
    "fun_fact": [
      "Hollywood, a district within LA, is synonymous with the film industry.",
      "Los Angeles is one of the most ethnically diverse cities in the United States."
    ],
    "trivia": [
      "The city has a rich history in music, film, and television.",
      "LA’s beaches are popular surfing and sunbathing destinations."
    ]
  },
  {
    "city": "Chicago",
    "country": "USA",
    "clues": [
      "Known for its impressive skyline and deep-dish pizza.",
      "A city that sits on the shores of a great lake."
    ],
    "fun_fact": [
      "Chicago is often called the 'Windy City' for its breezy conditions.",
      "The city is renowned for its architectural innovations."
    ],
    "trivia": [
      "Chicago has a vast network of parks and recreational areas.",
      "It played a major role in the development of modern skyscrapers."
    ]
  },
  {
    "city": "Toronto",
    "country": "Canada",
    "clues": [
      "Canada's largest city, known for its diverse neighborhoods.",
      "Famous for a towering, illuminated structure in its waterfront."
    ],
    "fun_fact": [
      "The CN Tower was once the world's tallest free-standing structure.",
      "Toronto is considered one of the world's most multicultural cities."
    ],
    "trivia": [
      "The city hosts numerous international film and cultural festivals.",
      "Toronto's waterfront offers scenic views of Lake Ontario."
    ]
  },
  {
    "city": "Vancouver",
    "country": "Canada",
    "clues": [
      "Surrounded by mountains and water, perfect for outdoor activities.",
      "Known for its film industry and eco-friendly urban design."
    ],
    "fun_fact": [
      "Vancouver consistently ranks among the world's most livable cities.",
      "The city is famous for its scenic seawall along the waterfront."
    ],
    "trivia": [
      "Vancouver hosted the 2010 Winter Olympics.",
      "Its diverse landscape offers opportunities for skiing, hiking, and kayaking."
    ]
  },
  {
    "city": "Mexico City",
    "country": "Mexico",
    "clues": [
      "A sprawling metropolis blending ancient and modern cultures.",
      "Home to historic ruins and a vibrant street food scene."
    ],
    "fun_fact": [
      "Mexico City was built on the ruins of the Aztec capital Tenochtitlan.",
      "It is one of the largest cities in the Western Hemisphere."
    ],
    "trivia": [
      "The city boasts over 150 museums and cultural centers.",
      "Its cuisine is a fusion of indigenous and Spanish influences."
    ]
  },
  {
    "city": "Buenos Aires",
    "country": "Argentina",
    "clues": [
      "Often called the 'Paris of South America' for its European flair.",
      "Famous for its tango music and dance."
    ],
    "fun_fact": [
      "Buenos Aires is known for its colorful neighborhoods like La Boca.",
      "The city has a rich literary history and vibrant arts scene."
    ],
    "trivia": [
      "It has one of the highest concentrations of theaters in the world.",
      "The city's architecture is a mix of old colonial and modern designs."
    ]
  },
  {
    "city": "Istanbul",
    "country": "Turkey",
    "clues": [
      "Straddling two continents, this city is rich in history and culture.",
      "Famous for its magnificent mosques and bustling bazaars."
    ],
    "fun_fact": [
      "Istanbul was historically known as Byzantium and later Constantinople.",
      "The city has over 3,000 years of history spanning several empires."
    ],
    "trivia": [
      "Its Grand Bazaar is one of the largest and oldest covered markets in the world.",
      "Istanbul offers a unique blend of European and Asian influences."
    ]
  },
  {
    "city": "Athens",
    "country": "Greece",
    "clues": [
      "A cradle of Western civilization with ancient ruins at every turn.",
      "Famous for its Acropolis and mythological heritage."
    ],
    "fun_fact": [
      "Athens is one of the world's oldest cities, with history spanning over 3,400 years.",
      "The city hosted the first modern Olympic Games in 1896."
    ],
    "trivia": [
      "Ancient philosophers like Socrates once walked its streets.",
      "Athens is celebrated for its contributions to art, philosophy, and governance."
    ]
  },
  {
    "city": "Cairo",
    "country": "Egypt",
    "clues": [
      "A city where ancient pyramids meet bustling modern life.",
      "Home to a world-famous collection of ancient monuments."
    ],
    "fun_fact": [
      "Cairo is near the Great Pyramids of Giza, one of the Seven Wonders of the Ancient World.",
      "It is known as 'the city of a thousand minarets' for its numerous mosques."
    ],
    "trivia": [
      "The city has been a center of learning and culture for centuries.",
      "Cairo's markets offer a glimpse into traditional Egyptian crafts."
    ]
  },
  {
    "city": "Mumbai",
    "country": "India",
    "clues": [
      "The heart of India's Bollywood film industry.",
      "A bustling metropolis on the Arabian Sea."
    ],
    "fun_fact": [
      "Mumbai is home to the famous Gateway of India monument.",
      "It is one of the world's largest and most populous cities."
    ],
    "trivia": [
      "The city features a mix of colonial architecture and modern high-rises.",
      "Mumbai's street food scene is a major draw for visitors."
    ]
  },
  {
    "city": "Delhi",
    "country": "India",
    "clues": [
      "A city that seamlessly blends ancient history with modern life.",
      "Famous for its historic monuments and vibrant bazaars."
    ],
    "fun_fact": [
      "Delhi has been the center of various empires in Indian history.",
      "The city is home to landmarks like the Red Fort and Qutub Minar."
    ],
    "trivia": [
      "Delhi offers an eclectic mix of culinary delights from street food to fine dining.",
      "Its markets are renowned for traditional handicrafts and textiles."
    ]
  },
  {
    "city": "Seoul",
    "country": "South Korea",
    "clues": [
      "A tech-savvy city where ancient palaces meet modern skyscrapers.",
      "Famous for its bustling shopping districts and K-pop culture."
    ],
    "fun_fact": [
      "Seoul is one of the world's leading technology hubs.",
      "The city is home to historic sites such as Gyeongbokgung Palace."
    ],
    "trivia": [
      "Seoul's cuisine, including kimchi and barbecue, is celebrated worldwide.",
      "The city has a rich tradition of art and design blending old and new."
    ]
  },
  {
    "city": "Hong Kong",
    "country": "Hong Kong",
    "clues": [
      "A vibrant city known for its skyline and deep harbor.",
      "Famous for its bustling markets and fusion cuisine."
    ],
    "fun_fact": [
      "Hong Kong was a British colony until 1997 and has a unique blend of cultures.",
      "Its Star Ferry offers picturesque views of the skyline."
    ],
    "trivia": [
      "The city is renowned for its skyscraper-filled harbor.",
      "Hong Kong is a major global financial center with a dynamic economy."
    ]
  },
  {
    "city": "Bangkok",
    "country": "Thailand",
    "clues": [
      "A city famous for ornate shrines and a vibrant street life.",
      "Known for its bustling markets and delicious street food."
    ],
    "fun_fact": [
      "Bangkok is often referred to as the 'City of Angels'.",
      "The city is known for its spectacular temples and palaces."
    ],
    "trivia": [
      "Bangkok's floating markets are a major attraction for visitors.",
      "It is a hub for culinary adventures in Southeast Asia."
    ]
  },
  {
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "clues": [
      "A modern city known for its impressive twin towers.",
      "Famous for its blend of Malay, Chinese, and Indian cultures."
    ],
    "fun_fact": [
      "The Petronas Twin Towers were the tallest buildings in the world from 1998 to 2004.",
      "Kuala Lumpur is a melting pot of diverse cultural influences."
    ],
    "trivia": [
      "The city is known for its vibrant street food and night markets.",
      "KL's shopping districts offer everything from high-end brands to local crafts."
    ]
  },
  {
    "city": "Jakarta",
    "country": "Indonesia",
    "clues": [
      "A bustling capital known for its mix of modernity and tradition.",
      "Famous for its vibrant markets and cultural landmarks."
    ],
    "fun_fact": [
      "Jakarta is one of the fastest-growing urban centers in Southeast Asia.",
      "The city is an important hub for trade and culture in Indonesia."
    ],
    "trivia": [
      "Jakarta experiences a tropical climate with high humidity year-round.",
      "It is a gateway to exploring Indonesia’s diverse islands."
    ]
  },
  {
    "city": "Lima",
    "country": "Peru",
    "clues": [
      "A coastal city known for its rich history and culinary scene.",
      "Famous for its blend of colonial architecture and modern life."
    ],
    "fun_fact": [
      "Lima was once the center of the Spanish Viceroyalty in South America.",
      "The city is known for its innovative gastronomic scene."
    ],
    "trivia": [
      "Lima's historic center is a UNESCO World Heritage Site.",
      "The city offers an exciting mix of pre-Columbian and colonial influences."
    ]
  },
  {
    "city": "Santiago",
    "country": "Chile",
    "clues": [
      "Nestled between mountains, this city is known for its vibrant art scene.",
      "A modern metropolis with a rich historical backdrop."
    ],
    "fun_fact": [
      "Santiago is surrounded by the Andes, offering spectacular views.",
      "The city has a growing reputation as a cultural hub in South America."
    ],
    "trivia": [
      "Santiago hosts numerous festivals celebrating its arts and music.",
      "The city is known for its dynamic blend of tradition and modernity."
    ]
  },
  {
    "city": "Nairobi",
    "country": "Kenya",
    "clues": [
      "A city that serves as the gateway to African safaris.",
      "Known for its national park located right on its outskirts."
    ],
    "fun_fact": [
      "Nairobi National Park is the only national park in the world within a capital city.",
      "The city is a major hub for wildlife conservation."
    ],
    "trivia": [
      "Nairobi is known as 'Green City in the Sun' for its lush landscapes.",
      "The city hosts international conferences on environmental issues."
    ]
  },
  {
    "city": "Accra",
    "country": "Ghana",
    "clues": [
      "A coastal city known for its vibrant arts and music scene.",
      "Famous for its colorful markets and historical sites."
    ],
    "fun_fact": [
      "Accra is one of West Africa's fastest growing cities.",
      "It is known for its rich tradition of drumming and dance."
    ],
    "trivia": [
      "The city offers a blend of colonial and modern architecture.",
      "Accra’s street art and sculptures are celebrated by locals and visitors alike."
    ]
  },
  {
    "city": "Oslo",
    "country": "Norway",
    "clues": [
      "A city surrounded by forests and fjords, known for its green spaces.",
      "Famous for its modern design and maritime heritage."
    ],
    "fun_fact": [
      "Oslo consistently ranks among the world's most environmentally friendly cities.",
      "The city has a rich history dating back to the Viking Age."
    ],
    "trivia": [
      "Oslo’s Opera House is designed to resemble a glacier sliding into the fjord.",
      "The city offers numerous museums dedicated to its maritime past."
    ]
  },
  {
    "city": "Stockholm",
    "country": "Sweden",
    "clues": [
      "Built on 14 islands, this city is known for its beautiful waterways.",
      "A hub for innovation, design, and clean energy."
    ],
    "fun_fact": [
      "Stockholm is often referred to as the 'Venice of the North'.",
      "The city was the first in the world to offer free public transportation on certain days."
    ],
    "trivia": [
      "Stockholm boasts a rich history with well-preserved medieval streets.",
      "It is home to one of the best-preserved old towns in Europe."
    ]
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "clues": [
      "A city famous for its cycling culture and fairy-tale charm.",
      "Known for its vibrant harbor and design scene."
    ],
    "fun_fact": [
      "Copenhagen is consistently ranked as one of the happiest cities in the world.",
      "The city is home to the world-famous statue of The Little Mermaid."
    ],
    "trivia": [
      "It has an extensive network of cycle paths making biking a popular mode of transport.",
      "Copenhagen's culinary scene is known for its innovative Nordic cuisine."
    ]
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "clues": [
      "A coastal city known for its modern architecture and saunas.",
      "Famous for its design district and innovative spirit."
    ],
    "fun_fact": [
      "Helsinki was named the World Design Capital in 2012.",
      "The city’s sauna culture is an integral part of Finnish life."
    ],
    "trivia": [
      "Helsinki is known for its numerous islands and green spaces.",
      "The city’s public transportation is both efficient and eco-friendly."
    ]
  },
  {
    "city": "Vienna",
    "country": "Austria",
    "clues": [
      "A city renowned for its imperial palaces and classical music heritage.",
      "Famous for its coffee houses and vibrant arts scene."
    ],
    "fun_fact": [
      "Vienna was home to many famous classical composers like Mozart and Beethoven.",
      "The city’s historic center is a UNESCO World Heritage site."
    ],
    "trivia": [
      "Vienna is often ranked as one of the world's most livable cities.",
      "Its traditional coffee houses have been meeting spots for intellectuals for centuries."
    ]
  },
  {
    "city": "Zurich",
    "country": "Switzerland",
    "clues": [
      "A global financial hub known for its pristine lakes and mountains.",
      "Famous for its high quality of life and efficient public services."
    ],
    "fun_fact": [
      "Zurich regularly tops global quality-of-life surveys.",
      "The city is a center for banking and finance in Europe."
    ],
    "trivia": [
      "Zurich’s Old Town is filled with medieval buildings and narrow alleys.",
      "It is known for its chocolate and luxury watches."
    ]
  },
  {
    "city": "Brussels",
    "country": "Belgium",
    "clues": [
      "The political heart of Europe with a mix of medieval and modern architecture.",
      "Famous for its delicious waffles and chocolates."
    ],
    "fun_fact": [
      "Brussels hosts major European Union institutions.",
      "The city has a rich tradition of comic art."
    ],
    "trivia": [
      "Its Grand Place is considered one of the most beautiful squares in Europe.",
      "Brussels is known for its lively street festivals and markets."
    ]
  },
  {
    "city": "Amsterdam",
    "country": "Netherlands",
    "clues": [
      "A city crisscrossed by canals and known for its vibrant art scene.",
      "Famous for its historical houses and liberal culture."
    ],
    "fun_fact": [
      "Amsterdam has more than 100 kilometers of canals.",
      "The city is home to the Van Gogh Museum and Anne Frank House."
    ],
    "trivia": [
      "Bicycles outnumber people in Amsterdam.",
      "The city’s tulip season attracts visitors from around the world."
    ]
  },
  {
    "city": "Lisbon",
    "country": "Portugal",
    "clues": [
      "A coastal city known for its colorful buildings and historic trams.",
      "Famous for its soulful Fado music and scenic viewpoints."
    ],
    "fun_fact": [
      "Lisbon is one of the oldest cities in Western Europe.",
      "The city's iconic yellow trams have been in operation since the early 1900s."
    ],
    "trivia": [
      "Lisbon is built on seven hills, offering panoramic views at every turn.",
      "It has a rich maritime history as a launching point for explorers."
    ]
  },
  {
    "city": "Dublin",
    "country": "Ireland",
    "clues": [
      "A lively city known for its literary history and friendly pubs.",
      "Famous for its rich musical traditions and historical castles."
    ],
    "fun_fact": [
      "Dublin is the birthplace of famous writers such as James Joyce and W.B. Yeats.",
      "The city is known for its cozy, historic pubs."
    ],
    "trivia": [
      "Dublin’s Temple Bar district is renowned for its nightlife.",
      "It hosts many annual literary festivals celebrating its cultural heritage."
    ]
  },
  {
    "city": "Edinburgh",
    "country": "United Kingdom",
    "clues": [
      "A city steeped in history with a famous annual festival.",
      "Home to a majestic castle that dominates its skyline."
    ],
    "fun_fact": [
      "Edinburgh hosts one of the world's largest arts festivals every August.",
      "The city’s Royal Mile connects the castle to the Holyrood Palace."
    ],
    "trivia": [
      "Edinburgh’s Old Town is a UNESCO World Heritage Site.",
      "It is renowned for its literary connections and historic streets."
    ]
  },
  {
    "city": "Prague",
    "country": "Czech Republic",
    "clues": [
      "A fairy-tale city known for its Gothic architecture and charming bridges.",
      "Famous for its astronomical clock and cobblestone streets."
    ],
    "fun_fact": [
      "Prague's historic center is one of the best preserved in Europe.",
      "The city has been a cultural and political hub in Central Europe for centuries."
    ],
    "trivia": [
      "The Charles Bridge is a must-see landmark in Prague.",
      "Its vibrant arts scene attracts visitors from all over the world."
    ]
  },
  {
    "city": "Warsaw",
    "country": "Poland",
    "clues": [
      "A city that rose from the ashes of war to become a modern metropolis.",
      "Known for its resilient spirit and dynamic cultural scene."
    ],
    "fun_fact": [
      "Warsaw was almost completely rebuilt after World War II.",
      "The city is a blend of historic sites and contemporary architecture."
    ],
    "trivia": [
      "Warsaw is known for its beautiful parks and green spaces.",
      "It has a lively music and arts community."
    ]
  },
  {
    "city": "Budapest",
    "country": "Hungary",
    "clues": [
      "Divided by a majestic river, this city is famed for its thermal baths.",
      "Known for its stunning architecture and vibrant nightlife."
    ],
    "fun_fact": [
      "Budapest is actually two cities, Buda and Pest, separated by the Danube.",
      "The city is famous for its natural hot springs and baths."
    ],
    "trivia": [
      "Budapest’s parliament building is one of the largest in Europe.",
      "It is known for its ruin bars and lively cultural festivals."
    ]
  },
  {
    "city": "Bucharest",
    "country": "Romania",
    "clues": [
      "A city that blends historical architecture with a burgeoning modern vibe.",
      "Famous for its wide avenues and impressive communist-era buildings."
    ],
    "fun_fact": [
      "Bucharest is sometimes called 'Little Paris' due to its elegant architecture.",
      "The city features a mix of historic and modern landmarks."
    ],
    "trivia": [
      "Bucharest’s Old Town is a lively area filled with cafes and bars.",
      "It has a rich cultural scene with numerous theaters and museums."
    ]
  },
  {
    "city": "Sofia",
    "country": "Bulgaria",
    "clues": [
      "An ancient city nestled at the foot of a mountain range.",
      "Famous for its mix of Eastern and Western cultural influences."
    ],
    "fun_fact": [
      "Sofia is one of the oldest cities in Europe, with a history spanning over 2,400 years.",
      "The city features a blend of Roman, Byzantine, and Ottoman architecture."
    ],
    "trivia": [
      "Sofia is known for its numerous mineral springs.",
      "It has a vibrant café culture and bustling street life."
    ]
  },
  {
    "city": "Belgrade",
    "country": "Serbia",
    "clues": [
      "Located at the confluence of two rivers, this city has a storied past.",
      "Famous for its bohemian quarters and lively nightlife."
    ],
    "fun_fact": [
      "Belgrade has been an important crossroads of Eastern and Western cultures.",
      "The city’s fortress offers panoramic views over the Danube."
    ],
    "trivia": [
      "Belgrade hosts a famous summer music festival attracting international acts.",
      "It is known for its resilient spirit and rich historical heritage."
    ]
  },
  {
    "city": "Zagreb",
    "country": "Croatia",
    "clues": [
      "A charming city with a mix of Austro-Hungarian architecture and modern vibrancy.",
      "Famous for its lively street markets and cultural events."
    ],
    "fun_fact": [
      "Zagreb is the cultural and political center of Croatia.",
      "The city features many historic buildings and vibrant art scenes."
    ],
    "trivia": [
      "It is known for its annual film and music festivals.",
      "Zagreb’s parks and green spaces are popular with locals and tourists alike."
    ]
  },
  {
    "city": "Ljubljana",
    "country": "Slovenia",
    "clues": [
      "A small capital known for its green spaces and friendly atmosphere.",
      "Famous for its picturesque river and charming bridges."
    ],
    "fun_fact": [
      "Ljubljana was awarded the European Green Capital title in 2016.",
      "The city’s castle overlooks a beautifully preserved old town."
    ],
    "trivia": [
      "It is known for its relaxed pace and vibrant café culture.",
      "Ljubljana regularly hosts creative festivals and cultural events."
    ]
  },
  {
    "city": "Tallinn",
    "country": "Estonia",
    "clues": [
      "A medieval city with well-preserved walls and towers.",
      "Famous for its digital innovation and startup culture."
    ],
    "fun_fact": [
      "Tallinn's Old Town is one of the best preserved in Europe.",
      "The city is a leader in digital governance and e-residency programs."
    ],
    "trivia": [
      "Tallinn offers a blend of medieval charm and modern technology.",
      "Its cobblestone streets are a major draw for tourists."
    ]
  },
  {
    "city": "Riga",
    "country": "Latvia",
    "clues": [
      "A city known for its art nouveau architecture and lively cultural scene.",
      "Famous for its historic center and vibrant festivals."
    ],
    "fun_fact": [
      "Riga has one of the largest collections of art nouveau buildings in the world.",
      "The city is a cultural hub in the Baltic region."
    ],
    "trivia": [
      "Riga's old town is filled with charming cafes and historic sites.",
      "It is known for its rich history and modern cultural events."
    ]
  },
  {
    "city": "Vilnius",
    "country": "Lithuania",
    "clues": [
      "A city with a baroque old town and a creative modern vibe.",
      "Famous for its eclectic mix of historical architecture."
    ],
    "fun_fact": [
      "Vilnius is one of the largest baroque old towns in Eastern Europe.",
      "The city has a thriving arts and culture scene."
    ],
    "trivia": [
      "It hosts many cultural festivals throughout the year.",
      "Vilnius is known for its cobblestone streets and quaint neighborhoods."
    ]
  },
  {
    "city": "Reykjavik",
    "country": "Iceland",
    "clues": [
      "The northernmost capital city, known for its geothermal spas.",
      "Famous for its vibrant arts scene and quirky architecture."
    ],
    "fun_fact": [
      "Reykjavik is built almost entirely on geothermal energy.",
      "The city has a thriving music and arts community despite its small size."
    ],
    "trivia": [
      "It is a gateway to Iceland’s natural wonders, including geysers and volcanoes.",
      "Reykjavik’s colorful buildings are a treat for the eyes."
    ]
  },
  {
    "city": "Doha",
    "country": "Qatar",
    "clues": [
      "A rapidly growing city in the Middle East with futuristic architecture.",
      "Famous for its cultural museums and desert surroundings."
    ],
    "fun_fact": [
      "Doha is transforming quickly with major global investments in infrastructure.",
      "The city hosts world-class museums, including the Museum of Islamic Art."
    ],
    "trivia": [
      "It is set to host several international sporting events.",
      "Doha's skyline is a mix of traditional and ultra-modern designs."
    ]
  },
  {
    "city": "Manama",
    "country": "Bahrain",
    "clues": [
      "A small capital known for its blend of tradition and modernity.",
      "Famous for its ancient forts and modern skyscrapers."
    ],
    "fun_fact": [
      "Manama has a rich history as a trading port in the Persian Gulf.",
      "The city is known for its bustling souks and luxury malls."
    ],
    "trivia": [
      "It plays a key role in the regional finance sector.",
      "Manama’s cultural festivals attract visitors from across the Middle East."
    ]
  },
  {
    "city": "Amman",
    "country": "Jordan",
    "clues": [
      "A city with a rich history dating back to ancient civilizations.",
      "Famous for its hilltop citadel and modern urban vibe."
    ],
    "fun_fact": [
      "Amman is one of the oldest continuously inhabited cities in the world.",
      "The city is known for its blend of ancient ruins and contemporary life."
    ],
    "trivia": [
      "Its local cuisine reflects influences from both the Middle East and the Mediterranean.",
      "Amman’s markets are a vibrant mix of modern and traditional goods."
    ]
  },
  {
    "city": "Beirut",
    "country": "Lebanon",
    "clues": [
      "A city known for its resilient spirit and vibrant cultural scene.",
      "Famous for its mix of modern architecture and ancient ruins."
    ],
    "fun_fact": [
      "Beirut has been called the 'Paris of the Middle East' for its rich culture.",
      "The city has a longstanding tradition of music and arts."
    ],
    "trivia": [
      "Its cuisine, blending Mediterranean and Middle Eastern flavors, is renowned worldwide.",
      "Beirut is known for its lively nightlife and historic cafes."
    ]
  },
  {
    "city": "Tel Aviv",
    "country": "Israel",
    "clues": [
      "A modern coastal city known for its vibrant nightlife and beaches.",
      "Famous for its innovative tech scene and cultural festivals."
    ],
    "fun_fact": [
      "Tel Aviv is often referred to as 'the city that never sleeps'.",
      "It is one of the leading technology hubs in the Middle East."
    ],
    "trivia": [
      "The city’s Bauhaus architecture has earned it a UNESCO designation.",
      "Tel Aviv’s beachfront promenade is a hotspot for locals and tourists."
    ]
  },
  {
    "city": "Casablanca",
    "country": "Morocco",
    "clues": [
      "A bustling port city with a blend of modern and art deco architecture.",
      "Famous for its ties to classic cinema and vibrant markets."
    ],
    "fun_fact": [
      "Casablanca is the largest city in Morocco and a major economic center.",
      "The city gained fame from the classic film 'Casablanca'."
    ],
    "trivia": [
      "It features a mix of modern skyscrapers and historic mosques.",
      "Casablanca is known for its dynamic arts and music scene."
    ]
  },
  {
    "city": "Algiers",
    "country": "Algeria",
    "clues": [
      "A Mediterranean city with a rich mix of French colonial and Arab influences.",
      "Famous for its whitewashed buildings and scenic coastal views."
    ],
    "fun_fact": [
      "Algiers is often called 'Alger la Blanche' (Algiers the White) due to its striking architecture.",
      "The city has a blend of ancient and modern influences."
    ],
    "trivia": [
      "Its historic Casbah is a UNESCO World Heritage Site.",
      "Algiers is known for its vibrant arts and cultural festivals."
    ]
  },
  {
    "city": "Tunis",
    "country": "Tunisia",
    "clues": [
      "A city that reflects a rich blend of ancient history and modern Mediterranean culture.",
      "Famous for its ancient ruins and bustling souks."
    ],
    "fun_fact": [
      "Tunis is home to the ancient ruins of Carthage.",
      "The city has a vibrant medina that is a UNESCO World Heritage Site."
    ],
    "trivia": [
      "It is known for its colorful markets and traditional crafts.",
      "Tunis offers a mix of historic sites and modern amenities."
    ]
  },
  {
    "city": "Dakar",
    "country": "Senegal",
    "clues": [
      "A coastal city known for its dynamic music scene and rich cultural heritage.",
      "Famous for its vibrant markets and scenic Atlantic views."
    ],
    "fun_fact": [
      "Dakar is a cultural hub in West Africa with a thriving arts scene.",
      "The city is known for its energetic music and dance traditions."
    ],
    "trivia": [
      "It has hosted several international music festivals.",
      "Dakar is a melting pot of cultures and culinary traditions."
    ]
  },
  {
    "city": "Luanda",
    "country": "Angola",
    "clues": [
      "A coastal capital known for its dramatic skyline and vibrant culture.",
      "Famous for its mix of modern architecture and historical landmarks."
    ],
    "fun_fact": [
      "Luanda is one of the most expensive cities in the world for expatriates.",
      "The city has undergone rapid modernization in recent decades."
    ],
    "trivia": [
      "It is a key economic center in Angola.",
      "Luanda’s cultural festivals celebrate traditional Angolan music and dance."
    ]
  },
  {
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "clues": [
      "A city rich in history and known as the political capital of Africa.",
      "Famous for its unique blend of ancient traditions and modern development."
    ],
    "fun_fact": [
      "Addis Ababa is home to the African Union headquarters.",
      "The city is known for its diverse cultural heritage."
    ],
    "trivia": [
      "It is often referred to as the political capital of Africa.",
      "Addis Ababa has a vibrant arts and music scene."
    ]
  },
  {
    "city": "Kampala",
    "country": "Uganda",
    "clues": [
      "A lively city known for its friendly locals and bustling markets.",
      "Famous for its rolling hills and cultural vibrancy."
    ],
    "fun_fact": [
      "Kampala is built on seven hills, similar to Rome.",
      "The city has a rich tradition of music and storytelling."
    ],
    "trivia": [
      "It is a key cultural and economic center in East Africa.",
      "Kampala’s vibrant street life is a major draw for visitors."
    ]
  },
  {
    "city": "Harare",
    "country": "Zimbabwe",
    "clues": [
      "A city that serves as the gateway to Zimbabwe's natural wonders.",
      "Known for its expansive gardens and modern art scene."
    ],
    "fun_fact": [
      "Harare is known as the 'City of Trees' due to its abundant greenery.",
      "The city has a thriving market for local art and crafts."
    ],
    "trivia": [
      "It is the political and economic center of Zimbabwe.",
      "Harare’s museums showcase the country’s rich cultural heritage."
    ]
  },
  {
    "city": "Johannesburg",
    "country": "South Africa",
    "clues": [
      "A bustling metropolis known for its history and dynamic urban culture.",
      "Famous for its museums and vibrant art scene."
    ],
    "fun_fact": [
      "Johannesburg is often called the 'City of Gold' due to its mining history.",
      "The city has a deep and transformative history rooted in the struggle against apartheid."
    ],
    "trivia": [
      "It is a major economic hub in Africa.",
      "Johannesburg offers a rich blend of historical landmarks and modern attractions."
    ]
  },
  {
    "city": "Perth",
    "country": "Australia",
    "clues": [
      "A sunny coastal city known for its laid-back vibe and expansive beaches.",
      "Famous for its outdoor lifestyle and natural beauty."
    ],
    "fun_fact": [
      "Perth is one of the most isolated major cities in the world.",
      "The city is renowned for its pristine beaches and clear skies."
    ],
    "trivia": [
      "Perth’s parks and gardens are popular with locals.",
      "It serves as a gateway to exploring Western Australia’s natural wonders."
    ]
  },
  {
    "city": "Auckland",
    "country": "New Zealand",
    "clues": [
      "A city surrounded by water and dotted with volcanic cones.",
      "Famous for its sailing culture and vibrant multicultural scene."
    ],
    "fun_fact": [
      "Auckland is known as the 'City of Sails' due to its maritime activities.",
      "The city has a unique blend of Polynesian and European cultures."
    ],
    "trivia": [
      "Its harbor is one of the busiest in the Southern Hemisphere.",
      "Auckland is a popular starting point for exploring New Zealand's natural landscapes."
    ]
  },
  {
    "city": "Wellington",
    "country": "New Zealand",
    "clues": [
      "A compact capital city known for its arts scene and waterfront views.",
      "Famous for its creative vibe and historic cable car."
    ],
    "fun_fact": [
      "Wellington is often dubbed the cultural capital of New Zealand.",
      "The city’s film industry is renowned worldwide."
    ],
    "trivia": [
      "It boasts a vibrant café culture and creative community.",
      "Wellington’s scenic harbor is a magnet for artists and filmmakers."
    ]
  },
  {
    "city": "Christchurch",
    "country": "New Zealand",
    "clues": [
      "A city known for its English heritage and stunning gardens.",
      "Famous for its rebuilding efforts after major earthquakes."
    ],
    "fun_fact": [
      "Christchurch is often called the 'Garden City' of New Zealand.",
      "The city has undergone a remarkable transformation since the earthquakes."
    ],
    "trivia": [
      "It is known for its innovative urban renewal projects.",
      "Christchurch offers a blend of traditional charm and modern design."
    ]
  },
  {
    "city": "Manila",
    "country": "Philippines",
    "clues": [
      "A bustling capital known for its rich history and vibrant street life.",
      "Famous for its Spanish colonial architecture and modern skyscrapers."
    ],
    "fun_fact": [
      "Manila has a rich cultural heritage influenced by centuries of colonial rule.",
      "The city is known for its colorful jeepneys and lively markets."
    ],
    "trivia": [
      "Manila is a major hub for commerce and culture in Southeast Asia.",
      "Its historical sites attract visitors interested in the Philippines' past."
    ]
  },
  {
    "city": "Ho Chi Minh City",
    "country": "Vietnam",
    "clues": [
      "A vibrant city known for its French colonial landmarks and bustling streets.",
      "Famous for its delicious street food and dynamic markets."
    ],
    "fun_fact": [
      "Ho Chi Minh City was formerly known as Saigon.",
      "The city is a major economic center in Vietnam."
    ],
    "trivia": [
      "It offers a fascinating blend of old and new architecture.",
      "The city’s markets are a paradise for food lovers and bargain hunters."
    ]
  },
  {
    "city": "Hoi An",
    "country": "Vietnam",
    "clues": [
      "A charming town known for its well-preserved ancient architecture.",
      "Famous for its lantern-lit evenings and riverside ambiance."
    ],
    "fun_fact": [
      "Hoi An is a UNESCO World Heritage Site known for its historic buildings.",
      "The town is famous for its tailor shops and traditional crafts."
    ],
    "trivia": [
      "It is celebrated for its culinary specialties, including local noodles.",
      "Hoi An’s old town is a major draw for photographers and travelers."
    ]
  },
  {
    "city": "Colombo",
    "country": "Sri Lanka",
    "clues": [
      "A coastal city with a blend of colonial charm and modern development.",
      "Famous for its bustling markets and vibrant cultural scene."
    ],
    "fun_fact": [
      "Colombo is the commercial capital of Sri Lanka.",
      "The city offers a unique mix of Eastern and Western influences."
    ],
    "trivia": [
      "It has a rich history as a trading port in the Indian Ocean.",
      "Colombo’s culinary scene reflects its diverse cultural heritage."
    ]
  },
  {
    "city": "Dhaka",
    "country": "Bangladesh",
    "clues": [
      "A densely populated city known for its vibrant street life and rich culture.",
      "Famous for its historic mosques and bustling bazaars."
    ],
    "fun_fact": [
      "Dhaka is one of the most densely populated cities in the world.",
      "The city is renowned for its textile and garment industries."
    ],
    "trivia": [
      "Its rickshaws are a colorful and essential part of city life.",
      "Dhaka is a major cultural and economic center in South Asia."
    ]
  },
  {
    "city": "Karachi",
    "country": "Pakistan",
    "clues": [
      "A major port city known for its vibrant bazaars and coastal views.",
      "Famous for its rich history and diverse cultural heritage."
    ],
    "fun_fact": [
      "Karachi is the largest city in Pakistan by population.",
      "The city is a hub for trade, finance, and industry in the region."
    ],
    "trivia": [
      "It features a mix of modern and colonial architecture.",
      "Karachi’s bustling markets are famous for their variety of goods."
    ]
  },
  {
    "city": "Islamabad",
    "country": "Pakistan",
    "clues": [
      "A well-planned capital city known for its scenic beauty and modern infrastructure.",
      "Famous for its lush greenery and serene environment."
    ],
    "fun_fact": [
      "Islamabad was built in the 1960s to replace Karachi as the capital.",
      "The city is renowned for its wide avenues and parks."
    ],
    "trivia": [
      "It is one of the cleanest and most organized cities in Pakistan.",
      "Islamabad offers panoramic views of the surrounding Margalla Hills."
    ]
  },
  {
    "city": "Tehran",
    "country": "Iran",
    "clues": [
      "A city that blends ancient Persian culture with modern urban life.",
      "Famous for its bustling bazaars and historic monuments."
    ],
    "fun_fact": [
      "Tehran is the largest city in Iran and a cultural hub of the country.",
      "The city features a mix of traditional Persian architecture and modern structures."
    ],
    "trivia": [
      "It is known for its rich history and vibrant arts scene.",
      "Tehran’s culinary offerings reflect its diverse cultural influences."
    ]
  },
  {
    "city": "Baghdad",
    "country": "Iraq",
    "clues": [
      "A city with a rich historical legacy as a center of learning and culture.",
      "Famous for its ancient libraries and storied past."
    ],
    "fun_fact": [
      "Baghdad was once one of the most important cultural centers in the world.",
      "The city has a history that spans over a thousand years."
    ],
    "trivia": [
      "It is known for its contributions to science, literature, and art.",
      "Baghdad’s history is intertwined with the rise and fall of empires."
    ]
  },
  {
    "city": "Damascus",
    "country": "Syria",
    "clues": [
      "One of the oldest continuously inhabited cities in the world.",
      "Famous for its ancient souks and historic architecture."
    ],
    "fun_fact": [
      "Damascus is often considered one of the oldest cities on Earth.",
      "The city has a rich cultural heritage that spans millennia."
    ],
    "trivia": [
      "It is known for its unique blend of history and modern life.",
      "Damascus’s narrow streets tell stories of ancient civilizations."
    ]
  },
  {
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "clues": [
      "A modern metropolis in the desert with striking skyscrapers.",
      "Famous for its blend of traditional culture and futuristic design."
    ],
    "fun_fact": [
      "Riyadh has rapidly transformed into a major economic hub in the Middle East.",
      "The city is known for its modern architecture and cultural landmarks."
    ],
    "trivia": [
      "It is one of the fastest-growing cities in the region.",
      "Riyadh’s museums and cultural centers showcase Saudi Arabia’s heritage."
    ]
  },
  {
    "city": "Muscat",
    "country": "Oman",
    "clues": [
      "A coastal city known for its stunning natural harbor and traditional souks.",
      "Famous for its blend of ancient culture and modern development."
    ],
    "fun_fact": [
      "Muscat is known for its pristine beaches and rich maritime history.",
      "The city retains a strong sense of Omani tradition amidst modern growth."
    ],
    "trivia": [
      "It is a major port and commercial center in Oman.",
      "Muscat’s architecture reflects a mix of Islamic and Persian influences."
    ]
  },
  {
    "city": "Kuwait City",
    "country": "Kuwait",
    "clues": [
      "A cosmopolitan city with a striking skyline and rich oil heritage.",
      "Famous for its modern architecture and cultural institutions."
    ],
    "fun_fact": [
      "Kuwait City is one of the wealthiest cities in the world per capita.",
      "The city has transformed rapidly with its oil-driven economy."
    ],
    "trivia": [
      "It is known for its luxurious shopping malls and cultural museums.",
      "Kuwait City plays a pivotal role in the region’s economic landscape."
    ]
  },
  {
    "city": "Minsk",
    "country": "Belarus",
    "clues": [
      "A city that blends Soviet-era architecture with modern developments.",
      "Famous for its grand public squares and stately monuments."
    ],
    "fun_fact": [
      "Minsk is known for its extensive green spaces and tree-lined avenues.",
      "The city features a mix of historic and contemporary architecture."
    ],
    "trivia": [
      "It is a major cultural and political center in Belarus.",
      "Minsk hosts numerous festivals celebrating its diverse heritage."
    ]
  },
  {
    "city": "Kyiv",
    "country": "Ukraine",
    "clues": [
      "A historic city with golden-domed churches and bustling markets.",
      "Famous for its mix of ancient history and modern vibrancy."
    ],
    "fun_fact": [
      "Kyiv is one of the oldest cities in Eastern Europe.",
      "The city has a rich cultural heritage and vibrant arts scene."
    ],
    "trivia": [
      "Kyiv’s monuments and museums reflect its turbulent yet fascinating history.",
      "It is known for its lively street markets and hospitable locals."
    ]
  },
  {
    "city": "Tbilisi",
    "country": "Georgia",
    "clues": [
      "A city known for its winding streets and distinctive architecture.",
      "Famous for its sulfur baths and ancient fortifications."
    ],
    "fun_fact": [
      "Tbilisi has been a crossroads of cultures for centuries.",
      "The city’s old town features a blend of Persian, Russian, and modern influences."
    ],
    "trivia": [
      "It is celebrated for its culinary delights and traditional wines.",
      "Tbilisi's scenic landscape is framed by the Caucasus Mountains."
    ]
  },
  {
    "city": "Yerevan",
    "country": "Armenia",
    "clues": [
      "One of the oldest continuously inhabited cities with a rich cultural heritage.",
      "Famous for its pink-hued buildings and vibrant art scene."
    ],
    "fun_fact": [
      "Yerevan is considered one of the oldest cities in the world, with history dating back over 2,800 years.",
      "The city is known for its unique pink volcanic stone architecture."
    ],
    "trivia": [
      "Yerevan has a thriving café culture and bustling markets.",
      "It is a center for Armenian arts, music, and literature."
    ]
  },
  {
    "city": "Baku",
    "country": "Azerbaijan",
    "clues": [
      "A city on the Caspian Sea known for its modern flame towers.",
      "Famous for its ancient walled city and oil-rich history."
    ],
    "fun_fact": [
      "Baku is home to the UNESCO-listed Old City, Icherisheher.",
      "The city's modern skyline is a symbol of Azerbaijan's energy boom."
    ],
    "trivia": [
      "It has a rich tradition of carpet weaving and local crafts.",
      "Baku blends ancient heritage with futuristic architecture."
    ]
  },
  {
    "city": "Nur-Sultan",
    "country": "Kazakhstan",
    "clues": [
      "A futuristic capital with striking modern architecture.",
      "Famous for its innovative design and rapid development."
    ],
    "fun_fact": [
      "Nur-Sultan, formerly known as Astana, was renamed in honor of a former president.",
      "The city is known for its boldly designed government buildings."
    ],
    "trivia": [
      "It is one of the newest capitals in the world.",
      "Nur-Sultan features a mix of futuristic and traditional Kazakh designs."
    ]
  },
  {
    "city": "Ulaanbaatar",
    "country": "Mongolia",
    "clues": [
      "A city set against vast steppes, blending modern life with nomadic traditions.",
      "Famous for its Buddhist monasteries and harsh winters."
    ],
    "fun_fact": [
      "Ulaanbaatar is the coldest capital city in the world.",
      "The city is rapidly modernizing while retaining its traditional heritage."
    ],
    "trivia": [
      "It serves as the cultural and economic center of Mongolia.",
      "Ulaanbaatar offers a glimpse into the ancient nomadic lifestyle."
    ]
  },
  {
    "city": "Montevideo",
    "country": "Uruguay",
    "clues": [
      "A laid-back coastal city known for its vibrant arts scene.",
      "Famous for its historic neighborhoods and beachfront promenades."
    ],
    "fun_fact": [
      "Montevideo is one of the most livable cities in Latin America.",
      "The city has a rich tradition in tango and folk music."
    ],
    "trivia": [
      "It features a mix of colonial architecture and modern urban spaces.",
      "Montevideo is celebrated for its relaxed pace and friendly locals."
    ]
  },
  {
    "city": "Quito",
    "country": "Ecuador",
    "clues": [
      "A high-altitude city known for its well-preserved colonial center.",
      "Famous for its scenic views of surrounding volcanoes."
    ],
    "fun_fact": [
      "Quito is one of the highest capital cities in the world.",
      "The city’s historic center is a UNESCO World Heritage Site."
    ],
    "trivia": [
      "It has a rich blend of indigenous and Spanish colonial influences.",
      "Quito offers breathtaking views of the Andean landscape."
    ]
  },
  {
    "city": "Bogota",
    "country": "Colombia",
    "clues": [
      "A city high in the Andes, known for its dynamic arts and culture scene.",
      "Famous for its historical district and modern museums."
    ],
    "fun_fact": [
      "Bogota is the largest city in Colombia and a center for cultural exchange.",
      "The city has a thriving street art scene that reflects its creative spirit."
    ],
    "trivia": [
      "It features a mix of colonial architecture and contemporary design.",
      "Bogota is known for its annual cultural festivals and lively music scene."
    ]
  },
  {
    "city": "San Jose",
    "country": "Costa Rica",
    "clues": [
      "A bustling city known for its lush surroundings and eco-friendly vibe.",
      "Famous for its proximity to tropical rainforests and volcanoes."
    ],
    "fun_fact": [
      "San Jose is the cultural and economic heart of Costa Rica.",
      "The city is known for its vibrant arts and music scene."
    ],
    "trivia": [
      "It serves as a gateway to Costa Rica’s rich biodiversity.",
      "San Jose is celebrated for its coffee and culinary traditions."
    ]
  },
  {
    "city": "Panama City",
    "country": "Panama",
    "clues": [
      "A modern city known for its impressive canal and skyline.",
      "Famous for its blend of colonial history and contemporary architecture."
    ],
    "fun_fact": [
      "Panama City is home to the famous Panama Canal, a marvel of engineering.",
      "The city features a vibrant mix of old and new architectural styles."
    ],
    "trivia": [
      "It is a major international shipping and trade center.",
      "Panama City is known for its dynamic nightlife and cultural festivals."
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected for seeding.');
    
    // Clear existing data (optional)
    await Destination.deleteMany({});
    console.log('Old destinations removed.');

    // Insert new data
    await Destination.insertMany(destinations);
    console.log('Database seeded successfully!');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

seedDB();

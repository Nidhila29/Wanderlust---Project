const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "beachfront_cottage.jpg",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern City Loft",
    description:
      "Stylish loft apartment located in the heart of the city — perfect for nightlife, shopping, and urban adventures.",
    image: {
      filename: "modern_city_loft.jpg",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "New York",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Mountain Cabin Retreat",
    description:
      "A tranquil mountain cabin tucked away among pine trees. Ideal for hiking trips and cozy winter stays.",
    image: {
      filename: "mountain_cabin.jpg",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
    },
    price: 1300,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Tropical Beach House",
    description:
      "Bright beach house with palm‑tree views and direct access to white‑sand beaches. A tropical paradise getaway.",
    image: {
      filename: "tropical_beach_house.jpg",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Rustic Countryside Farmhouse",
    description:
      "Enjoy the simplicity of country living in this rustic farmhouse surrounded by green fields and fresh air.",
    image: {
      filename: "countryside_farmhouse.jpg",
      url: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7711] }
  },
  {
    title: "Lakeside Cabin with Dock",
    description:
      "Peaceful lakeside cabin with private dock — perfect for fishing, canoeing, or watching sunsets by the lake.",
    image: {
      filename: "lakeside_cabin.jpg",
      url: "https://images.unsplash.com/photo-1519750157634-bbb2f9be8398?auto=format&fit=crop&w=800&q=60"
    },
    price: 1250,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.044, 39.0968] }
  },
  {
    title: "Snowy Mountain A‑Frame Chalet",
    description:
      "A‑frame wooden chalet in snowy mountains — ideal for winter sports and cozy nights by the fire.",
    image: {
      filename: "snowy_chalet.jpg",
      url: "https://images.unsplash.com/photos/a-frame-cabin-with-a-mountainous-backdrop-kW0Z2c2NJCk?auto=format&fit=crop&w=800&q=60"
    },
    price: 1400,
    location: "Swiss Alps",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.6586, 46.8182] }
  },
  {
    title: "Island Bungalow Over Water",
    description:
      "Over‑water bungalow on a tropical island — enjoy crystal‑clear water, marine life and a serene stay.",
    image: {
      filename: "island_bungalow.jpg",
      url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Desert Oasis Villa",
    description:
      "Luxury villa in the desert with pool and garden — a tranquil retreat under the stars.",
    image: {
      filename: "desert_villa.jpg",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Marrakech",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] }
  },
  {
    title: "Cozy Woodland Cottage",
    description:
      "Small cottage hidden in the woods — perfect for reading, hiking and reconnecting with nature.",
    image: {
      filename: "woodland_cottage.jpg",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 950,
    location: "Pacific Northwest",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.505, 45.5051] }
  },
  {
    title: "Urban Studio Apartment",
    description:
      "Compact and modern studio apartment — great for solo travelers or city explorers.",
    image: {
      filename: "urban_studio.jpg",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Mediterranean Villa with Pool",
    description:
      "Elegant villa near the sea with private pool, perfect for summer vacations and relaxation.",
    image: {
      filename: "mediterranean_villa.jpg",
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Rainforest Treehouse Retreat",
    description:
      "Unique treehouse hidden in the rainforest — immerse yourself in nature, birds, and tropical sounds.",
    image: {
      filename: "rainforest_treehouse.jpg",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0907, 9.7489] }
  },
  {
    title: "Cliffside Sea‑View Villa",
    description:
      "Stunning villa perched on a cliff overlooking the sea — spectacular sunrise and sunset views guaranteed.",
    image: {
      filename: "cliffside_villa.jpg",
      url: "https://images.unsplash.com/photo-1522708341823-3f111c928e7d?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Amalfi Coast",
    country: "Italy",
    geometry: { type: "Point", coordinates: [14.6020, 40.6333] }
  },
  {
    title: "Coastal Lighthouse Cottage",
    description:
      "Charming cottage near an old lighthouse — perfect for a calm seaside escape and stargazing by the coast.",
    image: {
      filename: "lighthouse_cottage.jpg",
      url: "https://images.unsplash.com/photo-1529510650964-2d6469c1ccf1?auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Cornwall",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-5.0557, 50.5039] }
  }
];

module.exports = { data: sampleListings };


module.exports = { data: sampleListings };
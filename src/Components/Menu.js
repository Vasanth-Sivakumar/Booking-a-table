import "./Main.css";

export function Menu() {
  const items = [
    { name: "Pizza", description: "Delicious pizza with all your favorite toppings.", price: 12.99, image: "https://source.unsplash.com/random/400x400?pizza" },
    { name: "Pasta", description: "Freshly-made pasta with your choice of sauce.", price: 10.99, image: "https://source.unsplash.com/random/400x400?pasta" },
    { name: "Salad", description: "Fresh garden salad with your choice of dressing.", price: 7.99, image: "https://source.unsplash.com/random/400x400?salad" },
    { name: "Bruschetta", description: "Toasted bread topped with fresh tomatoes and basil.", price: 8.99, image: "https://source.unsplash.com/random/400x400?bruschetta" },
    { name: "Greek Salad", description: "A classic salad with cucumbers, tomatoes, feta cheese, and olives.", price: 9.99, image: "https://source.unsplash.com/random/400x400?greeksalad" },
    { name: "Lemon Dessert", description: "A refreshing lemon dessert with a buttery crust.", price: 6.99, image: "https://source.unsplash.com/random/400x400?lemondessert" }
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul className="menu-list">
        {items.map(item => (
          <li key={item.name} className="menu-item">
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


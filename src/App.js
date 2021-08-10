function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="logo d-flex align-center">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div className="logo__info">
            <h3 className="text-uppercase">SneakersShop</h3>
            <span>Магазин легендарных кроссовок</span>
          </div>
        </div>
        <div className="user">
          <ul className="d-flex align-center">
            <li>
              <img src="/img/cart.svg" alt="" width={18} height={18} />
              <span>1205 руб.</span>
            </li>
            <li>
              <img src="/img/favorite.svg" alt="" width={18} height={18} />
            </li>
            <li>
              <img src="/img/profile.svg" alt="" width={18} height={18} />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>

        <div className="card-wrap d-flex">
        <div className="card">
          <img src="/img/items/1.jpg" alt="" width={133} height={112} />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <div className="price">12 999 руб.</div>
            </div>
            <button className="btn">
              <img src="/img/add.svg" alt="Add" width={11} height={11} />
            </button>
          </div>
        </div>
        <div className="card">
          <img src="/img/items/2.jpg" alt="" width={133} height={112} />
          <h4>Мужские Кроссовки Nike Air Max 270</h4>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <div className="price">12 999 руб.</div>
            </div>
            <button className="btn">
              <img src="/img/add.svg" alt="Add" width={11} height={11} />
            </button>
          </div>
        </div>
        <div className="card">
          <img src="/img/items/3.jpg" alt="" width={133} height={112} />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <div className="price">12 999 руб.</div>
            </div>
            <button className="btn">
              <img src="/img/add.svg" alt="Add" width={11} height={11} />
            </button>
          </div>
        </div>
        <div className="card">
          <img src="/img/items/4.jpg" alt="" width={133} height={112} />
          <h4>Кроссовки Puma X Aka Boku Future Rider</h4>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <div className="price">12 999 руб.</div>
            </div>
            <button className="btn">
              <img src="/img/add.svg" alt="Add" width={11} height={11} />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

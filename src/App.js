function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="side_cart">
          <h2 className="side_cart__heading">Корзина</h2>
          <div className="side_cart__list">
            <div className="side_cart__list-item d-flex align-center">
              <img src="/img/items/1.jpg" alt="Sneakers" className="mr-20" width={70} height={70} />
              <div className="side_cart_info mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/close.svg" alt="Remove" />
            </div>
          </div>
        </div>
      </div>

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
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <button className="search__btn">
              <img src="/img/search.svg" alt="Search" />
            </button>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="card-wrap d-flex">
        <div className="card">
          <div className="card__favourite">
            <img src="/img/like.svg" alt="Like" />
          </div>
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

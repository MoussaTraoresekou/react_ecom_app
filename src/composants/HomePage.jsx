import './HomePage.css'
import './header.css'
export default function HomePage(){
    return (
         <>
            <div classeName="header">
                <div classeName="left-section">
                    <a href="index.html" classeName="header-link">
                    <img classeName="logo"
                        src="images/logo-white.png" />
                    <img classeName="mobile-logo"
                        src="images/mobile-logo-white.png" />
                    </a>
                </div>

                <div classeName="middle-section">
                    <input classeName="search-bar" type="text" placeholder="Search" />

                    <button classeName="search-button">
                    <img classeName="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div classeName="right-section">
                    <a classeName="orders-link header-link" href="orders.html">

                    <span classeName="orders-text">Orders</span>
                    </a>

                    <a classeName="cart-link header-link" href="checkout.html">
                    <img classeName="cart-icon" src="images/icons/cart-icon.png" />
                    <div classeName="cart-quantity">3</div>
                    <div classeName="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div classeName="home-page">
                <div classeName="products-grid">
                    <div classeName="product-container">
                    <div classeName="product-image-container">
                        <img classeName="product-image"
                        src="images/products/athletic-cotton-socks-6-pairs.jpg" />
                    </div>

                    <div classeName="product-name limit-text-to-2-lines">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div classeName="product-rating-container">
                        <img classeName="product-rating-stars"
                        src="images/ratings/rating-45.png" />
                        <div classeName="product-rating-count link-primary">
                        87
                        </div>
                    </div>

                    <div classeName="product-price">
                        $10.90
                    </div>

                    <div classeName="product-quantity-container">
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div classeName="product-spacer"></div>

                    <div classeName="added-to-cart">
                        <img src="images/icons/checkmark.png" />
                        Added
                    </div>

                    <button classeName="add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                    </div>

                    <div classeName="product-container">
                    <div classeName="product-image-container">
                        <img classeName="product-image"
                        src="images/products/intermediate-composite-basketball.jpg" />
                    </div>

                    <div classeName="product-name limit-text-to-2-lines">
                        Intermediate Size Basketball
                    </div>

                    <div classeName="product-rating-container">
                        <img classeName="product-rating-stars"
                        src="images/ratings/rating-40.png" />
                        <div classeName="product-rating-count link-primary">
                        127
                        </div>
                    </div>

                    <div classeName="product-price">
                        $20.95
                    </div>

                    <div classeName="product-quantity-container">
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div classeName="product-spacer"></div>

                    <div classeName="added-to-cart">
                        <img src="images/icons/checkmark.png" />
                        Added
                    </div>

                    <button classeName="add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                    </div>

                    <div classeName="product-container">
                    <div classeName="product-image-container">
                        <img classeName="product-image"
                        src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
                    </div>

                    <div classeName="product-name limit-text-to-2-lines">
                        Adults Plain Cotton T-Shirt - 2 Pack
                    </div>

                    <div classeName="product-rating-container">
                        <img classeName="product-rating-stars"
                        src="images/ratings/rating-45.png" />
                        <div classeName="product-rating-count link-primary">
                        56
                        </div>
                    </div>

                    <div classeName="product-price">
                        $7.99
                    </div>

                    <div classeName="product-quantity-container">
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div classeName="product-spacer"></div>

                    <div classeName="added-to-cart">
                        <img src="images/icons/checkmark.png" />
                        Added
                    </div>

                    <button classeName="add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>
         </>
    )
}
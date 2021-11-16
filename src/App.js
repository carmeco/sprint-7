import { useState } from "react";
function App() {
    const [price, setprice] = useState(0);
    const handleInputChange = (event) => {
        const value = +event.target.value;
        event.target.checked
            ? setprice((price) => (price += value))
            : setprice((price) => (price -= value));
    };
    return (
        <div>
            <p>Què vols fer?</p>
            <form>
                <ul>
                    <li>
                        <input
                            id="website"
                            type="checkbox"
                            value={500}
                            onChange={handleInputChange}
                        ></input>
                        <label for="website">Una pàgina web (500€)</label>
                    </li>
                    <li>
                        <input
                            id="seo"
                            type="checkbox"
                            value={300}
                            onChange={handleInputChange}
                        ></input>
                        <label for="seo">Una consultoria SEO (300€)</label>
                    </li>
                    <li>
                        <input
                            id="google"
                            type="checkbox"
                            value={200}
                            onChange={handleInputChange}
                        ></input>
                        <label for="google">
                            Una campanya de Google Ads (200€)
                        </label>
                    </li>
                </ul>
            </form>
            <p>Preu: {price}€</p>
        </div>
    );
}

export default App;

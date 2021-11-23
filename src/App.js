import { useState, useEffect } from "react";
import { Panell } from "./App.styles";

function App() {
    //useState hooks
    const [price, setprice] = useState(0);
    const [check, setcheck] = useState({
        website: false,
        seo: false,
        google: false,
    });
    const [pags, setpags] = useState(1);
    const [langs, setlangs] = useState(1);

    const handleInputChange = (event) => {
        setcheck({
            ...check,
            [event.target.name]: !check[event.target.name],
        });
    };

    //useEffect hooks
    useEffect(() => {
        let websitePrice = check.website ? 500 + pags * langs * 30 : 0;
        let seoPrice = check.seo ? 300 : 0;
        let googlePrice = check.google ? 200 : 0;
        setprice(websitePrice + seoPrice + googlePrice);
    }, [check, pags, langs]);

    return (
        <div>
            <p>Què vols fer?</p>
            <form>
                <ul>
                    <li>
                        <input
                            id="website"
                            name="website"
                            type="checkbox"
                            onChange={handleInputChange}
                        ></input>
                        <label for="website">Una pàgina web (500€)</label>
                        {check.website && (
                            <Panell>
                                <li>
                                    <label for="pags">Número de pàgines </label>
                                    <input
                                        id="pags"
                                        type="number"
                                        value={pags}
                                        min="1"
                                        onChange={(event) =>
                                            setpags(event.target.value)
                                        }
                                    ></input>
                                </li>
                                <li>
                                    <label for="langs">Número d'idiomes </label>
                                    <input
                                        id="langs"
                                        type="number"
                                        value={langs}
                                        min="1"
                                        onChange={(event) =>
                                            setlangs(event.target.value)
                                        }
                                    ></input>
                                </li>
                            </Panell>
                        )}
                    </li>
                    <li>
                        <input
                            id="seo"
                            name="seo"
                            type="checkbox"
                            onChange={handleInputChange}
                        ></input>
                        <label for="seo">Una consultoria SEO (300€)</label>
                    </li>
                    <li>
                        <input
                            id="google"
                            name="google"
                            type="checkbox"
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

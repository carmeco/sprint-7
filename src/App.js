import { useState } from "react";
import { Panell } from "./App.styles";
import CountPanel from "./component/CountPanel";

function App() {
    //Hooks
    const [check, setCheck] = useState({
        website: false,
        seo: false,
        google: false,
    });
    const [pags, setPags] = useState(1);
    const [langs, setLangs] = useState(1);

    //Events
    const handleChange = (event) => {
        setCheck((check) => ({
            ...check,
            [event.target.name]: !check[event.target.name],
        }));
    };

    //Variable PRICE
    let websitePrice = check.website ? 500 + pags * langs * 30 : 0;
    let seoPrice = check.seo ? 300 : 0;
    let googlePrice = check.google ? 200 : 0;
    const price = websitePrice + seoPrice + googlePrice;

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
                            onChange={handleChange}
                        ></input>
                        <label for="website">Una pàgina web (500€)</label>
                        {check.website && (
                            <Panell>
                                <li>
                                    <CountPanel
                                        label="Número de pàgines"
                                        amount={pags}
                                        setAmount={setPags}
                                    ></CountPanel>
                                </li>
                                <li>
                                    <CountPanel
                                        label="Número d'idiomes"
                                        amount={langs}
                                        setAmount={setLangs}
                                    ></CountPanel>
                                </li>
                            </Panell>
                        )}
                    </li>
                    <li>
                        <input
                            id="seo"
                            name="seo"
                            type="checkbox"
                            onChange={handleChange}
                        ></input>
                        <label for="seo">Una consultoria SEO (300€)</label>
                    </li>
                    <li>
                        <input
                            id="google"
                            name="google"
                            type="checkbox"
                            onChange={handleChange}
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

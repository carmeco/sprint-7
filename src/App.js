import { useState, useEffect, useRef } from "react";
import { Panell } from "./App.styles";
import CountPanel from "./component/CountPanel";

function App() {
    //useState hooks
    const initialCheck = JSON.parse(localStorage.getItem("check")) || {
        website: false,
        seo: false,
        google: false,
    };
    const initialPags = JSON.parse(localStorage.getItem("pags")) || 1;
    const initialLangs = JSON.parse(localStorage.getItem("langs")) || 1;
    const [check, setCheck] = useState(initialCheck);
    const [pags, setPags] = useState(initialPags);
    const [langs, setLangs] = useState(initialLangs);

    //useRef hooks
    const website = useRef(null);
    const seo = useRef(null);
    const google = useRef(null);

    //useEffect hook
    useEffect(() => {
        check.website && (website.current.checked = true);
        check.seo && (seo.current.checked = true);
        check.google && (google.current.checked = true);
    }, []);

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

    //LocalStorage
    localStorage.setItem("check", JSON.stringify(check));
    localStorage.setItem("pags", JSON.stringify(pags));
    localStorage.setItem("langs", JSON.stringify(langs));

    return (
        <div>
            <p>Què vols fer?</p>
            <form>
                <ul>
                    <li>
                        <input
                            id="website"
                            name="website"
                            ref={website}
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
                            ref={seo}
                            type="checkbox"
                            onChange={handleChange}
                        ></input>
                        <label for="seo">Una consultoria SEO (300€)</label>
                    </li>
                    <li>
                        <input
                            id="google"
                            name="google"
                            ref={google}
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

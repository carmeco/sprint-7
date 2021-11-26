import { useState, useRef } from "react";
import { Wrapper, Panell } from "./Budget.styles";
import Checkbox from "../components/Checkbox";
import CountPanel from "../components/CountPanel";
import SavedBudget from "../components/SavedBudget";

const Budget = () => {
    //useState hooks
    const initialWebsite = JSON.parse(localStorage.getItem("website")) || false;
    const initialSeo = JSON.parse(localStorage.getItem("seo")) || false;
    const initialGoogle = JSON.parse(localStorage.getItem("google")) || false;
    const initialPags = JSON.parse(localStorage.getItem("pags")) || 1;
    const initialLangs = JSON.parse(localStorage.getItem("langs")) || 1;
    const [website, setWebsite] = useState(initialWebsite);
    const [seo, setSeo] = useState(initialSeo);
    const [google, setGoogle] = useState(initialGoogle);
    const [pags, setPags] = useState(initialPags);
    const [langs, setLangs] = useState(initialLangs);
    const [budgets, setBudgets] = useState([]);

    //useRef hooks
    const clientName = useRef(null);
    const budgetName = useRef(null);

    //Variable PRICE
    let websitePrice = website ? 500 + pags * langs * 30 : 0;
    let seoPrice = seo ? 300 : 0;
    let googlePrice = google ? 200 : 0;
    const price = websitePrice + seoPrice + googlePrice;

    //LocalStorage
    localStorage.setItem("website", JSON.stringify(website));
    localStorage.setItem("seo", JSON.stringify(seo));
    localStorage.setItem("google", JSON.stringify(google));
    localStorage.setItem("pags", JSON.stringify(pags));
    localStorage.setItem("langs", JSON.stringify(langs));

    //Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setBudgets([
            ...budgets,
            {
                name: budgetName.current.value,
                client: clientName.current.value,
                date: new Date().toLocaleDateString(),
                services: {
                    website: website,
                    seo: seo,
                    google: google,
                },
                price: price,
            },
        ]);
    };

    return (
        <Wrapper>
            <div>
                <h2>Crea un nou pressupost</h2>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label for="budget">
                                Introdueix el nom del pressupost:
                            </label>
                            <br />
                            <input
                                id="budget"
                                type="text"
                                placeholder="Pressupost"
                                ref={budgetName}
                                required
                            ></input>
                        </li>
                        <li>
                            <label for="client">
                                Introdueix el nom del client:
                            </label>
                            <br />
                            <input
                                id="client"
                                type="text"
                                placeholder="Client"
                                ref={clientName}
                                required
                            ></input>
                        </li>
                        <li>
                            <p>
                                <strong>Què vols fer?</strong>
                            </p>

                            <ul>
                                <Checkbox
                                    label="Una pàgina web (500€)"
                                    check={website}
                                    setCheck={setWebsite}
                                >
                                    <Panell>
                                        <CountPanel
                                            label="Número de pàgines"
                                            amount={pags}
                                            setAmount={setPags}
                                            infoType="pags"
                                        ></CountPanel>
                                        <CountPanel
                                            label="Número d'idiomes"
                                            amount={langs}
                                            setAmount={setLangs}
                                            infoType="langs"
                                        ></CountPanel>
                                    </Panell>
                                </Checkbox>
                                <Checkbox
                                    label="Una consultoria SEO (300€)"
                                    check={seo}
                                    setCheck={setSeo}
                                ></Checkbox>
                                <Checkbox
                                    label="Una campanya de Google Ads (200€)"
                                    check={google}
                                    setCheck={setGoogle}
                                ></Checkbox>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Preu: {price}€</strong>
                            </p>
                        </li>
                        <li>
                            <input type="submit" value="Desar pressupost" />
                        </li>
                    </ul>
                </form>
            </div>
            <div>
                <h2>Els teus pressupostos</h2>
                <ul>
                    {budgets.map((budget) => (
                        <SavedBudget
                            name={budget.name}
                            client={budget.client}
                            date={budget.date}
                            services={budget.services}
                            price={budget.price}
                        />
                    ))}
                </ul>
            </div>
        </Wrapper>
    );
};

export default Budget;

import SavedBudget from "../SavedBudget";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BudgetsList = ({ budgets }) => {
    const [budgetsList, setBudgetsList] = useState(budgets);
    //Search by name
    const searchBar = useRef(null);
    const searchBudget = (event) => {
        event.preventDefault();
        setBudgetsList((prev) =>
            prev.filter((budget) =>
                budget.name
                    .toLowerCase()
                    .includes(searchBar.current.value.toLowerCase())
            )
        );
    };

    //Sort items
    const sortAbc = (event) => {
        event.preventDefault();
        setBudgetsList((prev) =>
            [...prev].sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            )
        );
    };
    const sortPrice = (event) => {
        event.preventDefault();
        setBudgetsList((prev) =>
            [...prev].sort((a, b) =>
                a.price > b.price ? 1 : a.price < b.price ? -1 : 0
            )
        );
    };
    const sortReset = (event) => {
        event.preventDefault();
        setBudgetsList([...budgets]);
    };

    return (
        <div>
            <h2>Els teus pressupostos</h2>
            <form onSubmit={searchBudget}>
                <label for="searchBar">Cerca per nom:</label>
                <input id="searchBar" ref={searchBar} type="text"></input>
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <button onClick={sortAbc}>Ordena alfabèticament</button>
            <button onClick={sortPrice}>Ordena per preu</button>
            <button onClick={sortReset}>Torna a l'ordre inicial</button>
            <ul>
                {budgetsList.map((budget) => (
                    <SavedBudget
                        name={budget.name}
                        client={budget.client}
                        date={budget.date}
                        services={budget.services}
                        price={budget.price}
                        key={budget.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BudgetsList;

import SavedBudget from "../SavedBudget";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BudgetsList = ({ budgets, setBudgets }) => {
    //Search by name
    const searchBar = useRef(null);
    const searchBudget = (event) => {
        event.preventDefault();
        setBudgets((prev) =>
            prev.filter((budget) => searchBar.current.value === budget.name)
        );
    };

    //Sort items
    const sortAbc = (event) => {
        event.preventDefault();
        setBudgets((prev) =>
            [...prev].sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            )
        );
    };
    const sortPrice = (event) => {
        event.preventDefault();
        setBudgets((prev) =>
            [...prev].sort((a, b) =>
                a.price > b.price ? 1 : a.price < b.price ? -1 : 0
            )
        );
    };
    const sortReset = (event) => {
        event.preventDefault();
        setBudgets((prev) =>
            [...prev].sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        );
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
                {budgets.map((budget) => (
                    <SavedBudget
                        name={budget.name}
                        client={budget.client}
                        date={budget.date}
                        services={budget.services}
                        price={budget.price}
                        key={budgets.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BudgetsList;

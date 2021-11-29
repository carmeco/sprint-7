import SavedBudget from "../SavedBudget";
import { useState } from "react";

const BudgetsList = ({ budgets, setBudgets }) => {
    const [order, setOrder] = useState("false");

    const sortAbc = (event) => {
        event.preventDefault();
        setBudgets(
            budgets.sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            )
        );
        setOrder("sortByName");
    };
    const sortPrice = (event) => {
        event.preventDefault();
        setBudgets(
            budgets.sort((a, b) =>
                a.price > b.price ? 1 : a.price < b.price ? -1 : 0
            )
        );
        setOrder("sortByPrice");
    };
    const sortReset = (event) => {
        event.preventDefault();
        setBudgets(
            budgets.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        );
        setOrder("sortById");
    };
    return (
        <div>
            <h2>Els teus pressupostos</h2>
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

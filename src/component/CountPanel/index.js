import { Button, Input } from "./CountPanel.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CountPanel = ({ label, amount, setAmount }) => {
    const increase = (event) => {
        event.preventDefault();
        setAmount((amount) => amount + 1);
    };
    const decrease = (event) => {
        event.preventDefault();
        setAmount((amount) => (amount > 1 ? amount - 1 : amount));
    };
    const handleChange = (event) => {
        event.preventDefault();
        setAmount(+event.target.value);
    };

    return (
        <div>
            <span>{label}</span>
            <Button onClick={increase}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Input onChange={handleChange} value={amount}></Input>
            <Button onClick={decrease}>
                <FontAwesomeIcon icon={faMinus} />
            </Button>
        </div>
    );
};

export default CountPanel;

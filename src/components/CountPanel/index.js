import { Button, Input, InfoButton } from "./CountPanel.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMinus,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const CountPanel = ({ label, amount, setAmount, setInfo }) => {
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
    const handleClick = (event) => {
        event.preventDefault();
        setInfo(true);
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
            <InfoButton onClick={handleClick}>
                <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </InfoButton>
        </div>
    );
};

export default CountPanel;

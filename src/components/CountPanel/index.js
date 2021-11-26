import { useModal } from "react-hooks-use-modal";
import { Button, Input, InfoButton } from "./CountPanel.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMinus,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import InfoPopup from "../InfoPopup";

const CountPanel = ({ label, amount, setAmount, infoType }) => {
    const [Modal, open] = useModal("root", {
        preventScroll: true,
    });

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
        open();
    };

    return (
        <li>
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
            <Modal>
                <InfoPopup infoType={infoType} count={amount} />
            </Modal>
        </li>
    );
};

export default CountPanel;

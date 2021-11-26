import { useRef, useEffect } from "react";

const Checkbox = ({ label, check, setCheck, children }) => {
    const ref = useRef(null);
    useEffect(() => {
        check && (ref.current.checked = true);
    });
    const handleChange = (event) => {
        setCheck(event.target.checked);
    };

    return (
        <li>
            <input
                id={check}
                name={check}
                ref={ref}
                type="checkbox"
                onChange={handleChange}
            ></input>
            <label for={check}>{label}</label>
            {check && children}
        </li>
    );
};

export default Checkbox;

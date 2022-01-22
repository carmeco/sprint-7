const Checkbox = ({ label, name, check, setCheck, children }) => {
    const handleChange = (event) => {
        setCheck(event.target.checked);
    };

    return (
        <li>
            <input
                id={name}
                name={name}
                type="checkbox"
                onChange={handleChange}
                checked={check}
            ></input>
            <label for={check}>{label}</label>
            {check && children}
        </li>
    );
};

export default Checkbox;

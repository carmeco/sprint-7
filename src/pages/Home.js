import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Home.styles";

const Home = () => {
    return (
        <Wrapper>
            <Content>
                <h1>Calcula el preu del teu website</h1>
                <p>
                    En aquesta aplicació trobaràs un formulari per calcular de
                    forma senzilla el cost de desenvolupar una pàgina web.
                </p>
                <Link to={"/form"}>Continua</Link>
            </Content>
        </Wrapper>
    );
};

export default Home;

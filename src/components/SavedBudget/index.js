import { Wrapper, ServicesList } from "./SavedBudget.styles";

const SavedBudget = ({ name, client, date, services, price }) => {
    return (
        <Wrapper>
            <h3>{name}</h3>
            <ul>
                <li>Client: {client}</li>
                <li>Data: {date}</li>
                <li>
                    Serveis seleccionats:
                    <ServicesList>
                        {services.website && <li>Pàgina web</li>}
                        {services.seo && <li>Consultoria SEO</li>}
                        {services.google && <li>Campanya Google Adds</li>}
                    </ServicesList>
                </li>
                <li>
                    <strong>Preu total: {price}</strong>
                </li>
            </ul>
        </Wrapper>
    );
};

export default SavedBudget;

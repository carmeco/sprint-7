import { Wrapper } from "./InfoPopup.styles";

const InfoPopup = ({ infoType, count }) => {
    return (
        <Wrapper>
            {infoType === "pags" && (
                <div>
                    <p>
                        En aquesta casella has d'inidicar el nombre de pàgines
                        que tindrà el lloc web. Cada pàgina té un cost
                        addicional de 30 euros.
                    </p>
                    <p>Nombre de pàgines seleccionat: {count}</p>
                </div>
            )}
            {infoType === "langs" && (
                <div>
                    <p>
                        En aquesta casella has d'inidicar el nombre d'idiomes
                        que tindrà el lloc web. Cada idioma té un cost
                        addicional de 30 euros.
                    </p>
                    <p>Nombre d'idiomes seleccionat: {count}</p>
                </div>
            )}
        </Wrapper>
    );
};

export default InfoPopup;

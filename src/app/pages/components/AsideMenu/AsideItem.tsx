import { Link } from "react-router-dom";
import "./AsideItem.css";

type Item = {
    tituloItem?: string,
    img?: string,
    iconDesplegable?: string
}

const AsideItem = ({ tituloItem, img, iconDesplegable }: Item) => {
    return (
        <>
            <Link to={"#"}>
                <div className="background-item">

                </div>
            </Link>
        </>
    )
}

export { AsideItem }
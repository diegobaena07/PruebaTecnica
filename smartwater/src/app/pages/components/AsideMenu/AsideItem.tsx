import "./AsideItem.css";

type Item = {
    titulo: string,
    img?: string,
    iconDesplegable?: string
}

const AsideItem = ({ titulo, img, iconDesplegable }: Item) => {
    return (
        <>
            <div className="framer"
                style={iconDesplegable !== undefined ? { justifyContent: "flex-start", alignItems: "center", gap: 30, display: "inline-flex" } : {}}>
                <div className="item">
                    <img src={img} />
                    <div className="letras">
                        <span>{titulo}</span>
                    </div>
                </div>
                {iconDesplegable &&
                    <div><img src={iconDesplegable} /></div>
                }
            </div>
        </>
    )
}

export { AsideItem }
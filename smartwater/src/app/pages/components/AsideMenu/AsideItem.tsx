import "./AsideItem.css";

type Item = {
    titulo: string,
    img?: string,
    iconDesplegable?: string
    imgSub?: string,
    tituloSub?: string,
}

const AsideItem = ({ titulo, img, iconDesplegable, imgSub, tituloSub }: Item) => {
    return (
        <>
            <div className="framer"
                style={iconDesplegable !== undefined ? { justifyContent: "flex-start", alignItems: "center", gap: 30, display: "inline-flex" } : {}}>
                <div className="item">
                    <span className="item-biñeta"></span>
                    <img src={img} />
                    <span>{titulo}</span>
                </div>
                {iconDesplegable &&
                    <>
                        <div className="submenu">
                            {/* <input type="checkbox" name="submenu" id="submenu" /> */}
                            <img src={iconDesplegable} />
                        </div>
                        {/* <div className="submenu">
                            <img src={imgSub} />
                            <div className="letras">
                                <span>{tituloSub}</span>
                            </div>
                        </div> */}
                    </>
                }
            </div>
        </>
    )
}

export { AsideItem }
import { ChangeEvent, useContext, useState } from "react";
import "./AgregarCliente.css";
import { SmartwaterContext } from "../../../../SmartwaterContext";

const AgregarCliente = () => {
    const { setShowModal } = useContext(SmartwaterContext);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };
    
    const handleSelectImage = () => {
        const fileInput = document.getElementById("fileInput") as HTMLInputElement;
        fileInput.click();
        console.log("hola")
    };

return (
    <>
        <form>
            <div className="modal-overlay">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <div className="Titulo-Modal">
                            <div>
                                <span>Regitrar cliente</span>
                            </div>
                            <div>
                                <button type="button" className="btn" onClick={handleCloseModal}><img src="./cerrar.svg" alt="" /></button>
                            </div>
                        </div>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            {selectedImage !== null ?
                                <img className="img-modal" src={selectedImage} alt=""/>
                                :
                                <div className="img-modal">
                                    <span className="letras-img">LV</span>
                                </div>
                            }
                            
                            <button onClick={handleSelectImage} className="btn-camara" type="button"><img src="./CamaraIcon.svg" alt="" /></button>
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="modal-body">
                        {/* Contenido del body */}
                    </div>
                    <div className="modal-footer">
                        {/* Botones del footer */}
                        <button type="button" className="btn-cancelar" onClick={handleCloseModal}>Cancelar</button>
                        <button type="button" className="btn-registrar">Registrar cliente</button>
                    </div>
                </div>
            </div>
        </form>
    </>
);
};

export { AgregarCliente };

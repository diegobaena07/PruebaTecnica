import { FC, useContext } from "react";
import "./RegistrarNuevo.css";
import { SmartwaterContext } from "../../../../SmartwaterContext";
import { AgregarCliente } from "../../Clientes/AgregarCliente/AgregarCliente";

const RegistrarNuevo: FC = () => {
    const { showMiniModal ,setShowMiniModal, setShowModal, showModal } = useContext(SmartwaterContext);
    
    return(
        <>
        <div className="modal-overlay">
            <div className="RegistrarNuevo-modalContent">
                <div style={{textAlign: "end", width: "100%", marginBottom: "15px"}}>
                    <button className="btn" onClick={() => setShowMiniModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_1073_283)">
                            <path d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black"/>
                            <path d="M6.96839 6.96912C7.03806 6.89927 7.12082 6.84386 7.21194 6.80605C7.30305 6.76824 7.40074 6.74878 7.49939 6.74878C7.59804 6.74878 7.69572 6.76824 7.78684 6.80605C7.87796 6.84386 7.96072 6.89927 8.03039 6.96912L11.9994 10.9396L15.9684 6.96912C16.0381 6.89939 16.1209 6.84407 16.212 6.80633C16.3031 6.7686 16.4008 6.74917 16.4994 6.74917C16.598 6.74917 16.6957 6.7686 16.7868 6.80633C16.8779 6.84407 16.9607 6.89939 17.0304 6.96912C17.1001 7.03885 17.1554 7.12164 17.1932 7.21274C17.2309 7.30385 17.2503 7.4015 17.2503 7.50012C17.2503 7.59874 17.2309 7.69639 17.1932 7.7875C17.1554 7.8786 17.1001 7.96139 17.0304 8.03112L13.0599 12.0001L17.0304 15.9691C17.1001 16.0389 17.1554 16.1216 17.1932 16.2127C17.2309 16.3039 17.2503 16.4015 17.2503 16.5001C17.2503 16.5987 17.2309 16.6964 17.1932 16.7875C17.1554 16.8786 17.1001 16.9614 17.0304 17.0311C16.9607 17.1009 16.8779 17.1562 16.7868 17.1939C16.6957 17.2316 16.598 17.2511 16.4994 17.2511C16.4008 17.2511 16.3031 17.2316 16.212 17.1939C16.1209 17.1562 16.0381 17.1009 15.9684 17.0311L11.9994 13.0606L8.03039 17.0311C7.96066 17.1009 7.87787 17.1562 7.78676 17.1939C7.69565 17.2316 7.598 17.2511 7.49939 17.2511C7.40077 17.2511 7.30312 17.2316 7.21201 17.1939C7.1209 17.1562 7.03812 17.1009 6.96839 17.0311C6.89866 16.9614 6.84334 16.8786 6.8056 16.7875C6.76786 16.6964 6.74844 16.5987 6.74844 16.5001C6.74844 16.4015 6.76786 16.3039 6.8056 16.2127C6.84334 16.1216 6.89866 16.0389 6.96839 15.9691L10.9389 12.0001L6.96839 8.03112C6.89854 7.96145 6.84313 7.87869 6.80532 7.78757C6.76751 7.69645 6.74805 7.59877 6.74805 7.50012C6.74805 7.40147 6.76751 7.30379 6.80532 7.21267C6.84313 7.12155 6.89854 7.03879 6.96839 6.96912Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1073_283">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </button>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%"}}>
                    <div>
                        <button className="btn RegistrarNuevo-btnPedido">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                            <path d="M0 1.00855C0 0.449646 0.449646 0 1.00855 0H2.9206C3.84511 0 4.66456 0.537895 5.04697 1.34474H22.3184C23.4236 1.34474 24.2305 2.39531 23.9405 3.4627L22.2176 9.8628C21.8604 11.1823 20.6627 12.1026 19.297 12.1026H7.17333L7.40026 13.3003C7.49271 13.7751 7.90873 14.1197 8.392 14.1197H20.5072C21.0661 14.1197 21.5158 14.5694 21.5158 15.1283C21.5158 15.6872 21.0661 16.1368 20.5072 16.1368H8.392C6.938 16.1368 5.68992 15.1031 5.42097 13.6785L3.25258 2.29025C3.22317 2.13057 3.08449 2.01711 2.9206 2.01711H1.00855C0.449646 2.01711 0 1.56746 0 1.00855ZM5.37895 19.4987C5.37895 19.2338 5.43112 18.9715 5.53249 18.7268C5.63386 18.482 5.78244 18.2597 5.96974 18.0724C6.15705 17.8851 6.37941 17.7365 6.62414 17.6351C6.86887 17.5338 7.13116 17.4816 7.39605 17.4816C7.66094 17.4816 7.92324 17.5338 8.16796 17.6351C8.41269 17.7365 8.63506 17.8851 8.82236 18.0724C9.00967 18.2597 9.15825 18.482 9.25961 18.7268C9.36098 18.9715 9.41316 19.2338 9.41316 19.4987C9.41316 19.7636 9.36098 20.0259 9.25961 20.2706C9.15825 20.5153 9.00967 20.7377 8.82236 20.925C8.63506 21.1123 8.41269 21.2609 8.16796 21.3622C7.92324 21.4636 7.66094 21.5158 7.39605 21.5158C7.13116 21.5158 6.86887 21.4636 6.62414 21.3622C6.37941 21.2609 6.15705 21.1123 5.96974 20.925C5.78244 20.7377 5.63386 20.5153 5.53249 20.2706C5.43112 20.0259 5.37895 19.7636 5.37895 19.4987ZM19.4987 17.4816C20.0337 17.4816 20.5467 17.6941 20.925 18.0724C21.3033 18.4507 21.5158 18.9637 21.5158 19.4987C21.5158 20.0337 21.3033 20.5467 20.925 20.925C20.5467 21.3033 20.0337 21.5158 19.4987 21.5158C18.9637 21.5158 18.4507 21.3033 18.0724 20.925C17.6941 20.5467 17.4816 20.0337 17.4816 19.4987C17.4816 18.9637 17.6941 18.4507 18.0724 18.0724C18.4507 17.6941 18.9637 17.4816 19.4987 17.4816ZM10.5898 6.72368C10.5898 7.18594 10.968 7.56414 11.4303 7.56414H13.2793V9.41316C13.2793 9.87541 13.6575 10.2536 14.1197 10.2536C14.582 10.2536 14.9602 9.87541 14.9602 9.41316V7.56414H16.8092C17.2715 7.56414 17.6497 7.18594 17.6497 6.72368C17.6497 6.26143 17.2715 5.88322 16.8092 5.88322H14.9602V4.03421C14.9602 3.57196 14.582 3.19375 14.1197 3.19375C13.6575 3.19375 13.2793 3.57196 13.2793 4.03421V5.88322H11.4303C10.968 5.88322 10.5898 6.26143 10.5898 6.72368Z" fill="white"/>
                        </svg>
                        <span>Registrar pedido</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn RegistrarNuevo-btnPedido" style={{background: "none", color: "#1A3D7D"}} onClick={() => setShowModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                            <g clip-path="url(#clip0_1073_279)">
                                <path d="M3.6 5.6999C3.6 4.42686 4.10571 3.20596 5.00589 2.30579C5.90606 1.40562 7.12696 0.899902 8.4 0.899902C9.67304 0.899902 10.8939 1.40562 11.7941 2.30579C12.6943 3.20596 13.2 4.42686 13.2 5.6999C13.2 6.97294 12.6943 8.19384 11.7941 9.09402C10.8939 9.99419 9.67304 10.4999 8.4 10.4999C7.12696 10.4999 5.90606 9.99419 5.00589 9.09402C4.10571 8.19384 3.6 6.97294 3.6 5.6999ZM0 18.9862C0 15.2924 2.9925 12.2999 6.68625 12.2999H10.1138C13.8075 12.2999 16.8 15.2924 16.8 18.9862C16.8 19.6012 16.3013 20.0999 15.6862 20.0999H1.11375C0.49875 20.0999 0 19.6012 0 18.9862ZM18.9 12.5999V10.1999H16.5C16.0013 10.1999 15.6 9.79865 15.6 9.2999C15.6 8.80115 16.0013 8.3999 16.5 8.3999H18.9V5.9999C18.9 5.50115 19.3013 5.0999 19.8 5.0999C20.2987 5.0999 20.7 5.50115 20.7 5.9999V8.3999H23.1C23.5988 8.3999 24 8.80115 24 9.2999C24 9.79865 23.5988 10.1999 23.1 10.1999H20.7V12.5999C20.7 13.0987 20.2987 13.4999 19.8 13.4999C19.3013 13.4999 18.9 13.0987 18.9 12.5999Z" fill="#1A3D7D"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1073_279">
                                <rect width="24" height="19.2" fill="white" transform="translate(0 0.899902)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Registrar cliente</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn RegistrarNuevo-btnCancelar" onClick={() => setShowMiniModal(false)}>
                            <span>Cancelar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {showModal && <AgregarCliente/>}
        </>
    )
}

export{RegistrarNuevo}
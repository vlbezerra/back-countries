import "./header.scss"
import logoSAP from '../../assets/medias/img/logo-sap.png';
import { IconNTTData } from "../icons/logoNTTData/logo-nttdata";
import { Button } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/customize";
import { useSelector } from "react-redux";
import { ModalSelectTheme } from "./components/modal-theme/modal-theme";

export const Header = () => {
    const { isLogged } = useSelector(rootReducer => rootReducer.loginReducer);
    const uidSelectThemeModal = "modal-select-theme";

    const openModalSelectTheme = () => {
        const dialog = document.getElementById(uidSelectThemeModal);
        dialog.show(); 
    }

    return (
        <header className="header">
            <div className="container header-container">
                <img src={logoSAP} alt="" className="logo-sap"/>

                {isLogged && (
                    <Button className="btn-change-theme" icon="customize" design="Emphasized" onClick={openModalSelectTheme}>Change Theme</Button>
                )}

                <span className="logo-ntt">
                    <IconNTTData color="#070f26" size="140"></IconNTTData>
                </span>
            </div>

            <ModalSelectTheme uid={uidSelectThemeModal}></ModalSelectTheme>
        </header>
    )
}
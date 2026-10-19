import { useState } from 'react';
import './Header.scss'
import Popup from './Popup';
import { useTranslation } from 'react-i18next';

// let demarrage = true;

export default function Header() {
    const { t, i18n } = useTranslation();

    const [menuOuvert, setMenuOuvert] = useState(false);
    const [popupOuverte, setPopupOuverte] = useState(false);

    const basculerClairSombre = () => {
        if (document.body.className[document.body.className.length - 1] != " ") {
            document.body.className += " ";
        }

        if (document.body.className.includes("sombre") === true) {
            document.body.className = document.body.className.replace("sombre ", "");
        } else {
            document.body.className += "sombre ";
        }
    }

    const basculerAnimations = () => {
        if (document.body.className[document.body.className.length - 1] != " ") {
            document.body.className += " ";
        }

        if (document.body.className.includes("anime")) {
            document.body.className = document.body.className.replace("anime ", "");
        } else {
            document.body.className += "anime ";
        }
    }

    const ouvrirFermerMenuNav = () => {
        setMenuOuvert(prev => !prev);
    };

    const changerLangue = (lang) => {
        i18n.changeLanguage(lang);;
    };

    return <header className={menuOuvert ? "header-ouvert" : "header-ferme"}>
        <button id="bouton-menu-nav" onClick={ouvrirFermerMenuNav}>
            <div className={menuOuvert ? "ouvert" : ""}>
                <div id="bar-nav-1"></div>
                <div id="bar-nav-2"></div>
                <div id="bar-nav-3"></div>
            </div>
        </button>
        <h1><a href="#"><img src="/images/icone.png" /> Loric Audin</a></h1>
        <div>
            <nav className={menuOuvert ? "nav-ouvert" : ""}>
                <ul>
                    <li><a href="#presentation" onClick={ouvrirFermerMenuNav}>{t('header.presentation')}</a></li>
                    <li><a href="#parcours" onClick={ouvrirFermerMenuNav}>{t('header.parcours')}</a></li>
                    <li><a href="#competences" onClick={ouvrirFermerMenuNav}>{t('header.competences')}</a></li>
                    <li><a href="#technologies" onClick={ouvrirFermerMenuNav}>{t('header.technologies')}</a></li>
                    <li><a href="#projets" onClick={ouvrirFermerMenuNav}>{t('header.projets')}</a></li>
                    <li><a href="#contact" onClick={ouvrirFermerMenuNav}>{t('header.contact')}</a></li>
                </ul>
            </nav>
            <button className="bouton-parametres" onClick={function () { setPopupOuverte(!popupOuverte) }}>
                <img className="clair-affichage" src={"/images/parametres-clair.png"} />
                <img className="sombre-affichage" src={"/images/parametres-sombre.png"} />
            </button>
        </div>
        {(popupOuverte == true) &&
            <Popup titre={t('header.parametres.titre')} actionFermeture={function () { setPopupOuverte(!popupOuverte) }} >
                <div>
                    {t('header.parametres.langue.titre')}
                    <select value={i18n.language} onChange={(e) => changerLangue(e.target.value)}>
                        <option value={"en"}>English</option>
                        <option value={"fr"}>Français</option>
                    </select>
                </div>
                <div>
                    {t('header.parametres.mode_affichage.titre')}
                    <button className="clair-affichage" onClick={basculerClairSombre}>{t('header.parametres.mode_affichage.valeur_active')}</button>
                    <button className="sombre-affichage" onClick={basculerClairSombre}>{t('header.parametres.mode_affichage.valeur_inactive')}</button>
                </div>
                <div>
                    {t('header.parametres.animations.titre')}
                    <button className="animations-desactives" onClick={basculerAnimations}>{t('header.parametres.animations.valeur_active')}</button>
                    <button className="animations-actives" onClick={basculerAnimations}>{t('header.parametres.animations.valeur_inactive')}</button>
                </div>
            </Popup>
        }
    </header >
}
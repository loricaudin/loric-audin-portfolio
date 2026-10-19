import { useTranslation } from 'react-i18next';
import './Accueil.scss'

export default function Accueil() {
    const { t } = useTranslation();
    return <span>
        <section id="accueil">
            <h1>{t('main.titre')}</h1>
            <h2>{t('main.sous_titre')}</h2>
            <a href="#presentation"><button>{t('main.bouton_go')}</button></a>
            {/* <p></p>
            <div class="mode-affichage">
                <h2>Comment voulez-vous visiter le portfolio ?</h2>
                <label>
                    Mode d'affichage : 
                    <select class="choix-mode-affichage" placeholder="Choisissez le mode d'affichage">
                        <optgroup label="Sélectionnez le mode d'affichage du site">
                            <option selected="selected" value="clair-simple">Clair</option>
                            <option value="sombre-simple">Sombre</option>
                            <option value="clair-colore">Clair coloré</option>
                            <option value="sombre-colore">Sombre coloré</option>
                            <option value="perso">Personnaliser</option>
                        </optgroup>
                    </select>
                </label>
            </div> */}
        </section>
    </span>
}
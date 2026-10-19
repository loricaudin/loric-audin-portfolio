import Section from '../Section';
import './Presentation.scss'
import { useTranslation } from 'react-i18next';

function calculerAge(dateAnniversaire) {
    const aujourdhui = new Date();
    let age = aujourdhui.getFullYear() - dateAnniversaire.getFullYear();
    const moisDifference = aujourdhui.getMonth() - dateAnniversaire.getMonth();
    
    if (moisDifference < 0 || (moisDifference === 0 && aujourdhui.getDate() < dateAnniversaire.getDate())) {
        age--;
    }
    return age;
}

export default function Presentation() {
    const { t } = useTranslation();
    const age = calculerAge(new Date('2004-05-27'));

    const description = t('main.presentation.description').replace('{age}', age);
    return <>
        <a className="lien-section" id="presentation"></a>
        <Section classe="presentation">
            <h1>{t('main.presentation.titre')}</h1>
            <div>
                <p>
                    {description}
                </p>
                <img className="profil" src="/images/moi.jpg"/>
            </div>
        </Section>
    </>
}

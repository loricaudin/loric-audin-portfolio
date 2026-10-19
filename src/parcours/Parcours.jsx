import { useTranslation } from 'react-i18next';
import Section from '../Section'
import ElementParcours from './ElementParcours'
import './Parcours.scss'

export default function Parcours() {
    const { t } = useTranslation();
    return <>
        <a className="lien-section" id="parcours"></a>
        <Section classe="parcours">
            <h1>{t('main.parcours.titre')}</h1>
            <div>
                <div className="parcours-chronologique">
                    <h2>{t('main.parcours.academique.titre')}</h2>
                    <ElementParcours
                        titre={t('main.parcours.academique.3.titre')}
                        sousTitre={t('main.parcours.academique.3.sous_titre')}
                        dateDebut="2025"
                        dateFin="2028"
                        description={t('main.parcours.academique.3.description')}
                        emplacement={t('main.parcours.academique.3.emplacement')}
                        imageSrc="cesi"
                        enCours="true"
                    />
                    <ElementParcours
                        titre={t('main.parcours.academique.2.titre')}
                        sousTitre={t('main.parcours.academique.2.sous_titre')}
                        dateDebut="2022"
                        dateFin="2025"
                        description={t('main.parcours.academique.2.description')}
                        emplacement={t('main.parcours.academique.2.emplacement')}
                        imageSrc="iut_lyon1"
                        enCours="false"
                    />
                    <ElementParcours
                        titre={t('main.parcours.academique.1.titre')}
                        sousTitre={t('main.parcours.academique.1.sous_titre')}
                        dateDebut="2019"
                        dateFin="2022"
                        description={t('main.parcours.academique.1.description')}
                        emplacement={t('main.parcours.academique.1.emplacement')}
                        imageSrc="lycee_branly"
                        enCours="false"
                    />
                </div>
                <div className="parcours-chronologique">
                    <h2>{t('main.parcours.professionnel.titre')}</h2>
                    <ElementParcours
                        titre={t('main.parcours.professionnel.2.titre')}
                        sousTitre={t('main.parcours.professionnel.2.sous_titre')}
                        dateDebut="2025"
                        dateFin="2028"
                        description={t('main.parcours.professionnel.2.description')}
                        emplacement={t('main.parcours.professionnel.2.emplacement')}
                        imageSrc="hoortrade"
                        enCours="true"
                    />
                    <ElementParcours
                        titre={t('main.parcours.professionnel.1.titre')}
                        sousTitre={t('main.parcours.professionnel.1.sous_titre')}
                        dateDebut="2024"
                        dateFin="2025"
                        description={t('main.parcours.professionnel.1.description')}
                        emplacement={t('main.parcours.professionnel.1.emplacement')}
                        imageSrc="kpi_technologie"
                        enCours="false"
                    />
                </div>
            </div>
        </Section>
    </>
}
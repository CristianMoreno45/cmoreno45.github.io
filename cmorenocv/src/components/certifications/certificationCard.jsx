
import Grid from '@mui/material/Grid';
import CertificationItem from './certificationItem/certificationItem';

import "../shared/leftPanel/leftCard/leftCard.css";
import './certificationCard.css'
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const CertificationCard = (props) => {
    const isVisible = props.Visible;
    const certificationList = [
        {
            Name: 'English B2+ Language Certificate',
            Src: 'https://media.licdn.com/dms/image/C510BAQGrCP6CXBbjAA/company-logo_100_100/0/1571879615985?e=1700697600&v=beta&t=GPFY-mInumdpqUNs0J4qhX1uNSVg-CMQm49Uh-PahDg',
            Url: 'https://www.efset.org/cert/czmTMG'
        },
        {
            Name: 'AWS Certified Cloud Practitioner',
            Src: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
            Url: 'https://www.credly.com/badges/1260d609-7f8a-4178-88b1-cc2a78050697?source=linked_in_profile'
        },
        {
            Name: 'LEAD1x: Exercising Leadership',
            Src: 'https://media.licdn.com/dms/image/C4E0BAQGJiCbIHyMCzw/company-logo_200_200/0/1586873759195?e=2147483647&v=beta&t=vvwsf8SDTND_ZBWQNzzuabUNLg-X3UJGUk6LPSkgun0',
            Url: 'https://courses.edx.org/certificates/53e3c384360e4c949cb10979c07d4307'
        },
        {
            Name: 'Management 3.0: Advanced Views Workshop',
            Src: 'https://management30.com/wp-content/themes/m30/images/badges/other-workshop-badge.png',
            Url: 'https://management30.com/badges/cristian-moreno-61610188563ab75bfa8083/'
        },
        {
            Name: 'Management 3.0: Foundation Workshop Online - FWO23A',
            Src: 'https://management30.com/wp-content/themes/m30/images/badges/foundation-workshop-badge.png',
            Url: 'https://management30.com/badges/cristian-moreno-61610188563ab75bfa8083/'
        },
        {
            Name: 'Management 3.0: Certified Change Agent Workshop - CCAW',
            Src: 'https://api.badgr.io/public/assertions/ADh_-RltQmqSh0urodyNIw/image',
            Url: 'https://badgr.com/public/assertions/ADh_-RltQmqSh0urodyNIw'
        },
        {
            Name: 'PH125.2x: Data Science',
            Src: 'https://media.licdn.com/dms/image/C4E0BAQGJiCbIHyMCzw/company-logo_200_200/0/1586873759195?e=2147483647&v=beta&t=vvwsf8SDTND_ZBWQNzzuabUNLg-X3UJGUk6LPSkgun0',
            Url: 'https://courses.edx.org/certificates/2565538a396a49e686a4ee70b19fcba3'
        },
        {
            Name: 'Blockchain de la A a la Z: Crea tu criptomoneda en Python',
            Src: 'https://www.svgrepo.com/show/376344/python.svg',
            Url: 'https://www.udemy.com/certificate/UC-0581fd93-48b5-45e7-8817-59609044558e/'
        },
        {
            Name: 'Crea DApps con Tokens NFT en Ethereum usando Truffle y React ',
            Src: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png',
            Url: 'https://www.udemy.com/certificate/UC-1ad194fc-980b-4b0a-84b9-83bbc2d62d08/'
        },
        {
            Name: 'Build a Blockchain and a Cryptocurrency from Scratch ',
            Src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
            Url: 'https://www.udemy.com/certificate/UC-0c954a5d-82dd-4d36-9783-fe558403d857/'
        },
        {
            Name: 'Smart Contracts y Blockchain con Solidity de la A a la Z',
            Src: 'https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/12/How_to_Find_a_Solidity_Developer_for_Hire_Comprehensive_Guide.png.webp',
            Url: 'https://www.udemy.com/certificate/UC-74f20a6b-4974-4f5d-8336-c12e098b3e5b/'
        },
        {
            Name: 'Remote Work Professional Certification - RWPC',
            Src: 'https://images.credly.com/size/340x340/images/ea2c9f2e-b7e1-4a5a-a82e-7e94b67b35bd/image.png',
            Url: 'https://www.credly.com/badges/9e9dc7eb-7e58-41c8-a3fc-829cd3025003?source=linked_in_profile'
        },
        {
            Name: 'Scrum Master Professional Certificate - SMPC',
            Src: 'https://images.credly.com/size/340x340/images/916bde6c-7eb3-40da-b698-993bdc8231f5/image.png',
            Url: 'https://www.credly.com/badges/d0cf542c-6635-4eb0-a261-c15dd3a822dc?source=linked_in_profile'
        }
        ,
        {
            Name: 'MTA: Software Development Fundamentals - Certified 2021',
            Src: 'https://images.credly.com/size/340x340/images/c2537593-9f53-4901-9207-f51376ce7150/MTA-Software_Development_Fundamentals-600x600.png',
            Url: 'https://www.credly.com/badges/7be80d40-9593-4074-a6dd-d21c196fb026?source=linked_in_profile'
        },
        {
            Name: 'Patrones de diseño en Javascript y Node.JS',
            Src: 'https://icons-for-free.com/iconfiles/png/512/install+javascript+js+node+npm+tools+icon-1320165731324625592.png',
            Url: 'https://www.udemy.com/certificate/UC-052d67fb-0691-4496-a461-5c7f003f585b/'
        },
        {
            Name: 'Curso Básico de Jenkins',
            Src: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jenkins_icon_130515.png',
            Url: 'https://platzi.com/p/ccamilomoreno/curso/1436-jenkins-basico/diploma/detalle/'
        }
    ];
    return (
        <div className="left-card" id='certification-card' style={isVisible ? { display: 'inline' } : { display: 'none' }}>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <h2>Certificaciones</h2>
                </Grid>
                {certificationList.map(cer => <CertificationItem Url={cer.Url} Src={cer.Src} Name={cer.Name} />)}
            </Grid>
        </div>
    );
}

export default CertificationCard;
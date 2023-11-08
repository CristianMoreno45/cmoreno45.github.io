const GetProfileData = (language, key) => {
    let value = '...';
    ProfileData.forEach(prp => {
        if (prp.key === key) {
            prp.value.forEach(prpv => {
                if (prpv.language === language) {
                    value = prpv.value;
                }
            })
        }
    });
    return value;
}

const ProfileData = [
    {
        key: 'MODULE',
        value: [
            {
                language: 'ES',
                value: 'Perfil'
            },
            {
                language: 'EN',
                value: 'Profile'
            }
        ]
    },
    {
        key: 'PROFILE',
        value: [
            {
                language: 'ES',
                value: 'Soy ingeniero de sistemas con más de 10 años de experiencia en el negocio de tecnología, apasionado por la investigación y altamente comprometido con las entregas. He participado en el diseño, desarrollo y entrega de soluciones de software de calidad como también el de la orientación técnica a diferentes niveles, también he liderado diferentes células en marcos de trabajo tanto agiles como tradicionales para la construcción de soluciones complejas, escalables y resistentes a la demanda de los clientes. Cuento con conocimiento en desarrollo de software especialmente en C# .Net, infraestructura en la nube, analítica y construcción de modelos de datos nivel Data warehouse, Implementación de DevOps, diseño y construcción de pruebas no funcionales, automatizaciones de pruebas funcionales, Coaching tecnológico entre otros. Soy especialista y máster en el desarrollo de software que en conjunto con la experiencia me ayudan a tomar decisiones desde las buenas prácticas.'
            }
        ]
    }
];
export default GetProfileData;
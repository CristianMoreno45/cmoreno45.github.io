import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExperienceItem from './experienceItem/experienceItem';
import './experience.css'

const Experience = (props) => {
    const isVisible = props.Visible;

    const experienceList = [
        {
            ImgUrl: 'https://media.licdn.com/dms/image/C4E0BAQEmUPg378KloQ/company-logo_200_200/0/1573663330721?e=2147483647&v=beta&t=ozpogUHagWEFCYHaywAyWkFvPu9nvklj0s7Cw1nVBug',
            CompanyName: 'Juju S.A.S',
            Time: 'Enero 2022 - Actualmente',
            JobTitle: 'Líder de innovación',
            CompanyDescription: 'Es una compañía que ayuda a grandes empresas a administrar efectivamente sus programas de incentivos y fidelización para potenciar sus resultados. Trabajan con más de 250 clientes y más de 185.000 usuarios generando un alto impacto en los resultados con entregas inmediatas, una operación simple, reducción de carga operativa, costo eficiente y miles de opciones de redención en el catálogo de bonos virtuales más grande de Colombia.',
            StackItem: ['csharp', 'angular', 'react', 'solidity', 'sqlserver', 'azuredevops', 'docker', 'rabbirmq', 'aws', 'jira', 'bitbucket', 'windows', 'linux', 'jmeter'],
            Projects: [
                'Integración con VTEX para generación de giftcards en Blockchain en Solidity (Ethereum).',
                'Implementación de pruebas no funcionales con Jmeter y DevOps.',
                'Implementación de Data Warehouse con Redshift y Glue.',
                'Reducción de costos del proceso de auto escalamiento.',
                'Implementar Management 3.0.',
                'Implementación de proceso de parchado para ISO 27001.'],
            Activities: [
                'Definir los diseños técnicos de la solución con base en los requerimientos del negocio.',
                'Definir y proyectar el plan de trabajo para que el equipo enfoque esfuerzos al cumplimiento del plan estratégico de la compañía.',
                'Planear las actividades generales de inicio de un proyecto .',
                'Establecer indicadores de gestión.',
                'Realizar investigaciones técnicas para aprender sobre blockchain.',
                'Elaborar y ejecutar los diseños técnicos de la solución.',
                'Liderar cada una de las etapas de desarrollo, garantizando el cumplimiento los requerimientos funcionales y técnicos planteados en el proyecto.',
                'Elaborar y ejecutar pruebas concepto para validar como utilizar la tecnología.',
                'Seleccionar la tecnología de acuerdo a los parámetros establecidos y necesidades .',
                'Coordinar la creación del cronograma de planificación, determinando la longitud del Sprint.',
                'Apoyar los desarrollos necesarios.',
                'Seleccionar y velar por la correcta capacitación del personal a cargo.',
                'Evaluar y retroalimentar al personal a cargo.',
                'Liderar al equipo en todo lo relacionado con la gestión administrativa (solicitudes, permisos, vacaciones, etc.).',
                'Demás funciones asignadas.',
                'Hacer seguimiento a los indicadores de gestión para el cumplimiento de los indicadores individuales, equipo y compañía.',
                'Corroborar el funcionamiento de nuevos proyectos.',
                'Velar porque la inversión en tecnología sea sostenible en el tiempo.',
                'Implementar acciones preventivas, correctivas y planes de mejoramiento .',
                'Investigar nuevas tecnologías, que permitan proporcionar mejoras en los procesos.',
                'Retroalimentar al personal a cargo .',
                'Asumir las situaciones de alto impacto, identificando oportunidades y riesgos potenciales.']
        },
        {
            ImgUrl: 'data:image/jpeg;base64,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',
            CompanyName: 'Periferia IT Group S.A.S',
            Time: 'Agosto 2021 - Enero 2022',
            JobTitle: 'Consultor (Arquitecto digital)',
            CompanyDescription: 'Es una compañía integral de soluciones tecnológicas, con presencia y trayectoria a nivel mundial, brindando cobertura, respaldo y que potencian las capacidades de las empresas para llevarlas a la transformación digital consiguiendo objetivos en sus proyectos.',
            StackItem: ['java', 'react', 'jenkins', 'redhat', 'gpc', 'gitlab', 'azuredevops', 'apple', 'linux', 'jmeter'],
            Projects: [
                'Implementar en compañía de un tercero el proceso de pruebas no funcionales en el proyecto de fidelización de Terpel S.A.',
                'Implementar en compañía de un tercero monitoreo de aplicaciones con LogDNA,  Smartlook y Sentry en el proyecto de fidelización de Terpel S.A.'],
            Activities: [
                'Responsable de la integridad, consistencia, eficiencia y cumplimiento de los estándares técnicos del desarrollo realizado en una Tribu específica. ',
                'Ofrecer la hoja de ruta tecnológica de la Tribu y también apoya al líder de tribu en la creación de nuevas células (dimensionamiento de los recursos y roles de TI) y en la coordinación de la asignación de las personas de la tecnología a las células. ',
                'Responsable de la alineación vertical en una Tribu en el lado tecnológico (priorizando el cumplimiento de los objetivos de la Tribu) pero también asegurando la coherencia en el desarrollo horizontal (cómo se desarrollan las soluciones). ',
                'Participar en las definiciones técnicas de las células, proporcionando conocimientos para resolver problemas. Coordinar soluciones de arquitectura entre equipos y resolver posibles diferencias entre equipos. ',
                'Resolver posibles interdependencias entre plataformas/sistemas. Negociar prioridades tecnológicas con la organización para maximizar la captura de valor de la Tribu. ',
                'Responsable de garantizar la coherencia técnica de las soluciones en la Tribu con la arquitectura empresarial. ',
                'Definir la hoja de ruta tecnológica de la Tribu (lo que se hace primero y qué más adelante). ',
                'Apoyar los Líderes de Chapter en el desarrollo de habilidades de los miembros de TI en las Células.',
                'Promover las mejores prácticas de seguridad, de la arquitectura empresarial y otros aspectos tecnológicos relevantes. ',
                'Asegurar las habilidades técnicas requeridas para la captura de valor de las células. ',
                'Mantener sesiones uno-a-uno con Líderes de Chapter miembros claves de los chapters tecnológicos y con los Product’s Owners. ',
                'Promover y acompañar los Chapter Sync, asegurando la distribución del conocimiento y la experimentación de prácticas emergentes']
        },
        {
            ImgUrl: 'https://media.licdn.com/dms/image/C4E0BAQEmUPg378KloQ/company-logo_200_200/0/1573663330721?e=2147483647&v=beta&t=ozpogUHagWEFCYHaywAyWkFvPu9nvklj0s7Cw1nVBug',
            CompanyName: 'Juju S.A.S',
            Time: 'Octubre 2018 - Agosto 2021',
            JobTitle: 'Líder de tecnología (CTO)',
            CompanyDescription: 'Es una compañía que ayuda a grandes empresas a administrar efectivamente sus programas de incentivos y fidelización para potenciar sus resultados. Trabajan con más de 250 clientes y más de 185.000 usuarios generando un alto impacto en los resultados con entregas inmediatas, una operación simple, reducción de carga operativa, costo eficiente y miles de opciones de redención en el catálogo de bonos virtuales más grande de Colombia.',
            StackItem: ['csharp', 'angular', '', 'sqlserver', 'azuredevops', 'docker', 'aws', 'jira', 'bitbucket', 'windows'],
            Projects: [
                'Implementación de pruebas funcionales con Selenio.',
                'Implementación de análisis de Código estático con Sonar.',
                'Iniciar el proceso de migración de aplicaciones monolíticas a microservicios con .Net 6.',
                'Ascender de Líder de desarrollo a Director de tecnología.',
                'Ganar el premio al empleado del año 2019.',
                'Ganar el Premio al Liderazgo más positivo 2019',
                'Montaje del DevOps en Azure con Auto escalamiento en AWS, auto empaquetado de contenedores Docker, registro en ECR y auto despliegue en el servidor de nugets.',
                'Montar Scrum y Kanban en la fábrica de software.'],
            Activities: [
                'Participar activamente en el comité de gerencia para la toma de decisiones corporativas.',
                'Administrar planes, políticas y procedimientos de seguridad de la información de la empresa.',
                'Administrar proveedores de TI que brindan servicios a la empresa.',
                'Reuniones con clientes y comerciales para la definición del alcance de los proyectos.',
                'Definir la arquitectura de las diferentes plataformas de la empresa.',
                'Orientar y coordinar el equipo de desarrollo y testing de software.',
                'Gestionar la actualidad administrativa de recursos humanos relacionados con TI.',
                'Definición y diseño de la arquitectura de los sistemas, vista física, vista lógica, principios de arquitectura, seguridad, entre otros.',
                'Seleccionar de la Tecnología.',
                'Gestionar la mejora continua de la Arquitectura.',
                'Asegurar la Calidad de los componentes.',
                'Conectar la arquitectura planteada para un proyecto de software con la realidad del código.',
                'Brindar ayuda técnica continua y pro-activa a todos los desarrolladores del equipo.',
                'Realizar revisiones del código fuente creado por los miembros del equipo de desarrollo.',
                'Gestionar la configuración de los ambientes de desarrollo, pruebas y producción.',
                'Realizar diferentes procesos de diagnóstico ante incidente.',
                'Soportar la infraestructura y el control de costo de estos en AWS']
        },
        {
            ImgUrl: 'https://media.licdn.com/dms/image/D4E0BAQH8HZtJzOJ7-g/company-logo_200_200/0/1689283040665?e=2147483647&v=beta&t=uN0GOhea4qcXXipM6IdVD0tqpdFVHu_Kjl7Y3hzFUCo',
            CompanyName: 'Q-Vision Technologies S.A',
            Time: 'Octubre 2017 - Octubre 2018',
            JobTitle: 'Líder técnico',
            CompanyDescription: 'Es una empresa española que ofrece soluciones digitales adaptables de alta calidad, a través de 18 años en el mercado, atendiendo distintos sectores de la economía en España y Europa, así como en Latinoamérica y Estados Unidos. Cuenta con la experiencia e innovación de más de 550 colaboradores, de la mano de quienes han construido una trayectoria exitosa, llevando a nuestros clientes a la 4ta revolución industrial a través de desarrollo de software, aseguramiento de calidad, automatización de procesos y gestión inteligente de datos. Además, cuentan con certificados como: ofreciendo soluciones digitales adaptables de alta calidad en Latinoamérica, Estados Unidos y Europa.',
            StackItem: ['csharp', 'vue', 'sqlserver', 'gitlab', 'docker', 'azurecloud', 'bitbucket', 'linux'],
            Projects: [
                'Diseñar e implementar los entandares de desarrollo de la fábrica de software.',
                'Construcción del Q-uiker: generador de código html y js para agilidad en el desarrollo del software.',
                'Participar en el proyecto de migración de core bancario de Visionamos S.A. a microservicios en contenedores Docker, redireccionamiento de peticiones por medio de Ocelot ApiGateWay, autenticación y autorización con IdentityServer4, manejo de mensajería en protocolos AMQP por medio de RabbitMQ.'],
            Activities: [
                'Coordinar los desarrollos de software de la fábrica de software en conjunto con el arquitecto de software de la compañía.',
                'Diseñar arquitecturas de software para clientes en conjunto con el arquitecto de software.',
                'Construir artefactos que ayuden y agilicen el desarrollo de software dentro de la organización.',
                'Orientar a los demás desarrolladores desde la óptica técnica.',
                'Hacer las veces de Scrum Master cuando el arquitecto no pueda realizar esta función.']
        },
        {
            ImgUrl: 'https://media.licdn.com/dms/image/C4E0BAQGX5FwJpFVLIg/company-logo_200_200/0/1553790386287?e=2147483647&v=beta&t=ut-eN5oVQDpQm0dIs-m-OMqPhZQAX2A9DQ5iYPqQScg',
            CompanyName: 'KBT S.A.S',
            Time: 'Diciembre 2016  - Octubre 2017',
            JobTitle: 'Ingeniero de desarrollo senior',
            CompanyDescription: 'Es una empresa que se ha destacado como líder en el sector de tecnologías de la información y comunicaciones, tambien son líderes en interventorías, gestión de proyectos, servicios TIC y marketing digital.',
            StackItem: ['csharp', 'sqlserver', 'subversion', 'windows'],
            Projects: [
                'Implementar la herramienta TpNet en el proyecto de POS de Cafam S.A. a nombre de Wincor Nixdorf S.A.',
                'Desempeñar el rol de líder a cargo del área de desarrollo en dos ocasiones, coordinando horarios de 5 talentos, gestionando y monitoreando los entregables y asistiendo a reuniones para decidir sobre métricas y requerimientos.'],
            Activities: [
                'Desarrollar en visual Basic y C# 2013 las nuevas funcionalidades solicitadas por los clientes y CR’s (Controles de cambio) funcionalidades existentes del producto TpDotNet.',
                'Brindar el soporte en la instalación y configuración del producto.',
                'Dseñar funcionalidades que satisfagan las necesidades del negocio bajo los parámetros, lineamientos y limitaciones de la herramienta TpDotNet, el equipo de QA interno y externo (cliente)e.',
                'Emitir la respectiva documentación del proceso de desarrollo apalancando la gestión de conocimiento y la capacitación de los clientes internos y externos de las funcionalidades relacionadas con el desarrollo.',
                'Entender y proporcionar soluciones ajustadas a la arquitectura de datos de TpDotNet en Microsoft Sql Server 2012.']
        },
        {
            ImgUrl: 'data:image/png;base64,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',
            CompanyName: 'Bancamia S.A.',
            Time: 'Julio 2013  - Diciembre 2016',
            JobTitle: 'Ingeniero de desarrollo',
            CompanyDescription: 'Es una institución financiera de primer nivel que tiene un sentido social que busca apoyar el desarrollo productivo de los emprendedores en la base de la pirámide.',
            StackItem: ['csharp', 'php', 'java', 'mysql', 'sqlserver', 'oracle', 'windows'],
            Projects: [
                'Participar en el proyecto de cambio de core bancario de COBIS a BANTOTAL desarrallado en Genexus (JAVA EE con Oracle 11g).',
                'Diseñador del primer modelo de estándares de desarrollo.',
                'Implementar de la seguridad de los servicios web bajo el esquema de seguridad ws-security (Rampart).',
                'Ser elegido para ser parte del equipo MIS (servicios de información gerencial) de contingencia del Banco implementando SSIS 2013 y SQL Server 2014.',
                'Ser promovido de Analista SARLAFT a Desarrollador.',
                'Ser analista funcional del proyecto cambio de Core bancario de COBIS a BANTOTAL.'],
            Activities: [
                'Diseñar soluciones que representen tecnológicamente al negocio.',
                'Mantener los desarrollos ya entregados.',
                'Documentar debidamente el proceso (diseños técnicos).',
                'Realizar segmentación de clientes con base en metodologías estadísticas y prospectivas utilizando SPSS MODELER (Banking Business Intelligence) en el sistema SARLAFT.',
                'Carga de listas restrictivas y no restrictivas al Core bancario COBIS (OFAC, Policía, etc.).',
                'Administrar minería de datos en base a declaraciones SQL y metodologías probabilísticas.',
                'Administrar incidentes y órdenes de servicio a nivel tecnológico.',
                'Generar informes a las entidades de control (Revisor Fiscal, Superintendencia Financiera de Colombia, Unidad de Análisis e Información Financiera de la UIAF).']
        },
        {
            ImgUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple60/v4/45/43/c5/4543c5e1-4e96-aeff-dd99-73a6ec425af2/source/512x512bb.jpg',
            CompanyName: 'Atento S.A.',
            Time: 'Agosto 2012  - Julio 2013',
            JobTitle: 'Ingeniero de desarrollo Jr.',
            CompanyDescription: 'Atento es una empresa multinacional que opera en 14 países y tiene más de 150.000 empleados. Atento proporciona servicios de CRM y BPO a través de plataformas multicanal, incluyendo back office, SAC, service desk, soporte técnico, recobro y ventas.',
            StackItem: ['csharp', 'sqlserver', 'windows'],
            Projects: [
                'Participar en los proyectos de llamado predictivo a clientes con empresas como Domino\'s Pizza , Telefonía Movistar, Droguerías la rebaja, Belcorp, entre otras.'],
            Activities: [
                'Desarrollar software enfocado al área de telecomunicaciones y Contact Center en la plataforma .Net 2008.',
                'Manejar bases de datos en Sql Server 2008 R2.',
                'Crear reportes en Reporting Services .net 3.',
                'Generar ETLs en SQL Server Integration Services (SSIS) y .Net 3']
        },
        {
            ImgUrl: 'https://corporativo.compensar.com/PublishingImages/imagen_predeterminada_opengraph.jpg',
            CompanyName: 'Compenesar S.A.',
            Time: 'Abril 2010 - Agosto 2012',
            JobTitle: 'Auxiliar técnico',
            CompanyDescription: 'Compensar es un fondo de compensación familiar colombiano, con sede en Bogotá, ofrece servicios de salud a través de su Entidad de Promoción de la Salud (EPS), así como turismo, vivienda, recreación y formación deportiva a través de sus academias de fútbol y natación, baloncesto y tenis.',
            StackItem: ['php', 'mysql', 'windows'],
            Projects: [
                'Ser promovido de auxiliar operativo a auxiliar técnico.',
                'Construir una aplicación para medir el desempeño y alto potencial de los recursos humanos.',
                'Ser promovido de practicante universitario a auxiliar operativo.'],
            Activities: [
                'Planificar, modelar, diseñar, desarrollar y gestionar un sistema de información que permitiera la calificación y seguimiento de las competencias organizacionales con el esquema, calificación 360 °, calificación y seguimiento de Alto Potencial, calificación y seguimiento de Metas enfocadas al cumplimiento de los objetivos del Balance Score Card y gestionar el levantamiento de perfiles laborales.',
                'Realizar un seguimiento de los planes de formación.',
                'Generar informes de costeo ABC.',
                'Generar informes de Impulsores de costes.',
                'Gestionar y asegurar la información en la formación presencial.',
                'Servir de apoyo logístico en las jornadas de Talento Humano.',
                'Mantener el control de los horarios de las salas de formación.',
                'Realizar un seguimiento de los Periodos de Pruebas.',
                'Servir de apoyo logístico en las Jornadas del Talento Humano.',
                'Mantener el control de los horarios de las salas de formación.']
        },
    ];

    return <div class='experience' style={isVisible ? { display: 'inline' } : { display: 'none' }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
                <Grid item xs={1} sm={6} md={12}>
                    <h2>Experiencia</h2>
                </Grid>
                {experienceList.map(exp => {
                    return <ExperienceItem Exp={exp} />;
                })}

            </Grid>
        </Box>
    </div>;
}

export default Experience;
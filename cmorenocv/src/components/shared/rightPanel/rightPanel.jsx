import React from 'react';
import Profile from '../../profile/profile';
import './rightPanel.css';
import Experience from '../../experience/experience';
import CertificationCard from '../../certifications/certificationCard';

const RightPanel = () => {
  return <div className='right-panel'>
    <Profile />
    <Experience />
    <CertificationCard />
    <p class="message">
      <span >… Elija un trabajo que le guste y no tendrá que trabajar ni un día de su vida.<br /></span>
      <span >Confucio</span>
    </p>
    <p class="statement">
      * PARA EFECTOS LEGALES, HAGO CONSTAR QUE LA INFORMACIÓN PROPORCIONADA EN ESTA HOJA DE VIDA ES TOTALMENTE VERDADERO (CST Art. 62 No. 1) Y PUEDE SER COMPROBADO EN SU TOTALIDAD.
    </p>
  </div>;
}

export default RightPanel;
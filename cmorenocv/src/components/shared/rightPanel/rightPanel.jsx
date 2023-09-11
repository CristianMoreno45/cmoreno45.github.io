import React from 'react';
import Profile from '../../profile/profile';
import Experience from '../../experience/experience';
import CertificationCard from '../../certifications/certificationCard';
import './rightPanel.css';

const RightPanel = (props) => {
  const currentModule= props.CurrentModule;
  return <div className='right-panel'>
   
    <Profile Visible={props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' } />
    <Experience Visible={currentModule === 'Experiencia' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' } />
    <CertificationCard Visible={currentModule === 'Certificaciones' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' } />
  </div>
}

export default RightPanel;

import LanguageCard from "../../languages/languages";

import "./leftPanel.css";
import Title from '../../title/title';
import MobileMenu from "../../mobileMenu/mobileMenu";
import Profile from "../../profile/profile";
import AvatarComponent from "../../avatar/avatar";
import StackCard from "../../stackTool/stackCard";

function LeftPanel(props) {
  const currentModule = props.CurrentModule;

  return (
    <div className="left-card">
      <AvatarComponent />
      <Title id='title-profile' />
      <MobileMenu Window={props.Window} CurrentModule={props.CurrentModule} ModuleHook={props.ModuleHook} />
      <Profile className="left-card" Visible={props.Window.Dispositive === 'mobile' && currentModule === 'Perfil'} />
      <StackCard Visible={currentModule === 'Stack' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
      <LanguageCard Visible={currentModule === 'Idiomas' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />

    </div>
  );
}


export default LeftPanel;
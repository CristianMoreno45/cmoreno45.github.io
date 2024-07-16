import LanguageCard from "../../languages/languages";

import "./leftPanel.css";
import Title from "../../title/title";
import MobileMenu from "../../mobileMenu/mobileMenu";
import Profile from "../../profile/profile";
import AvatarComponent from "../../avatar/avatar";
import StackCard from "../../stackTool/stackCard";
import MobileMenuData from "../../../data/mobileMenuData";

function LeftPanel(props) {
  const currentModule = props.CurrentModule;
  const lang = props.Lang;

  return (
    <div className="left-card">
      <AvatarComponent />
      <Title id="title-profile" Lang={lang} LangHook={props.LangHook} />
      <MobileMenu
        Window={props.Window}
        CurrentModule={props.CurrentModule}
        ModuleHook={props.ModuleHook}
        Lang={lang}
      />
      <Profile
        className="left-card"
        Visible={
          props.Window.Dispositive === "mobile" &&
          currentModule === MobileMenuData[lang].profile
        }
        Lang={lang}
      />
      <StackCard
        Visible={
          currentModule === MobileMenuData[lang].stack ||
          props.Window.Dispositive === "desktop" ||
          props.Window.Dispositive === "tablet"
        }
        Lang={lang}
      />
      <LanguageCard
        Visible={
          currentModule === MobileMenuData[lang].languages ||
          props.Window.Dispositive === "desktop" ||
          props.Window.Dispositive === "tablet"
        }
        Lang={lang}
      />
    </div>
  );
}

export default LeftPanel;

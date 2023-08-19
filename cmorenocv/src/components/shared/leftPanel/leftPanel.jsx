
import ContactCard from "../../contact/contactCard";
import "./leftPanel.css";
import EducationCard from "../../education/education";
import LanguageCard from "../../languages/languages";


function LeftPanel() {
  return (
    <div className="left-panel ">
      <div className="avatar-container">
        <div className="avatar"></div>
      </div>
      <ContactCard />
      <EducationCard />
      <LanguageCard />
    </div>
  );
}

export default LeftPanel;
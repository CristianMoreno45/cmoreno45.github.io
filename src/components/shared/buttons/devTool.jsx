import * as React from "react";
import {
  DiDotnet,
  DiJira,
  DiBitbucket,
  DiLinux,
  DiWindows,
  DiApple,
  DiRedhat,
} from "react-icons/di";
import { FaPhp, FaAws, FaDocker, FaJava, FaJenkins } from "react-icons/fa";
import {
  SiSolidity,
  SiAzurepipelines,
  SiOracle,
  SiMicrosoftsqlserver,
  SiCsharp,
  SiMysql,
  SiApachejmeter,
  SiRabbitmq,
  SiMicrosoftazure,
  SiSubversion,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoGoogleCloud,
  BiLogoGitlab,
} from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./devTool.css";

//https://react-icons.github.io/react-icons/icons?name=di
const DevIcon = (props) => {
  const tool = props.Tool;
  const icons = {
    csharp: SiCsharp,
    php: FaPhp,
    java: FaJava,
    solidity: SiSolidity,
    azuredevops: SiAzurepipelines,
    aws: FaAws,
    docker: FaDocker,
    sqlserver: SiMicrosoftsqlserver,
    oracle: SiOracle,
    mysql: SiMysql,
    jira: DiJira,
    bitbucket: DiBitbucket,
    gitlab: BiLogoGitlab,
    subversion: SiSubversion,
    js: BiLogoJavascript,
    node: BiLogoJavascript,
    react: BiLogoReact,
    angular: BiLogoAngular,
    vue: BiLogoVuejs,
    gpc: BiLogoGoogleCloud,
    azurecloud: SiMicrosoftazure,
    linux: DiLinux,
    windows: DiWindows,
    apple: DiApple,
    jmeter: SiApachejmeter,
    jenkins: FaJenkins,
    redhat: DiRedhat,
    rabbitmq: SiRabbitmq,
  };
  const IconComponent = icons[tool];
  return IconComponent ? (
    <Tooltip title={tool}>
      <IconButton className="dev-icon-container">
        <IconComponent />
        <div className="dev-icon-label">{tool}</div>
      </IconButton>
    </Tooltip>
  ) : null;
};
export default DevIcon;

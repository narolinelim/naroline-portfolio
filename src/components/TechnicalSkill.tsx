import React from 'react';
import SkillWidget from './SkillWidget';
import htmlIcon from '../assets/html-5.png';
import cssIcon from '../assets/css-3.png';
import pythonIcon from '../assets/python.png';
import cIcon from '../assets/c-icon.png';
import rIcon from '../assets/r-icon.png';
import javaIcon from '../assets/java-icon.png';
import jsIcon from '../assets/javascript-icon.png';
import tsIcon from '../assets/typescript-icon.png';
import reactIcon from '../assets/react-icon.png';
import tailwindIcon from '../assets/tailwindcss.png';
import expressIcon from '../assets/express.png';
import fastapiIcon from '../assets/FastAPI.png';
import gitIcon from '../assets/git.png';
import mysqlIcon from '../assets/mysql.png';
import shinyIcon from '../assets/shiny.png';
import flutterIcon from '../assets/flutter.png';
import dockerIcon from '../assets/docker-icon.png';

function TechnicalSkill() {

  return (
    <div className="max-w-4xl mb-5">
      <h1 className="mb-5">My Technical Skills...</h1>

      <div className="flex flex-row flex-wrap gap-3 justify-center">
        <SkillWidget icon={htmlIcon} name="HTML"/>
        <SkillWidget icon={cssIcon} name="CSS"/>
        <SkillWidget icon={pythonIcon} name="Python"/>
        <SkillWidget icon={rIcon} name="R"/>
        <SkillWidget icon={javaIcon} name="Java"/>
        <SkillWidget icon={cIcon} name="C"/>
        <SkillWidget icon={jsIcon} name="JavaScript"/>
        <SkillWidget icon={tsIcon} name="TypeScript"/>
        <SkillWidget icon={reactIcon} name="React"/>
        <SkillWidget icon={expressIcon} name="ExpressJS"/>
        <SkillWidget icon={tailwindIcon} name="TailwindCSS"/>
        <SkillWidget icon={shinyIcon} name="Shiny"/>
        <SkillWidget icon={flutterIcon} name="Flutter"/>
        <SkillWidget icon={fastapiIcon} name="FastAPI"/>
        <SkillWidget icon={mysqlIcon} name="MySQL"/>
        <SkillWidget icon={gitIcon} name="Git"/>
        <SkillWidget icon={dockerIcon} name="Docker"/>
      </div>
    </div>
  );

}

export default TechnicalSkill;
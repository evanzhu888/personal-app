import "./skills.css"
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaNode, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { BsCSquareFill } from "react-icons/bs";
import { SiExpress, SiNumpy, SiPandas, SiJupyter } from "react-icons/si";

export function Skills() {
    return (
        <div className="skills" id="ski">
            <h1>Skills</h1>
            <div>
                <p className="school"> <strong>Languages</strong> </p>
                <p className="divider">
                    <ul>
                        <li className="item">
                            <span> <FaPython /> </span>
                            <span> Python</span>
                        </li>
                        <li> <FaJava /> Java </li>
                        <li> <IoLogoJavascript /> JavaScript </li>
                        <li> <FaHtml5 /> HTML </li>
                        <li> <FaCss3 /> CSS </li>
                        <li> <DiMysql /> SQL </li>
                        <li> <BsCSquareFill /> C </li>
                    </ul>
                </p>
                <p className="school"> <strong>Frameworks</strong> </p>
                <p className="divider">
                    <ul>
                        <li> <FaReact /> React </li>
                        <li> <FaNode /> Node </li>
                        <li> <SiExpress /> Express </li>
                    </ul>

                </p>
                <p className="school"> <strong>Tools & Technologies</strong> </p>
                <p className="divider">
                    <ul>
                        <li> <IoLogoGithub /> Git </li>
                        <li> <SiNumpy /> Numpy </li>
                        <li> <SiPandas /> Pandas </li>
                        <li> <SiJupyter /> Jupyter </li>
                        <li> <FaDocker /> Docker </li>
                    </ul>

                </p>
            </div>
        </div>
    );
}

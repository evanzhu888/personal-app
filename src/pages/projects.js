import React from "react";
import "./projects.css";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

export function Projects() {
    return (
        <div className="education" id="pro">
            <h1>Projects</h1>
            <div>
                <p className="school"> <strong>Google ChromeOS Text 2.0</strong> </p>
                <p> Developed a successor to the ChromeOS Text editor app in partnership with Google representatives. Crafted a progressive web app with offline capability, additional features & customization options,
                    and improved reliability using <strong>React</strong> and <strong>Jasmine</strong>. Engaged in user research within Chrome users, identified user stories, and created <strong>Figma</strong> wireframes to enhance the UX.
                </p>
                <p className="projectdivider">
                    <a className="links" href="https://github.com/jyang759/JIE-3331" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="linkicon" /> GitHub
                    </a>
                </p>
                <p className="divider"></p>
                <p className="school"> <strong>NORP Homelessness Analysis</strong> </p>
                <p> Conducted a comprehensive analysis of homelessness in California and generated data visualizations for Nonprofit Organization Research Panel (NORP) using <strong>Python</strong>, <strong>MySQL</strong>, and <strong>Seaborn</strong>. Cleaned and analyzed data from Data.gov and integrated data into NORP metabase.
                </p>
                <p className="projectdivider">
                    <a className="links" href="https://www.youtube.com/watch?v=SJgjIdDYvQE" rel="noopener noreferrer" target="_blank">
                        <FaYoutube className="linkicon" /> YouTube
                    </a>
                </p>
                <p className="divider"></p>

                <p className="school"> <strong>KeyLime</strong> <em>HackGT9</em> </p>
                <p> Worked in a group of 4 to develop a web application that allows college students to post subleases and look for subleases using <strong>React</strong> for the front end and <strong>Firebase</strong> for the
                    back end to manage the database and authentication.
                </p>
                <p className="projectdivider">
                    <a className="links" href="https://github.com/ericsyz/KeyLime" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="linkicon" /> GitHub
                    </a>
                    <a className="links" href="https://devpost.com/software/keylime" rel="noopener noreferrer" target="_blank">
                        <SiDevpost className="linkicon" /> Devpost
                    </a>
                </p>
                <p className="divider"></p>

                <p className="school"> <strong>COVID-19 Susceptibility: Health Factors Study</strong> <em>CS 2316</em> </p>
                <p>Analyzed and cleaned 3 significant datasets relating to COVID-19 susceptibility and various health factors by using <strong>BeautifulSoup</strong> to web scrape HTML web pages,
                    <strong> Numpy</strong> and <strong>Pandas</strong> to clean CSV files and making <strong>REST API</strong> requests to access JSON data using the <strong>ETL</strong> process.
                    Generated data visualizations from cleaned datasets using <strong>Plotly, Matplotlib, </strong>
                    and <strong>Seaborn</strong> to convey meaningful trends.
                </p>
                <p className="projectdivider">
                    <a className="links" href="https://www.youtube.com/watch?v=VjOpc6gOzrY" rel="noopener noreferrer" target="_blank">
                        <FaYoutube className="linkicon" /> YouTube
                    </a>
                </p>
                <p className="divider"></p>
            </div>
        </div>
    );
}

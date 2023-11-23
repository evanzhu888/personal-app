import React from "react";
import "./projects.css";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

export function Projects() {
    return (
        <div className="education" id="pro">
            <h1>Projects</h1>
            <div>
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
                <p className="school"> <strong>Listr</strong> <em>HackGT8</em> </p>
                <p>Worked in a group of 4 using <strong>React.js, HTML, CSS</strong> and <strong>JavaScript</strong> to design a website that allows users to rate songs and albums from the <strong>Spotify API</strong>.

                </p>
                <p className="projectdivider">
                    <a className="links" href="https://github.com/Rishi1204/listr" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="linkicon" /> GitHub
                    </a>
                    <a className="links" href="https://devpost.com/software/listr-u02p8m" rel="noopener noreferrer" target="_blank">
                        <SiDevpost className="linkicon" /> Devpost
                    </a>
                </p>
                <p className="divider"></p>

            </div>
        </div>
    );
}

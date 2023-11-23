import React from "react";
import "./experience.css";

export function Experience() {
    return (
        <div className="education" id="exp">
            <h1>Experience</h1>
            <div>
                <p className="school"> <strong>Procter & Gamble</strong><em>Cincinnati, Ohio</em> </p>
                <p className="degree"><strong>Software Engineer Intern</strong> <em>May 2023 - August 2023</em></p>
                <p className="divider">Proposed and developed a web application using React, Node, and Express integrating the Azure OpenAI API that offers sales professionals a platform to interact with GPT models seamlessly.
                    Deployed the web app using the Azure Web App Service and built an automated CI/CD pipeline for deploying updates and testing the app using GitHub Actions.
                    Devised use cases for GPT models to support strategic selling and presented them to the Innovation team, receiving enthusiastic endorsement and recognition for their potential to shape customer engagement.
                    Created comprehensive documentation on the web app’s maintenance, troubleshooting, and future enhancement.
                </p>
                <p className="school"> <strong>Georgia Tech</strong><em>Atlanta, Georgia</em> </p>
                <p className="degree"><strong>Undergraduate Grader</strong> <em>January 2023 - May 2023</em></p>
                <p className="divider"> Graded weekly homework for COE 2001 Statics, a class of 120 students under Professor Min Zhou.
                    Awarded position after receiving the highest grade in the Fall ‘21 semester
                </p>
                <p className="school"> <strong>Cincinnati Financial Corporation</strong><em>Cincinnati, Ohio</em> </p>
                <p className="degree"><strong>Software Developer Intern</strong> <em>May 2022 - August 2022</em></p>
                <p className="divider"> Revised 1000+ lines of code using the Agile/Scrum development framework to refactor and maintain UI code in Visual Basic using ReSharper to eliminate errors and improve code readability/efficiency.
                    Used Regex to preprocess XML files to validate proper formatting from user inputs before API calls. Generated 30+ reports to support stakeholder needs by writing MS SQL queries.
                    Tested REST APIs and completed user stories with the ASP.NET C# framework and debugged numerous JavaScript errors in the AppScan on Cloud team.
                </p>
            </div>
        </div>
    );
}

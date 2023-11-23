import React from "react";
import "./education.css";

export function Education() {
    return (
        <div className="education" id="edu">
            <h1>Education</h1>
            <div>
                <p className="school"> <strong>Georgia Institute of Technology</strong> <em>Atlanta, Georgia</em> </p>
                <p className="degree"><strong>B.S. in Computer Science</strong> <em>June 2021 - May 2025</em></p>
                <p><strong>GPA: </strong> 3.93/4.0</p>
                <p><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Object-Oriented Programming, Statistics & Applications, Linear Algebra, Combinatorics, Artificial Intelligence, Database Systems, Design & Analysis of Algorithms, Systems & Networks, Robots & Perception, Machine Learning, Information-Security, Data Input & Manipulation</p>
                <p className="divider"><strong>Activities & Societies:</strong> VGDev, Honors Program, Asian-American Student Association </p>
                <p className="school"><strong>William Mason High School </strong> <em>Mason, Ohio</em></p>
                <p className="degree"><strong>High School Diploma</strong> <em>August 2017 - May 2021</em></p>
                <p><strong>GPA: </strong> 3.97/4.0 unweighted, 5.29 weighted</p>
                <p><strong>Relevant Coursework:</strong> AP Computer Science A (Java), Honors Computer Programming 1-2 (Visual Basic), Multivariable Calculus </p>
                <p className="divider"> <strong>Activities & Societies:</strong> Mock Trial, Science National Honor Society, Future Business Leaders of America</p>
            </div>
        </div>
    );
}

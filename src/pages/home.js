import React from "react";
import pic from "../images/profilepic.jpeg";
import "./home.css";

export function Home() {
    return (
        <div className="home">
            <div className="text">
                <h1>Hello. I am Evan Zhu</h1>
                <p> I am a computer science student at the <strong>Georgia Institute of Technology</strong> with concentrations in <strong>Intelligence</strong> and <strong>Information Internetworks</strong>. I am passionate about learning more and enhancing my coding skills, AI/ML, and full-stack development.</p>
                <p> Outside of computer science, I enjoy cooking/trying new foods, working out/staying active, and watching comedies.  Feel free to reach out to me ezhu46@gatech.edu!</p>
            </div>
            <img src={pic} className="pic" alt="profile" />
        </div>
    );
}

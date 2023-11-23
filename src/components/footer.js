import { React } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './footer.css'

export function Footer() {
    const linkedinUrl = "https://www.linkedin.com/in/evan-zhu/";
    const githubUrl = "https://github.com/evanzhu888";

    const iconStyle = {
        color: 'inherit',
        textDecoration: 'none',
        margin: '0px 15px'
    };

    return (
        <div className="footer">
            <div>
                <a href={linkedinUrl} rel="noopener noreferrer" target="_blank" style={iconStyle}>
                    <LinkedInIcon className="icon" />
                </a>
                <a href={githubUrl} rel="noopener noreferrer" target="_blank" style={iconStyle}>
                    <GitHubIcon className="icon" />
                </a>
                <a href="mailto:ezhu46@gatech.ed" rel="noopener noreferrer" target="_blank" style={iconStyle}>
                    <MailOutlineIcon className="icon" />
                </a>

            </div>
            <div>
                <>Made by Evan Zhu 2023</>
            </div>

        </div>
    )
}
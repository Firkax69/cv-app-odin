// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import GitHubSvg from "./github.svg";
// import { faSquareGithub } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <footer id="footer">
            <p>Made by Ihor Kovalevskyi</p>
            <a target="_blank" href="">
                <img id="footer-img" src={GitHubSvg}/>
            </a>
        </footer>
    )
}
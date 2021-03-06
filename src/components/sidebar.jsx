import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Camila L. Oliveira</a></h1>
                            <span className="position"><a href="#">Web & Android Developer</a> in Brazil</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/millaloliveira" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                                <li><a href="https://twitter.com/millaloliveira" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                                <li><a href="https://www.instagram.com/millaloliveira/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/clcmdeoliveira/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/clcmoliveira" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                                <li><a href="https://medium.com/millaloliveira" target="_blank" rel="noopener noreferrer"><i className="icon-pencil"></i></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                2020. <strong>stdurb</strong>. <i className="icon-heart" aria-hidden="true" /> + <i className="icon-headphones" aria-hidden="true"></i><br></br>
                                With <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
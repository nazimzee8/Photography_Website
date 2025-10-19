import './App.css';
import React from 'react';
import {useRef} from "react";

/* Function used to scroll through different sections 
through the navigation bar. 
*/
function scrollToIndex(index) {
    const pageRef = useRef(null);
    const pageNodes = document.querySelectorAll("#page > div.section");
    pageRef.current = pageNodes[index];
    pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
}

/* 
Section containing the header contents.
*/

/* Main Body of the header */
function Header() {
    const brandName = "Michael Watson";
    const homeLink = "Home";
    const portLink = "Porfolio";
    const aboutLink = "About";
    const contactLink = "Contact";
    const patreonLink = "Patreon";
    return (
        <div class="header">
            <Brand name={brandName}/>
            <NavMenu link={homeLink} 
                link2={portLink} 
                link3={aboutLink} 
                link4={contactLink} 
                link5={patreonLink} />
            <Socials/>
        </div>
    )
}

/* Photographer's name at the top right of the header. */
const Brand = (props) => {
    return (
    <div class="brand">
        <h1> {props.name} </h1>
    </div>
    )
}

/* Navigation bar to link user to different sections of page. */
const NavMenu = (props) => {
    return (
        <div class="menu">
            <nav> 
                <ul>
                    <span class="text-item"><a onClick= {() => scrollToIndex(1)} id="introduction">{props.link}</a></span>
                    <span class="text-item"><a onClick= {() => scrollToIndex(2)} id="about_page">{props.link2}</a></span>
                    <span class="text-item"><a onClick= {() => scrollToIndex(3)} id="portfolio">{props.link3}</a></span>
                    <span class="text-item"><a href="">{props.link4}</a></span>
                    <span class="text-item"><a href="">{props.link5}</a></span>
                </ul>
            </nav>
        </div>

    )
}

/* Photographer's socials placed on top left of header. */
const Socials = () => {
    <div class="socials">
        <nav>
            <span class="text-item" id="facebook"><img src="" href=""></img></span>
            <span class="text-item" id="instagram"><img src="" href=""></img></span>
            <span class="text-item" id="twitter"><img src="" href=""></img></span>
            <span class="text-item" id="twitch"><img src="" href=""></img></span>
        </nav>
    </div>
}

/* Next page section with image sections and small user bio. */
function IntroPage() {
    const captionContents = "";
    const natureText = "";
    const portraitText = "";
    const cityText = "";
    const socialText = "";
    return (
        <div class="introduction">
            <Gallery 
                text1={natureText}
                text2={portraitText}
                text3={cityText}
                text4={socialText}/>
            <Caption contents={captionContents}/>
        </div>
    )
}

/* Gallery with image categories */
const Gallery = (props) => {
    const galleryList = [
        {id: props.text1, src: "", alt: ""},
        {id: props.text2, src: "", alt: ""},
        {id: props.text3, src: "", alt: ""},
        {id: props.text4, src: "", alt: ""}
    ]
    return (
        <div class="gallery">
            {galleryList.map((image) => {
            <img class="gallery_img" src={image.src} alt={image.alt}>{image.id}</img>
                }
            )}
        </div>
    )
}

/* Small user bio. */
const Caption = (props) => {
    return (
        <div class="caption">
            <h2>{props.contents}</h2>
        </div>
    )
}

/* Next page section with about me and user profile */
function AboutPage() {
    const headLine = "";
    const userBio = "";
    return (
        <div class="about_page">
            <AboutContent 
                headline={headLine}
                bio={userBio}/>
            <AboutProfile/>
        </div>
    )
}

/* Section that contains 3 sections:
    1) Introduces the photographer.
    2) Small bio about him.
    3) Basic reusable contact information.
*/
const AboutProfile = () => {
    return (
        <div class="about_profile">
            <img src=""></img>
        </div>
    )
}

/* Section that introduces the photographer and contains small bio. */
const AboutContent = (props) => {
    return (
        <div class="about_content">
            <h2>{props.headline}</h2>
            <h2>{props.bio}</h2>
            <Contacts insta="" phone="" email="" twitch="" patreon=""/>
        </div>
    )
}

/* Reusable contacts section */
const Contacts = (props) => {
    return (
        <div class="contacts">
            <div id="instagram">
                <img src="" href=""></img><h2>{props.insta}</h2>
            </div>
            <div id="phone">
                <img src=""></img><h2>{props.phone}</h2>
            </div>
            <div id="email">
                <img src=""></img><h2>{props.email}</h2>
            </div>
            <div>
                <img src="" href=""></img><h2>{props.twitch}</h2>
            </div>
            <div>
                <img src="" href=""></img><h2>{props.patreon}</h2>
            </div>
        </div>
   )
}

/* Section showing off some of his portfolio. Pretty cool stuff. */
function Portfolio() {
    /* Creating list of images to display */
    const imagesList = [
        {col: 1, src: "", alt: ""},
        {col: 1, src: "", alt: ""},
        {col: 1, src: "", alt: ""},
        {col: 1, src: "", alt: ""},
        {col: 2, src: "", alt: ""},
        {col: 2, src: "", alt: ""},
        {col: 2, src: "", alt: ""},
        {col: 2, src: "", alt: ""},
    ]
    /* Map the images. */
    return (
        <div class="portfolio">
            {imagesList.map((image) => {
                <img class="port_img" src={image.src} alt={image.alt}></img>
                }
            )}
        </div>
    )
}

/* Section that has a quick footer with quick linkss and contacts. */
function Footer() {
    const blurbCaption = "";
    const homeLink = "Home";
    const portLink = "Porfolio";
    const aboutLink = "About";
    const contactLink = "Contact";
    return (
        <div class="footer">
            <Blurb caption={blurbCaption}/>
            <QuickLinks link={homeLink}
                        link2={portLink}
                        link3={aboutLink}
                        link4={contactLink}/>
            <Contacts insta="" phone="" email="" twitch="" patreon=""/>
        </div>
    )
}

/* Section with a short blurb with media links on lower left corner of footer. */
const Blurb = (props) => {
    const mediaList = [
        {src: "", alt: ""},
        {src: "", alt: ""},
        {src: "", alt: ""},
        {src: "", alt: ""}
    ]
    return (
        <div class="blurb">
            <h2>{props.caption}</h2>
            <div id="media">
                {mediaList.map((image) => {
                    <img src={image.src} alt={image.alt}></img>
                    })
                }
            </div>
        </div>
    )
}

/* Provides quick links to scroll to previous page sections efficiently. */
const QuickLinks = (props) => {
    return (
        <div class="quicklinks">
            <nav> 
                <ul>
                    <a onClick= {() => scrollToIndex(1)} id="introduction">{props.link}</a>
                    <a onClick= {() => scrollToIndex(2)} id="about_page">{props.link2}</a>
                    <a onClick= {() => scrollToIndex(3)} id="portfolio">{props.link3}</a>
                    <a href="">{props.link4}</a>
                </ul>
            </nav>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <IntroPage/>
      <AboutPage/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;

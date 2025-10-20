import './App.css';
import React from 'react';
import {useRef} from 'react';

/* Main Body of the header */
function Header() {
    const brandName = "Michael Watson";
    const homeLink = "Home";
    const portLink = "Portfolio";
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
    /* Function used to scroll through different sections 
    through the navigation bar. 
    */
    const pageRef = useRef(null);
    function scrollToIndex(index) {
        const pageNodes = document.querySelectorAll("#page > div.section");
        pageRef.current = pageNodes[index];
        pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
    }
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
    return (
        <div class="socials">
            <nav>
                <span class="text-item" id="facebook"><img src="https://www.pngall.com/wp-content/uploads/13/Facebook-White-Logo.png" href=""></img></span>
                <span class="text-item" id="instagram"><img src="https://gpng.net/wp-content/uploads/Instagram-Logo-White-png.png" href=""></img></span>
                <span class="text-item" id="twitter"><img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/e0cea6b3-1f7b-489b-0181-cfbac430f500/preview" href=""></img></span>
                <span class="text-item" id="twitch"><img src="https://th.bing.com/th/id/OIP.2INBWDl8x2m8THmzXjg_EAHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" href=""></img></span>
            </nav>
        </div>
    )
}

/* Next page section with image sections and small user bio. */
function IntroPage() {
    const captionContents = "Michael Watson is a nature and social media photographer based out of vibrant Seattle, Washington. " 
    + "With a keen eye for detail and a deep reverence for the outdoors, he transforms fleeting moments into visually stunning stories "
    + "that resonate across platforms. Whether he's capturing the quiet majesty of a misty forest or the dynamic pulse of urban life, "
    + "Michael’s work bridges the natural and digital worlds with authenticity and flair.";
    const userBtn = "Get in Touch";
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
            <Caption contents={captionContents} btn={userBtn}/>
        </div>
    )
}

/* Gallery with image categories */
const Gallery = (props) => {
    const galleryList = [
        {id: props.text1, src: "./img/nature_gallery.jpeg", alt: "nature vibes"},
        {id: props.text2, src: "./img/portrait_gallery.jpg", alt: "portrait shot"},
        {id: props.text3, src: "./img/city_gallery.jpeg", alt: "city vibes"},
        {id: props.text4, src: "./img/social_gallery.png", alt: "social media/lifestyle"}
    ]
    return (
        <div class="gallery">
            {galleryList.map((image) => (
                <img className="gallery_img" src={image.src} alt={image.alt} key={image.id} />
            ))}
        </div>
    )
}

/* Small user bio. */
const Caption = (props) => {
    return (
        <div class="caption">
            <h2>{props.contents}</h2>
            <div class="get_in_touch"><h2>{props.btn}</h2></div>
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
            <span class="text-item" id="instagram"><img src="" href=""></img><h2>{props.insta}</h2></span>
            <span class="text-item" id="phone"><img src=""></img><h2>{props.phone}</h2></span>
            <span class="text-item" id="email"><img src=""></img><h2>{props.email}</h2></span>
            <span class="text-item" id="twitch"><img src="" href=""></img><h2>{props.twitch}</h2></span>
            <span class="text-item" id="patreon"><img src="" href=""></img><h2>{props.patreon}</h2></span>
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
    /* Function used to scroll through different sections 
    through the navigation bar. 
    */
    const pageRef = useRef(null);
    function scrollToIndex(index) {
        const pageNodes = document.querySelectorAll("#page > div.section");
        pageRef.current = pageNodes[index];
        pageRef.current.scrollIntoView({behavior: 'instant', block: 'start'});
    }
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

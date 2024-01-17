import React from 'react';
import './Navstyle.css';
import LogoNotion from '../assets/images/svgexport-1.svg';
import dropIt from "../assets/images/svgexport-2.svg";
import hamburger from "../assets/images/svgexport-7.svg";
import crossIcon from "../assets/images/cross-23.svg"
// import getArrow from "../assets/images/svgexport-34.svg"
import heroImage from "../assets/images/hero_xmas-rev.png"
import star from "../assets/images/svgexport-9.svg";
import bookicon from "../assets/images/svgexport-3.svg";



const Nav = () => {

  return (
    <>
    <nav className='navime'>
      <main className='navime2'>
      <img src={LogoNotion} alt="notion logo" />
        <div className='menuList'>
          <div className='products'>
            <p>Product</p>
            <img src={dropIt} alt=""  />
          </div>
          <div className='products'>
            <p>Download</p>
            <img src={dropIt} alt=""  />
          </div>
          <div className='products'>
            <p>Solutions</p>
            <img src={dropIt} alt=""  />
          </div>
          <div className='products'>
            <p>Resources</p>
            <img src={dropIt} alt=""  />
          </div>

          <div  className='products'>
            <p>pricing</p>
            <img src={dropIt} alt=""  />
          </div>
        
        </div>
      </main>

      <main className='NavSecond'>
        <div>
          <p>Request a demo</p>
        </div>
        <div className='loginSide'>
          <p>Log in</p>
          <button>Get Notion free</button>
        </div>
      </main>
        <div className='ham' id='hamId'>
          <img src={hamburger} alt="hamburger icon to open up menu"/>
        </div>
        <div className='cross'>
          <img src={crossIcon} alt="cross icon to close" srcset="" />
        </div>


    
    </nav>

    <main className='bodyConfig'>
      <h1>New year, new plans</h1>
      <p>Your workspace to write, organize, and collaborate. With AI by your side.
</p>
    <button>get Notion free</button>

    <div className='heroImageDIv'>
    <img src={heroImage} alt="" width={700}/>
    </div>

    <section className='section1'>
    <div className='options'>
      <div className='purpleBg'>
      <img src={star} alt="" />
      </div>
      <h2>AI</h2>
      <p><b>Now with Q&A</b> Ask literally anything. Notion will answer</p>
      <a href="#"><b>Learn more</b></a>
    </div>

    <div className='options1'>
      <div className='purpleBg1'>
      <img src={bookicon} alt="" width={20}/>
      </div>
      <h2>WIKIS</h2>
      <p>
        Centralize your knowledge. No more hunting for answers
      </p>
      <a href="#"><b>Learn more</b></a>
    </div>


    <div className='options'>
      <div className='purpleBg'>
      <img src={star} alt="" />
      </div>
      <h2>AI</h2>
      <p><b>Now with Q&A</b> Ask literally anything. Notion will answer</p>
      <a href="#"><b>Learn more</b></a>
    </div>

    <div className='options'>
      <div className='purpleBg'>
      <img src={star} alt="" />
      </div>
      <h2>AI</h2>
      <p><b>Now with Q&A</b> Ask literally anything. Notion will answer</p>
      <a href="#"><b>Learn more</b></a>
    </div>
    </section>
    
    </main>



    </>

  )
  
  
}




export default Nav

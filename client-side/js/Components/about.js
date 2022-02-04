import gitHubImg from "../../images/GitHub.png";
import linkedInImg from "../../images/LI-in-Bug.png";
import Ryan from "../../images/Ryanw.jpg";
import Razak from "../../images/Rsaka img.jpg";
import Trey from "../../images/Trey.jpg";
import Brady from "../../images/BradyG.png";



export default function About() {
  return `
    <div class="container-fluid api-button text-center">    
    <h3 class="margin" id="title">ABOUT US</h3><br>
    <main class="bios">
        <section id="ryanWebster">
            <h2>Ryan Webster</h2>
            <img class="Ryan" src="${Ryan}" alt="Headshot" />
            <p class>I am a musician and play in a band with my wife. Together we started, and are directors of, a non-profit called Mission Love. I am a creative problem solver who likes to think outside the box. Aside from music I enjoy creating things out of wood and metal. My greatest joy in life are my two sons who are the center of my world..
            I am a detail oriented software developer with a passion for clean coding standards. I graduated from We Can Code IT Bootcamp in 2022. Along with being a self-motivated, natural leader, I have 10+ years of experience in management.
            In 2021 I decided to transition out of a job that had no opportunity for advancement. In deciding what direction I was going to take, I rediscovered my passion for creating with software and found We Can Code IT software development bootcamp. I learned a lot before attending the bootcamp, and a great deal more from the bootcamp itself. I feel that my previous management and problem solving experience will be an asset in my career as a software developer.
               
            </p>
            <a id="github" href="https://github.com/DevDad1">
                <img  id="github" src="${gitHubImg}" alt="github" />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/devdad">
                <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
            </a>
            </section>
        <section id="george">
          <h2>George Avent </h2>
          <img class="headshot" src="${George}" alt="Headshot" />
          <p class>
           
          </p>
          <a id="github" href="https://github.com/gaventjr ">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/george-avent-jr-02928062/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="razaksaka">
          <h2>Razak Saka</h2>
          <img class="Razak" src="${Razak}" alt="Headshot" />
          <p class>  I have more than 10 years work experience across Accounting and
          Finance environment in the Financial Service industry. I earned a
          Bachelors degree in Accounting and MBA from Baldwin-Wallace
          University. I had always been interested in Information Technology.I enjoy travelling and out-door activities with our twin
          boys.
            
          </p>
          <a id="github" href="https://github.com/Razsaka">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/razak-saka-34a183113/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="bradygasser">
          <h2>Brady Gasser</h2>
          <img class="Brady" src="${Brady}" alt="Headshot" />
          <p class> I set an intention everyday to not get pushed around by technology. Apps and webpages are ubiquitous, but many of them take away more than they provide. I demand great value and efficiency from the products I choose to allow in my life. This restraint allows me to focus on complex problems and learn quickly in a world full of distractions.
          I came up the ranks in the non-profit sector, learning the ins and outs of personal and business finance while designing unique loans to serve people caught in the 'Catch-22' of our credit system. It was here that I saw the ease at which people could catch up or fall further behind with powerful financial technology. 
          Today, as a programmer, I use this passion for personal autonomy to create software that is minimal, but with unmatched efficacy. A poet at heart, I fell in love with the beauty and eloquence of clean code.
          </p>
          <a id="github" href="https://github.com/bradymgasser">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/bradygasser/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="treybrowder">
          <h2>Trey Browder</h2>
          <img class="Trey" src="${Trey}" alt="Headshot" />
          <p class>
            
          </p>
          <a id="github" href="https://github.com/TreyBrowder">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href=""https://www.linkedin.com/in/trey-browder7/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>        
    </div>`;
}
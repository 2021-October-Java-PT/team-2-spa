import George from "../../images/George.webp";
import Razak from "../../images/Rsaka img.jpg";
import Ryan from "../../images/Ryanw.jpg";
import Trey from "../../images/Trey.jpg";
import gitHubImg from "../../images/GitHub.png";
import linkedInImg from "../../images/Li-in-Bug.png";

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
            <a id="github" href="">
                <img  id="github" src="${gitHubImg}" alt="github" />
            </a>
            <a id="linkedin" href="">
                <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
            </a>
            </section>
        <section id="george">
          <h2>George Avent </h2>
          <img class="headshot" src="${George}" alt="Headshot" />
          <p class>
          A technology enthusiast who excels in being a team player with substantial experience in customer service.  Adept in writing code and creating systems that are reliable and user-friendly. Enjoys the challenge of solving puzzles in technology specifically using Java

          </p>
          <a id="github" href=" ">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href=" ">
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
          <a id="github" href="">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="bradygasser">
          <h2>Brady Gasser</h2>
          <img class="headshot" src="" alt="Headshot" />
          <p class>
            
          </p>
          <a id="github" href="">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="treybrowder">
          <h2>Trey Browder</h2>
          <img class="Trey" src="${Trey}" alt="Headshot" />
          <p class>
            I'm a software developer with 5 years experience in the personal training and fitness industry.  Some of my interestes include but
            aren't limited to working out, running, snowboarding, hanging with friends, and listening to music.  One of my biggest hobbies is sitting 
            down and learning about to programming languages and technologies. Also the Browns are winning the 2023 superbowl!
          </p>
          <a id="github" href="">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>        
    </div>`;
}

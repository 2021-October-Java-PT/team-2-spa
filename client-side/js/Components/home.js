import ArtImg from '../Images/homePgArt.jpeg';
import fishImg from '../Images/fishSchool.jpeg';
import turtleGroupImg from '../Images/ninjaturtlesgroup.jpeg';

export default function Home() {
  return `
    <h1>Welcome to a SPA by JAC Enterprises</h1>
    <p class="paragraph__home">Would you like to learn about the Ninja Turtles, Renaissance Art, or fish? Click One of the buttons about</p>
    
    <img class="fishImg" src="${fishImg}" alt="fish pictures">
    <img class="turtlesImg" src="${turtleGroupImg}" alt="The Ninja Turtles">
    <img class="ArtImg" src="${ArtImg}" alt="">
    `;
}
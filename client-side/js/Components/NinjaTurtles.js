export default function NinjaTurtles(ninjaTurtles) {
    return `
    <div class="tmnt-character-profile">
        <h2>${ninjaTurtles.name}</h2>
        <h3>${ninjaTurtles.artist}</h3>
        <h3>${ninjaTurtles.fish}</h3>
        <h3>${ninjaTurtles.color}</h3>
        <h3>${ninjaTurtles.description}</h3>
        <img src="${ninjaTurtles.turtleImage}"><br>
    </div>
    `;
}
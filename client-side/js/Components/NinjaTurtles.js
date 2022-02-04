export default function NinjaTurtles(ninjaTurtles) {
    return `
    <div class="tmnt-character-profile">
        <h2>${ninjaTurtles.id}</h2>
        <h2>${ninjaTurtles.name}</h2>
        <h3>${ninjaTurtles.color}</h3>
        <img src="${ninjaTurtles.turtleImage}"><br>
    </div>
    `;
}
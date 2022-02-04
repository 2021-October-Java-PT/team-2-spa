//https://collectionapi.metmuseum.org/public/collection/v1/objects/435844
//MichelAngelo

//361030
//Leonardo

//191892
//Donatello

//337075
//Raphael

export default function Art(artPiece) {
    
    console.log('Art Piece Data', artPiece);
    return `
    <div>
    
        <h2>${artPiece.ArtistDisplayName}</h2>
        <img src=${artPiece.primaryImageSmall}" id="pieceImg" >
        <h3>${artPiece.title}</h3>
        <a href=${artPiece.objectURL}>Learn More</a>
    
    </div>
    `;
}



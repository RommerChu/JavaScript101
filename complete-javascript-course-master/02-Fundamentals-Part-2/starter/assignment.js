//'use strict'

// const calcAverage = ( score1, score2, score3 ) => {
//     return ( score1 + score2 + score3 ) / 3
// }

const calcAverage = ( score1, score2, score3 ) => {
    return ( score1 + score2 + score3 ) / 3
}
//console.log( calcAverage( 5, 10, 15 ) )
//console.log( calcAverage( 44, 23, 71 ) )

function checkWinner( avgDolphins, avgKoalas ) {

    const teamDolphins = calcAverage( avgDolphins );
    const teamKoalas = calcAverage( avgKoalas );

    if ( teamDolphins >= 2 * teamKoalas ) {
        return `Dolphin wins! (${avgDolphins} vs${avgKoalas})`

    } else if ( teamKoalas >= 2 * teamDolphins ) {
        return `Koalas wins! (${avgDolphins} vs ${avgKoalas})`

    } else {
        return "Draw"
    }

}

console.log( calcAverage( 44, 23, 71 ) )

//console.log( calcAverage = 44 + 23 + 71 )
//console.log( checkWinner( avgDolphins ) )
//console.log( calcAverage( 44, 23, 71 ) );
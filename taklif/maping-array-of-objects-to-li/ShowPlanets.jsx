export default function ShowPlanets(props){
    return(
        <div>
            <h1>planets:</h1>
            <ul> {props.planets.map((planets , index) => (
                <li key={index}>{planets}</li>
            ))} </ul>
        </div>
    )
}

// export default function ShowPlanets({ planets }){
//     return(
//         <div>
//             <h1>planets:</h1>
//             <ul>
//                 {planets.map((planet,index) => (
//                     <li key={index}>{planet}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }





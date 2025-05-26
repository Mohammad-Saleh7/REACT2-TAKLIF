export default function PokeCard(props){
    return(
        <div className="card m-3 p-3 text -center" style={{width:"200px"}}>
            <img src={props.image} alt={props.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Type: {props.type} </p>

            </div>
            
        </div>
    )
}
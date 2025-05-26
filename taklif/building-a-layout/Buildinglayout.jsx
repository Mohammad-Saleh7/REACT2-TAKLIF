export default function BuildingLayOut(props){
    return(
        <div className="card m-5">
            <img src={props.image} alt="card image cap" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.url} className="btn btn-primary">{props.label}</a>
            </div>
        </div>
    )
}
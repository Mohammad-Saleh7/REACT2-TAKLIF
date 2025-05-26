export default function Alert(props){
    function handleClick(){
        alert(props.text)
    }

    return (
        <div>
            <h1>{props.text}</h1>
            <button onClick={handleClick} >click me</button>
        </div>
    )
}
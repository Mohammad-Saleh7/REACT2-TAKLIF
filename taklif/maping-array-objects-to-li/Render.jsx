export default function Render(){
    const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' },
];
    return (
        <div>
            <h1>animals list:</h1>
            <ul>
                {animals.map((items,index) => (
                    <li key={index}>{items.label} </li>
                ))}
            </ul>
        </div>
    )
}
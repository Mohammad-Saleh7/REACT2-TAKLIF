import Alert from "../alert-component/Alert";
import BuildingLayOut from "../building-a-layout/Buildinglayout";
import Render from "../maping-array-objects-to-li/Render";
import ShowPlanets from "../maping-array-of-objects-to-li/ShowPlanets";
import Pokedex from "../props-component-architecture/Pokedex";
import CustomerInformation from "../rendering-from-objects/CustomerInformation";

export default function App() {
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
  //******************************************************************************************** */
  const data = {
    image: "../../building-a-layout/assets/bobydylan.jpg",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  //************************************************************************************************************ */
  const pokemon = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
  //*********************************************************** */
  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };
  //**************************************************** */
  return (
    <div>
      <Alert text="OMG! Something really bad has happened!" />
      <hr />
      <BuildingLayOut
        image={data.image}
        cardTitle={data.cardTitle}
        cardDescription={data.cardDescription}
        url={data.button.url}
        label={data.button.label}
      />
      <hr />
      <Render />
      <hr />
      <ShowPlanets planets={planets} />
      <hr />
      <Pokedex pokemon={pokemon} />
      <hr />
      <CustomerInformation customer={customer} />
    </div>
  );
}

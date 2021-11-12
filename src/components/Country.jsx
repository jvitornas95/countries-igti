import Item from "./Item";

export default function Country({ children: country = null, onCountryClick = null }) {
  if (!country) return <div>Impossivel renderizar o país</div>;

  const demographicDensity = country.population / country.area;
    const {name, flag, capital, region, population, area} = country;

    const handleCountryClick = () => {

        if(onCountryClick){
            onCountryClick(country.id)
        }

    }

  return (
    <div className="border p-2 m-2 flex flex-row items-center space-x-2" onClick={handleCountryClick}>
      <img className="w-48" src={country.flag} alt={country.name} />

      <ul>
        <li>
          <Item label="Nome: ">{name}</Item>{" "}
        </li>
        <li>
          <Item label="Cpital: ">{capital}</Item>{" "}
        </li>
        <li>
          <Item label="Região: ">{region}</Item>{" "}
        </li>
        <li>
          <Item label="População: ">{population}</Item>{" "}
        </li>
        <li>
          <Item label="Área: ">{area}</Item>{" "}
        </li>
        <li>
          <Item label="Densidade demografica: ">{demographicDensity}</Item>{" "}
        </li>
      </ul>
    </div>
  );
}

import { useState } from "react";
import Countries from "../components/Countries";
import Country from "../components/Country";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleCountryFilterChange = (newCountryFilter) => {
    setCountryFilter(newCountryFilter);
  };

  const toogleVisitedCountry = (countryId) => {
    let newVisitedCountries = [...visitedCountries];

    const isVisitedCountry = newVisitedCountries.indexOf(countryId) !== -1;

    if (isVisitedCountry) {
      newVisitedCountries = newVisitedCountries.filter(
        (visitedId) => visitedId !== countryId
      );
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  };

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  console.log(visitedCountries);

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          labelDescription="Informe o nome do país"
          inputValue={countryFilter}
          autoFocus
          id="inputCountryFilter"
          onInputChange={handleCountryFilterChange}
        />

        {/* <Countries visitedCountries={visitedCountries} onCountryClick={toogleVisitedCountry}>{filteredCountries}</Countries> */}
        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} pais(es)
          </h2>
          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length} pais(es) visitados
          </h3>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toogleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </div>
  );
}

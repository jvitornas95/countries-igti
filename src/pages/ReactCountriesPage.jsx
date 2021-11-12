import { useState } from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {

  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleCountryFilterChange = (newCountryFilter) => {
    setCountryFilter(newCountryFilter)
  }

  const toogleVisitedCountry = (countryId) => {
    let newVisitedCountries = [...visitedCountries];

    const isVisitedCountry = newVisitedCountries.indexOf(countryId) !== -1;
    
    if (isVisitedCountry){
      newVisitedCountries = newVisitedCountries.filter(visitedId => visitedId !== countryId);
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries = countryFilterLowerCase.length >= 3 ?
    allCountries.filter(({nameLowerCase}) => {
      return nameLowerCase.includes(countryFilterLowerCase)
    }) : allCountries;

    console.log(visitedCountries)

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput 
          labelDescription='Informe o nome do país'
          inputValue={countryFilter}
          autoFocus
          id='inputCountryFilter'
          onInputChange={handleCountryFilterChange}
        />
        
      <Countries onCountryClick={toogleVisitedCountry}>{filteredCountries}</Countries>
      </Main>
      
    </div>
  );
}

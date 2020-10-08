import React from 'react'
import './App.js'
import { CountryInfo } from './CountryList.js'
import countries from 'world-countries'
import { useParams } from 'react-router-dom'

function getCountryByCca3 (cca3) {
  const cca3MatchedCountries = countries.filter(country => country.cca3 === cca3)
  const result = cca3MatchedCountries.shift()
  return result
}

function CountryDetails (props) {
  const { cca3 } = useParams()
  console.log(cca3)
  const countryToDisplay = getCountryByCca3(cca3)
  const cca3Array = countryToDisplay.borders
  return (
    <div className='Container'>
      <CountryInfo data={countryToDisplay} key={countryToDisplay} moreDetails />
      <div className='Borders'>
        <h2>{(cca3Array[0]) ? 'Border Countries' : 'This country does not have any border countries'}</h2>
        {cca3Array.map((cca3) => <CountryInfo data={getCountryByCca3(cca3)} key={cca3} moreDetails />)}
      </div>
    </div>
  )
}

export default CountryDetails

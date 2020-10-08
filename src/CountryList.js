import React, { useState } from 'react'
import countries from 'world-countries'
import './App.css'
import { Link } from 'react-router-dom'

countries.sort((a, b) => b.area - a.area)

const countryArray = countries.filter(country => country.cca2 !== 'AQ')

const CountryInfo = props => {
  const areaScale = countries[0].area / 100
  const calculatedWidth = (props.data.area / areaScale) + '%'

  const moreDetails = (bool) => {
    if (bool) {
      return (
        <p>
          Capital: {props.data.capital}<br />
          Region: {props.data.region}
        </p>
      )
    }
  }

  return (
    <div className='CountryInfo' key={props.data.cca3}>
      <div className='country'>
        <strong>{props.data.name.common}</strong> {(props.data.area / 1000000).toPrecision(3)} million km<sup>2</sup>
      </div>
      {moreDetails(props.moreDetails)}
      <div className='bar' style={{ width: calculatedWidth }} />
    </div>
  )
}

function CountryList (props) {
  function searchFor (searchString) {
    const match = props => {
      const lowerCaseWord = props.name.common.toLowerCase()
      const lowerCaseSearchString = searchString.toLowerCase()

      return lowerCaseWord.indexOf(lowerCaseSearchString) === 0
    }

    return countryArray.filter(match).slice(0, 14)
  }
  const [searchString, setSearchString] = useState('')
  function changeInput (event) {
    setSearchString(event.target.value)
    searchFor(searchString)
  }
  const result = searchFor(searchString)
  console.log(searchString)
  return (
    <div className='App'>
      <input type='text' onChange={changeInput} placeholder='Type here...' />
      <div className='firstFive'>
        {result.map((country) => <Link to={'/country/' + country.cca3} key={country.cca3}><CountryInfo data={country} key={country.cca3} moreDetails /></Link>)}
      </div>
    </div>
  )
}

export { CountryList, CountryInfo }

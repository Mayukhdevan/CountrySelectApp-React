import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  changeCapital = e => {
    const activeValue = e.target.value
    this.setState({capitalId: activeValue})
  }

  render() {
    const {capitalId} = this.state
    const country = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === capitalId,
    )

    return (
      <div className="bg-container">
        <div className="card-body">
          <h1 className="main-heading">Countries And Capitals</h1>
          <select id="capitals" name="capitals" onChange={this.changeCapital}>
            {countryAndCapitalsList.map(eachObj => (
              <option key={eachObj.id} value={eachObj.id}>
                {eachObj.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals">is capital of which country?</label>
          <p className="country-text">{country[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

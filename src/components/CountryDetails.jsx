import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import countries from "../countries.json"

function CountryDetails() {
  const [country, setCountry] = useState(null);

  const { id } = useParams();
  console.log('countryId', id);

  // Arguments can have any name!!
  useEffect(() => {
    const country = countries.filter((country) => {
      return country.alpha3Code === id;
    });

    if (country) {
      setCountry(country);
    }
  }, [id]);

  return (
    <div className="w-25">
      {country && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`}
            alt="img"
            className="page-img2"
          />
          <h3>{country[0].name.common}</h3>

          <table className="table">
            <thead></thead>
            <tbody className="d-flex flex-column col-7">
              <tr>
                <td>Capital</td>
                <td>{country[0].capital}</td>
              </tr>

              <tr>
                <td>Area</td>
                <td>
                  {country[0].area}
                  <sup>2</sup>
                </td>
              </tr>

              <tr>
                <td>Borders</td>
                <td>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="btn list-group-item list-group-item-action"
                        to={`/${country.id}`}
                      >
                        <h3>{country[0].borders.join(', ')}</h3>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;

import { Link } from 'react-router-dom';

function CountriesList({countries}) {

  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 max-vh-90">
          <div className="list-group">
            {countries.map((country) => {
              return (
                <div key={country.alpha3Code} className="country">
                  <Link
                  className="btn list-group-item list-group-item-action"
                    to={`/${country.alpha3Code}`}
                  >
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt="img"
                      className="page-img"
                    />
                    <h2>{country.name.common}</h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

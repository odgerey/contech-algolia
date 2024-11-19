import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import './App.css';

const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.REACT_APP_API_KEY;

const searchClient = algoliasearch (algoliaAppId, algoliaApiKey);


function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p>
      <h1>{hit.name}</h1>
      <p>${hit.price}</p>
    </article>
  );
}

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="contech_h_q_pages">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch';
import './App.css';

const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaApiKey = process.env.REACT_APP_API_KEY;

const searchClient = algoliasearch (algoliaAppId, algoliaApiKey);

function Hit({hit}) {
  return (
    <>
    <div className= 'card'>
      <div>
        <img src = {hit.image} alt = {hit.name}/>
      </div>
      <div className = 'content'>
        <h1>Name: {hit.name}</h1>
        <h3>Brand: {hit.brand}</h3>
        <p>Description: {hit.description}</p>
        <h4>Price: {hit.price}$</h4>
      </div>
    </div>
    </>
  )
}

export default function App () {
  return (
    <InstantSearch searchClient = {searchClient} indexName = "content">
      <SearchBox className='container'/>
      <Hits hitComponent={Hit}/>
    </InstantSearch>
  )
}
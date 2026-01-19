import './App.css'
import ParentComponent from './components/1/ParentComponent'
import DynamicHTML from './components/10/DynamicHTML'
import { default as PC } from './components/2/ParentComponent'
import DropdownExample from './components/3/DropdownExample'
import Lazy from './components/4/Lazy'
import DisplayText from './components/5/DisplayText'
import ConditionalRendering from './components/6/ConditionalRendering'
import Debouncing from './components/7/Debouncing'
import DataFetcher from './components/8/DataFetcher'
import CountryStateDropdown from './components/9/CountryStateDropdown'

function App() {

  return (
    <>
      <ParentComponent />
      <PC />
      <DropdownExample />
      <Lazy />
      <DisplayText />
      <ConditionalRendering isLoggedIn={false} />
      <Debouncing />
      {/* <DataFetcher apiUrl='https://jsonplaceholder.typicode.com/posts/1' /> */}
      <CountryStateDropdown />
      <DynamicHTML htmlString="<p>This is <strong>dynamic</strong> HTML content.</p>" />
    </>
  )
}

export default App

import './App.css'
import ParentComponent from './components/1/ParentComponent'
import DynamicHTML from './components/10/DynamicHTML'
import UseStateArray from './components/11/UseStateArray'
import FocusAndDisable from './components/12/FocusAndDisable'
import FruitDropDown from './components/13/FruitDropDown'
import TextAreaWithCharCount from './components/14/TextAreaWithCharCount'
import SearchFilter from './components/15/SearchFilter'
import RadioToTextBox from './components/16/RadioToTextBox'
import ErrorBoundary from './components/17/ErrorBoundary'
import CounterUseState from './components/18/CounterUseState'
import CounterUseReducer from './components/19/CounterUseReducer'
import { default as PC } from './components/2/ParentComponent'
import ReRenderExample from './components/20/ReRenderExample'
import PureCounter from './components/21/PureCounter'
import ControlledComponent from './components/22/ControlledInputComponent'
import UnControlledComponent from './components/22/UncontrolledInputComponent'
import WindowWidthComponent from './components/23/windowWidthComponent'
import ExpensiveComponent from './components/24/ExpensiveComponent'
import ContextAPIExample from './components/25/ContextAPIExample'
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
      {/* <DataFetcher apiUrl='https://jsonplaceholder.typicode.com/pots/1' /> */}
      <CountryStateDropdown />
      <DynamicHTML htmlString="<p>This is <strong>dynamic</strong> HTML content.</p>" />
      <UseStateArray />
      <FocusAndDisable />
      <FruitDropDown />
      <TextAreaWithCharCount />
      <SearchFilter />
      <RadioToTextBox />
      <ErrorBoundary>This</ErrorBoundary>
      <CounterUseState />
      <CounterUseReducer />
      {/* <ReRenderExample /> */}
      <PureCounter count={9} />
      <ControlledComponent />
      <UnControlledComponent />
      <WindowWidthComponent />
      <ExpensiveComponent />
      <ContextAPIExample />
    </>
  )
}

export default App

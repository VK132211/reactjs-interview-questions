import './App.css'
import ParentComponent from './components/1/ParentComponent'
import { default as PC } from './components/2/ParentComponent'
import DropdownExample from './components/3/DropdownExample'

function App() {

  return (
    <>
      <ParentComponent />
      <PC />
      <DropdownExample />
    </>
  )
}

export default App

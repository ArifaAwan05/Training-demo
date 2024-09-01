import './App.css';
import Title from "./Title.jsx";
import ProductTab from './productTab.jsx';
import MsgBox from './MsgBox.jsx';
import Form from './Form.jsx';
import RefHook from './RefHook.jsx';
import HookPractice from './HookPractice.jsx';
import Memo from './Memo.jsx';


function Description(){
  return <h3>I am the description</h3>
}
function App() {
  return (
    <>
    <Memo />
    {/* <HookPractice/> */}
    {/* <RefHook/> */}
    {/* <h1>Shopping Deal</h1>
    <ProductTab/> */}
    </>
  )
}

export default App


// function App() {
//   return (
//     <>
    
//     <Form/>
//     </>
//   )
// }

// export default App

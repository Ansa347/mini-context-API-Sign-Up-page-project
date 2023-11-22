//step 3
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/login';
import Profile from './components/Profile';
import Signup from './components/Signup';
function App() {

  return (
    <UserContextProvider>

<div className="rounded-md bg-black/80 p-2">
      {/* <Login/> */}
      <div className=' text-black bg-white text-3xl font-bold pt-16'>
      <Profile/>
      </div>
      <div className='mt-[-65px]'>
      <Signup/>
</div>
      </div>
      </UserContextProvider>
  )
}

export default App

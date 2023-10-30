import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignUpForm from './_auth/Forms/SignUpForm'
import SignInForm from './_auth/Forms/SignInForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex  h-screen '>

    <Routes>
      <Route element={<AuthLayout/>}>
          <Route path='sign-up' element={<SignUpForm/>}/>
          <Route path='sign-in' element={<SignInForm/>}/>
      </Route>
      <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </main>
  )
}

export default App

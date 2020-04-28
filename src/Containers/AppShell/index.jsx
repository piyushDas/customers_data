import React, { useContext, useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
import { AppContext } from '../../context'
import Header from '../../Components/Header'
import ListPane from '../../Components/ListPane'
import AddressPane from '../../Components/AddressPane'
import './shell.css'

const AppShell = () => {
  const {
    fetchCustomers
  } = useContext(AppContext)

  useEffect(() => {
    fetchCustomers()
  }, [])

  let template = (
    <div className="app-shell">
        <Header />
        <div className="dashboard flex">
          <ListPane />
          <AddressPane />
        </div>
    </div>
  )

  return (
      <>
        {template}
      </>
  )
}

export default AppShell
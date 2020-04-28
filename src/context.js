import React, { useState, createContext } from 'react'
import {
  appAxiosInstance
} from './utils'

export const AppContext = createContext({})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */
  const [customers, setCustomersData] = useState([])
  const [addresses, setAddressesData] = useState([])
  const urlPrefix = 'http://localhost:3012'

  const isLocal = () => {
    if (window.location.href.indexOf('localhost') > -1) {
      return true
    }
    return false
  }

  const fetchCustomers = () => {
    const apiUrl = `${isLocal() ? urlPrefix: ''}/conviva_v1/fetchAllCustomers`
    appAxiosInstance(apiUrl, 'get')
      .then(res => {
        if (res &&
          res.data
        ) {
          setCustomersData(res.data)
        }
      })
      .catch(err => {
      })
  }

  const fetchAddresses = payload => {
    const apiUrl = `${urlPrefix}/conviva_v1/customer/address`
    appAxiosInstance(apiUrl, 'post', payload)
      .then(res => {
        if (res &&
          res.data
        ) {
          setAddressesData(res.data)
        }
      })
      .catch(err => {
      })
  }

  return (
    <AppContext.Provider
      value={{
        customers,
        fetchCustomers,
        fetchAddresses,
        addresses
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
import React, { useContext } from 'react'
import { AppContext } from '../../context'
import './customer-list.css'


const ListPane = () => {
  const {
    customers,
    fetchAddresses,
    // addresses
  } = useContext(AppContext)

  let customersTemplate = (
      <div className="no-customers">No customer records found.</div>
  )

  const getAddress = addresses => () => {
    if (addresses && addresses.length) {
      fetchAddresses({
        addressIds: addresses
      })
    }
  }

  if (customers.length) {
    customersTemplate = (
        <>
          {
              customers.map((cust, index) => (
                  <div className="customer-item" key={`${index}_elem`} onClick={getAddress(cust.addresses)}>
                      <div className="customer-details">
                        <div>
                            {cust.name}
                        </div>
                        <div>
                            {cust.gender}
                        </div>
                      </div>
                      <div className="customer-price">
                        Age: {cust.age}
                      </div>
                      {/* <span onClick={removecustomer(customer.id)}>X</span> */}
                  </div>
              ))
          }
        </>
    )
  }
  return (
      <div className="w-50">
        <div className="customer-header">
            Customer List
        </div>
        <div className="customers">
            {customersTemplate}
        </div>
      </div>
  )
}

export default ListPane
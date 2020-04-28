import React, { useContext } from 'react'
import { AppContext } from '../../context'
import './address.css'

const AddressPane = () => {
  const {
      addresses
  } = useContext(AppContext)
        
  let addressTemplate = (
    <div className="no-customers">No address found.</div>
  )

  if (addresses.length) {
    addressTemplate = (
        <>
          {
              addresses.map((add, index) => (
                  <div className="customer-item" key={`${index}_elem`}>
                      <div>
                        {add.addressLineOne}
                      </div>
                      <div>
                        {add.city} - {add.pin}, {add.state}
                      </div>
                  </div>
              ))
          }
        </>
    )
  }
  return (
      <div className="w-50">
        <div className="customer-header">
            Address of the customer
        </div>
        <div className="customers">
            {addressTemplate}
        </div>
      </div>
  )
}

export default AddressPane
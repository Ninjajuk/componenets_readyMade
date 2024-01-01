import React from 'react'
import PaymentSuccessful from './compoModal/PaymentSuccessful'
import Deactivateaccount from './compoModal/Deactivateaccount'
import NotiificationNoti from './compoModal/NotiificationNoti'

const Modalpage = () => {
  return (
    <>
    <h1>Modal</h1>
    <PaymentSuccessful/>
    <Deactivateaccount/>
    <NotiificationNoti/>
    </>
  )
}

export default Modalpage
import React from 'react'
import UpgradePage from '../comp/UpgradePage'
import NavBar from '../../../../_components/layout/Navbar'
import { useRouter } from 'next/router'

function index() {

  return (
    <>
      <NavBar />
      <div>
        <UpgradePage />
      </div>
    </>
  )
}

export default index
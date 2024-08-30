import React from 'react'
import UpgradePage from '../comp/UpgradePage'
import NavBar from '../../../../_components/layout/Navbar'
import { useRouter } from 'next/router'

function index() {
  const router = useRouter();
  const { slug } = router.query

  return (
    <>
      <NavBar />
      <div>
        <UpgradePage plansId={slug} />
      </div>
    </>
  )
}

export default index
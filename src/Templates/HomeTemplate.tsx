import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../Components/HeaderHome/HeaderHome'

type Props = {}

function HomeTemplate({}: Props) {
  return (
    <div>
        <HeaderHome />
        <Outlet />
    </div>
  )
}

export default HomeTemplate
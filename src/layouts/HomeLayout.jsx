import React from 'react'
import TheHeader from '@components/TheHeader'

const HomeLayout = ({ children }) => {
  return (
    <main className="bg-black-800 w-full min-h-screen text-white">
      <TheHeader />
      {children}
    </main>
  )
}

export default HomeLayout

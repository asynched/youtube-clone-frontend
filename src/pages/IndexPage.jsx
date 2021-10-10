import React from 'react'

import VideoCard from '@components/VideoCard'
import HomeLayout from '@layouts/HomeLayout'
import { VIDEOS } from '@utils/fakeData'

const IndexPage = () => {
  return (
    <HomeLayout>
      <section className="py-6 container grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {VIDEOS.map(video => (
          <VideoCard video={video} />
        ))}
      </section>
    </HomeLayout>
  )
}

export default IndexPage

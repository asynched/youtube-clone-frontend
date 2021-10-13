import React, { useEffect, useState } from 'react'

import VideoCard from '@components/VideoCard'
import HomeLayout from '@layouts/HomeLayout'
import { VIDEOS } from '@utils/fakeData'
import { getVideos } from '@services/api/requests'

const IndexPage = () => {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const data = await getVideos(page)
      setVideos(data)
    }
    getData()
  }, [])

  return (
    <HomeLayout>
      <section className="py-6 container grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {videos.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </section>
    </HomeLayout>
  )
}

export default IndexPage

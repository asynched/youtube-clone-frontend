import React from 'react'
import VideoCard from '@components/VideoCard'

const VideoPageRecommendations = ({ videos }) => {
  return (
    <div className="flex flex-col gap-4">
      {videos.map(video => (
        <VideoCard key={video._id} video={video} orientation="side" />
      ))}
    </div>
  )
}

export default VideoPageRecommendations

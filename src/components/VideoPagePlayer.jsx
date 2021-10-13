import React from 'react'
import { getDateDifference } from '@utils/date'

const VideoPagePlayer = ({ video, playerRef }) => {
  return (
    <div className="col-span-3">
      <video
        id="main-video"
        src={`http://localhost:3333/videos/media/${video._id}`}
        ref={playerRef}
      ></video>
      <h1 className="mt-4 text-xl">{video.title}</h1>
      <p className="mb-4 text-gray-400">
        {video.views || 69} views • {getDateDifference(video.createdAt)}
      </p>
      <hr className="border-t border-black-500"></hr>
      <div className="mt-4">
        <p className="whitespace-pre-wrap">{video.description}</p>
      </div>
    </div>
  )
}

export default VideoPagePlayer

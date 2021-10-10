import React from 'react'
import '@utils/types'

/**
 *
 * @param { VideoCardPropsType } props
 * @returns
 */
const VideoCard = ({ video, orientation }) => {
  if (orientation === 'side') {
    return (
      <a className="flex gap-2 text-sm" href={video.url}>
        <img className="w-32 h-18" src={video.imageURL} />
        <div>
          <h3 className="font-semibold leading-none overflow-ellipsis">
            {video.title}
          </h3>
          <p className="text-gray-400">{video.channel}</p>
          <p className="text-gray-400 text-xs">
            {video.views} views • {video.createdAt}
          </p>
        </div>
      </a>
    )
  }

  return (
    <a href={video.url}>
      <img src={video.imageURL} />
      <h3 className="text-lg font-semibold tracking-tight">{video.title}</h3>
      <p className="text-gray-400">{video.channel}</p>
      <p className="text-gray-400 text-sm">
        ${video.views} views • ${video.created_at} ago
      </p>
    </a>
  )
}

export default VideoCard

/**
 * @typedef VideoCardPropsType
 * @property { VideoType } video
 * @property { "side" | "upwards" } orientation
 */

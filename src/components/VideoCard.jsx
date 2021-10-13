import React from 'react'
import { Link } from 'react-router-dom'

import { getThumbnailURL } from '@utils/video'

import '@lib/types'
import { getDateDifference } from '@utils/date'

/**
 *
 * @param { VideoCardPropsType } props
 * @returns
 */
const VideoCard = ({ video, orientation }) => {
  if (orientation === 'side') {
    return (
      <Link className="flex gap-2 text-sm" to={`/videos/${video._id}`}>
        <img className="w-32 h-18" src={getThumbnailURL(video.thumbnail)} />
        <div>
          <h3 className="font-semibold leading-none overflow-ellipsis">
            {video.title}
          </h3>
          <p className="text-gray-400">{video.channel}</p>
          <p className="text-gray-400 text-xs">
            {video.views} views • {getDateDifference(video.createdAt)}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/videos/${video._id}`}>
      <img src={getThumbnailURL(video.thumbnail)} />
      <h3 className="text-lg font-semibold tracking-tight">{video.title}</h3>
      <p className="text-gray-400">{video.channel}</p>
      <p className="text-gray-400 text-sm">
        {video.views} views • {getDateDifference(video.createdAt)} ago
      </p>
    </Link>
  )
}

export default VideoCard

/**
 * @typedef VideoCardPropsType
 * @property { VideoType } video
 * @property { "side" | "upwards" } orientation
 */

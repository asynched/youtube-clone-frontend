import React, { createRef, useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import Player from 'plyr'

import HomeLayout from '@layouts/HomeLayout'
import VideoPagePlayer from '@components/VideoPagePlayer'

import { getVideo, getVideos } from '@services/api/requests'
import { useMountedFetch } from '@hooks/useMountedFetch'
import VideoPageRecommendations from '@components/VideoPageRecommendations'

const actions = {
  SET_PLAYER: 0,
  SET_VIDEO: 1,
  SET_VIDEOS: 2,
}

const initialState = {
  videos: [],
  video: null,
  playerRef: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PLAYER: {
      return { ...state, playerRef: action.payload }
    }
    case actions.SET_VIDEO: {
      return { ...state, video: action.payload }
    }
    case actions.SET_VIDEOS: {
      return { ...state, videos: action.payload }
    }
  }
}

const VideoPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { video, videos, playerRef } = state
  const params = useParams()

  useMountedFetch([
    {
      initiator: () => getVideo(params.videoId),
      handler: data => dispatch({ type: actions.SET_VIDEO, payload: data }),
      dependencies: [params.videoId],
    },
    {
      initiator: getVideos,
      handler: data => dispatch({ type: actions.SET_VIDEOS, payload: data }),
      dependencies: [params.videoId],
    },
  ])

  useEffect(() => {
    if (playerRef?.current && video) {
      new Player(playerRef.current, {
        autoplay: true,
      })
    }
  }, [video, playerRef])

  if (!video) {
    return (
      <HomeLayout>
        <section className="py-4 container">
          <p>Loading...</p>
        </section>
      </HomeLayout>
    )
  }

  return (
    <HomeLayout>
      <section
        className="py-4 container grid lg:grid-cols-4 gap-8"
        ref={ref =>
          state.playerRef
            ? null
            : dispatch({ type: actions.SET_PLAYER, payload: createRef(ref) })
        }
      >
        <VideoPagePlayer video={video} playerRef={playerRef} />
        <VideoPageRecommendations videos={videos} />
      </section>
    </HomeLayout>
  )
}

export default VideoPage

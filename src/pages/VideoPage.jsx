import React, { useEffect, useRef, useState } from 'react'
import HomeLayout from '@layouts/HomeLayout'
import Player from 'plyr'
import { VIDEOS } from '@utils/fakeData'
import VideoCard from '@components/VideoCard'

const VideoPage = () => {
  const playerRef = useRef(null)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (playerRef.current) {
      setPlayer(new Player(playerRef.current))
    }
  }, [playerRef])

  return (
    <HomeLayout>
      <section className="py-4 container grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <video id="main-video" src="/" ref={playerRef}></video>
          <h1 className="mt-4 text-xl">Was acquaman really that bad?</h1>
          <p className="mb-4 text-gray-400">
            14.091 visualizações • Feb 23, 2021
          </p>
          <hr className="border-t border-black-500"></hr>
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reiciendis dignissimos assumenda possimus enim suscipit
              reprehenderit exercitationem corporis, fuga corrupti autem
              inventore unde vel. Minima, dolores, fugit temporibus esse illo
              maxime consequuntur laudantium enim, suscipit assumenda
              accusantium voluptatibus! Maiores, assumenda!
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {VIDEOS.map(video => (
            <VideoCard video={video} orientation="side" />
          ))}
        </div>
      </section>
    </HomeLayout>
  )
}

export default VideoPage

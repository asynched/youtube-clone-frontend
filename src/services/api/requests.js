import { api } from '.'

export const getVideos = async (page = 0) => {
  const { data } = await api.get('/videos', {
    params: {
      page,
    },
  })

  return data
}

export const getVideo = async id => {
  const { data } = await api.get(`/videos/${id}`)
  return data
}

import { Media, PageInfo } from "./anilistGraphQLTypes"

export type UserInfo = {
  id: number
  name: string
  avatar?: {
    large?: string
    medium?: string
  }
}

export type AnimeData = {
  media?: Media[]
  pageInfo?: PageInfo
}

export type ListAnimeData = {
  id: number | null
  mediaId: number | null
  progress?: number | null
  media: Media
}

export type AiringPage = {
  airingSchedules: AiringScheduleData[]
  pageInfo: {
    hasNextPage: boolean
  }
}

export type AiringScheduleData = {
  episode: number
  airingAt: number,
  media: Media,
  timeUntilAiring: number
}

export type TrendingAnime = AnimeData
export type MostPopularAnime = AnimeData
export type CurrentListAnime = ListAnimeData[]

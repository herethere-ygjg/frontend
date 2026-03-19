// folder JSON 타입
export interface FolderType {
  id: number
  title: string
  description: string
  category: string[]
  thumbnail_url: string
  place_count: number
  update_at: string
}

// place JSON 타입
export interface PlaceType {
  id: number
  name: string
  category: string[]
  content: string
  rating: number
  image_url: string
  place?:string
}


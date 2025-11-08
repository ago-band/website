import yaml from 'js-yaml'

export interface ShowLink {
  facebook?: string
  tickets?: string
  organizer?: string
  [key: string]: string | undefined
}

export interface Show {
  date: string
  venue: string
  description?: string
  supportingActs?: string[]
  links?: ShowLink
  status: 'upcoming' | 'past' | 'cancelled'
  title?: string
}

export interface ShowsData {
  shows: Show[]
}

export async function loadShows(): Promise<Show[]> {
  try {
    // Try public folder first (for production), then src (for development)
    let response = await fetch('/shows.yaml')
    if (!response.ok) {
      response = await fetch('/src/data/shows.yaml')
    }
    if (!response.ok) {
      return []
    }
    const text = await response.text()
    const data = yaml.load(text) as ShowsData
    return data.shows || []
  } catch (error) {
    console.error('Error loading shows:', error)
    return []
  }
}


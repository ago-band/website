import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../contexts/LanguageContext'

export default function Videos() {
  const { language, languageData } = useLanguage()
  const pageTitle = languageData?.languages[language].pages.videos?.title || 
                    "Videos | ago · new wave/electronica · stuttgart"
  // Videos page can be similar to Music or have different content
  // For now, using same structure as Music
  const videos = [
    {
      id: 'C6RGlYzp6TI',
      title: 'Musikvideo für "sun" (2018)',
    },
    {
      id: 'R8UROfoC8sM',
      title: '"Luzifer" (live in mazkeka, jerusalem)',
    },
    {
      id: 'CflEn0IrDKk',
      title: 'Musikvideo für "Select" (2016)',
    },
    {
      id: 'gJVzwXHMnbY',
      title: 'Musikvideo für "Trees" (2015)',
    },
  ]

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Music videos by ago" />
      </Helmet>
      <article className="post page type-page status-publish hentry">
        <div className="post-content clearfix">
          <div className="entry-content clearfix">
            <div className="videos-content">
              {videos.map((video) => (
                <article key={video.id}>
                  <h2>{video.title}</h2>
                  <div className="video-wrapper">
                    <iframe
                      width="100%"
                      height="420"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}


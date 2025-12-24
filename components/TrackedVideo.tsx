'use client'
import { useEffect, useRef, useState } from 'react'

export default function TrackedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasTracked10s, setHasTracked10s] = useState(false)
  const [hasTrackedUnmute, setHasTrackedUnmute] = useState(false)

  const trackEvent = (action: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', `video_${action}`, {
        event_category: 'About Me Video',
        event_label: 'Autoplay Engagement',
      })
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime > 10 && !hasTracked10s) {
        trackEvent('watched_10s')
        setHasTracked10s(true)
      }
    }

    const handleVolumeChange = () => {
      if (!video.muted && !hasTrackedUnmute) {
        trackEvent('unmuted')
        setHasTrackedUnmute(true)
      }
    }

    const handleEnded = () => {
      trackEvent('complete')
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('volumechange', handleVolumeChange)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('volumechange', handleVolumeChange)
      video.removeEventListener('ended', handleEnded)
    }
  }, [hasTracked10s, hasTrackedUnmute])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full rounded-lg shadow-lg" // <--- Add your specific styling classes here if needed
    >
      <source src="/your-video-file.mp4" type="video/mp4" />
    </video>
  )
}
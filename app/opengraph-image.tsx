import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Diogo C. Marques | Website & Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505', // Almost black
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #111 2%, transparent 0%)',
          backgroundSize: '100px 100px', // Subtle pattern
          color: 'white',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: 90,
            fontFamily: 'sans-serif',
            fontWeight: 300, // Thin type
            letterSpacing: '-0.03em',
            background: 'linear-gradient(to bottom, #ffffff, #999999)', // Text gradient
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Diogo C. Marques
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            fontFamily: 'sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em', // Wide spacing for modern feel
            textTransform: 'uppercase',
            color: '#666666', // Muted gray
            marginTop: 20,
          }}
        >
          Website & Portfolio
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'DCM2 | Growth Marketing'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(to bottom right, #111111, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        <div style={{ fontWeight: 900 }}>DCM2</div>
        <div style={{ fontSize: 30, marginTop: 20, color: '#888', fontWeight: 400 }}>
          GROWTH MARKETING
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
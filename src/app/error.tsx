'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
 

  return (
    <div style={{ padding: 20, color: 'red', fontFamily: 'monospace' }}>
      <h2>🔥 Runtime Error:</h2>
      <pre>{error.message}</pre>

      {error.stack && (
        <details open>
          <summary>Stack Trace</summary>
          <pre>{error.stack}</pre>
        </details>
      )}

      <button
        onClick={() => reset()}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          background: 'black',
          color: 'white',
          borderRadius: 6,
        }}
      >
        Reset Page
      </button>
    </div>
  )
}

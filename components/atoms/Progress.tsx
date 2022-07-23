const Progress:React.FC<{percentage: number}> = ({ percentage }) => { 
  const parsedPercentage = percentage > 1 ? 1 : percentage
  return (
    <div className='w-full rounded border border-pink-400 h-3'>
      <div className='rounded bg-pink-400 h-2.5' style={{
        width: `${parsedPercentage * 100}%`
      }}></div>
    </div>
  )
}

export default Progress

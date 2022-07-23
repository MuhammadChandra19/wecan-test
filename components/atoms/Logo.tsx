import type { NextComponentType } from 'next'
const Logo: NextComponentType = () => {
  return (
    <div className='flex p-2'>
      <div className='rounded-full h-10 w-10 bg-cyan-600'></div>
      <p className='my-auto mx-3.5'>Kitabisa</p>
    </div>
  )
}

export default Logo

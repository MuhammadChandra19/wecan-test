import { NextComponentType } from 'next';
import Logo from '../atoms/Logo';

const Header:NextComponentType = () => {
  return (
    <div className='flex justify-between p-2'>
      <Logo />
      <button 
        className='rounded-md border border-sky-500 m-2 p-2 bg-sky-600 hover:bg-sky-700 text-white'
      >
        Sorting by donation goal
      </button>
    </div>
  )
}

export default Header
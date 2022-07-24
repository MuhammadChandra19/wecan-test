import Logo from '../atoms/Logo';

type HeaderProps = {
  sortBy: string
  handleSort: () => void
}
const Header:React.FC<HeaderProps> = ({ sortBy, handleSort }) => {
  return (
    <div className='flex justify-between p-2'>
      <Logo />
      <button 
        className='rounded-md border border-sky-500 m-2 p-2 bg-sky-600 hover:bg-sky-700 text-white'
        onClick={handleSort}
      >
        Sort by { sortBy }
      </button>
    </div>
  )
}

export default Header
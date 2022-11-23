import errorIcon from '../assets/error.svg'
export default function ErrorPopUp(prop) {
  const {error, message} = prop

  return (
    <div className={`fixed top-[5%] ${error ? 'left-0': 'left-[-100%]'} flex   w-full justify-center transition-all duration-300`}>
      <div className='flex gap-[10px] bg-white p-[15px] shadow-xl rounded-[8px]'>
        <img className='h-[25px]' src={errorIcon} alt="mark" />
        <p className='text-[18px] capitalize'>{message}</p>
      </div>
    </div>
  )
}
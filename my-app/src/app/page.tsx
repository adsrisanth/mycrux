import Logo from '../app/assets/logo.png'
import Image from 'next/image'

const home = () => {
  return(
    <div className="fixed w-full h-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black"></div>
      <div className="bg-black relative z-0 px-2 py-2">
        <div className='text-gray-300 text-sm flex '>
          <span className='cursor-pointer border-r border-gray-50 hover:text-gray-50 hover:duration-300 pr-2'>Exclusive Member Ship</span>
          <span className='cursor-pointer hover:duration-500 pl-2 hover:text-gray-50'>SignIN</span>
        </div>
      </div>
      <div className="flex z-10 text-gray-50">
        <h1>coming soon</h1>
      </div>
    </div>
  );
};

export default home;
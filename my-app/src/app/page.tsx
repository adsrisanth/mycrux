import Image from "next/image";
import Logo from './assets/logo.png'

const Home = () => {
  return (
    <div className="fixed w-full h-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black z-0"></div>
      <div className="bg-black relative z-10">
        <div className='text-gray-300 text-[10px] flex place-content-end px-2 py-1 border-b-[0.1px] border-gray-50'>
          <span className='cursor-pointer border-r border-gray-50 hover:text-gray-50 hover:duration-300 pr-2'>Exclusive Membership</span>
          <span className='cursor-pointer hover:duration-500 pl-2 hover:text-gray-50'>SignIN</span>
        </div>
        {/* <div className="bg-black py-2 px-3 border-b border-gray-50">
          <Image src={Logo} alt="Logo" className="w-10 h-10" />
        </div> */}
      </div>
      <div className="flex h-full w-full items-center justify-center text-gray-50 relative z-10 flex-col">
        <div>
          <Image src={Logo} alt="Logo" className="w-14 h-14" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Coming Soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

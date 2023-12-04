function Navbar() {
    return (
      <>
        <div className='border-b-2 border-gray-500  shadow-md  bg-black   w-full  h-1/2 flex justify-evenly content-center items-center text-1xl '>
          <div className='my-3 w-36'>
            <img className="" src="https://xcelore.com/wp-content/uploads/2023/08/cropped-log-w.png" alt="loading" />
          </div>
          <div className="text-3xl font-bold  text-white font-serif">
            <h4>Log Analyzer</h4>
          </div>
          <ul className='flex justify-around tracking-tighter  text-white space-x-8 max-md:hidden '>
            <li className='list hover:text-blue-600 hover:text-[17px] cursor-pointer'>Home</li>
            <li className='list hover:text-blue-600 hover:text-[17px] cursor-pointer'>Services</li>
            <li className='list hover:text-blue-600 hover:text-[17px] cursor-pointer'>About Us</li>
          </ul>
        </div>
      </>
    );
  }
  
  export default Navbar;
  
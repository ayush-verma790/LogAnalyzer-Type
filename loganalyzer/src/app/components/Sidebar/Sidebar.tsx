

export default function Sidebar({setInput}:any) {

    
    return (
      <>
        <div className=" lg:w-1/4 md:w-1/2 w-full shadow-white shadow-lg rounded-[40px] bg-inherit-400 mr-2 mt-16 ml-4 border-2   mb-[2%]">
          <div className="cursor-pointer text-gray-800 p-5 m-3 text-center">
            <h4 className="cursor-pointer text-2xl p-2 tracking-wide text-blue-500">History</h4>

            <p onClick={() => setInput('Count the number of log entries for each type on October 10, 2022.')} className="cursor-pointer text-gray-400 border-b-2 border-blue-200 p-2 rounded-2xl hover:border-2 hover:border-blue-400" >Count the number of log entries for each type on October 10, 2022.</p>
           
          </div>
          <div className="cursor-pointer m-3 text-gray-400 p-5 text-center ">
            <h4 className="cursor-pointer text-2xl p-2 tracking-wide text-blue-500">Suggested Queries</h4>
           
            <p onClick={() => setInput('Count the number of logs for each source type on 23-04-20')} className="cursor-pointer text-gray-400 border-b-2 border-blue-200 p-2 rounded-2xl hover:border-2 hover:border-blue-400 m-2">Count the number of logs for each source type on '23-04-20.'</p>

            <p onClick={() => setInput('Identify where the logs for device resets came from on February 8, 2023, at 8:00 AM.')} className="ccursor-pointer text-gray-400 border-b-2 border-blue-200 p-2 rounded-2xl hover:border-2 hover:border-blue-400 m-2">Identify where the logs for device resets came from on February 8, 2023, at 8:00 AM.</p>
            <p onClick={() => setInput('Count the number of log entries for each type on October 10, 2022')} className="cursor-pointer text-gray-400 border-b-2 border-blue-200 p-2 rounded-2xl hover:border-2 hover:border-blue-400 m-2">Count the number of log entries for each type on October 10, 2022</p>
            <p onClick={() => setInput('Count the number of log entries for each type on October 10, 2022.')} className="cursor-pointer text-gray-400 border-b-2 border-blue-200 p-2 rounded-2xl hover:border-2 hover:border-blue-400 m-2" >Count the number of log entries for each type on October 10, 2022.</p>
          </div>
        </div>
      </>
    );
  }
  
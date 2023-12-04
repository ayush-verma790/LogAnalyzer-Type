import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ResultContainer = ({ children }: React.PropsWithChildren<{}>) => {
  const resultContainerRef = useRef<HTMLDivElement | null>(null);

 
  useEffect(() => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTop = resultContainerRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div
      ref={resultContainerRef}
      className="h-[80%]  w-full overflow-y-auto shadow-white shadow-lg mt-2 md:mt-4 p-2 md:p-4 border-2 rounded-[10px]"
    >
      {children}
    </div>
  );
};

export default function Input({ input, setInput }: any) {
  const [queryHistory, setQueryHistory] = useState<string[]>([]);
  const [responseHistory, setResponseHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/question',
        { question: input },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          withCredentials: true,
        }
      );

      setQueryHistory([...queryHistory, input]);
      setResponseHistory([...responseHistory, response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setQueryHistory([...queryHistory, input]);
      setResponseHistory([...responseHistory, 'Error fetching data']);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="h-[89vh] lg:w-2/3 md:w-full ml-4 lg:p-5">
      <input
        type="text"
        placeholder="Type your Query.................."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-2xl  w-full lg:w-[80%] h-10 bg-slate-300 p-2 md:p-5 lg:p-5"
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 md:mt-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Send'}
      </button>
      <ResultContainer>
        {queryHistory.map((query, index) => (
          <div key={index}>
            <p className="float-right w-fit border-2 p-2 rounded-2xl bg-gray-300">{query}</p>
            <br />
            <br />
            <br />
            {responseHistory[index] !== undefined && (
              <p className="w-fit border-2 p-2 rounded-2xl bg-blue-400">{responseHistory[index]}</p>
            )}
          </div>
        ))}
      </ResultContainer>
    </div>
  );
}

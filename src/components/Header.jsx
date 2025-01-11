import React from 'react'

const Header = ({handlePrint,  handleDownload, handleSend}) => {
  return (
    <>
    
    <header className="flex flex-col items-center 
      justify-center mb-5 xl:flex-row xl:justify-between">
        <div> 
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button onClick={handlePrint} className="bg-gray-500 py-2 px-8 text-white font-bold rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">print</button>
              </li>
            <li className="mx-2">
              <button onClick={handleDownload} className="bg-blue-500 py-2 px-8 text-white font-bold rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Download</button>
              </li>
            <li>
              <button  onClick={handleSend} className="bg-green-500 py-2 px-8 text-white font-bold rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Send</button>
              </li>
          </ul>
        </div>
      </header>
     
    </>
  )
}

export default Header;

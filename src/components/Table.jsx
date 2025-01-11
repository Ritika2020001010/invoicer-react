import React from 'react';

const Table = ({ list , total}) => {
  return (
    <>
    <table className="table-auto w-full border-collapse border border-gray-200 mb-10 mt-5">
          
          <thead>
              <tr className="bg-gray-100 text-left text-sm font-medium">
                <th className="border border-gray-200 px-4 py-2">Item Description</th>
                <th className="border border-gray-200 px-4 py-2">Quantity</th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
                <th className="border border-gray-200 px-4 py-2">Amount</th>
              </tr>
            </thead>
    
            {list.map(({id, description, quantity, price, amount})=>(
    
            
            <React.Fragment key={id}>
            
            <tbody>
              <tr className="text-sm">
                <td className="border border-gray-200 px-4 py-2">{description}</td>
                <td className="border border-gray-200 px-4 py-2">{quantity}</td>
                <td className="border border-gray-200 px-4 py-2">{price}</td>
                <td className="border border-gray-200 px-4 py-2">{amount}</td>
              </tr>
            </tbody>
            </React.Fragment>
            ))}
            
        </table>
        
        <div className="mt-5">
        <h2 className="text-lg font-bold">Total: {total}</h2>
      </div>
      </>
  );
};

export default Table;

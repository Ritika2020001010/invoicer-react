import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      description,
      quantity: Number(quantity),
      price: Number(price),
      amount: Number(quantity) * Number(price),
    };

    setList([...list, newItem]);

    // Reset form fields
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setIsEditing(false);
  };

  // Calculate total whenever `list` changes
  useEffect(() => {
    const sum = list.reduce((acc, item) => acc + item.amount, 0);
    setTotal(sum);
  }, [list, setTotal]);

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description" className="mb-2 font-medium">
            Item Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10 mt-5">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="mb-2 font-medium">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2 font-medium">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="mb-2 font-medium">
              Amount
            </label>
            <p>{quantity && price ? Number(quantity) * Number(price) : 0}</p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-500 py-2 px-8 text-white font-bold rounded shadow border-2 
          border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      <table className="table-auto w-full border-collapse border border-gray-200 mb-10 mt-5">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium">
            <th className="border border-gray-200 px-4 py-2">Item Description</th>
            <th className="border border-gray-200 px-4 py-2">Quantity</th>
            <th className="border border-gray-200 px-4 py-2">Price</th>
            <th className="border border-gray-200 px-4 py-2">Amount</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id} className="text-sm">
              <td className="border border-gray-200 px-4 py-2">{description}</td>
              <td className="border border-gray-200 px-4 py-2">{quantity}</td>
              <td className="border border-gray-200 px-4 py-2">{price}</td>
              <td className="border border-gray-200 px-4 py-2">{amount}</td>
              <td className="border border-gray-200 px-4 py-2">
                <button onClick={() => deleteRow(id)}>
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
                <button onClick={() => editRow(id)}>
                  <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5">
        <h2 className="text-lg font-bold">Total: {total}</h2>
      </div>
    </>
  );
};

export default TableForm;

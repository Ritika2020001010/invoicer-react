import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import Dates from "./components/Dates";
import Header from "./components/Header";
import TableForm from "./components/TableForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);


  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const invoice = document.getElementById("invoice");
    if (!invoice) {
      alert("Invoice element not found!");
      return;
    }
  
    html2canvas(invoice, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    }).catch((error) => {
      console.error("Error capturing invoice:", error);
    });
  };
  
  

  const handleSend = () => {
    const mailtoLink = `mailto:?subject=Invoice ${invoiceNumber}&body=Hello,%0D%0A%0D%0APlease find the attached invoice.%0D%0A%0D%0AThank you!`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <main className="p-5 m-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {showInvoice ? (
          <>
          <div id="invoice" >
            <Header handlePrint={handlePrint} handleDownload={handleDownload} handleSend={handleSend}  />

            <MainDetails name={name} address={address} />

            <ClientDetails 
            clientName={clientName} 
            clientAddress={clientAddress}
             />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table 

            list={list}
            description={description}
            quantity={quantity}
            price={price}
            amount={amount}
            setList={setList}
            total={total}
            setTotal={setTotal} 
            
            />

            

            <Notes notes={notes} />

            <Footer
              name={name}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
          </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 py-2 px-8 text-white font-bold rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center gap-4">
            {/* Personal Information */}
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-medium">
                  Enter your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="mb-2 font-medium">
                  Enter your address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </article>

            {/* Contact Details */}
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium">
                  Enter your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 font-medium">
                  Enter your phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankName" className="mb-2 font-medium">
                  Enter your bank name
                </label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Your bank name"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
            </article>

            {/* Client Details */}
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="clientName" className="mb-2 font-medium">
                  Enter the client's name
                </label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Client's full name"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress" className="mb-2 font-medium">
                  Enter the client's address
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Client's address"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </article>

            {/* Invoice Details */}
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber" className="mb-2 font-medium">
                  Enter the invoice number
                </label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice number"
                  autoComplete="off"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate" className="mb-2 font-medium">
                  Enter the invoice date
                </label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dueDate" className="mb-2 font-medium">
                  Enter the due date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>

            {/* Table Form */}
            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
            </article>

            {/* Additional Notes */}
            <div className="flex flex-col">
              <label htmlFor="notes" className="mb-2 font-medium">
                Enter additional notes
              </label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            {/* Generate Invoice Button */}
            <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 py-2 px-8 text-white font-bold rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Generate Invoice
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;

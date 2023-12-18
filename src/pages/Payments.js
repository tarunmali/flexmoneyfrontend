import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Payments = () =>{
    const location = useLocation();
    const propsFromNavigate = location.state;
    const { selectedYear, selectedMonth, selectedSlot } = propsFromNavigate;
    const [paymentStatus, setPaymentStatus] = useState('');
    const email="try";

    //change the style of code
    const handlePayment = async () => {
      try {
        // Call the backend API to process the payment
        const response= await fetch(`${process.env.REACT_APP_BACKEND}/Api/payments`,{
        // const response = await fetch('/Api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedYear,
            selectedMonth,
            selectedSlot,
            email,
            amount: 500,
          }),
        });
  
        const data = await response.json();
  
        // Update the payment status based on the API response
        setPaymentStatus(data.success ? 'Payment successful!' : 'Payment failed.');
      } catch (error) {
        // console.error('Error processing payment:', error);
        setPaymentStatus('An error occurred while processing the payment.');
      }
    };
  
    return   !sessionStorage.getItem('accessToken') ?(
      <body class="flex items-center justify-center h-screen bg-gray-100">
  <h1 class="text-3xl font-bold text-center">Login to Book a Slot</h1>
</body>
    )
     :(
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Fake Payments Screen</h2>
        <p>
          Powered by Flexmoney
        </p>
        <p className="my-4">
          Selected Year: {selectedYear}, Selected Month: {selectedMonth}, Selected Slot: {selectedSlot}, Email: {email}
        </p>
        <p className="mb-4">Price: 500 Rupees</p>
        
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={handlePayment}
        >
          Process Payment
        </button>
  
        {paymentStatus && (
          <p className={`mt-4 ${paymentStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
            {paymentStatus}
          </p>
        )}
      </div>  
    )
}

export default Payments;
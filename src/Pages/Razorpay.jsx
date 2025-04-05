import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Razorpay = ({ customerData }) => {
    const { amt } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // Define the correct JSON server URL
    const JSON_SERVER_URL = "https://react-jsonserver.onrender.com"; //

    
    useEffect(() => {
     
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }, []);
    
    const handleRazorpayPayment = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Generate a unique receipt ID for this transaction
        const receiptId = "rcpt_" + Date.now();
        
        // Parse amount properly - ensure it's a number and convert to paise
        const amountInPaise = Math.round(parseFloat(amt) * 100);
        
        // Create a simulated Razorpay order (since we can't access the actual Razorpay API)
        const orderData = {
          id: "order_" + Date.now(),
          amount: amountInPaise,
          currency: "INR",
          receipt: receiptId,
          status: "created",
          created_at: new Date().toISOString(),
          notes: customerData ? {
            name: customerData.first_name + " " + (customerData.Last_name || ""),
            email: customerData.email,
            phone: customerData.Phone
          } : {}
        };
        
        // Store the order in JSON server
        try {
          const orderResponse = await axios.post(`https://react-jsonserver.onrender.com/orders`, orderData);
          console.log("Order created successfully:", orderResponse.data);
        } catch (serverError) {
          console.error("JSON Server error:", serverError);
          
          // Provide a more helpful error message
          if (serverError.code === "ERR_NETWORK" || serverError.code === "ECONNREFUSED") {
            throw new Error("Cannot connect to JSON Server. Make sure it's running on port 3000.");
          } else {
            throw serverError;
          }
        }

        // Initialize Razorpay checkout
        const options = {
          key: "rzp_test_gcjTfISBCVxhQK", // Your test key
          amount: amountInPaise,
          currency: "INR",
          name: "Your Store Name",
          description: "Purchase Transaction",
          // Note: We're not using order_id here since we don't have a real Razorpay order
          // This is different from a production setup where you'd use the Razorpay order ID
          receipt: receiptId,
          handler: function (response) {
            // Handle successful payment
            console.log("Payment success", response);
            
            // Store payment details in JSON server
            const paymentData = {
              order_id: orderData.id,
              payment_id: response.razorpay_payment_id || "pay_" + Date.now(),
              amount: amountInPaise,
              status: "success",
              created_at: new Date().toISOString(),
              customer_details: customerData || {}
            };
            
            axios.post(`https://react-jsonserver.onrender.com/payments`, paymentData)
              .then(() => {
                // Update your component state or redirect
                alert("Payment successful!");
                navigate("/paymentdone");
              })
              .catch(err => {
                console.error("Error recording payment:", err);
                alert("Payment was processed but failed to save details. Please contact support.");
              })
              .finally(() => {
                setIsLoading(false);
              });
          },
          prefill: {
            name: customerData?.first_name + " " + (customerData?.Last_name || ""),
            email: customerData?.email || "",
            contact: customerData?.Phone || ""
          },
          theme: {
            color: "#3399cc"
          },
          notes: {
            // Adding this to clarify it's a test transaction
            is_testing: "true"
          },
          modal: {
            ondismiss: function() {
              console.log("Payment modal closed");
              setIsLoading(false);
            }
          }
        };
        
        // Initialize Razorpay checkout
        const rzp = new window.Razorpay(options);
        
        // Handle failed payments
        rzp.on('payment.failed', function (response) {
          console.log(response.error.code);
          console.log(response.error.description);
          
          // Record failed payment in JSON server
          const failedPayment = {
            order_id: orderData.id,
            error_code: response.error.code,
            error_description: response.error.description,
            status: "failed",
            created_at: new Date().toISOString(),
            customer_details: customerData || {}
          };
          
          axios.post(`${JSON_SERVER_URL}/payments`, failedPayment)
            .catch(err => {
              console.error("Failed to record payment failure:", err);
            })
            .finally(() => {
              setIsLoading(false);
            });
            
          alert("Payment failed: " + response.error.description);
        });
        
        // Open Razorpay checkout
        rzp.open();
      } catch (error) {
        console.error("Error initializing payment", error);
        setError(error.message || "Could not initialize payment. Please try again.");
        setIsLoading(false);
        alert(error.message || "Could not initialize payment. Please try again.");
      }
    };
    
    return (
      <div className="text-center">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Button 
          onClick={handleRazorpayPayment}
          disabled={isLoading}
          style={{ backgroundColor: "#3399cc", color: "white", margin: "15px" }}
        >
          {isLoading ? "Processing..." : "Pay Now with Razorpay"}
        </Button>
      </div>
    );
  };
  
  export default Razorpay;
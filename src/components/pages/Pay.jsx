import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = () => {
  const publicKey = "pk_test_162884f06e28545f737d29fe112e0fd09da43cac"; // your public key
  const amount = 5000 * 100; // amount in kobo (₦5000)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Pay ₦5000",
    onSuccess: (response) => {
      alert(`Payment Successful! Reference: ${response.reference}`);
      console.log("Success response:", response);
    },
    onClose: () => alert("Payment closed"),
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Pay with Paystack</h2>
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginBottom: "10px",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          marginBottom: "10px",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <PaystackButton {...componentProps} className="paystack-button" />
    </div>
  );
};

export default PaystackPayment;

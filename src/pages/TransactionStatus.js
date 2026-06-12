import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTransactionDetails } from "../api/transactionService";
import "./TransactionStatus.css";

function TransactionStatus() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransaction();
  }, []);

  const loadTransaction = async () => {
    try {
      const response = await getTransactionDetails();
      setTransaction(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3>Loading transaction details...</h3>;
  }

  return (
    <div className="txn-container">
      <div className="txn-card">

        <h2>
          {transaction.status === "SUCCESS"
            ? "✅ Transaction Successful"
            : "❌ Transaction Failed"}
        </h2>

        <div className="txn-row">
          <label>Reference Number</label>
          <span>{transaction.referenceNumber}</span>
        </div>

        <div className="txn-row">
          <label>Amount</label>
          <span>₹ {transaction.amount}</span>
        </div>

        <div className="txn-row">
          <label>Date & Time</label>
          <span>{transaction.transactionDateTime}</span>
        </div>

        <div className="txn-row">
          <label>Status</label>
          <span
            className={
              transaction.status === "SUCCESS"
                ? "success"
                : "failed"
            }
          >
            {transaction.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TransactionStatus;
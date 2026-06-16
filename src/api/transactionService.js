export const getTransactionDetails = async () => {
console.log("transactionService loaded");
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        data: {
          referenceNumber: "TXN123456789",
          amount: 5000,
          transactionDateTime: "09-Jun-2026 10:30 AM",
          status: "SUCCESS"
        }
      });

    }, 1000);

  });
};
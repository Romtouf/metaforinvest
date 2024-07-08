const Transaction = require("../models/Transaction");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createTransaction = async (req, res) => {
  const { type, amount, source } = req.body;
  try {
    let charge;
    if (type === "deposit") {
      charge = await stripe.charges.create({
        amount: amount * 100, // montant en cents
        currency: "eur",
        source,
        description: `Dépot pour l'utilisateur ${req.user.id}`,
      });
    }

    const transaction = new Transaction({
      user: req.user.id,
      type,
      amount,
      status: charge ? "completed" : "pending",
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createTransaction, getTransactions };

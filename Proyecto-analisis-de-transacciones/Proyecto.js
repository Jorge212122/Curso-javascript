const transactions = [
    { id: 1, description: 'compras', amount: -50 },
    { id: 2, description: 'salario', amount: 2000 },
    { id: 3, description: 'utiles escolares', amount: -200 },
    { id: 4, description: 'online purchase', amount: -50 },
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transactions) => acc + transactions.amount, 0)
console.log('Total balance: ', totalBalance)

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transactions) => {
    return Math.abs(transactions.amount) > Math.abs(maxTransaction.amount) ? transactions : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction)

// 3. Filter Purchase Transaction

const purchaseTransaction = transactions.filter(transaction => transaction.amount)
console.log(purchaseTransaction)

// 4. Find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'Online purchase')
console.log('Specific Transaction: ', specificTransaction)

// 5. Find the index of a Transaction by Amount

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -50)
console.log('Index Transaction With Amount: ', indexTransactionWithAmount)

// 6. Update Transaction Descriptions

transactions.forEach(transaction => )
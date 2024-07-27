// Best time to buy or sell stocks

// given array prices where prices[i] is the price of the given stock on the ith day
// we want to maximize profit by choosing a single day to buy one stock and on differnt day to sell that stock
// return the max profit, if not return 0
// e.g; prices = [7,1,5,3,6,4] => output = 5

// Using Greedy algorithm

const maxProfit = (prices) => {
  let profit = 0;
  let minStockPurchasePrice = prices[0] || 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));



// node 5-best-time-to-buy-sell-stocks.js 
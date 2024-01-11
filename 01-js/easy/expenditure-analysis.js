/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  const all = {};
  transactions.forEach(element => {
   if(all.hasOwnProperty(element['category'])){
    all[element['category']] = all[element['category']] + element['price'];
   }else{
    all[element['category']] = element['price'];
   }
    
  });

  for (const key in all) {

      const aa = { category: null, totalSpent: null};
      aa['category'] = key;
      aa['totalSpent'] = all[key];;
      arr.push(aa);

  }
  
  return arr;
}

module.exports = calculateTotalSpentByCategory;

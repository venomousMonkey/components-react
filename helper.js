// sorting in JS

const data = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Onion', cost: 3, weight: 15 },
  { name: 'Carrot', cost: 12, weight: 4 },
];

function getSortValue(item) {
  return item.weight;
}

const sortOrder = 'asc';
data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === 'asc' ? 1 : -1;

  if (typeof valueA === 'string') {
    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    return (valueA - valueB) * reverseOrder;
  }
});

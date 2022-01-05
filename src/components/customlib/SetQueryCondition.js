export default function SetQueryCondition(categories, items) {
  const queryCondition = [];
  for (let i = 0; i < items.length; i++) {
    queryCondition.push({
      category: categories[i],
      value: items[i],
    });
  }
  return queryCondition;
}

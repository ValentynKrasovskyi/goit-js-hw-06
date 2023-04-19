const categoryList = document.querySelectorAll('.item ul');
const categoryTitles = document.querySelectorAll('.item h2');
const categoryItems = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category, index) => {
  const categoryTitle = categoryTitles[index].textContent;
  const categoryElements = categoryList[index].children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
const data = [
  {
    id: 1,
    isSelected: true,
  },
  {
    id: 2,
    isSelected: true,
  },
  {
    id: 3,
    isSelected: false,
  },
  {
    id: 4,
    isSelected: false,
  },
  {
    id: 5,
    isSelected: true,
  },
];

const result = data.map((item) => item.isSelected);

console.log(result);

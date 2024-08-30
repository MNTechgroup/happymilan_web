export const heightoptionFun = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push({ value: i, label: i.toString() });
  }
  return options;
};

export const weightoptionFun = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push({ value: i, label: i.toString() });
  }
  return options;
};

export const GenderOption = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
]

export const CasteOptions = [
  { value: "brahmin", label: "Brahmin" },
  { value: "kshatriya", label: "Kshatriya" },
  { value: "vaishya", label: "Vaishya" },
  { value: "shudra", label: "Shudra" },
  { value: "jain", label: "Jain" },
];

export const motherTongueOption = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "gujarati", label: "Gujarati" }
];

export const religionOptions = [
  { value: "hindu", label: "Hinduism" },
  { value: "muslim", label: "Islam" },
  { value: "sikh", label: "Sikhism" },
  // Add more options as needed
];

export const profileOptions = [
  { label: 'My Self', value: 'mySelf' },
  { label: 'My Son', value: 'mySon' },
  { label: 'My Daughter', value: 'myDaughter' },
  { label: 'My Brother', value: 'myBrother' },
  { label: 'My Friend', value: 'myFriend' },
];


export const MaritalOptions = [
  { label: 'Single', value: 'single' },
  { label: 'Never Married', value: 'never-married' },
  { label: 'Married', value: 'married' },
]
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
    { id: 1, label: 'My Self', value: 'mySelf' },
    { id: 2, label: 'My Son', value: 'mySon' },
    { id: 3, label: 'My Daughter', value: 'myDaughter' },
    { id: 4, label: 'My Brother', value: 'myBrother' },
    { id: 5, label: 'My Friend', value: 'myFriend' },
];


export const MaritalOptions = [
    { label: 'Single', value: 'single' },
    { label: 'Never Married', value: 'never-married' },
    { label: 'Married', value: 'married' },
]
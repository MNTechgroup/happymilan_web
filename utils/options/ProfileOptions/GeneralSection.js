export const subcastOption = [
    { value: 'brahmin', label: 'Brahmin' },
    { value: 'kshatriya', label: 'Kshatriya' },
    { value: 'vaishya', label: 'Vaishya' },
    { value: 'shudra', label: 'Shudra' },
    { value: 'jat', label: 'Jat' },
    { value: 'rajput', label: 'Rajput' },
    { value: 'kayastha', label: 'Kayastha' },
    { value: 'patel', label: 'Patel' },
    { value: 'agrawal', label: 'Agrawal' },
    { value: 'baniya', label: 'Baniya' },
]

export const Religionoptions = [
    { value: 'hindu', label: 'Hindu' },
    { value: 'christianity', label: 'Christianity' },
    { value: 'islam', label: 'Islam' },
    { value: 'buddhism', label: 'Buddhism' },
    { value: 'judaism', label: 'Judaism' },
    { value: 'sikhism', label: 'Sikhism' },
    { value: 'taoism', label: 'Taoism' },
    { value: 'shinto', label: 'Shinto' },
    { value: 'jainism', label: 'Jainism' },
    { value: 'bahai', label: 'Baháʼí Faith' },
];

export const MaritalOptions = [
    { label: 'Single', value: 'single' },
    { label: 'Never Married', value: 'never-married' },
    { label: 'Married', value: 'married' },
]

export const profileOptions = [
    { id: 1, label: 'My Self', value: "mySelf" },
    { id: 2, label: 'My Son', value: "mySon" },
    { id: 3, label: 'My Daughter', value: "myDaughter" },
    { id: 4, label: 'My Brother', value: "myBrother" },
    { id: 5, label: 'My Friend', value: "myFriend" },
];

export const heightoption = Array.from({ length: 23 }, (v, k) => {
    const value = k + 5;
    return { value, label: value.toString() };
});

export const weightoption = Array.from({ length: 23 }, (v, k) => {
    const value = k + 40;
    return { value, label: value.toString() };
});
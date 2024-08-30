export const heightoptionFun = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push({ value: i, label: i.toString() });
    }
    return options;
  };

export const AgeoptionsFun = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push({ value: i, label: i.toString() });
    }
    return options;
  };

export const CountryOptions = [
    { value: "india", label: "India" },
    { value: "us", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "china", label: "China" },
    { value: "myanmar", label: "Myanmar" },
    { value: "nepal", label: "Nepal" },
    { value: "sri-lanka", label: "Sri-lanka" },
    { value: "pakistan", label: "Pakistan" },
    { value: "afghanistan", label: "Afghanistan" },
];


export const statesOptions = [
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'assam', label: 'Assam' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'goa', label: 'Goa' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west-bengal', label: 'West Bengal' },
    { value: 'alberta', label: 'Alberta' },
    { value: 'british-columbia', label: 'British Columbia' },
    { value: 'manitoba', label: 'Manitoba' },
    { value: 'new-brunswick', label: 'New Brunswick' },
    { value: 'newfound-land', label: 'Newfound Land' },
    { value: 'nova-scotia', label: 'Nova Scotia' },
    { value: 'ontario', label: 'Ontario' },
    { value: 'prince-edward-island', label: 'Prince Edward Island' },
    { value: 'quebec', label: 'Quebec' },
    { value: 'saskatchewan', label: 'Saskatchewan' },
    { value: 'alabama', label: 'Alabama' },
    { value: 'alaska', label: 'Alaska' },
    { value: 'arizona', label: 'Arizona' },
    { value: 'arkansas', label: 'Arkansas' },
    { value: 'california', label: 'California' },
    { value: 'colorado', label: 'Colorado' },
    { value: 'connecticut', label: 'Connecticut' },
    { value: 'delaware', label: 'Delaware' },
    { value: 'florida', label: 'Florida' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'hawaii', label: 'Hawaii' },
    { value: 'idaho', label: 'Idaho' },
    { value: 'illinois', label: 'Illinois' }
];


export const cityOptions = [
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "surat", label: "Surat" },
    { value: "toronto", label: "Toronto" },
];



export const incomeOptions = [
    { value: 10, label: "1 LPA to 10 LPA" },
    { value: 20, label: "10 LPA to 20 LPA" },
    { value: 30, label: "20 LPA to 30 LPA" },
    { value: 40, label: "30 LPA to 40 LPA" },
    { value: 50, label: "40 LPA to 50 LPA" },
    { value: 60, label: "50 LPA and above" } // Using 60 as a placeholder for "50 LPA and above"
];


export const dietOptions = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "non_vegetarian", label: "Non-Vegetarian" },
    // Add more diet options as needed
];

export const creativeOption = [
    { value: "writing", label: "writing" },
    { value: "painting", label: "Painting" }
]

export const FunOptions =
    [
        { value: "movie", label: "Movie" },
        { value: "sports", label: "Sports" },
        { value: "biking", label: "Biking" },
        { value: "music", label: "Music" },
        { value: "socialMedia", label: "Social Media" }
    ]
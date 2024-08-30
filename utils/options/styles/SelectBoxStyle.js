export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    width: "300px",
    height: "50px",
    borderRadius: "8px",
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
  menu: (provided, state) => ({
    ...provided,
    overflow: "auto",
    paddingBottom: "20px"
  }),
};



export const customStyle2 = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    width: "155px",
    height: "50px",
    borderRadius: "8px", // Add padding on the right side
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
};


export const HobbycustomStyle = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    height: "50px",
    borderRadius: "8px", // Add padding on the right side
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
};


export const CareerPageStyle = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    height: "50px",
    borderRadius: "10px", // Add padding on the right side
    border: "1px solid #CDCDCD",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
};




export const customStyle3 = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: '10px',
    paddingLeft: "8px",
    width: "133px",
    height: "50px",
    borderRadius: "8px", // Add padding on the right side
    border: "1px solid #e6e6e6",
    borderColor: state.isFocused ? 'black' : provided.borderColor,
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    paddingRight: "20px"
    // Hide the vertical line behind the arrow
  }),
};


export const LabelStyle = {

  control: (provided, state) => ({
    ...provided,
    paddingRight: '0px',
    paddingLeft: "0px",
    borderRadius: "0px",
    borderColor: "black",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
    backgroundColor: "transparent",
    boxShadow: 'none',
    transition: "border-color 0.3s ease-in-out",
    '&:hover': {
      borderBottomColor: state.isFocused ? "black" : "#C0C0C0",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: "0px",
  }),
  input: (provided) => ({
    ...provided,
    paddingLeft: "0px",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    paddingLeft: "0px",
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
}

export const LabelStyle2 = {

  control: (provided, state) => ({
    ...provided,
    paddingRight: '0px',
    paddingLeft: "0px",
    borderRadius: "0px",
    borderColor: "black",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `1px solid ${state.isFocused ? "black" : "#C0C0C0"}`,
    backgroundColor: "transparent",
    boxShadow: 'none',
    transition: "border-color 0.3s ease-in-out",
    '&:hover': {
      borderBottomColor: state.isFocused ? "black" : "#C0C0C0",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: "0px",
    position: "relative",
    top: "0px"

  }),
  input: (provided) => ({
    ...provided,
    paddingLeft: "0px",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    paddingLeft: "0px",
    position: "relative",
    top: "0px"

  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
}


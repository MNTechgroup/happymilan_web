export const Registerformschema = Yup.object().shape({
    gender: Yup.string().required('Gender is required'),
    maritalStatus: Yup.string().required('Marital status is required'),
    religion: Yup.string().required('Religion is required'),
    caste: Yup.string().required('Caste is required'),
    height: Yup.number()
        .required('Height is required')
        .min(50, 'Height must be at least 50 cm')
        .max(250, 'Height must be less than 250 cm'),
    weight: Yup.number()
        .required('Weight is required')
        .min(20, 'Weight must be at least 20 kg')
        .max(200, 'Weight must be less than 200 kg'),
    writeBoutYourSelf: Yup.string()
        .required('About Yourself is required')
        .max(150, 'About Yourself must be less than 150 characters'),
});
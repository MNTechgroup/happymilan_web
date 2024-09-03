
import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { updateAddressData, updateEducationData, updateGeneralInfo, updatePartnerPrefData, updateProffessionalData, updatehobbiesData } from "../../store/actions/registerUser";
import { setFormValidation } from "../../store/reducers/registerReducer";
import { ImageUpload } from "../../store/actions/ImageUpload";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Lazy loading components with dynamic import
const GenralSec = dynamic(() => import('./Registersection/GenralSec'), {
    ssr: false, // Only if you want to disable server-side rendering for this component
    loading: () => <p>Loading General Section...</p>, // Optional fallback component while loading 
});

const AddressSec = dynamic(() => import('./Registersection/AddressSec'), { ssr: false, loading: () => <p>Loading Address Section...</p>, });
const ContactSec = dynamic(() => import('./Registersection/ContactSec'), { ssr: false, loading: () => <p>Loading Contact Section...</p>, });
const EducationSec = dynamic(() => import('./Registersection/EducationSec'), { ssr: false, loading: () => <p>Loading Education Section...</p>, });
const ProffSec = dynamic(() => import('./Registersection/ProffSec'), { ssr: false, loading: () => <p>Loading Professional Section...</p>, });
const HobbySec = dynamic(() => import('./Registersection/HobbySec'), { ssr: false, loading: () => <p>Loading Hobby Section...</p>, });
const UploadPicSec = dynamic(() => import('./Registersection/UploadPicSec'), { ssr: false, loading: () => <p>Loading Upload Picture Section...</p>, });
const ProfileSelection = dynamic(() => import('./Registersection/ProfileSelection'), { ssr: false, loading: () => <p>Loading Profile Selection...</p>, });
const PartnerPrefSec = dynamic(() => import('./Registersection/PartnerPrefSec'), { ssr: false, loading: () => <p>Loading Partner Preference Section...</p>, });


function Home() {

    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch();
    const { status, upload, general, address, contact, education, professional, partnerpref, allhobbies } = useSelector((state) => state.form?.formData)
    const ContentOfForm = [
        { id: 1, name: "General Details" },
        { id: 2, name: "Address Details" },
        { id: 3, name: "Contact Details" },
        { id: 4, name: "Education Details" },
        { id: 5, name: "Job Details" },
        { id: 6, name: "Hobbies & Interests" },
        { id: 7, name: "Upload Photos" },
        { id: 8, name: "Prefer Partner" },
    ]

    const HandleTabclick = (id) => {

        if (activeTab === 1) {
            const isFormValid = Object.values(general).every(value => value.trim() !== '');
            if (isFormValid) {
                // Proceed to the next page or perform other actions
                dispatch(updateGeneralInfo(general))
                localStorage.setItem("UserRegister", false)
                if (status == "idle") {
                    setActiveTab(2)
                }
            } else {
                // Display error message or prevent navigation to the next page
                dispatch(setFormValidation(false))
                alert("Please Complete General Details");
            }

        } else if (activeTab === 2) {
            // Check if at least one field is filled
            const isAnyFieldFilled = Object.values(address).some(value => value.trim() !== '');

            if (isAnyFieldFilled) {
                console.log("At least one field is filled. Dispatching data...");
                dispatch(updateAddressData(address));
                setActiveTab(3);
            } else {
                setActiveTab(3);
            }
        } else if (activeTab === 3) {

            const isAnyFieldFilled = Object.values(contact).some(value => value.trim() !== '');

            if (isAnyFieldFilled) {
                dispatch(updateGeneralInfo({

                    mobileNumber: contact.mobileNumber,
                    homeMobileNumber: contact.homeMobileNumber
                }))
                localStorage.setItem('mobilenumber', contact.mobileNumber)
                setActiveTab(4)
            }
            setActiveTab(id);

        } else if (activeTab === 4) {
            const isAnyFieldFilled = Object.values(education).some(value => value.trim() !== '');

            if (isAnyFieldFilled) {
                dispatch(updateEducationData(education))
                setActiveTab(5)
            } else {
                setActiveTab(id);
            }
        } else if (activeTab === 5) {
            const isAnyFieldFilled = Object.values(professional).some(value => value.trim() !== '');

            if (isAnyFieldFilled) {
                dispatch(updateProffessionalData(professional))
                setActiveTab(6)

            } setActiveTab(id)
        } else if (activeTab === 6) {

            if (!allhobbies.hobbies.length == 0) {
                console.log(allhobbies)
                dispatch(updatehobbiesData(allhobbies))
            }
            else {
                console.log("not null")

            }
            setActiveTab(id)
        }
        else if (activeTab === 7) {
            console.log(upload)

            if (!upload.images.length == 0) {
                dispatch(ImageUpload(upload))
            } else {
                console.log("Null")
            }
            setActiveTab(id)
        }
        else if (activeTab === 8) {

            const isFormValid = Object.values(partnerpref).every(value => {
                // Check if the value is a string before applying trim()
                if (typeof value === 'string') {
                    // Apply trim() only if the value is a string
                    return value.trim() !== '';
                }
                // Return true for non-string values
                return true;
            });
            if (isFormValid) {
                dispatch(updatePartnerPrefData(partnerpref))
                router.push("/longterm/dashboard")
            } else {
                router.push("/longterm/dashboard")
            }
        }
        setActiveTab(id);
    };


    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <ProfileSelection />
            case 1:
                return <GenralSec />
            case 2:
                return <AddressSec />
            case 3:
                return <ContactSec />
            case 4:
                return <EducationSec />
            case 5:
                return <ProffSec />
            case 6:
                return <HobbySec />
            case 7:
                return <UploadPicSec />
            case 8:
                return <PartnerPrefSec />
            default:
                "";
        }
    };

    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    }

    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const HelpText = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const router = useRouter();


    if (activeTab == 0) {
        return <ProfileSelection SetActiveTab={setActiveTab} />
    }

    return (
        <>
            <div className='w-full h-full grid place-items-center pt-[100px]'>
                <div className='flex justify-evenly items-center w-full'>
                    <div className="xl:block hidden w-[332px]">
                        <ul className='fixed left-[120px] top-[200px] space-y-[40px]'>
                            <li className='space-y-[11px] w-[335px]'>
                                <h1 style={Title}>{ContentOfForm[activeTab - 1]?.name}</h1>
                                <p style={Content} className="w-[332px]">Welcome to Matrimoney, the premier online platform for finding your perfect life partner! </p>
                            </li>
                            <li>
                                <div className='h-[1px] w-full bg-[#EBEBEB]'></div>
                            </li>
                            <li>
                                <p style={HelpText} className='text-[#000]'>Need any help? <span className='text-[#0F52BA]'>Contact Us</span></p>
                            </li>
                        </ul>
                    </div>

                    <div className='h-[511px] w-[707px] border-l-[1px] border-l-[#EBEBEB]'>
                        <div className='ml-[66px] w-[647px]'>

                            <div className='w-full'>
                                {activeTab > 6 ?
                                    <ul className="flex space-x-[100px]">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M2.01937 20C1.44396 20 0.963542 19.8073 0.578125 19.4219C0.192708 19.0365 0 18.556 0 17.9806V2.01937C0 1.44396 0.192708 0.963542 0.578125 0.578125C0.963542 0.192708 1.44396 0 2.01937 0H17.9806C18.556 0 19.0365 0.192708 19.4219 0.578125C19.8073 0.963542 20 1.44396 20 2.01937V17.9806C20 18.556 19.8073 19.0365 19.4219 19.4219C19.0365 19.8073 18.556 20 17.9806 20H2.01937ZM2.01937 18.75H17.9806C18.1731 18.75 18.3495 18.6699 18.5097 18.5097C18.6699 18.3495 18.75 18.1731 18.75 17.9806V2.01937C18.75 1.82687 18.6699 1.65052 18.5097 1.49031C18.3495 1.3301 18.1731 1.25 17.9806 1.25H2.01937C1.82687 1.25 1.65052 1.3301 1.49031 1.49031C1.3301 1.65052 1.25 1.82687 1.25 2.01937V17.9806C1.25 18.1731 1.3301 18.3495 1.49031 18.5097C1.65052 18.6699 1.82687 18.75 2.01937 18.75ZM4.375 15.625H15.8172L12.2838 10.9134L9.01437 15.0481L6.82687 12.4038L4.375 15.625Z" fill="black" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                                <path d="M10.515 9.30166C9.16558 9.30166 8.05309 8.86387 7.17752 7.9883C6.30195 7.11273 5.86416 5.99799 5.86416 4.6441C5.86416 3.29019 6.30195 2.17769 7.17752 1.3066C8.05309 0.435533 9.16558 0 10.515 0C11.8644 0 12.9769 0.435533 13.8525 1.3066C14.728 2.17769 15.1658 3.29019 15.1658 4.6441C15.1658 5.99799 14.728 7.11273 13.8525 7.9883C12.9769 8.86387 11.8644 9.30166 10.515 9.30166ZM0 20V17.3389C0 16.5858 0.199517 15.9298 0.59855 15.3708C0.997584 14.8118 1.51615 14.3822 2.15425 14.082C3.62993 13.4259 5.05245 12.9316 6.42181 12.5991C7.79119 12.2666 9.15544 12.1003 10.5146 12.1003C11.8737 12.1003 13.2345 12.2702 14.597 12.6099C15.9594 12.9496 17.3756 13.4435 18.8454 14.0915C19.5084 14.3909 20.0383 14.8187 20.4349 15.3749C20.8316 15.9312 21.03 16.5858 21.03 17.3389V20H0ZM1.59071 18.4093H19.4393V17.3389C19.4393 16.9741 19.3238 16.6245 19.0928 16.2901C18.8618 15.9558 18.5603 15.6934 18.1882 15.5028C16.8096 14.8324 15.5092 14.3628 14.2871 14.0941C13.065 13.8254 11.8076 13.691 10.515 13.691C9.22239 13.691 7.95559 13.8254 6.71458 14.0941C5.47357 14.3628 4.17543 14.8324 2.82016 15.5028C2.4481 15.6934 2.15017 15.9558 1.92639 16.2901C1.7026 16.6245 1.59071 16.9741 1.59071 17.3389V18.4093ZM10.515 7.71098C11.3903 7.71098 12.1192 7.41979 12.7016 6.8374C13.2839 6.25503 13.5751 5.52617 13.5751 4.65083C13.5751 3.77549 13.2839 3.04664 12.7016 2.46427C12.1192 1.8819 11.3903 1.59071 10.515 1.59071C9.63965 1.59071 8.91079 1.8819 8.32843 2.46427C7.74606 3.04664 7.45487 3.77549 7.45487 4.65083C7.45487 5.52617 7.74606 6.25503 8.32843 6.8374C8.91079 7.41979 9.63965 7.71098 10.515 7.71098Z" fill={activeTab >= 8 ? "black" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                    </ul>
                                    :
                                    <ul className='flex justify-between'>

                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                            <path d="M10.515 9.30166C9.16558 9.30166 8.05309 8.86387 7.17752 7.9883C6.30195 7.11273 5.86416 5.99799 5.86416 4.6441C5.86416 3.29019 6.30195 2.17769 7.17752 1.3066C8.05309 0.435533 9.16558 0 10.515 0C11.8644 0 12.9769 0.435533 13.8525 1.3066C14.728 2.17769 15.1658 3.29019 15.1658 4.6441C15.1658 5.99799 14.728 7.11273 13.8525 7.9883C12.9769 8.86387 11.8644 9.30166 10.515 9.30166ZM0 20V17.3389C0 16.5858 0.199517 15.9298 0.59855 15.3708C0.997584 14.8118 1.51615 14.3822 2.15425 14.082C3.62993 13.4259 5.05245 12.9316 6.42181 12.5991C7.79119 12.2666 9.15544 12.1003 10.5146 12.1003C11.8737 12.1003 13.2345 12.2702 14.597 12.6099C15.9594 12.9496 17.3756 13.4435 18.8454 14.0915C19.5084 14.3909 20.0383 14.8187 20.4349 15.3749C20.8316 15.9312 21.03 16.5858 21.03 17.3389V20H0ZM1.59071 18.4093H19.4393V17.3389C19.4393 16.9741 19.3238 16.6245 19.0928 16.2901C18.8618 15.9558 18.5603 15.6934 18.1882 15.5028C16.8096 14.8324 15.5092 14.3628 14.2871 14.0941C13.065 13.8254 11.8076 13.691 10.515 13.691C9.22239 13.691 7.95559 13.8254 6.71458 14.0941C5.47357 14.3628 4.17543 14.8324 2.82016 15.5028C2.4481 15.6934 2.15017 15.9558 1.92639 16.2901C1.7026 16.6245 1.59071 16.9741 1.59071 17.3389V18.4093ZM10.515 7.71098C11.3903 7.71098 12.1192 7.41979 12.7016 6.8374C13.2839 6.25503 13.5751 5.52617 13.5751 4.65083C13.5751 3.77549 13.2839 3.04664 12.7016 2.46427C12.1192 1.8819 11.3903 1.59071 10.515 1.59071C9.63965 1.59071 8.91079 1.8819 8.32843 2.46427C7.74606 3.04664 7.45487 3.77549 7.45487 4.65083C7.45487 5.52617 7.74606 6.25503 8.32843 6.8374C8.91079 7.41979 9.63965 7.71098 10.515 7.71098Z" fill="black" />
                                        </svg></li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                                <path d="M7.94624 9.66109C8.41776 9.66109 8.81976 9.49321 9.15224 9.15745C9.48474 8.82167 9.65099 8.41803 9.65099 7.94653C9.65099 7.47501 9.4831 7.07302 9.14732 6.74053C8.81154 6.40803 8.4079 6.24178 7.9364 6.24178C7.46489 6.24178 7.06289 6.40967 6.73041 6.74545C6.39791 7.08123 6.23166 7.48487 6.23166 7.95637C6.23166 8.42789 6.39955 8.82989 6.73532 9.16237C7.0711 9.49485 7.47474 9.66109 7.94624 9.66109ZM7.94132 18.4178C10.1386 16.458 11.8125 14.5891 12.9631 12.8114C14.1136 11.0336 14.6889 9.48038 14.6889 8.15174C14.6889 6.12105 14.044 4.45202 12.7541 3.14466C11.4642 1.83728 9.85996 1.18359 7.94132 1.18359C6.02269 1.18359 4.41844 1.83728 3.12856 3.14466C1.83866 4.45202 1.19372 6.12105 1.19372 8.15174C1.19372 9.48038 1.77878 11.0336 2.94891 12.8114C4.11904 14.5891 5.78318 16.458 7.94132 18.4178ZM7.94132 20C5.29355 17.7056 3.30805 15.5704 1.98482 13.5944C0.661606 11.6183 0 9.80409 0 8.15174C0 5.72384 0.785368 3.75824 2.3561 2.25495C3.92682 0.751649 5.78856 0 7.94132 0C10.0941 0 11.9558 0.751649 13.5265 2.25495C15.0973 3.75824 15.8826 5.72384 15.8826 8.15174C15.8826 9.80409 15.221 11.6183 13.8978 13.5944C12.5746 15.5704 10.5891 17.7056 7.94132 20Z" fill={activeTab >= 2 ? "#000" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                <path d="M18.7173 20C16.5214 20 14.3117 19.4362 12.0885 18.3087C9.86528 17.1812 7.85848 15.7242 6.06808 13.9376C4.27771 12.151 2.81876 10.1479 1.69125 7.92849C0.563749 5.70905 0 3.50134 0 1.30535C0 0.932393 0.124315 0.621602 0.372944 0.372973C0.621572 0.124324 0.932364 0 1.30532 0H4.67644C4.97747 0 5.24002 0.0972424 5.46409 0.291727C5.68815 0.486211 5.83347 0.748415 5.90007 1.07834L6.60609 4.25198C6.65301 4.54255 6.6462 4.80664 6.58566 5.04425C6.52513 5.28186 6.40923 5.47874 6.23798 5.63488L3.45512 8.35642C4.58718 10.2391 5.84258 11.863 7.22132 13.2282C8.60007 14.5933 10.1892 15.767 11.9886 16.7492L14.6561 13.9819C14.8528 13.7655 15.0734 13.6149 15.3178 13.5301C15.5622 13.4454 15.8161 13.4325 16.0794 13.4915L18.9444 14.1226C19.2683 14.189 19.529 14.3426 19.7265 14.5833C19.9239 14.824 20.0227 15.1124 20.0227 15.4484V18.6947C20.0227 19.0676 19.8983 19.3784 19.6497 19.627C19.4011 19.8757 19.0903 20 18.7173 20ZM2.7741 7.14191L5.20996 4.77868C5.24024 4.7484 5.26106 4.70677 5.27241 4.65381C5.28376 4.60083 5.28565 4.55164 5.27808 4.50625L4.63336 1.52099C4.62578 1.46045 4.60119 1.41505 4.55958 1.38479C4.51794 1.35451 4.46686 1.33937 4.40632 1.33937H1.49827C1.45286 1.33937 1.41502 1.35451 1.38476 1.38479C1.35448 1.41505 1.33934 1.45289 1.33934 1.4983C1.32421 2.27318 1.44037 3.12563 1.68782 4.05563C1.93527 4.98563 2.29736 6.01439 2.7741 7.14191ZM13.244 17.378C14.0507 17.7745 14.9338 18.0833 15.8933 18.3042C16.8528 18.5252 17.7298 18.6478 18.5244 18.672C18.5698 18.672 18.6076 18.6568 18.6379 18.6266C18.6682 18.5963 18.6833 18.5585 18.6833 18.5131V15.6164C18.6833 15.5558 18.6682 15.5047 18.6379 15.4631C18.6076 15.4215 18.5622 15.3969 18.5017 15.3893L15.8252 14.8377C15.7798 14.8301 15.7401 14.832 15.706 14.8434C15.6719 14.8547 15.636 14.8755 15.5982 14.9058L13.244 17.378Z" fill={activeTab >= 3 ? "#000" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                                <path d="M12.227 20L4.01184 15.5035V8.83687L0 6.66666L12.227 0L24.4917 6.66666V15.4397H23.097V7.48225L20.4421 8.83687V15.5035L12.227 20ZM12.227 11.7518L21.5532 6.66666L12.227 1.65009L2.93851 6.66666L12.227 11.7518ZM12.227 18.4184L19.0473 14.669V9.68317L12.227 13.3333L5.4066 9.63354V14.669L12.227 18.4184Z" fill={activeTab >= 4 ? "#000" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                                <path d="M1.64838 20C1.20021 20 0.813433 19.8373 0.48806 19.5119C0.162687 19.1866 0 18.7998 0 18.3516V5.45712C0 5.00896 0.162687 4.6222 0.48806 4.29682C0.813433 3.97145 1.20021 3.80877 1.64838 3.80877H7.06598V1.64835C7.06598 1.20018 7.22867 0.813415 7.55404 0.488061C7.8794 0.162688 8.26616 0 8.71434 0H13C13.4482 0 13.835 0.162688 14.1603 0.488061C14.4857 0.813415 14.6484 1.20018 14.6484 1.64835V3.80877H20.066C20.5142 3.80877 20.9009 3.97145 21.2263 4.29682C21.5517 4.6222 21.7144 5.00896 21.7144 5.45712V18.3516C21.7144 18.7998 21.5517 19.1866 21.2263 19.5119C20.9009 19.8373 20.5142 20 20.066 20H1.64838ZM8.36268 3.80877H13.3517V1.64835C13.3517 1.56043 13.3151 1.47984 13.2418 1.40658C13.1685 1.3333 13.0879 1.29666 13 1.29666H8.71434C8.62641 1.29666 8.54582 1.3333 8.47256 1.40658C8.39931 1.47984 8.36268 1.56043 8.36268 1.64835V3.80877ZM20.4177 13.2022H13.1055V14.7846H8.64399V13.2022H1.29669V18.3516C1.29669 18.4395 1.33332 18.5201 1.40658 18.5934C1.47986 18.6667 1.56046 18.7033 1.64838 18.7033H20.066C20.1539 18.7033 20.2345 18.6667 20.3078 18.5934C20.381 18.5201 20.4177 18.4395 20.4177 18.3516V13.2022ZM9.94069 13.4879H11.8088V11.6198H9.94069V13.4879ZM1.29669 11.9055H8.64399V10.3231H13.1055V11.9055H20.4177V5.45712C20.4177 5.36921 20.381 5.28862 20.3078 5.21534C20.2345 5.14209 20.1539 5.10546 20.066 5.10546H1.64838C1.56046 5.10546 1.47986 5.14209 1.40658 5.21534C1.33332 5.28862 1.29669 5.36921 1.29669 5.45712V11.9055Z" fill={activeTab >= 5 ? "#000" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M1.2105 9.40284H4.97775C4.87519 8.527 4.63294 7.68927 4.25101 6.88968C3.8691 6.09008 3.38596 5.40147 2.80161 4.82386C2.35087 5.47165 1.98009 6.17881 1.68927 6.94533C1.39844 7.71188 1.23885 8.53105 1.2105 9.40284ZM15.0222 9.40284H18.7895C18.7611 8.53779 18.6016 7.72368 18.3107 6.96052C18.0199 6.19736 17.6491 5.49189 17.1984 4.84412C16.5546 5.47435 16.0567 6.17274 15.7044 6.93928C15.3522 7.70581 15.1248 8.527 15.0222 9.40284ZM2.80161 15.1397C3.42511 14.5095 3.91803 13.8138 4.28038 13.0526C4.64273 12.2915 4.87519 11.473 4.97775 10.5972H1.2105C1.24559 11.469 1.40686 12.282 1.69432 13.0364C1.98178 13.7908 2.35087 14.4919 2.80161 15.1397ZM17.1984 15.1397C17.6491 14.4919 18.0199 13.7891 18.3107 13.0314C18.6016 12.2736 18.7611 11.4622 18.7895 10.5972H15.0222C15.1248 11.473 15.3522 12.2915 15.7044 13.0526C16.0567 13.8138 16.5546 14.5095 17.1984 15.1397ZM6.17812 9.40284H9.40284V1.2105C8.26789 1.29957 7.20918 1.57859 6.22673 2.04756C5.24425 2.51652 4.36907 3.14304 3.60119 3.92712C4.32725 4.64642 4.91159 5.47638 5.35422 6.41702C5.79687 7.35763 6.07151 8.35291 6.17812 9.40284ZM10.5972 9.40284H13.8219C13.9285 8.35291 14.2041 7.35594 14.6488 6.41194C15.0935 5.46795 15.6822 4.63968 16.415 3.92712C15.6539 3.14304 14.7777 2.51652 13.7864 2.04756C12.7952 1.57859 11.7321 1.29957 10.5972 1.2105V9.40284ZM9.40284 18.7895V10.5972H6.17812C6.07151 11.6606 5.79857 12.6548 5.3593 13.58C4.92002 14.5051 4.33398 15.3239 3.60119 16.0364C4.36907 16.8205 5.22569 17.4531 6.17104 17.9342C7.11639 18.4153 8.19366 18.7004 9.40284 18.7895ZM10.5972 18.7895C11.7996 18.7004 12.8795 18.4187 13.837 17.9443C14.7945 17.47 15.6539 16.8408 16.415 16.0567C15.6822 15.3441 15.0935 14.5219 14.6488 13.5901C14.2041 12.6582 13.9285 11.6606 13.8219 10.5972H10.5972V18.7895ZM10 20C8.61808 20 7.31883 19.7372 6.10223 19.2115C4.88563 18.6859 3.82726 17.973 2.92714 17.0729C2.027 16.1727 1.31411 15.1144 0.788476 13.8978C0.262825 12.6812 0 11.3819 0 10C0 8.61808 0.262825 7.31883 0.788476 6.10223C1.31411 4.88563 2.027 3.82726 2.92714 2.92714C3.82726 2.027 4.88563 1.31411 6.10223 0.788477C7.31883 0.262826 8.61808 0 10 0C11.3819 0 12.6812 0.262826 13.8978 0.788477C15.1144 1.31411 16.1727 2.027 17.0729 2.92714C17.973 3.82726 18.6859 4.88563 19.2115 6.10223C19.7372 7.31883 20 8.61808 20 10C20 11.3819 19.7372 12.6812 19.2115 13.8978C18.6859 15.1144 17.973 16.1727 17.0729 17.0729C16.1727 17.973 15.1144 18.6859 13.8978 19.2115C12.6812 19.7372 11.3819 20 10 20Z" fill={activeTab >= 6 ? "#000" : "#C0C0C0"} />
                                            </svg>
                                        </li>
                                    </ul>
                                }
                            </div>

                            <div className=''>
                                {renderTabContent()}
                            </div>

                            <div className='w-full h-full grid place-items-center'>
                                <div className='fixed  z-10 bottom-0 flex justify-center bg-[#FFF]  w-full 2xl:h-[100px] xl:h-[100px] lg:h-[80px] h-[80px]'>
                                    {activeTab > 0 ? <>
                                        <div className='w-[647px] mt-[20px]'>
                                            <ul className='flex justify-between w-[647px]'>
                                                <li className=''>
                                                    <button onClick={() => setActiveTab(activeTab - 1)} className='w-[97px] h-[44px] border-[1px] border-[#000] rounded-[22px]'>
                                                        Back
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => HandleTabclick(activeTab + 1)} className='w-[153px] h-[44px] border-[1px] border-[#000] rounded-[22px] bg-[#000] text-[#FFF]'>
                                                        Continue
                                                        <Image width={24} height={24} alt='next' src={"/assests/login/Arrow-reg.svg"} className='relative left-[8px] inline' />

                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
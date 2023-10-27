import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const TitleText = {
    color: "#000",
fontFamily: "Poppins",
fontSize: "20px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal",
}

const ContentText = {
    color: "#000",
fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal",
}

const Textstyle = {
    color: "black",
fontFamily: "Poppins",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "normal"
}

function index() {   
    
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    
  return (
    <>
        <Navbar/>
    <div className='w-full lg:pt-[120px] pt-[100px] h-full  lg:grid place-items-center '>
    <div className='w-full md:w-[750px] text-left'>
    <h1 style={TitleText}>Terms of Use / Service Agreement</h1>
    </div>

    <div className='mt-[5px] w-full grid place-items-center md:block md:w-[750px]'>
      <div>
        <ul style={ContentText}>
          <li className='mt-[21px]'>Welcome to Happymilan.com, your personal matchmaking platform. This Agreement sets out the legally binding terms for your use of the Site and membership. This Agreement may be modified by Happymilan.com from time to time. The membership and rights of admissions are reserved.</li>

<li className='mt-[21px]'>This Terms of Use is published in accordance with the Rule 3 (1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021.</li>

<li className='mt-[21px]'>Happymilan.com is an advertising platform providing targeted advertising services for matchmaking alliances and replaces the traditional newspaper classified. The Site is for the personal use of individual members to advertise and promote their profiles for the purpose of finding relevant matches and cannot be used in connection with any commercial endeavors.</li>

<li className='mt-[21px]'>The Site is a serious matchmaking platform to seek a life partner for marriage and is not a casual dating site</li>
<li className='mt-[21px]'>Access to the Happymilan.com website is free. However, we offer Premium Memberships wherein one can promote his/her Profile on various Happymilan.com properties such as Premium Interest Wall, Inbox, Search Results, Emails, Happymilan Chat, SMS, Video Chat etc.</li>
</ul>

      </div>
      <div>
        <h1 style={Textstyle} className='pb-[20px] pt-[20px]'>1. Acceptance of Terms of Use Agreement.</h1>
        <div>
        <ul style={ContentText}>
          <li className=''>In order to use the Happymilan.com Service you must register as a member on the Website/ community sites/ mobile applications (“Site”). Happymilan.com is an intermediary as defined under sub-clause (w) of Section 2 of the Information Technology Act, 2000. This Agreement is an electronic contract that establishes the legally binding terms you must accept to use the Site and to become a "Member." For purposes of this Agreement, the term "Member" means a person who voluntarily submits information to the Site whether such person uses the Service as a free member, or a paid member and User shall mean a person who actively uses the Site to promote his/her profile for matchmaking purpose.</li>

<li className='mt-[21px]'>By using the Site, you agree to be bound by these Terms of Use ("Agreement"). If you wish to become a Member and promote/ advertise your profile to other Members and make use of the Shaadi.com service ("Service"), read these Terms of Use and follow the instructions in the registration process.</li>

<li className='mt-[21px]'>By using the Service, you consent to submit your personally identifiable information including sensitive personal data such as your financial data if opted for our paid membership, Identity proofs if submitted, etc to collect, process, display and use the said information to provide the Service and to contact you by other Members. If you have any objection in collecting/processing your personal data, we advise you not to register with our Site.</li>

<li className=''>If you want to withdraw this consent or if you have any objection in continuous collection or storage of your personal details, you must discontinue using our Service and delete your account by sending an email from your registered email ID to contact@happymilan.com as we shall not be able to provide you any Service without having your personally identifiable information.</li>
</ul>
        </div>
       </div>

      <div>
        <h1 style={Textstyle} className='pb-[10px] pt-[20px]'>2. Eligibility</h1>
     <ul style={ContentText} className='list-disc m-[15px]'>
      <li className='mt-[10px]'>To register as a Member of Happymilan.com or use this Site, you must be legally competent and of legal marriageable age as per the laws of India (currently, 18 years or over for females and 21 years or over for males).</li>
      <li>Happymilan.com site is only to facilitate personal advertisement for lawful marriage alliance between persons who are legally competent to enter into matrimony under the laws to which they are subject. Membership in the Service is void where prohibited.</li>
      <li>By using this Site, you represent and warrant that you have the right, consent, authority, and legal capacity to enter into this Agreement; submit relevant information to us; and that you are not prohibited or prevented by any applicable law for the time being in force or any order or decree or injunction from any court, tribunal or any such competent authority restraining you from entering into matrimony.</li>
      <li> You further confirm that you, intend to seek a life partner and that you shall not use this site for casual dating or for any commercial use. You also agree to abide by all of the terms and conditions of this Agreement and use the service in conformity with all applicable laws. If at any time Shaadi.com is of the opinion (in its sole discretion) or has any reason to believe that you are not eligible to become a member or that you have made any misrepresentation, or violated any provisions of the Terms of Use, applicable laws, Happymilan.com reserves the right to forthwith terminate your membership and / or your right to use the Service without any refund to you of any of your unutilized subscription fee.</li>
      <li>By using this Site you acknowledge that the match mails or the match search results shown to you by the system are based on the partner preference details submitted by you in your profile.</li>
      <li>Happymilan.com reserves the right to share information with third parties with regards to any promotions or offers exclusive to our members. However, we shall obtain your prior consent before sharing any of your data.</li>
      </ul>
      </div>

    </div>

        {/* <!-- Footer Section Started --> */}

        <Footer/>
                {/* <!-- Footer Section End --> */}


    </div>
    </>
  )
}

export default index
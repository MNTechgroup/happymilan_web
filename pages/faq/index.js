import React from "react";
import Navbar from "../components/Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import Image from "next/image";

const AccordingTitle = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const AccordingBody = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const CardTitleText = {
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

const CardContentText = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const Textstyle = {
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

function index() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Navbar />
      <div className="w-full pt-[80px] lg:pt-[120px] mt-[37px] h-full  lg:grid place-items-center ">
        <div className="">
          <h1 className="text-center">
            <span id="faq-title-1">Frequently asked questions</span>
            <span id="faq-title-2" className="block mt-[10px]">
              Have questions? We{"’"}re here to help
            </span>
          </h1>
        </div>

        <div className="mt-[20px] pb-[0px]">
          <div className="w-full lg:w-[750px]">
            <div className=" h-[10px]"></div>

            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How do I create an account on HappyMilan.com?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    Step 1: Click on{" "}
                    <span className="text-[#0F52BA]"> “Sign up.”</span>
                  </li>
                  <li>
                    Step 2: Enter your{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Email or mobile number.”
                    </span>
                  </li>
                  <li>Step 3: Choose a password.</li>
                  <li>
                    Step 4: Select the registration type, either{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Marriage or Dating”
                    </span>
                  </li>
                  <li className="mt-[30px]">
                    after selection of registration type , you’ll be redirecting
                    to your own dashboard and at this stage you’ll have
                    successfully registered on HappyMilan. But you’ll be
                    restricted to send request until you don’t complete the
                    registration form. Once we’ve all the information, we’ll be
                    able to give you perfect suggestion matches based on your
                    information.
                  </li>

                  <li className="mt-[21px]">
                    Wish you’ll have great experience on HappyMilan.com
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                Is HappyMilan for dating or matrimony purposes?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    HappyMilan is a social networking website that caters to
                    both categories: matrimony and dating. Users can select
                    either option when registering
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                What are the top feature of HappyMilan?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    HappyMilan is an advanced social media networking platform
                    where users have the option to choose between marriage or
                    dating.
                  </li>
                  <li className="mt-[21px]">
                    Both categories are highly secure, offering advanced
                    features to manage user privacy effectively.
                  </li>
                  <li className="mt-[21px]">
                    The subscription plans for both categories are
                    price-competitive and very affordable compared to other
                    social media networking platforms.
                  </li>
                  <li className="mt-[21px]">
                    The user interface is modern and user-friendly, making it
                    easy for users of all kinds to navigate.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How can I manage my profile and account settings?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    HappyMilan offers an advanced level of profile and account
                    management settings.
                  </li>
                  <li className="mt-[21px]">
                    You can manage your privacy settings by following the steps
                    below:
                  </li>
                  <li>Step 1: Click on the top profile icon.</li>
                  <li>
                    Step 2: Click on{" "}
                    <span className="text-[#0F52BA]"> “Account Settings.”</span>
                  </li>
                  <li className="mt-[21px]">
                    You can manage your privacy settings by following the steps
                    below:
                  </li>
                  <li>
                    Step 1: Click on
                    <span className="text-[#0F52BA]"> “Profile.”</span>
                  </li>
                  <li>Step 2: Click on</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                Are there any safety tips for online dating on HappyMilan?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    Yes, HappyMilan is very concerned about the safety of its
                    users. HappyMilan provides a warning alert before users
                    start interacting with others
                  </li>
                  <li className="mt-[21px]">
                    In the warning, we clearly state,{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Please do not share your personal information such as
                      bank details, mobile number, email address, or daily
                      activities”
                    </span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How can I contact customer support?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                    If you have any questions or concerns regarding this Privacy
                    Policy, or required any support, you can contact us;
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Email:</span>{" "}
                    support@happymilan.com
                  </li>
                  <li >
                    <span className="text-[#0F52BA]">Support:</span>{" "}
                    +91 00000 10000
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How to verify my account on HappyMilan?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                  HappyMilan is very strict about fake profiles, and we have implemented multiple authentication steps for users to verify their profiles
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Email :</span>{" "}
                    Email and mobile verification are done through OTP.
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Selfie :</span>{" "}
                    Profile verification involves 'taking a selfie' to ensure that the person matches the uploaded picture and is real.
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Government ID:</span>{" "}
                    Members are required to upload their government ID to verify their name and location.
                  </li>

                  <li className="mt-[21px]">
                  If the provided information does not match your profile, your account may be terminated after a deadline warning.
                  </li>

                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none  border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                What is your cancellation policy?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                  You can terminate your membership anytime by deleting your profile or contacting HappyMilan.com. No refunds for unused subscription fees unless expressly guaranteed in writing
                  </li>
                  <li className="mt-[21px]">
                  If the business is disrupted, the Company will reimburse you with 50% of the unused membership fees you've paid.
                  </li>
                  <li className="mt-[21px]">
                  HappyMilan.com may terminate your access or membership for reasons like violating terms, commercial use, prohibited communication, or inappropriate activity. Termination notice will be sent to your provided email, and no refund of subscription fees will be granted for breaches of the agreement.
                  </li>
                  
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none  border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                Can I change my plan later?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                  Yes, subscription plans are changeable. Members only need to pay an additional amount for add-ons
                  </li>
                  
                  
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none  border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How’s I delete my account?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                  HappyMilan users can delete or hide their profile after finding a match or determining that this platform is not compatible.
                  </li>
                  <li className="mt-[21px]">
                  To do so, you can email us with your member ID at support@happymilan.com.
                  </li>
                  <li className="mt-[21px]">
                  Follow these steps:
                  </li>
                  <li >
                  Step 1: Go to your profile and click on <span className="text-[#0F52BA]">“Account Settings.”</span>
                  </li>
                  <li >
                  Step 2: Select<span className="text-[#0F52BA]"> “Hide or Delete.”</span>
                  </li>
                  <li >
                  Step 3: Click on <span className="text-[#0F52BA]">“Delete my profile.”</span>
                  </li>
                  
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow-none  border-[1px] border-[#0F52BA] mt-[10px] rounded-[18px] mb-[20px] p-[8px]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={AccordingTitle}
              >
                How I change my login details?
              </AccordionSummary>
              <AccordionDetails>
                <ul style={AccordingBody}>
                  <li>
                  Yes, HappyMilan users can change their login details by following these steps:
                  </li>
                  <li className="mt-[21px]" >
                  Step 1: Go to your profile and click on <span className="text-[#0F52BA]">“Account Settings.”</span>
                  </li>
                  <li >
                  Step 2: Select<span className="text-[#0F52BA]"> “Credentials.”</span>
                  </li>
                  <li className="flex gap-[1%]" >
                  Step 3: Click on <span className="mt-[3px]"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M1.06412 10.9904H1.84447L9.70123 3.75601L8.92087 3.03747L1.06412 10.2719V10.9904ZM11.9536 3.0538L9.68349 0.963498L10.4284 0.277618C10.6294 0.0925393 10.8777 0 11.1733 0C11.4688 0 11.7171 0.0925393 11.9181 0.277618L12.6985 0.996159C12.8995 1.18124 13 1.40986 13 1.68204C13 1.95421 12.8995 2.18284 12.6985 2.36792L11.9536 3.0538ZM11.2087 3.73968L2.27012 11.9702H0V9.87994L8.93861 1.64938L11.2087 3.73968ZM9.31105 3.39674L8.92087 3.03747L9.70123 3.75601L9.31105 3.39674Z" fill="black"/>
</svg></span>
                  </li>
                  
                </ul>
              </AccordionDetails>
            </Accordion>
            
            <div className=" h-[10px]"></div>
          </div>
        </div>

       

        <div className="md:pl-0 md:pr-0 md:pb-0 pb-[20px] pl-[25px] pr-[25px]">
          <div
            id="bg-grad-color-faq"
            className=" w-full h-full lg:grid place-items-center lg:w-[750px] lg:h-[266px]  rounded-[20px] mt-[46px]"
          >
            <div className="w-full grid place-items-center pb-[20px] pt-[20px] md:pt-[20px] 2xl:pt-[40px] xl:pt-[40px]">
              <Image
                width={121}
                height={47}
                src="/assests/common/group-rounded.svg"
              />
            </div>
            <div className="lg:pl-0 lg:pr-0 pl-[10px] pr-[10px] text-center">
              <h1 style={CardTitleText}>Still have questions?</h1>
              <p className="pt-[10px]" style={CardContentText}>
                Can{"’"}t find the answer you{"’"}re looking for? Please chat to
                our friendly team
              </p>
            </div>

            <div className="pl-[10px] md:pl-0 2xl:pb-0 xl:pb-0 md:pb-[20px] pb-[20px] md:flex p-[10px] justify-evenly w-full md:m-[40px]">
              <div className="mt-[10px] md:mt-0">
                <Image
                  width={16}
                  height={16}
                  className="inline mr-[14px]"
                  src="/assests/common/contact-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  +079 000322321
                </h1>
              </div>

              <div className="hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]"></div>

              <div className="mt-[20px] md:mt-0 md:ml-[50px]">
                <Image
                  width={21}
                  height={16}
                  className="inline mr-[14px]"
                  src="/assests/common/email-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  support@happymilan.com
                </h1>
              </div>

              <div className="hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]"></div>

              <div className="mt-[20px] md:mt-0 md:ml-[50px]">
                <Image
                  width={17}
                  height={16}
                  className="inline mr-[14px]"
                  src="/assests/common/message-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  Chat with us
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Section Started --> */}

        <Footer />
        {/* <!-- Footer Section End --> */}
      </div>
    </>
  );
}

export default index;
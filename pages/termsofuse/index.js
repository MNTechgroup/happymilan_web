import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TitleText = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const ContentText = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};
const ContentText2 = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const Textstyle = {
  color: "#0F52BA",
  fontFamily: "Poppins",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};
const Textstyle2 = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "16px",
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
      <div className="w-full lg:pt-[120px] pt-[100px] h-full  lg:grid place-items-center ">
        <div className="lg:pr-0 lg:pl-0 pr-[20px] pl-[20px] w-full md:w-[750px] text-left">
          <h1 style={TitleText}>Terms of Use / Service Agreement</h1>
        </div>

        <div className="lg:pr-0 lg:pl-0 pl-[20px] pr-[20px] mt-[5px] w-full grid place-items-center md:block md:w-[750px]">
          <div>
            <ul style={ContentText}>
              <li className="mt-[21px]">
                Welcome to HappyMilan.com, the exclusive platform for
                matchmaking and dating. This agreement outlines the legally
                binding terms that govern your use of the site and membership.
              </li>
              <li className="mt-[21px]">
                <span className="text-[#0F52BA]"> HappyMilan.com </span> retains
                the authority to periodically amend this agreement. Membership
                and admission rights are subject to reservation by
                HappyMilan.com.
              </li>
              <li className="mt-[21px]">
                {" "}
                The terms of use for HappyMilan are grounded in Rule 3(1) of the
                Information Technology (Intermediaries Guidelines and Digital
                Media Ethics Code) Rules, 2021.
              </li>
              <li className="mt-[21px]">
                <span className="text-[#0F52BA]"> HappyMilan.com </span> is
                exclusively intended for the personal use of individual members,
                enabling them to showcase and promote their profiles for the
                sole purpose of finding relevant matches. Engaging in any
                commercial activities on the platform is strictly prohibited
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              {" "}
              Acceptance of Terms of Use Agreement.
            </h1>
            <div>
              <ul style={ContentText}>
                <li className="">
                  This Terms of Use Agreement (Agreement) is a legally binding
                  contract between HappMilan.com and Members. By accessing or
                  using any of the services provided by HappyMilan.com, you
                  agree to be bound by the terms and conditions outlined in this
                  Agreement, in compliance with the Information Technology Act,
                  2000.
                </li>

                <li className="mt-[21px]">
                  By using the Service, you agree to provide personal
                  information, including sensitive data for paid memberships and
                  identity proofs. This information will be collected,
                  processed, and used to deliver the Service and facilitate
                  communication with other Members. If you object to this,
                  please refrain from registering on our Site
                </li>
                <li className="mt-[21px]">
                  To withdraw consent or address concerns about ongoing data
                  collection, stop using our service and delete your account.
                  Initiate account deletion by emailing{" "}
                  <span className="text-[#0F52BA]">
                    {" "}
                    support@happymilan.com{" "}
                  </span>{" "}
                  from your registered email ID. Service cannot be provided
                  without your personally identifiable information
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              1. Eligibility
            </h1>
            <ul style={ContentText}>
              <li>
                You must be at least 18 years old to use Marriage or dating
                services. By using the services, you represent and warrant that
                you have the right, authority, and capacity to enter into this
                Agreement.
              </li>
              <li className="mt-[21px]">
                By using this site, you acknowledge that email matches or search
                results are based on your specified partner preferences in your
                profile
              </li>
              <li className="mt-[21px]">
                <span className="text-[#0F52BA]"> HappyMilan.com </span> may
                share information with third parties for member promotions, but
                your prior consent will be obtained before sharing any data
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              2.  Account Safety
            </h1>
            <ul style={ContentText}>
              <li>
                You are responsible for safeguarding your <span className="text-[#0F52BA]"> HappyMilan login credentials.</span> Ensure limited access to your device to prevent unauthorized account entry. Do not share your password, as the company does not request it.
              </li>
              <li className="mt-[21px]">
                You are responsible for maintaining the confidentiality of your account login credentials.
              </li>
              <li className="mt-[21px]">
                You are solely responsible for any activity that occurs under your account
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              3.  User Conduct
            </h1>
            <ul style={ContentText}>
              <li>
                You agree not to engage in any unlawful or prohibited activities while using our services.
              </li>
              <li className="mt-[21px]">
                You will not post content that is offensive, defamatory, or violates the rights of others.
              </li>
              <li className="mt-[21px]">
                You will not use the website for any commercial purposes without our prior written consent.
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              4. Privacy Policy
            </h1>
            <ul style={ContentText}>
              <li>
                You consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy.
              </li>

              <li className="mt-[21px]">
                You acknowledge that your profile information may be shared with other users based on your privacy settings
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              5.  Modification of Terms
            </h1>
            <ul style={ContentText}>
              <li>
                We reserve the right to modify, update, or change the terms of this Agreement at any time without prior notice. Your continued use of the services after such modifications constitutes acceptance of the updated terms.
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              6.  Termination
            </h1>
            <ul style={ContentText}>
              <li>
              We reserve the right to terminate or suspend your account, at our discretion, without notice, for any conduct that we believe violates this Agreement or is harmful to other users or us. After termination, the user will no longer be able to access or use the HappyMilan website or app.
              </li>         
            </ul>
            <div className="mt-[21px]">
            <span>Under what circumstances we may terminate your account: </span>
            </div>
            <ul className="mt-[21px] space-y-[8px]">
              <li>- Providing incorrect information on the HappyMilan website/app. </li>
              <li>- Committing any fraud, unlawful, or illegal act through our website/app.  </li>
              <li>- Violating our terms and conditions.</li>
              <li>- Using another HappyMilan member's email, name, photo, or personal information.</li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              7.Refund, Cancellation and Transfer Membership
            </h1>
            <ul style={ContentText}>
              <li>
                You can terminate your membership anytime by deleting your profile or contacting HappyMilan.com. No refunds for unused subscription fees unless expressly guaranteed in writing
              </li>
              <li className="mt-[21px]">
                If the business is disrupted, the Company will reimburse you with 50% of the unused membership fees you've paid and HappyMilan will initiate the refund within 5-6 working days and will contact you for further clarification.
              </li>
              <li className="mt-[21px]">
                HappyMilan.com may terminate your access or membership for reasons like violating terms, commercial use, prohibited communication, or inappropriate activity. Termination notice will be sent to your provided email, and no refund of subscription fees will be granted for breaches of the agreement.
              </li>
              <li className="mt-[21px]">
                The fees paid for HappyMilan membership, renewal, or auto-renewal are non-refundable. HappyMilan memberships are non-transferable to another person or entity, as this is against the terms and conditions
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              8. Mode of Payment
            </h1>
            <ul style={ContentText}>
              <li>
              All payments are in accordance with the guideines provided by the RBI, including cash, cheque, net banking, debit card, credit card, PayPal, RTGS, NEFT, etc. HappyMilan uses a third-party payment gateway, and you agree to provide us with your PAN/Form 60/61 of the Income Tax Act. 
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              9. Dispute Resolution
            </h1>
            <ul style={ContentText}>
              <li>

                Any disputes arising out of or relating to this Agreement will be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, and the venue for arbitration shall be Ahmedabad, India
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              10. Compliance with Information Technology Act, 2000
            </h1>
            <ul style={ContentText}>
              <li>
                This Agreement complies with the provisions of the Information Technology Act, 2000, and its amendments
              </li>
              <li className="mt-[21px]">
                Electronic records generated by [Matrimony Website Name] are considered legally valid under the Information Technology Act, 2000.
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              11. Governing Law
            </h1>
            <ul style={ContentText}>
              <li>
                This Agreement is governed by the laws of the Republic of India.
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              12.Indemnity
            </h1>
            <ul style={ContentText}>
              <li>
                Using our HappyMilan services, you agree to protect, indemnify, and hold HappyMilan and its affiliates harmless from any loss, damage, liability, claim, or demand, including reasonable attorney's fees, due to improper service use. This obligation will persist indefinitely
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              13.Jurisdiction
            </h1>
            <ul style={ContentText}>
              <li>
                In any dispute related to the Site or Service, using the Site implies your unequivocal agreement that Indian laws will govern, and the exclusive jurisdiction will be with the Competent Courts in Mumbai, India
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              14.Limitation on Liability
            </h1>
            <ul style={ContentText}>
              <li>
                We aim to offer a secure and enjoyable matrimony and dating platform in India. While we strive for a positive experience, our liability is limited by law. Users are urged to engage responsibly, and the platform assumes no responsibility for consequential damages or disputes. Use of our services implies agreement with the outlined limitations in our terms and conditions.
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle} className="pb-[20px] pt-[20px]">
              Contact Information
            </h1>
            <ul style={ContentText}>
              <li>
                For any questions or concerns regarding this Agreement, please contact us at;
              </li>
              <li className="mt-[21px]">
                <span className="text-[#0F52BA]">Email:</span> contact@mntechgroup.com
              </li>
              <li className="mt-[5px]">
                <span className="text-[#0F52BA]">Support:</span> +91 91048 14072
              </li>
              <li className="mt-[21px]">
                By clicking "I Accept" or by using our services, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of this Agreement in accordance with the Information Technology Act, 2000.
              </li>
              <li className="mt-[21px]">
                This Agreement becomes effective on the date of your registration
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div>
            <h1 style={Textstyle2} className="pb-[20px] pt-[20px]">
             If Any Complaints
            </h1>
            <ul style={ContentText}>
              <li>
                For complaints or disputes, kindly reach out to our customer support through written correspondence or email, including a digital signature, at:
              </li>
              <li className="mt-[21px]">
                <span className="text-[#0F52BA]">Email:</span> contact@mntechgroup.com
              </li>
              <li className="mt-[5px]">
                <span className="text-[#0F52BA]">Grievance Officer:</span> Jit Shrimali
              </li>
              <li className="mt-[5px]">
                <span className="text-[#0F52BA]">Availability :</span>  10am to 6pm IST, Mon-Fri (Sat & Sun Public Holiday)
              </li>

            </ul>
          </div>
          <div className="w-[100%] h-[1px] bg-[#CCC] mt-[20px]"></div>
          <div className=" pt-[20px]">
            <h1 style={ContentText2} >This Agreement, an electronic document under the Information Technology Act, 2000, and related rules, is computer-generated and does not require physical or digital signatures</h1>
          </div>

        </div >

        {/* <!-- Footer Section Started --> */}

        <Footer />
        {/* <!-- Footer Section End --> */}
      </div>
    </>
  );
}

export default index;
import React from "react";
import Navbar from "../_components/layout/AuthNavbar";
import Footer from "../_components/layout/Footer";
import Accordion from "../../components/common/Features/Accordion";

function index() {
  const TitleText = {
    color: "#0F52BA",
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

  return (
    <>
      <Navbar />
      <div className="lg:pt-[120px] pt-[100px] w-full h-full grid place-items-center">
        <div className="w-full lg:w-[700px]">
          <div className="lg:pl-0 lg:pr-0 pl-[20px] pr-[20px] w-full  text-center lg:text-left ">
            <h1 style={TitleText}>Privacy Policy</h1>
            <p style={ContentText} className="mt-[10px]">
              Welcome to HappyMilan.com, a platform dedicated to fostering
              meaningful connections and relationships. The protection and
              confidentiality of your personal information are of utmost
              importance to us. This Privacy Policy outlines our practices
              regarding the collection, use, and disclosure of your information
              when you use our website. By accessing or using our services, you
              agree to the terms outlined in this Privacy Policy
            </p>
          </div>

          <div className="mt-[10px] pb-[0px] w-full pt-[20px]">
            <div className="space-y-[20px] w-full lg:w-[950px]">

              <Accordion title={"Information We Collect"}>
                <ul style={ContentText}>
                  <li>
                    <span className="font-semibold">
                      Registration Information:
                    </span>{" "}
                    When you create an account, we collect personal
                    information such as your name, email address, date of
                    birth, gender, and other relevant details.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">
                      Profile Information:
                    </span>{" "}
                    Users have the option to provide additional information on
                    their profiles, including photos, interests, preferences,
                    and other details that enhance the matchmaking process.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">Communication Data:</span>{" "}
                    We may collect information related to your communications
                    on our platform, including messages, chat logs, and other
                    interactions.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">
                      Payment Information:
                    </span>{" "}
                    In case of premium services, we collect payment
                    information, including credit card details and billing
                    information, securely through our payment gateway.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">
                      Device and Usage Information:
                    </span>{" "}
                    We automatically collect information about your device and
                    how you interact with our website, including IP address,
                    browser type, device type, and usage patterns.
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"How We Use Your Information"}>


                <ul style={ContentText}>
                  <li>
                    <span className="font-semibold">
                      Matchmaking and Communication:{" "}
                    </span>{" "}
                    Your information is used to facilitate connections with
                    potential matches and enable communication on our
                    platform.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">Service Improvement</span>{" "}
                    We use data to enhance and personalize our services,
                    providing a better user experience.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">Customer Support:</span>{" "}
                    Information is used to respond to your inquiries, address
                    issues, and provide customer support.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">
                      Security and Fraud Prevention:
                    </span>{" "}
                    We employ measures to ensure the security of our platform
                    and to prevent fraudulent activities.
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"Information Sharing"}>
                <ul style={ContentText}>
                  <li>
                    <span className="font-semibold">With Other Users:</span>{" "}
                    Certain information, such as your profile details and
                    interests, may be shared with potential matches to
                    facilitate connections.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">Service Providers: </span>{" "}
                    We may share information with third-party service
                    providers who assist us in providing and improving our
                    services.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">Legal Compliance:</span>{" "}
                    We may disclose information if required by law or in
                    response to legal requests.
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"Your Choices"}>
                <ul style={ContentText}>
                  <li>
                    <span className="font-semibold">Profile Settings</span>{" "}
                    You can manage and control the information displayed on
                    your profile through account settings.
                  </li>
                  <li className="mt-[21px]">
                    <span className="font-semibold">
                      Communication Preferences:
                    </span>{" "}
                    You can control the communications you receive from us
                    through your account settings.
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"Security"}>
                <ul style={ContentText}>
                  <li>
                    We implement security measures to protect your information
                    from unauthorized access, alteration, disclosure, or
                    destruction
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"Updates to this Privacy Policy"}>
                <ul style={ContentText}>
                  <li>
                    We reserve the right to update this Privacy Policy to
                    reflect changes in our practices. We will notify you of
                    any material changes through the platform or other means.
                  </li>
                </ul>
              </Accordion>
              <Accordion title={"Cookies"}>
                <ul style={ContentText}>
                  <li>
                    We use various technologies, such as cookies and web
                    beacons, with our third-party partners for information
                    collection and user behavior identification. Refer to our
                    Cookies Policy for details on why we use cookies and how
                    to manage their usage through your browser settings.
                  </li>
                </ul>

              </Accordion>
              <Accordion title={"Contact Us"}>

                <ul style={ContentText}>
                  <li>
                    If you have any questions or concerns regarding this
                    Privacy Policy, please contact us at
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Email :</span>{" "}
                    contact@mntechgroup.com
                  </li>
                  <li className="mt-[5px]">
                    <span className="text-[#0F52BA]">Support :</span> +91 91048 14072
                  </li>
                  <li className="mt-[5px]">
                    <span className="text-[#0F52BA]">Operating Address :</span> Siddharth Heights, Vavol, Gandhinagar 382016, India
                  </li>
                  <li className="mt-[21px]">
                    Thank you for trusting HappyMilan.com with your personal
                    information. We are committed to providing a secure and
                    enjoyable experience on our platform.
                  </li>
                </ul>
              </Accordion>
              <div className=" h-[10px]"></div>


            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default index;
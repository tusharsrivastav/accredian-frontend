import React from "react";
import logoWhite from "../assets/logoWhite.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="w-full bg-charcoal">
      <div className="max-w-[1360px] text-white mx-auto mt-24">
        {/* Logo & CTA */}
        <div className="flex flex-row justify-between py-10 border-b-1 border-b-white">
          <img src={logoWhite} alt="logo" />

          <div>
            <button className="bg-blue w-64 h-10 rounded-lg border-1 border-white cursor-pointer hover:opacity-85">
              Schedule 1-on-1 call now
            </button>
            <p className="text-center">Speak with our Learning Advisor</p>
          </div>
        </div>

        {/* Grid Layout for footer links */}
        <div className="grid grid-cols-3 w-full gap-16 mt-8">
          <div>
            <h1 className="text-xl">Programs</h1>

            <ul className="mt-4">
              <li className="flex flex-row justify-between font-semibold py-4">
                Data Science & AI
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Product Management
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Business Analytics
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Digital Transformation
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Business Management
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Project Management
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Strategy & Leadership
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Senior Management
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
              <li className="flex flex-row justify-between font-semibold py-4">
                Fintech
                <FontAwesomeIcon icon={faPlus} className="my-auto ml-4" />
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl">About Us</h1>

            <ul className="mt-4">
              <li>
                Email us (For Data Science Queries): admissions@accredian.com
              </li>
              <li>
                Email us (For Product Management Queries):pm@accredian.com Data
              </li>
              <li>
                Science Admission Helpline:+91 9079653292 (9 AM - 7 PM) Product
              </li>
              <li>
                Management Admission Helpline:+91 9625811095 Enrolled Student
              </li>
              <li>
                Helpline: +91 7969322507 Office Address: 4th Floor, 250, Phase
                IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
              </li>
            </ul>

            <h1 className="text-xl mt-8">Follow Us</h1>
            <div className="mt-4 text-2xl flex gap-4">
              <FontAwesomeIcon icon={faSquareFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div>
            <h1 className="text-xl">Accredian</h1>

            <ul className="mt-4">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>

        {/* Copyright text */}
        <p className="text-center py-8">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

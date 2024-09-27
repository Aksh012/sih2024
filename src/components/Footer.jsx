// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="ml-5">
          <h3 className="font-semibold text-lg mb-4">About COER University</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Why Us?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Research & Innovation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Happenings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Careers@COERU
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Student Corner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="ml-5">
          <h3 className="font-semibold text-lg mb-4">Admissions</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Ph. D Admissions
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-500">
                Course Eligibility & Fee Structure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Scholarship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Download Prospectus
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Apply Now
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="ml-5">
          <h3 className="font-semibold text-lg mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                NIRF
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                AICTE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                NAAC
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                NBA
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                ISO Certificate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                NPTEL Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                ERP Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                IQAC
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Alumni
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                HR ERP
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="ml-5">
          <h3 className="font-semibold text-lg mb-4">COER University</h3>
          <p className="text-gray-400 mb-4">
            7th km on Roorkee - Haridwar Road,
            <br />
            Vardhmanpuram, Roorkee - 247 667,
            <br />
            Distt. Haridwar (Uttarakhand)
          </p>
          <p className="mb-2">
            <i className="fas fa-phone-alt"></i> +91 80705 00600
          </p>
          <p className="mb-4">
            <i className="fas fa-envelope"></i> admission@coeruniversity.ac.in
          </p>
          <h3 className="font-semibold text-lg mb-4">Other Helpline</h3>
          <p className="mb-2">
            Hostel Enquiry:{" "}
            <a href="tel:+919760005327" className="hover:text-yellow-500">
              +91 97600 05327
            </a>
          </p>
          <p>
            Registrar Office:{" "}
            <a href="tel:+919027916006" className="hover:text-yellow-500">
              +91 90279 16006
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

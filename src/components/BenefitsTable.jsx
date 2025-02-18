import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BenefitsTable = () => {
  return (
    <table className="table-auto text-left rounded-xl overflow-hidden shadow-lg border-collapse max-w-[1024px]">
      <thead>
        <tr>
          <th className="py-4 px-6 text-left text-blue-700 text-xl border-r-2 border-gray-300 font-bold bg-blue-light">Programs</th>
          <th className="py-4 px-6 text-center text-blue-700 text-xl border-r-2 border-gray-300 font-bold bg-blue-light">Referrer Bonus</th>
          <th className="py-4 px-6 text-center text-blue-700 text-xl font-bold bg-blue-light">Referee Bonus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Professional Certificate Program in Product Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 7,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 9,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">PG Certificate Program in Strategic Product Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 9,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 11,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Executive Program in Data Driven Product Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 10,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 10,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Executive Program in Product Management and Digital Transformation</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 10,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 10,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Executive Program in Product Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 10,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 10,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Advanced Certification in Product Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 10,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 10,000</td>
        </tr>
        <tr>
          <td className=" flex flex-row py-4 px-6 text-left text-text-black text-xl border-r-2 border-gray-300"><FontAwesomeIcon icon={faGraduationCap} className="text-[17px] mr-3 mt-1" /> <p className="mt-0 p-0">Executive Program in Product Management and Project Management</p></td>
          <td className="py-4 px-6 text-center text-text-black text-xl border-r-2 border-gray-300">₹ 10,000</td>
          <td className="py-4 px-6 text-center text-text-black text-xl">₹ 10,000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BenefitsTable;

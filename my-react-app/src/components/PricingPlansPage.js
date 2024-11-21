import React from 'react';
import './PricingPlansPage.css';
import { Link } from 'react-router-dom';

const PricingPlansPage = () => {
  return (
    <div className="pricing-page bg-yellow-50 py-10 px-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-heading font-bold text-red-600">
          Flexible Pricing Plans
        </h1>
        <p className="text-lg font-body text-gray-700 mt-4 max-w-3xl mx-auto">
          Elevate IQ offers a variety of pricing plans designed to meet your
          needs. Whether you're looking for flexibility or a long-term
          commitment, we've got you covered. All plans include free educational
          resources and a trial session.
        </p>
      </header>

      {/* Pricing Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Per Class Plan */}
        <div className="plan-card transition transform hover:scale-105 bg-white shadow-lg rounded-md p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Per Class</h2>
          <p className="text-xl font-body text-gray-700 mt-2">$25 per class</p>
          <ul className="text-left mt-6 space-y-3 text-gray-600">
            <li>Pay before each class</li>
            <li>Cancel anytime before the class starts</li>
            <li>Free access to resources</li>
          </ul>
        </div>

        {/* Weekly Plan */}
        <div className="plan-card transition transform hover:scale-105 bg-white shadow-lg rounded-md p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Weekly Plan</h2>
          <p className="text-xl font-body text-gray-700 mt-2">$25/hour</p>
          <ul className="text-left mt-6 space-y-3 text-gray-600">
            <li>Pay at the start of the week</li>
            <li>Cancel weekly</li>
            <li>Includes free notes and videos</li>
          </ul>
        </div>

        {/* Monthly Plan */}
        <div className="plan-card transition transform hover:scale-105 bg-white shadow-lg rounded-md p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Monthly Plan</h2>
          <p className="text-xl font-body text-gray-700 mt-2">$25/hour</p>
          <ul className="text-left mt-6 space-y-3 text-gray-600">
            <li>Pay at the start of the month</li>
            <li>Cancel monthly</li>
            <li>Includes free notes and videos</li>
          </ul>
        </div>

        {/* Package Plan */}
        <div className="plan-card transition transform hover:scale-105 bg-white shadow-lg rounded-md p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Package Deal</h2>
          <p className="text-xl font-body text-gray-700 mt-2">$25/hour</p>
          <ul className="text-left mt-6 space-y-3 text-gray-600">
            <li>Choose the number of classes</li>
            <li>Flexible schedule</li>
            <li>Pay upfront for all classes</li>
          </ul>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-heading font-bold text-red-600">
          Why Choose Elevate IQ Plans?
        </h2>
        <p className="text-lg font-body text-gray-700 mt-4 max-w-4xl mx-auto">
          All plans include free educational resources, access to exclusive
          notes, videos, and a free trial session. You can choose the right
          plan for you based on your preferences and flexibility.
        </p>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="text-center mt-10 flex flex-wrap justify-center gap-6">
        <Link
          to="/signup"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-md"
        >
          Sign Up Now
        </Link>
        <Link
          to="/subjects"
          className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-bold py-3 px-6 rounded-md shadow-md"
        >
          Explore Subjects
        </Link>
        <button
          className="bg-gray-300 text-gray-600 font-bold py-3 px-6 rounded-md shadow-md cursor-not-allowed"
          disabled
        >
          View Pricing Plans (Coming Soon)
        </button>
        <Link
          to="/educational-resources"
          className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-bold py-3 px-6 rounded-md shadow-md"
        >
          Free Educational Resources
        </Link>
      </div>
    </div>
  );
};

export default PricingPlansPage;

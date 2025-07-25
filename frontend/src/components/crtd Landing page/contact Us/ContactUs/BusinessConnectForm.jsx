import React from 'react';
import call from '../../../../assets/ContactUs/mingcute_phone-fill.png';
import msg from '../../../../assets/Images/wpf_message-outline.png';
import location from '../../../../assets/ContactUs/basil_location-solid.png';

const BusinessConnectForm = () => {
    return (
        <div className="px-4 py-10 md:px-16 bg-white">
            {/* Top Info Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Let's Get in Touch</h2>
                <p className="text-gray-500 mt-2">We appreciate your interest in CRTD</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src={call} alt="call" className="w-6  h-6" />
                        </div>
                        <div className="text-left text-sm">
                            <strong className="block text-gray-700">Customer Support</strong>
                            +91 98765 43210
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src={msg} alt="msg" className="w-6 h-6" />
                        </div>
                        <div className="text-left text-sm">
                            <strong className="block text-black">Email</strong>
                            contact@crtdtech.com
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src={location} alt="location" className="w-6 h-6" />
                        </div>
                        <div className="text-left text-sm">
                            <strong className="block text-gray-700">Address</strong>
                            Bangalore, India
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-7xl mx-auto bg-[#1E409D] p-8 rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-white mb-6">Business Connect Form</h3>
                <form>
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="fullName" className="text-sm font-medium mb-1">Full Name</label>
                            <input type="text" id="fullName" placeholder="Full Name" className="border outline-none  rounded px-3 py-2 text-sm" />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="businessEmail" className="text-sm font-medium mb-1">Business Email</label>
                            <input type="email" id="businessEmail" placeholder="Business Email" className="border outline-none rounded px-3 py-2 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="companyName" className="text-sm font-medium mb-1">Company Name</label>
                            <input type="text" id="companyName" placeholder="Company Name" className="border outline-none rounded px-3 py-2 text-sm" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-white">
                        <div className="flex flex-col">
                            <label htmlFor="services" className="text-sm outline-none text-white font-medium mb-1">Services Interested In</label>
                            <select id="services" className="border rounded px-3 py-2  text-sm">
                                <option className='text-black'>Select a service</option>
                                <option className='text-black'>Web Development</option>
                                <option className='text-black'>App Development</option>
                                <option className='text-black'>UI/UX Design</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="officeAddress" className="text-sm font-medium mb-1">Office Address</label>
                            <input type="text" id="officeAddress" placeholder="Office Address" className="border outline-none rounded px-3 py-2 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="developersNeeded" className="text-sm font-medium mb-1">Number of Developers Needed</label>
                            <input type="number" id="developersNeeded" placeholder="Number of Developers Needed" className="border outline-none rounded px-3 py-2 text-sm" />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mt-6 text-white">
                        <label htmlFor="message" className="text-sm font-medium mb-1 block">Subject or Message</label>
                        <textarea id="message" placeholder="Subject or Message" className="w-full border outline-none rounded px-3 py-2 text-sm h-28"></textarea>
                    </div>

                    <button type="submit" className="mt-6 bg-blue-600  outline-none text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BusinessConnectForm;

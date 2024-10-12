import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Stanch Car Rentals</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Test Drives</h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline"></a>
                </li>
                <li>
                  <a href="" className="hover:underline">Book for test drive</a>
                </li>
                <li>
                  <a href="" className="hover:underline">See Docs</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">FaceBook</a>
                </li>
                <li>
                  <a href="" className="hover:underline">YouTube</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">© {year} Stanch Private Solutions <a href="" className="hover:underline">™</a> All Rights Reserved.</span>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

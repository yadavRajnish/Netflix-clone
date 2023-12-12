import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-main text-white p-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Column 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Help Center</h2>
            <ul className="text-sm">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Account</li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Privacy</h2>
            <ul className="text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2023 Netflix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import { NavLink } from "react-router-dom";
import google from "../Image/google.png";
import appstore from "../Image/apple.png";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import original from "../Image/origanal.png";
import retunPolicy from "../Image/return.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 uppercase text-sm">
            Online Shopping
          </h3>
          <ul className="space-y-2">
            {[
              "Men",
              "Women",
              "Kids",
              "Home & Living",
              "Beauty",
              "Gift Cards",
              "Myntra Insider",
            ].map((item) => (
              <li key={item}>
                <NavLink
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 uppercase text-sm">
            Customer Policies
          </h3>
          <ul className="space-y-2">
            {[
              "Contact Us",
              "FAQ",
              "T&C",
              "Terms Of Use",
              "Track Orders",
              "Shipping",
              "Cancellation",
              "Returns",
              "Privacy policy",
              "Grievance Redressal",
            ].map((item) => (
              <li key={item}>
                <NavLink
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 uppercase text-sm">
            Experience Myntra App
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <NavLink href="https://play.google.com/store">
                <img
                  src={google}
                  alt="Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </NavLink>
              <NavLink href="https://apps.apple.com">
                <img
                  src={appstore}
                  alt="App Store"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </NavLink>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-gray-800 uppercase text-sm">
              Keep in touch
            </h3>
            <div className="flex space-x-4 mt-3">
              {[CiFacebook, FaTwitter, IoLogoYoutube, IoLogoInstagram].map(
                (Icon, index) => (
                  <NavLink
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Icon className="h-5 w-5" />
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full border p-2">
              <img
                src={original}
                alt="Original guarantee"
                width={30}
                height={30}
                className="h-6 w-6"
              />
            </div>
            <div>
              <p className="font-bold text-gray-800">100% ORIGINAL</p>
              <p className="text-sm text-gray-600">
                guarantee for all products at myntra.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full border p-2">
              <img
                src={retunPolicy}
                alt="Return policy"
                width={30}
                height={30}
                className="h-6 w-6"
              />
            </div>
            <div>
              <p className="font-bold text-gray-800">Return within 14 Days</p>
              <p className="text-sm text-gray-600">of receiving your order</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6">
          <h3 className="font-bold text-gray-800 uppercase text-sm mb-4">
            Useful Links
          </h3>
          <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
            {[
              "Blog",
              "Careers",
              "Site Map",
              "Corporate Information",
              "Whitehat",
              "Cleartrip",
            ].map((item) => (
              <li key={item}>
                <NavLink href="#" className="hover:text-gray-900">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

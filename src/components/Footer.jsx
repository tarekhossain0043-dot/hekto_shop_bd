import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import EmailBar from "./EmailBar";
import Footer_Bottom from "./Footer_Bottom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#EEEFFB] text-[#8A8FB9] text-[16px] font-lato font-normal pt-22.5 pb-22.5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-10">
            {/* left area */}
            <div className="flex flex-col gap-5">
              <Link to="/">
                <span className="text-[34px] font-bold text-secondary font-josefin capitalize hover:text-primary transition-all duration-300 ease-in-out">
                  hekto
                </span>
              </Link>
              <EmailBar />
              <div>
                <p className="text-sm font-medium text-[#8A8FB9] capitalize mb-2.5">
                  Contact Info
                </p>
                <p className="text-sm font-medium text-[#8A8FB9] capitalize mb-0">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>
            {/* right area */}
            <div className="grid lg:grid-cols-[4fr_4fr_4fr] md:grid-cols-[6fr_6fr] grid-cols-1 gap-10">
              <div>
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Catagories
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/laptops">Laptops & Computers</Link>
                  </li>
                  <li>
                    <Link to="/Cameras&Photography">Cameras & Photography</Link>
                  </li>
                  <li>
                    <Link to="/SmartPhones&Tablets">
                      Smart Phones & Tablets
                    </Link>
                  </li>
                  <li>
                    <Link to="/VideoGames&Consoles">
                      Video Games & Consoles
                    </Link>
                  </li>
                  <li>
                    <Link to="/WaterproofHeadphones">
                      Waterproof Headphones
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Customer Care
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/MyAccount">My Account</Link>
                  </li>
                  <li>
                    <Link to="/Discount">Discount</Link>
                  </li>
                  <li>
                    <Link to="/Returns">Returns</Link>
                  </li>
                  <li>
                    <Link to="/OrdersHistory">Orders History</Link>
                  </li>
                  <li>
                    <Link to="/OrderTracking">Order Tracking</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Pages
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Cameras&BrowsetheShop">Browse the Shop</Link>
                  </li>
                  <li>
                    <Link to="/category&tablets">Category</Link>
                  </li>
                  <li>
                    <Link to="/pre-puiltpages">Pre-Built Pages</Link>
                  </li>
                  <li>
                    <Link to="/WaterproofHeadphones">
                      Visual Composer Elements
                    </Link>
                  </li>
                  <li>
                    <Link to="/WooCommercePages">WooCommerce Pages</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_Bottom />
    </>
  );
};

export default Footer;

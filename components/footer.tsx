"use client"
import {
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function FooterSection() {
  return (
    <footer className="bg-[#e7f2ff] rounded-3xl max-w-7xl  mx-auto my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8  pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight mb-4">
            Stand out instead of just surviving with your brand. <br /> Join us on your journey to Amazon
            success.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end justify-between">
            <div className="text-right mb-6">
              <p className="text-sm mb-1">
              349 B area HussaibAbad, Kala Board, Malir, Karachi
              </p>
              <p className="text-lg font-medium">+923021599403</p>
            </div>
          <Button text="GET STARTED" href="#about" type="button" showArrow />
          </div>
        </div>

        {/* Divider with curve */}
        <div className="relative h-px my-12 md:my-20">
          <Image
            width={800}
            height={100}
            alt="img"
            className="w-full"
            src={"/border-center.svg"}
          />
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-3xl p-10 mb-12">
          <h3 className="font-bold uppercase mb-8">OUR PARTNERS</h3>
          <div className="flex flex-wrap gap-8 justify-between">
            <div className="grayscale opacity-80 hover:opacity-100 transition-opacity">
              <GoogleCloudPartner />
            </div>
            <div className="grayscale opacity-80 hover:opacity-100 transition-opacity">
              <MetaBusinessPartner />
            </div>
            <div className="grayscale opacity-80 hover:opacity-100 transition-opacity">
              <GooglePartner />
            </div>
            <div className="grayscale opacity-80 hover:opacity-100 transition-opacity">
              <ShopifyPartner />
            </div>
            <div className="grayscale opacity-80 hover:opacity-100 transition-opacity">
              <TikTokPartner />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex hidden flex-wrap justify-center gap-8 mb-16">
          <a href="#" className="text-sm hover:underline">
            About
          </a>
          <a href="#" className="text-sm hover:underline">
            Blog
          </a>
          <a href="#" className="text-sm hover:underline">
            Careers
          </a>
          <a href="#" className="text-sm hover:underline">
            Team
          </a>
          <a href="#" className="text-sm hover:underline">
            Success Stories
          </a>
          <a href="#" className="text-sm hover:underline">
            Awards
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © 2025 FivePerks. All rights reserved
            </p>
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Partner Logo Components (keep the same as before)
function GoogleCloudPartner() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 11L20 6L12 1L4 6L12 11Z" fill="#000000" />
        <path
          d="M4 6V16L12 21L20 16V6L12 11L4 6Z"
          fill="#000000"
          fillOpacity="0.7"
        />
      </svg>
      <div>
        <div className="text-xs">Google Cloud</div>
        <div className="text-sm font-medium">Partner</div>
      </div>
    </div>
  );
}

function MetaBusinessPartner() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
          fill="#000000"
        />
        <path
          d="M15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12Z"
          fill="white"
        />
      </svg>
      <div>
        <div className="text-xs">Meta Business</div>
        <div className="text-sm font-medium">Partners</div>
      </div>
    </div>
  );
}

function GooglePartner() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 11L20 6L12 1L4 6L12 11Z" fill="#000000" />
        <path
          d="M4 6V16L12 21L20 16V6L12 11L4 6Z"
          fill="#000000"
          fillOpacity="0.7"
        />
      </svg>
      <div>
        <div className="text-xs">Google</div>
        <div className="text-sm font-medium">Partner</div>
      </div>
    </div>
  );
}

function ShopifyPartner() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5 3L14.5 7H13L14 3H15.5Z" fill="#000000" />
        <path
          d="M19 7.5C18.5 7 17.5 6.5 16.5 6.5C15.5 6.5 13 7 13 9C13 11 17 11 17 13C17 15 14 14.5 13 14C12 13.5 11.5 13 11.5 13L10.5 15C10.5 15 11.5 16 13 16.5C14.5 17 16 16.5 17 15.5C18 14.5 18.5 12 16.5 10.5C14.5 9 13.5 9.5 13.5 8.5C13.5 7.5 15 7.5 16 8C17 8.5 17.5 9 17.5 9L19 7.5Z"
          fill="#000000"
        />
        <path d="M11 16.5L13 9H10L8 16.5H11Z" fill="#000000" />
        <path d="M7 9L5 16.5H8L10 9H7Z" fill="#000000" />
      </svg>
      <div>
        <div className="text-xs">shopify</div>
        <div className="text-sm font-medium">partner</div>
      </div>
    </div>
  );
}

function TikTokPartner() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.589 6.686C19.3 6.236 19.1 5.741 19 5.22C18.9 4.7 18.9 4.2 18.9 3.7H15.2V15.4C15.2 15.9 15.1 16.4 14.9 16.8C14.7 17.2 14.4 17.6 14.1 17.9C13.8 18.2 13.4 18.4 13 18.5C12.6 18.6 12.1 18.7 11.7 18.6C11.3 18.5 10.9 18.4 10.5 18.2C10.1 18 9.79999 17.7 9.49999 17.4C9.19999 17.1 9.09999 16.7 8.89999 16.3C8.79999 15.9 8.79999 15.4 8.79999 15C8.89999 14.6 8.99999 14.2 9.19999 13.8C9.39999 13.4 9.69999 13.1 9.99999 12.8C10.3 12.5 10.7 12.3 11.1 12.2C11.5 12.1 11.9 12.1 12.3 12.2V8.5C11.9 8.4 11.4 8.4 11 8.5C10.6 8.6 10.1 8.7 9.69999 8.9C9.29999 9.1 8.89999 9.3 8.49999 9.6C8.09999 9.9 7.79999 10.2 7.49999 10.6C7.19999 11 6.99999 11.4 6.79999 11.8C6.59999 12.2 6.49999 12.7 6.39999 13.1C6.29999 13.6 6.29999 14.1 6.29999 14.6C6.29999 15.1 6.39999 15.6 6.49999 16.1C6.59999 16.6 6.79999 17 6.99999 17.5C7.19999 17.9 7.49999 18.3 7.79999 18.6C8.09999 18.9 8.49999 19.2 8.89999 19.5C9.29999 19.8 9.69999 20 10.2 20.2C10.6 20.4 11.1 20.5 11.6 20.6C12.1 20.7 12.6 20.7 13.1 20.7C13.6 20.7 14.1 20.6 14.6 20.5C15.1 20.4 15.5 20.2 16 20C16.4 19.8 16.8 19.5 17.2 19.2C17.6 18.9 17.9 18.6 18.2 18.2C18.5 17.8 18.7 17.4 18.9 16.9C19.1 16.4 19.2 16 19.3 15.5C19.4 15 19.4 14.5 19.4 14V9.5C19.6 9.7 19.8 9.8 20 10C20.2 10.2 20.4 10.3 20.6 10.5C20.8 10.7 21.1 10.8 21.3 10.9C21.5 11 21.8 11.1 22 11.2V7.5C21.4 7.5 20.8 7.3 20.3 7C20.1 6.9 19.8 6.8 19.6 6.7"
          fill="#000000"
        />
      </svg>
      <div>
        <div className="text-xs">TikTok:</div>
        <div className="text-sm font-medium">Marketing Partner</div>
      </div>
    </div>
  );
}
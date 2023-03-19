import React from 'react';
import { FaMedium, FaTelegram } from 'react-icons/fa';
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="flex justify-center items-end gap-4 border-t-2 border-[#fff] w-full py-6 font-[500] text-[#fff] md:text-[16px] text-[10px] backdrop-opacity-10 backdrop-invert bg-[#000]/50 font-poppins">
      <a href="#" rel="noreferrer" target="_blank">
        <button className="rounded-full bg-[#05325B]/90 px-3 py-3">
          <FiTwitter />
        </button>
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <button className="rounded-full bg-[#05325B]/90 px-3 py-3">
          <FaTelegram />
        </button>
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <button className="rounded-full bg-[#05325B]/90 px-3 py-3">
          <FaMedium />
        </button>
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <button className="rounded-full bg-[#05325B]/90 px-3 py-3">
          <FiYoutube />
        </button>
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <button className="rounded-full bg-[#05325B]/90 px-3 py-3">
          <FiInstagram />
        </button>
      </a>
    </div>
  );
}

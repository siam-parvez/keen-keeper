import Link from 'next/link';
import React from 'react';
import {
  FaInstagram as Instagram,
  FaFacebook as Facebook,
} from 'react-icons/fa';
import { FaXTwitter as XTwitter } from 'react-icons/fa6';
const Footer = () => {
  const socialData = [
    {
      label: 'Instagram',
      url: '#',
      icon: Instagram,
    },
    {
      label: 'Facebook',
      url: '#',
      icon: Facebook,
    },
    {
      label: 'X (Twitter)',
      url: '#',
      icon: XTwitter,
    },
  ];

  const legalLinksData = [
    {
      label: 'Privacy Policy',
      url: '#',
    },
    {
      label: 'Terms of Service',
      url: '#',
    },
    {
      label: 'Cookies',
      url: '#',
    },
  ];

  return (
    <footer className="flex flex-col gap-12 items-center justify-center bg-primary pt-16">
      <div className="text-center space-y-4 container mx-auto px-3">
        <h3 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-white">
          <span className="font-black">Keen</span>Keeper
        </h3>
        <p className="text-white text-xs md:text-base font-light tracking-wide">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="my-10">
          <h4 className="text-white mb-3">Social Links</h4>
          <div className="flex items-center justify-center w-full gap-4 mb-10">
            {socialData.map((item) => (
              <Link
                href={item.url}
                key={item.label}
                className="p-2 bg-white rounded-full size-8 md:size-10 hover:text-primary transition-colors"
              >
                <item.icon className="size-full" title={item.label} />
              </Link>
            ))}
          </div>
        </div>
        <div className="py-7 border-t border-white/10 text-white/50 flex flex-col md:flex-row md:justify-between text-xs md:text-base gap-3">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 items-center justify-center">
            {legalLinksData.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

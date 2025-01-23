import React from 'react'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

const links = [
  {
    href: "https://discord.gg/MvRFh7qMvA", icon: <FaDiscord />
  },
  {
    href: "https://x.com/zeltrax15", icon: <FaXTwitter />
  },
  {
    href: "https://github.com/SwapnilBhattacharya05", icon: <FaGithub />
  },
  {
    href: "https://www.instagram.com/iam___swapnil/", icon: <FaInstagram />
  },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4  md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; Nova 2025. All rights reserved
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {
            links.map((link) => (
              <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                {link.icon}
              </a>
            ))}
        </div>

        <div>
          <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right'>
            Privacy Policy
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
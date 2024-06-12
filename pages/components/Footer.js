import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

function Footer() {
  const router = useRouter();

  const isBlogActive = router.pathname.startsWith('/blog');
  return (
    <>
      <div id='footer-section' className='w-full grid place-items-center pt-[100px]'>
        <footer className='w-full grid place-items-center'>
          <div className='bg-[#E9E9E9] w-full h-[1px]'></div>
          <div id='footer-links'>
            <ul className='list-none flex flex-col md:flex-row justify-center'>
              <li className={`${isBlogActive ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}><Link href="/blog">Blogs</Link></li>
              <li className={`${router.pathname === "/successstories" ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}><Link href="/successstories" >Success  Stories</Link></li>
              <li className={`${router.pathname === "/faq" ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}> <Link href="/faq">FAQ </Link></li>
              <li className={`${router.pathname === "/career" ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}><Link href="/career">Career </Link></li>
              <li className={`${router.pathname === "/termsofuse" ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}><Link href="/termsofuse">Terms of Use </Link></li>
              <li className={`${router.pathname === "/privacypolicy" ? "text-[#0F52BA]" : "dark:text-[#FFF] hover:text-[#0F52BA] cursor-pointer"}`}><Link href="/privacypolicy">Privacy Policy</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer;
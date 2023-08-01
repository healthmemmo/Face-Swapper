import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook
import Image from 'next/image';

export default function Header() {
  const router = useRouter(); // Get the router object

  const links = [
    { href: '/', text: 'Home', colorClass: 'text-black' },
    { href: '/upload', text: 'Upload', colorClass: 'text-black' },
  ];

  return (
    <nav className="border-gray-200 bg-gray-100 px-4 py-2.5 dark:bg-gray-800 lg:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-3" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FaceSwapper
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <p
                className={`bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 
                              dark:bg-primary-600 dark:hover:bg-primary-700 
                             dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2  
                             focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5 ${link.colorClass}
                             ${router.pathname === link.href ? 'font-bold' : 'font-semibold'}`}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

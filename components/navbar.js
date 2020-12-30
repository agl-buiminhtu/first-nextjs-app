import Link from 'next/link';

const Navbar = () => {
   return (
      <nav>
         <style jsx>{`
            nav {
               display: flex;
               justify-content: space-between;
               padding: 0 10px;
            }
            .navbar {
               display: flex;
            }
            .navbar li {
               text-decoration: none;
               font-size: 1rem;
               margin-left: 50px;
            }
         `}</style>
         <h1 className='logo'>Welcome to ...! Just a logo 🤷</h1>
         <ul className='navbar'>
            <li>
               <Link href='/'>
                  <a>Home</a>
               </Link>
            </li>
            <li>
               <Link href='/about'>
                  <a>About</a>
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;

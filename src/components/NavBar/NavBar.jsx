// import React, { useEffect, useRef, useState } from 'react'
// import "./NavBarStyle.css"
// import { TiThMenu } from "react-icons/ti";
// import { Link } from 'react-router-dom';
// export const NavBar = () => {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//    const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
//    const dropdownRef = useRef(null);

//   const handleSolutionsClick = () => {
//     setShowSolutionsDropdown(!showSolutionsDropdown);
//   };
 
//   const handleClickOutsideDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowSolutionsDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutsideDropdown);
//     return () => {
//       document.removeEventListener('click', handleClickOutsideDropdown);
//     };
//   }, []);
//   useEffect(() => {
//     document.addEventListener('scroll', () => {
//       setShowSolutionsDropdown(false);
//     });
//     return () => {
//       document.removeEventListener('scroll', () => {
//         setShowSolutionsDropdown(false);
//       });
//     };
//   }, []);

//     return (
//     <nav className="navigation">
//         <Link to="/" className="brand-name">
//       LOGO  
      
//     </Link>
//     <button className="hamburger" 
//      onClick={() => {
//         setIsNavExpanded(!isNavExpanded);
//       }}>
//      <TiThMenu className='menuIcon'/>
//     </button>
//     <div
//         className={
//           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//         }
//       >
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={showSolutionsDropdown ? 'dropdown-visible' : ''}
//             onClick={handleSolutionsClick}
//             ref={dropdownRef}
//           >
//             <Link to="/">Solutions</Link>
//             {showSolutionsDropdown && (
//               <ul className="dropdown">
//                 <li>
//                   <Link to="/solution1">Solution 1</Link>
//                 </li>
//                 <li>
//                   <Link to="/solution2">Solution 2</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li
//             className={showSolutionsDropdown ? 'dropdown-visible' : ''}
//             onClick={handleSolutionsClick}
//             ref={dropdownRef}
//           >
//             <Link to="/">Services</Link>
//             {showSolutionsDropdown && (
//               <ul className="dropdown">
//                 <li>
//                   <Link to="/solution1">Services 1</Link>
//                 </li>
//                 <li>
//                   <Link to="/solution2">Services 2</Link>
//                 </li>
//                 <li>
//                   <Link to="/solution2">Services 2</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link to="/">Integrations</Link>
//           </li>
//           <li>
//             <Link to="/">About Us</Link>
//           </li>
//           <li>
//             <Link to="/">Contact</Link>
//           </li>
//         </ul>
//       </div>
//   </nav>
//   )
// }

import React, { useEffect, useRef, useState } from 'react';
import "./NavBarStyle.css"
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const solutionsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const handleSolutionsClick = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
    setShowServicesDropdown(false);
  };

  const handleServicesClick = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowSolutionsDropdown(false);
  };

  const handleClickOutsideDropdowns = (event) => {
    if (
      (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) &&
      (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target))
    ) {
      setShowSolutionsDropdown(false);
      setShowServicesDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideDropdowns);
    return () => {
      document.removeEventListener('click', handleClickOutsideDropdowns);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setShowSolutionsDropdown(false);
      setShowServicesDropdown(false);
    });
    return () => {
      document.removeEventListener('scroll', () => {
        setShowSolutionsDropdown(false);
        setShowServicesDropdown(false);
      });
    };
  }, []);

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        LOGO
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <TiThMenu className='menuIcon'/>
      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
        <li>
             <Link to="/">Home</Link>
         </li>
          <li
            className={showSolutionsDropdown ? 'dropdown-visible' : ''}
            onClick={handleSolutionsClick}
            ref={solutionsDropdownRef}
          >
            <Link to="/">Solutions</Link>
            {showSolutionsDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/solution1">Solution 1</Link>
                </li>
                <li>
                  <Link to="/solution2">Solution 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={showServicesDropdown ? 'dropdown-visible' : ''}
            onClick={handleServicesClick}
            ref={servicesDropdownRef}
          >
            <Link to="/">Services</Link>
            {showServicesDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/service1">Services 1</Link>
                </li>
                <li>
                  <Link to="/service2">Services 2</Link>
                </li>
                <li>
                  <Link to="/service3">Services 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
           <Link to="/">Integrations</Link>
           </li>
           <li>
             <Link to="/about">About Us</Link>
           </li>
           <li>
             <Link to="/">Contact</Link>
           </li>
          {/* <li> <button className='btnT'>Try it</button></li> */}
        </ul>
       
      </div>
     
    </nav>
  );
}

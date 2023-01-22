import React, { useState } from "react";
import { Styled } from "./HeaderStyles";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Products",
    href: "/products",
    dropdown: [
      { title: "Product 1", href: "/products/1" },
      { title: "Product 2", href: "/products/2" },
      { title: "Product 3", href: "/products/3" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownMouseEnter = (index) => {
    setActiveDropdown(activeDropdown);
  };

  return (
    <Styled>
      <header>
        <img src="" alt="" className="logo" />
        <nav>
          {navItems.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="item">
                <a
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </a>
                {activeDropdown === index && item.dropdown && (
                  <div
                    className="dropdown-menu"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a href={dropdownItem.href} key={dropdownItem.title}>
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </nav>
      </header>
    </Styled>
  );
};

export default Header;

import React from "react"

interface NavbatitemProps {
    label: string;
}

const NavbarItem: React.FC<NavbatitemProps> = ({
    label
}) => {
  return (
      <div className="text-white hover:text-gray-300 cursor-pointer transition">
          {label}
    </div>
  )
}

export default NavbarItem
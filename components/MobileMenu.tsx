import React from 'react'

interface MobileMenuProps {
    isVisible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isVisible
}) => {
    if (!isVisible) {
        return null;
    }
  return (
      <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
          <div className='flex flex-col gap-4'>
              <div className='text-white text-center hover:underline px-3'>
                  Home
              </div>
              <div className='text-white text-center hover:underline px-3'>
                  Series
              </div>
              <div className='text-white text-center hover:underline px-3'>
                  Films
              </div>
              <div className='text-white text-center hover:underline px-3'>
                  New & Popular
              </div>
              <div className='text-white text-center hover:underline px-3'>
                  Browse by languages
              </div>
              
          </div>
    </div>
  )
}

export default MobileMenu
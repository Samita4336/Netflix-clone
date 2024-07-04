import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import React from 'react'
interface AccountMenuProps {
    isVisible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    isVisible
}) => {
    if (!isVisible) {
        return null;
    }
    const { data } = useCurrentUser();
  return (
      <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2'>
          <div className='flex flex-col gap-3'>
              <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                  <img src="/images/netflix-profile-pictures.jpg" alt="" className='w-6 rounded-md' />
                  <p className='text-white text-sm group-hover/item:underline'>{data?.name}</p>
                  
              </div>
              <hr className='border-gray-600 h-px my-4' />
              <div onClick={() => signOut()} className='px-3 text-center text-white'>
                  Sign out of Netflix
                  
              </div>
              
          </div>
    </div>
  )
}

export default AccountMenu
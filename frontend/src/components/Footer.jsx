import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              {/* ------------------ Left Section ---------------------------------- */}
              <div>
                  <img className='mb-5 w-40' src={assets.HealthHub_logo} alt="" />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>HealthHub is a comprehensive platform designed to simplify and enhance healthcare access, management, and delivery. It connects users with health resources, professionals, and personalized tools to promote better health outcomes. Whether you're tracking wellness goals, managing appointments, or accessing medical advice, HealthHub puts health in your hands.</p>
              </div>

              {/* ------------------ Center Section ---------------------------------- */}
              <div>
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                  </ul>
              </div>

              {/* ------------------ Right Section ---------------------------------- */}
              <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>8400119700</li>
                    <li>deepanshusingh20022004@gmail.com</li>
                  </ul>
              </div>
        </div>

        {/* ---------------- Copyright Text ---------------------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ HealthHub All Right Reserved.</p>
        </div>
    </div>
  )
}

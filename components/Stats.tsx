"use client";

import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className="w-full mt-">
        <div className="flex justify-center items-center h-full px-6 py-8 gap-4">

            <div className='flex flex-col items-center max-w-[312px] gap-4'>
                <div className='stats_number font-[family-name:var(--font-inter)]'>
                <CountUp start={400} end={463} /><span className='font-[family-name:var(--font-inter-tight)]'>k+</span> 
                </div>

                <p className='stats_text font-[family-name:var(--font-space-grotesk)]'>
                    Workouts logged and progress tracked every month
                </p>
            </div>

            <div className='divider'></div>

            <div className='flex flex-col items-center max-w-[312px]'>
                <div className='stats_number font-[family-name:var(--font-inter)]'>
                <CountUp start={100} end={163} /><span className='font-[family-name:var(--font-inter-tight)]'>k+</span> 
                </div>

                <p className='stats_text font-[family-name:var(--font-space-grotesk)]'>
                Fitness enthusiasts connected through our platform
                </p>
            </div>

            <div className='divider'></div>

            <div className='flex flex-col items-center max-w-[312px]'>
                <div className='stats_number font-[family-name:var(--font-inter)]'>
                <CountUp start={-20} end={13} /><span className='font-[family-name:var(--font-inter-tight)]'>+</span> 
                </div>

                <p className='stats_text font-[family-name:var(--font-space-grotesk)]'>
                Countries where GymFluencer is making an impact
                </p>
            </div>

        </div>
    </div>
  )
}

export default Stats
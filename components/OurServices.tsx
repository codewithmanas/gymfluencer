import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className='w-full mt-8'>
        <div className='flex flex-col items-center py-8'>
            <div className='flex flex-col items-center gap-4  max-w-[516px]'>
                <h1 className='text-[#EB0000] font-[family-name:var(--font-orbitron)] text-4xl font-black uppercase'>Our Services</h1>
                <p className='text-[20px] text-center text-[#DCDCDC] font-normal leading-150 font-[family-name:var(--font-space-grotesk)]'>GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.</p> 
            </div>


            <div className='w-full grid grid-cols-5 mt-16'>

                    <div className='relative h-[528px] w-full overflow-hidden cursor-pointer flex items-center justify-center transition-transform duration-400 group'>
                        <Image 
                            src="/assets/images/service1.png" 
                            alt="service one" 
                            width={100} 
                            height={100}
                            unoptimized
                            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.09]"
                        />
                        <div className='text-[#DCDCDC] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>TRACK</div>
                    </div>

                    <div className='relative h-[528px] w-full overflow-hidden cursor-pointer flex items-center justify-center transition-transform duration-400 group'>
                    <Image 
                            src="/assets/images/asset9.png" 
                            alt="service two" 
                            width={100} 
                            height={100}
                            unoptimized
                            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.09]"
                        />
                        <div className='text-[#DCDCDC] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>ANALYZE</div>
                    </div>

                    <div className='relative h-[528px] w-full overflow-hidden cursor-pointer flex items-center justify-center transition-transform duration-400 group'>
                    <Image 
                            src="/assets/images/asset10.png" 
                            alt="service two" 
                            width={100} 
                            height={100}
                            unoptimized
                            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.09]"
                        />

                        <div className='text-[#DCDCDC] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>TRAIN</div>
                    </div>

                    <div className='relative h-[528px] w-full overflow-hidden cursor-pointer flex items-center justify-center transition-transform duration-400 group'>
                    <Image 
                            src="/assets/images/asset11.png" 
                            alt="service two" 
                            width={100} 
                            height={100}
                            unoptimized
                            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.09]"
                        />

                        <div className='text-[#DCDCDC] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>CONNECT</div>
                    </div>

                    <div className='relative h-[528px] w-full overflow-hidden cursor-pointer flex items-center justify-center transition-transform duration-400 group'>

                    <Image 
                            src="/assets/images/asset12.png" 
                            alt="service two" 
                            width={100} 
                            height={100}
                            unoptimized
                            className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.09]"
                        />
                        <div className='text-[#DCDCDC] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>CHALLENGE</div>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default OurServices
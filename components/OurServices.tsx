import React from 'react'

const OurServices = () => {
  return (
    <div className='w-full mt-8'>
        <div className='flex flex-col items-center py-8'>
            <div className='flex flex-col items-center gap-4  max-w-[516px]'>
                <h1 className='text-[#EB0000] font-[family-name:var(--font-orbitron)] text-4xl font-black uppercase'>Our Services</h1>
                <p className='text-[20px] text-center text-[#DCDCDC] font-normal leading-150 font-[family-name:var(--font-space-grotesk)]'>GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.</p> 
            </div>


            <div className='w-full grid grid-cols-5 mt-16 grid-rows-1'>
                    <div className='inset-0 h-[500px] cursor-pointer flex items-center justify-center transition-transform duration-500 ease-in-out'
                        style={{
                            backgroundImage: "url('/assets/images/service1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className='text-[#DCDCDC] font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>TRACK</div>
                    </div>

                    <div className='h-[500px] cursor-pointer flex items-center justify-center'
                        style={{
                            backgroundImage: "url('/assets/images/asset9.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className='text-[#DCDCDC] font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>ANALYZE</div>
                    </div>
                    <div className='h-[500px] cursor-pointer flex items-center justify-center'
                        style={{
                            backgroundImage: "url('/assets/images/asset10.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className=' text-[#DCDCDC] font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>TRAIN</div>
                    </div>
                    <div className='h-[500px] cursor-pointer flex items-center justify-center'
                        style={{
                            backgroundImage: "url('/assets/images/asset11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className='text-[#DCDCDC] font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>CONNECT</div>
                    </div>
                    <div className='h-[500px] cursor-pointer flex items-center justify-center'
                        style={{
                            backgroundImage: "url('/assets/images/asset12.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className='text-[#DCDCDC] font-[family-name:var(--font-orbitron)] text-3xl font-black uppercase'>CHALLENGE</div>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default OurServices
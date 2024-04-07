'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HomePage() {
  const t = useTranslations('HomePage')


  return (
    <div>
      <div className='z-40 top-43' style={{position: "absolute", display: "flex", flexWrap: "wrap", width: "100%"}}>
        <div className="z-[1] w-[33%] h-full pl-[20%] pt-5 rounded-[50%] select-none">
          <div className='float-right'>
          <img src="booking.png" width={55} height={55} />
          <p className="leading-[1.6] m-0" style={{ fontSize: 28 }}>
            8.6/10
          </p>
          </div>
        </div>
        <div className="w-[33%] text-center middle select-none" style={{ height: "100%", width: "33%", zIndex: 1 }}>
          <p className="text-center d-flex justify-content-center align-items-center text-[500%] uppercase text-[#da3b3b] z-[1] leading-[1.6] m-0">
            KALA
          </p>
        </div>
        <div className=" z-[1] w-[33%] h-full pr-[20%] pt-5 rounded-[50%] select-none">
        <div className='float-left'>
          <img className="ikona" src="google.png" width={55} height={55} />
          <p className="leading-[1.6] m-0" style={{ fontSize: 28 }}>
            4.3/5
          </p>
        </div>
        </div>
      </div>
      <div className='absolute top-40 w-full h-1/5 bg-[#2a2a2a] z-[1] opacity-60'></div>
    <div style={{top: 0, left: 0, width: '100%', height: '100vh' }}>
      <img className='shadow-[inset_0px_-5px_20px_black] absolute w-full h-screen z-0 bg-cover bg-no-repeat bg-fixed brightness-[0.6] bg-[50%] object-cover' src="osr.jpg" alt="Logo Firmy KALA"/>
      </div>
    

    
    {t('helloWorld')}
    </div>
  )
}

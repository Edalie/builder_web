import React from 'react'

export default function Page() {
  return (
   <div>
     <div
      className="relative bg-cover bg-center bg-no-repeat p-20"
      style={{ background: "url('/background/first-bg.jpg')" }}
    >
      <div className="ml-16">
       
        <p className="text-yellow-400 text-4xl mb-4 shadow-black">
          Nous sommes des constructeurs
        </p>

       
        <div className="backdrop-blur-md px-4 py-9 mr-20 max-w-l shadow-lg">
          <p className="text-white text-5xl font-stretch-90% ">
            NOUS CONSTRUIRONS<br/>
            VOTRE RÊVE
          </p>
          </div>
        <div className="h-[6px] w-50 bg-yellow-400 my-10">
          <div className='absolute text-white text-xl p-5'>
          <p>
            Sample text. Lorem ipsum dolor sit amet, consectetur 
            <br/>adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </p>
          <button className='bg-amber-400  rounded-xl font-bold cursor-auto p-5 my-6 hover:bg-yellow-600'> NOTRE PORTFOLIO </button>
          <button className=' font-bold border-3 border-black rounded-xl cursor-auto hover:bg-white  text-black p-4 my-7 '>À PROPOS DE NOUS</button>
          </div>
        </div>
        

        
      </div>
    </div>
    <div>
         <p className='text-amber-300 left absolute'>BIENVENUE À</p>
        </div>
   </div>
  )
}


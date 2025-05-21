import React from 'react'

export default function Page() {
  return (
   <div className=''>
     <div
      className="bg-no-repeat bg-center bg-cover py-40"
      style={{ background: "url('/background/bg-n.jpg')" }}
    >
      <div className="flex flex-col font-bold ml-20 py-35 px-20">
       
        <p className="text-yellow-400 text-4xl p-4 ">
          Nous sommes des constructeurs
        </p>

       
        <div className=" px-4 py-5">
          <p className="text-white text-5xl font-stretch-90% ">
            NOUS CONSTRUIRONS<br/>
            VOTRE RÊVE
          </p>
         
        <div className="p-0.5 max-w-50 mt-9 bg-yellow-400 "><div/>
          <div className='absolute text-white text-xl  py-5'>
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
        </div>
        <div className='text-left bg-white shadow-black px-20 font-bold ml-20 py-35 '>
          <p className='text-3xl p-4 text-amber-300'>BIENVENUE À</p>
          <p className='text-4xl '>CONSTRUCTION ELVO</p>
           <p className="p-0.5 max-w-50 mt-6 bg-yellow-400 "></p>
           <p className='italic text-gray-400 mt-4 '>Nous sommes le leader avec 25 ans d'expérience<br/>
            sur le marché de la construction!</p> 
            <div className=' font-extralight ml-20 py-35 px-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Maecenas gravida cursus eleifend.
               Nullam ornare sapien quis vulputate cursus.Vivamus vel pellentesque purus, sed dignissim elit.Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem. 
               Vestibulum feugiat eros lorem, vitae faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis felis, vel luctus sapien nisi non orci.Ut laoreet ante tellus, vel hendrerit lorem tincidunt sed.Etiam rhoncus euismod velit ac rutrum.
               Donec porttitor turpis eu mi tempus facilisis.Maecenas id ullamcorper elit, quis tempus eni In dignissim dolor in accumsan tincidunt. Donec vel diam vitae risus elementum congue.
                 Cras varius, enim vitae condimentum mattis, erat lacus.
                 <button className='bg-amber-400 text-white rounded font-bold cursor-auto p-5 my-6 hover:bg-yellow-600'> LIRE LA SUITE
                  </button>
                  <div className="flex justify-center ">
               <img src="/background/bg-lok.jpg" alt="image 1" className="w-1/2  " />
               
               <img src="/background/bg-lop.jpg" alt="image 2" className="w-1/2 " />
              <img src="/background/bg-n.jpg" alt="image 3" className="w-1/2" />
                    </div>
                    <div className=' text-center shadow-black py-35'>
                      <p className='text-amber-300 text-3xl font-bold '>OFFRE SPÉCIALE</p>
                      <p className=' text-4xl  font-bold '>NOS MEILLEURS SERVICES</p>
                       <p className="p-0.5 mt-6  bg-yellow-400 "></p>
           <ul className='grid grid-cols-3 text-2xl p-20  mt-20'>
             <li className='items-center gab-3 font-bold  '>
           <img src="/icon/computer_13778255.png" alt="Planification" className="w-30  h-25" />
           CONCEPTION ET PLANIFICATION</li>
             <li className='flex items-center gap-3 p-20 font-bold   '>
           <img src="/icon/mechanic_items18208201.png" alt="Rénovation" className="w-30 h-25" />
           RÉNOVATION DE BÂTIMENT
           </li>
          <li className='flex items-center gap-3 p-20 font-bold  '>
           <img src="/icon/computer_13778255.png" alt="Intérieur" className="w-30  h-25" />
             DESIGN INTÉRIEUR
             </li>
                <li className='flex items-center gap-3 p-20  font-bold  '>
          <img src="/icon/mechanic_18208201.png" alt="Construction" className="w-30  h-25" />
         SERVICES DE CONSTRUCTION
          </li>
            <li className='flex items-center gap-3 p-20 font-bold  '>
            <img src="/icon/computer_13778255.png"alt="Documentation" className="w-30 h-25" />
             DOCUMENTATION
               </li>
               <li className='flex items-center gap-3 p-20 font-bold  '>
             <img src="/icon/mechanic_18208201.png" alt="Support" className="w-30 h-25" />
            SOUTIEN PROFESSIONNEL
            
             </li>
             </ul>
            </div>
           </div>
        </div>
        <div className= 'bg-black  pl-20  w-full p-20'>
         <p className='text-yellow-300 text-center  font-bold text-3xl'>PORTEFEUILLE </p>
         <p className='text-xl text-center text-white  font bold'>LES PROJETS RÉCENTS</p>
          <p className="p-0.5 max-w-50 mt-6  bg-yellow-400 "></p> 
          </div>
          <div className="flex justify-center bg-repeat">
               <img src="/background/im-bg(1).jpg" alt="image 1" className="w-1/3 h-20 bg-repeat-x " />
               
               <img src="/background/im-bg(2).jpg" alt="image 2" className="w-1/3" />
              
                   
        </div>
        
   </div>
  )
}


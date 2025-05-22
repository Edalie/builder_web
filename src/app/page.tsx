import React from "react";

export default function Page() {
  return (
    <div className="">
      <div
        className="bg-no-repeat bg-center bg-cover py-40"
        style={{ background: "url('/background/bg-n.jpg')" }}>
        <div className="font-bold ml-20 py-35 px-20">
          <p className="text-yellow-400 text-4xl p-4 ">
            Nous sommes des constructeurs
          </p>
          <div className=" px-4 py-5">
            <p className="text-white text-5xl font-stretch-90% ">
              NOUS CONSTRUIRONS
              <br />
              VOTRE RÊVE
            </p>

            <div className="p-0.5 max-w-50 mt-9 bg-yellow-400 ">
              <div />

              <div className="absolute text-white text-xl  py-5">
                <p>
                  Sample text. Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <button className="bg-amber-400  rounded-xl font-bold cursor-auto p-5 my-6 hover:bg-yellow-600">
                  {" "}
                  NOTRE PORTFOLIO{" "}
                </button>
                <button className=" font-bold border-3 border-black rounded-xl cursor-auto hover:bg-white  text-black p-4 my-7 ">
                  À PROPOS DE NOUS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="  bg-white ml-40 shadow-black font-bold ">
          <p className="text-3xl p-4 text-amber-300">BIENVENUE À</p>
          <p className="text-4xl ">CONSTRUCTION ELVO</p>
          <p className="p-0.5 max-w-50 mt-6 bg-yellow-400 "></p>
          <p className="italic text-gray-400 mt-4 ">
            Nous sommes le leader avec 25 ans d'expérience
            <br />
            sur le marché de la construction!
          </p>
        </div>
        <div className=" flex justify-center items-start gap-10 font-extralight">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            gravida cursus eleifend. Nullam ornare sapien quis vulputate
            cursus.Vivamus vel pellentesque purus, sed dignissim elit.Maecenas
            ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus.
            Phasellus ut cursus sem. Vestibulum feugiat eros lorem, vitae
            faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida,
            sapien dui iaculis felis, vel luctus sapien nisi non orci.Ut laoreet
            ante tellus, vel hendrerit lorem tincidunt sed.Etiam rhoncus euismod
            velit ac rutrum. Donec porttitor turpis eu mi tempus
            facilisis.Maecenas id ullamcorper elit, quis tempus eni In dignissim
            dolor in accumsan tincidunt. Donec vel diam vitae risus elementum
            congue. Cras varius, enim vitae condimentum mattis, erat lacus.
          </p>
        </div>
        <button className="bg-amber-400 text-white rounded font-bold cursor-auto p-5 my-6 hover:bg-yellow-600">
          {" "}
          LIRE LA SUITE
        </button>
      </div>
      <div className="flex justify-center ">
        <img src="/background/bg-lok.jpg" alt="image 1" className="w-1/2 object-cover h-100 " />
        <img src="/background/bg-lop.jpg" alt="image 2" className="w-1/2 object-cover  h-100 " />
        <img src="/background/bg-n.jpg" alt="image 3" className="w-1/2  object-cover h-100" />
      </div>
      <div className=" text-center shadow-black py-35">
        <p className="text-amber-300 text-3xl font-bold ">OFFRE SPÉCIALE</p>
        <p className=" text-4xl  font-bold ">NOS MEILLEURS SERVICES</p>
        <p className="p-0.5 mt-6  bg-yellow-400 "></p>
        <ul className="grid grid-cols-3 text-2xl p-20  ml-10 text-left mt-20">
          <li className=" flex items-center gab-3   ">
            <img
              src="/icon/computer_13778255.png"
              alt="Planification"
              className="w-30  border-2 border-amber-400   rounded-2xl h-25"
            />
            <div className="">
              <h1 className="font-bold  "> CONCEPTION ET PLANIFICATION</h1>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
          <li className="flex items-center gap-3 p-20   ">
            <img
              src="/icon/mechanic_18208201.png"
              alt="Rénovation"
              className="w-30 border-2 rounded-2xl border-amber-400 h-25"
            /><div>
              <h1 className="font-bold ">  RÉNOVATION DE BÂTIMENT</h1>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           
          </li>
          <li className="flex items-center gap-3 p-20   ">
            <img
              src="/icon/computer_13778255.png"
              alt="Intérieur"
              className="w-30 border-2 rounded-2xl border-amber-400  h-25"
            />
            <div>
              <h2 className="font-bold  ">   DESIGN INTÉRIEUR</h2>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </li>
          <li className="flex items-center gap-3 p-20    ">
            <img
              src="/icon/mechanic_18208201.png"
              alt="Construction"
              className="w-30 border-2 rounded-2xl border-amber-400  h-25"
            /><div>
              <h3 className="font-bold  ">   SERVICES DE CONSTRUCTION</h3>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
           
          </li>
          <li className="flex items-center gap-3 p-20 font-bold  ">
            <img
              src="/icon/computer_13778255.png"
              alt="Documentation"
              className="w-30  border-2 rounded-2xl border-amber-400  h-25"
            /><div>
              <h4 className="font-bold  ">    DOCUMENTATION</h4>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          
          </li>
          <li className="flex justify-center gap-3 p-20   ">
            <img
              src="/icon/mechanic_18208201.png"
              alt="Support"
              className="w-30 border-2 rounded-2xl border-amber-400  h-25"
            />
            <div>
              <h5 className="font-bold  "> SOUTIEN PROFESSIONNEL</h5>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          
          </li>
        </ul>
      </div>
      <div>
      <div className="bg-black pl-20  w-full p-20">
        <p className="text-yellow-300 text-center text-xl">
          PORTEFEUILLE{" "}
        </p>
        <p className="text-3xl text-center text-white  font bold">
          LES PROJETS RÉCENTS
        </p>
        <p className="p-0.5 max-w-50  center bg-yellow-400 "></p>
      </div>
      </div>
      <div className="flex flex-raw  ">
        <img
          src="/background/im-bg1.jpg"
          alt="image 1"
          className="  h-100 w-1/2"
        /> 
         <img
          src="/background/im-bg2.jpg"
          alt="image 2"
          className=" h-100 w-1/2 "
        />
         <img
          src="/background/im-bg1.jpg"
          alt="image 3"
          className=" h-100 w-1/2 "
        /></div>
        <div className="flex flex-raw  relative">
       <img
          src="/background/im-bg2.jpg"
          alt="image 2"
          className=" h-100 w-1/2 "
        /> 
        <img
          src="/background/im-bg1.jpg"
          alt="image 3"
          className=" h-100 w-1/2 "
        /> 
        <img
          src="/background/im-bg2.jpg"
          alt="image 2"
          className=" h-100 w-1/2 "
        />
      </div>
        <div className="relative justify-center">
         <img
          src="/background/map-bg.jpg"
          alt="image map "
          className=" w-auto h-100  "/> 
          </div>
        <div className=" ">
          <h1 className="font-bold text-2xl flex flex-row text-yellow-400">CONSTRUCTION ELVO</h1>
          <h1 className="font-bold  text-black text-4xl">LA MEILLEURE ÉQUIPE MONDIALE</h1>
           <h1 className="p-0.5 max-w-50 mt-6  bg-yellow-400 "></h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. 
            Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit.
             Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem.</p>
             <button className="bg-amber-400 text-white rounded font-bold cursor-auto p-5 my-6 hover:bg-yellow-600">
            LIRE LA SUITE
        </button>
         </div>
        <div  className="relative justify-center">
         <img
          src="/background/br-bg.jpg"
          alt="image map "
          className=" w-full h-96 object-cover"/> 
          <div className= "absolute inset-0 flex flex-col items-center justify-center ">
         <h1 className="font-bold text-3xl text-yellow-300">650</h1>
          <p className="text-grey ">Clients satisfaits</p> 
         
          <p className="p-0.5 max-w-50  bg-yellow-400 "></p>
          </div>
         </div>
         <div className="bg-black pl-20  w-full p-20">
        <p className="text-yellow-300 text-center text-xl">
          PAS À PAS{" "}
        </p>
        <p className="text-3xl text-center text-black text-white  font bold">
          COMMENT ÇA MARCHE
        </p>
        <p className="p-0.5 max-w-50  center bg-yellow-400 "></p>
      </div>
        </div>
        


       
      
  );
}

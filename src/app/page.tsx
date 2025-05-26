import { Didact_Gothic } from "next/font/google";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <div
        className="bg-no-repeat bg-center bg-cover py-40"
        style={{ background: "url('/background/bg-n.jpg')" }}
      >
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
        <div className="  bg-white flex flex-col justify-center ml-40 shadow-black font-bold ">
          <p className="text-3xl p-4 text-amber-300">BIENVENUE À</p>
          <p className="text-4xl ">CONSTRUCTION ELVO</p>
          <p className="p-0.5 max-w-50 mt-6 bg-yellow-400 "></p>
          <p className="italic text-gray-400 mt-4 ">
            Nous sommes le leader avec 25 ans d'expérience
            <br />
            sur le marché de la construction!
          </p>
        </div>
        <div className=" flex flex-col justify-center items-start gap-10 font-extralight">
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
            dolor in accumsan tincidunt. Donec vel diam vitae risus
            elementumpush congue. Cras varius, enim vitae condimentum mattis,
            erat lacus.
          </p>
       
        <button className="bg-amber-400 text-white rounded font-bold cursor-auto p-5 my-6 hover:bg-yellow-600">
          {" "}
          LIRE LA SUITE
        </button> </div>
      </div>
      <div className="flex justify-center ">
        <img
          src="/background/bg-lok.jpg"
          alt="image 1"
          className="w-1/2 object-cover h-100 "
        />
        <img
          src="/background/bg-lop.jpg"
          alt="image 2"
          className="w-1/2 object-cover  h-100 "
        />
        <img
          src="/background/bg-n.jpg"
          alt="image 3"
          className="w-1/2  object-cover h-100"
        />
      </div>
      <div className=" text-center flex flex-col items-center  shadow-black py-35">
        <p className="text-amber-300 text-3xl font-bold ">OFFRE SPÉCIALE</p>
        <p className=" text-4xl p-3 font-bold ">NOS MEILLEURS SERVICES</p>
        <p className="p-0.5 w-50 bg-yellow-400 "></p>
        <ul className="grid grid-cols-3 text-2xl p-20  ml-10 text-left mt-20">
          <li className=" flex items-center gab-3   ">
            <img
              src="/icon/computer_13778255.png"
              alt="Planification"
              className="w-30  border-2 border-amber-400 rounded-2xl h-25"
            />
            <div className="">
              <h1 className="font-bold  "> CONCEPTION ET PLANIFICATION</h1>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3 p-20   ">
            <img
              src="/icon/mechanic_18208201.png"
              alt="Rénovation"
              className="w-30 border-2 rounded-2xl border-amber-400 h-25"
            />
            <div>
              <h1 className="font-bold "> RÉNOVATION DE BÂTIMENT</h1>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3 p-20   ">
            <img
              src="/icon/computer_13778255.png"
              alt="Intérieur"
              className="w-30 border-2 rounded-2xl border-amber-400  h-25"
            />
            <div>
              <h2 className="font-bold  "> DESIGN INTÉRIEUR</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3 p-20    ">
            <img
              src="/icon/mechanic_18208201.png"
              alt="Construction"
              className="w-30 border-2 rounded-2xl border-amber-400  h-25"
            />
            <div>
              <h3 className="font-bold  "> SERVICES DE CONSTRUCTION</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3 p-20 font-bold  ">
            <img
              src="/icon/computer_13778255.png"
              alt="Documentation"
              className="w-30  border-2 rounded-2xl border-amber-400  h-25"
            />
            <div>
              <h4 className="font-bold  "> DOCUMENTATION</h4>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
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
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="bg-black pl-20 flex flex-col items-center w-full p-20">
          <p className="text-yellow-300 text-center text-xl">PORTEFEUILLE </p>
          <p className="text-3xl text-center text-white  font bold">
            LES PROJETS RÉCENTS
          </p>
          <p className="p-0.5 w-50  bg-yellow-400 "></p>
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
        />
      </div>
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
      <div className="items-center">
        <img
          src="/background/map-bg.jpg"
          alt="image map "
          className=" w-auto h-100  "
        />
      </div>
      <div>
      <div className=" flex flex-col items-center ">
        <h1
          className="font-bold text-2xl text-center
         text-yellow-400"
        >
          CONSTRUCTION ELVO
        </h1>
        <h1 className="font-bold p-6 text-black text-4xl">
          LA MEILLEURE ÉQUIPE MONDIALE
        </h1>
        <h1 className="p-0.5 w-50  bg-yellow-400 "></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus.
          Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue
          metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus
          ut cursus sem.
        </p>
    
      
        <button className="bg-amber-400 text-white rounded font-bold cursor-auto p-5 my-6 hover:bg-yellow-600">
          LIRE LA SUITE
        </button>   
         </div>
      
      </div>
      <div className="flex flex-row items-center h-[500px] bg-cover bg-center bg-[url('/background/br-bg.jpg')]">
      </div>
        <div className="flex flex-row mt-20 p-50 justify-center ">
          <div>
            <h1 className="font-bold text-3xl  text-yellow-300">
              650
            </h1>
            <p className="text-grey space-x-100 ">Clients satisfaits</p>
              <p className="p-0.5 w-50 flex flex-col bg-yellow-400 "></p>
          </div>

          <div>
            <h1 className="font-bold text-3xl a flex flex-row space-x-3 text-yellow-300">
              2 500
            </h1>
            <p className="text-grey ">Projets achevés</p>
              <p className="p-0.5 w-50 flex flex-col justify center bg-yellow-400 "></p>
          </div>
          <div>
            <h1 className="font-bold text-3xl  flex flex-row  text-yellow-300">
              1 500
            </h1>
            <p className="text-grey ">Contrats signés</p>  
            <p className="p-0.5 w-50 flex flex-col justify center bg-yellow-400 "></p>
          </div>
          <div>
            <h1 className="font-bold text-3xl flex flex-row justify-center text-yellow-300">
              9 000
            </h1>
            <p className="text-grey ">Aime dans les médias sociaux</p>  
            <p className="p-0.5 w-50 flex flex-col justify center bg-yellow-400 "></p>
          </div>

        </div>
      

      <div className="flex flex-col items-center">
        <p className="text-yellow-300 text-center p-4 text-3xl">PAS À PAS </p>
        <p className="text-4xl text-center p-5 text-black font-bold">
          COMMENT ÇA MARCHE
        </p>
        <p className="p-0.5 w-50 bg-yellow-400 "></p>
      </div>
      <div className="flex flex-raw justify-center ">
        <img
          src="/icon/iconl.png"
          alt="image 1"
          className=" items-center gap-3 p-20 font-bold h-100 "
        />
        <div className="">
          <h1 className="font-bold text-3xl">PLANIFICATION</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            gravida cursus.
          </p>
        </div>
        <img
          src="/icon/iconp.png"
          alt="image 1"
          className="flex items-center gap-3 p-20 font-bold  h-100 "
        />
        <div>
          <h1 className="font-bold text-3xl">CONCEPTION</h1>
          <p>
            conception Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas gravida cursus.
          </p>
        </div>

        <img
          src="/icon/iconl.png"
          alt="image 1"
          className=" flex items-center gap-3 p-20 font-bold h-100"
        />
        <div>
          <h1 className="font-bold text-3xl"> BÂTIMENT </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            gravida cursus.
          </p>
        </div>

        <img
          src="/icon/iconp.png"
          alt="image 1"
          className=" flex items-center gap-3 p-20 font-bold h-100"
        />
        <div>
          <h1 className="font-bold text-3xl">TERMINER </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            gravida cursus.
          </p>
        </div>
      </div>
      <div className="bg-black/80 p-10">
        <div className="text-3x text-center">
          <h1 className="text-yellow-400 text-3xl">TÉMOIGNAGES</h1>
          <p className="text-5xl text-white border-amber-400 p-10">
            CE QU'ILS DISENT DE NOUS
          </p>
        </div>
        <div className="flex flex-row gap-28 p-7 justify-center ">
          <div className="text-white flex flex-col items-center">
            <div className="-mb-5">
              <p className="text-blox w-64 h-50 border text-white  p-4 justify-between text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenaso gravida cursus eleifend. Nullam ornare sapien.
              </p>
            </div>
            <img
              src="/icon/id-b.jpg"
              alt="image 1"
              className="  font-bold h-40 text-center rounded-full  "
            />
            <div className="text-3xl p-7 text-center">
              <p className="p-5"> MIKE ANGELS</p>
              <p className="text-yellow-400 "> Architecte</p>
            </div>
          </div>{" "}
          <div className=" text-white">
            <p className=" text-blox w-64 h-50 border text-white  p-4 justify-between text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              gravida cursus eleifend. Nullam ornare sapien.
            </p>
            <img
              src="/icon/id-g.jpg"
              alt="image 1"
              className="  font-bold h-40  rounded-full  "
            />
            <div className="text-3xl p-7 text-center">
              <p className="p-5"> CARL OSWAL</p>
              <p className="text-yellow-400 ">Constructeur</p>
            </div>
          </div>{" "}
          <div className="x text-white">
            <p className="text-blox w-64 h-50 border text-white  p-4 justify-between ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              gravida cursus eleifend. Nullam ornare sapien.
            </p>
            <img
              src="/icon/id-g2.jpg"
              alt="image 1"
              className="  font-bold h-40 w-40 rounded-full  "
            />
            <div className="text-3xl p-7 text-center">
              <p className="p-5"> MARK SMITH</p>
              <p className="text-yellow-400 "> Constructeur</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/30 flex flex-row  p-7 justify-center gap-60 ">
        <img
          src="/icon/stmp.png"
          alt="image 1"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
        <img
          src="/icon/stmp2.png"
          alt="image 2"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
        <img
          src="/icon/stmp.png"
          alt="image 3"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
        <img
          src="/icon/stmp2.png"
          alt="image 4"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
        <img
          src="/icon/stmp.png"
          alt="image 3"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
        <img
          src="/icon/stmp2.png"
          alt="image 4"
          className="  font-bold h-40 w-40 text-center rounded-full  "
        />
      </div>
      <div className="">
        <div className="text-center p-10 gap-60 ">
          <h1 className=" text-amber-300 text-4xl ">LE BLOG</h1>
          <p className="font-bold text-4xl ">DERNIÈRES NOUVELLES</p>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div>
            <img
              src="/background/bg-lok.jpg"
              alt="image 4"
              className="  font-bold  w-auto h-100  text-center   "
            />
            <div>
              <h1 className="butto  ">GRANDS PROJETS</h1>
              <p>19 mars 2018 / Super utilisateur</p>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <img
            src="/background/br-bg.jpg"
            alt="image 4"
            className="  font-bold  w-auto h-100 text-center   "
          />
          <div>
            <h1 className="butto  ">GRANDS PROJETS</h1>
            <p>19 mars 2018 / Super utilisateur</p>
            <p>
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <button>Read more</button>
          </div>
          <img
            src="/background/im-bg2.jpg"
            alt="image 4"
            className="  font-bold  w-auto h-100  text-center   "
          />
          <div>
            <h1 className="butto  ">GRANDS PROJETS</h1>
            <p>19 mars 2018 / Super utilisateur</p>
            <p>
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className="text-white flex jus justify-center text-center bg-amber-400  ">
        <div>
          <h1 className=" p-10 text-6xl ">CONSTRUCTION ELVO</h1>
          <p className=" ">
            C'est un modèle étonnant pour de nombreuses utilisations! Vérifie-le
            maintenant!
          </p>
        </div>

        <div className="text-center">
          <button className="border border-white rounded-2xl text-3xl hover:bg-white p-6  justify-between">
            ACHETER MAINTENANT
          </button>
        </div>
      </div>
      <div className="bg-black  flex flex-row text-2xl justify-center">
        <button className="text-yellow-400 p-10   hover:underline ">
          Template
        </button>
        <h1 className=" flex items-center">créé avec</h1>
        <button className="text-yellow-400 p-10  hover:underline  =">
          {" "}
          Nicepage
        </button>
      </div>
    </div>
  );
}

import React from "react";
import salong from "../assets/salong.jpg";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-600">
        <p>
          Om <span className="text-gray-900 font medium">Oss</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={salong} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Välkommen till Salongen Hair By Josephine</p>
          <p>Salongen för dig</p>
          <b className="text-gray-800">Vår Vision</b>
          <p>
            Vårat duktiga team med väl erfarna frisörer kommer att hjälpa dig
            varje steg på vägen till att du uppnår dina hår drömmar
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          VARFÖR <span className="text-gray-700">SKA DU JUST VÄLJA OSS</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-100'>
          <b>Effektivitet</b>
          <p>Vi arbetar effektivt för att nå våra mål och för att kunden ska bli sitt bästa jag</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-100'>
          <b>Självsäkerhet </b>
          <p>Många års erfarenhet ger oss självsäkerheten att arbeta med stolthet</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-100'>
          <b>Personlighet</b>
          <p>Vi strävar alltid efter att bygga relationer med våra fantastiska kunder </p>
        </div>
      </div>
    </div>
  );
};

export default About;

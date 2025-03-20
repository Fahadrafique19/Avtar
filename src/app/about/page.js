import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (

    <div className=" text-white bg-cover  w-full" style={{ backgroundImage: "url('/Background.png')" }}>
      {/* Header Section */}
      <div className="relative w-full h-72 bg-cover bg-center" >
        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 mb-20 ">
        <div>
          <h2 className="text-3xl font-bold">The Most Professional Company</h2>
          <p className="mt-4 text-gray-300">
            Quis aliqua sunt nisi consectetur anim ullamco ea. Ut deserunt non voluptate nisiQuis aliqua sunt nisi.
          </p>
          <p className="mt-2 text-gray-400">
            Quis aliqua sunt nisi consectetur anim ullamco ea. Ut deserunt non voluptate nisi et sit exercitation eu 
            lorem. Mollit occaecat nisi occaecat fugiat ullamco.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Read more</button>
        </div>
        <div className="flex justify-center">
          <Image src="/Grouppic.png" alt="Cinema Experience" width={500} height={300} className="rounded-lg" />
        </div>
      </section>

      
      
    </div>

 
          
    
  );
}

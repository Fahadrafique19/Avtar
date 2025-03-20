import Link from "next/link";

export default function Contact() {
  return (
    <div className=" text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Section 1 (3).png')" }}>
      {/* Header Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/movies-bg.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div className=" p-8 rounded-lg">
          <p className="text-sm uppercase text-blue-400 tracking-wide font-semibold">Let's Get Started</p>
          <h2 className="text-3xl font-bold mt-2">Looking For A First-Class Consultant?</h2>
          <p className="mt-4 text-gray-400">
            Quis aliqua sunt nisi consectetur anim ullamco ea. Ut deserunt non voluptate nisi.
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full p-3 bg-white text-black rounded border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="w-full p-3 bg-white text-black rounded border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 bg-white text-black rounded border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-1/3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Embedded Google Map */}
        <div className="flex justify-center mt-14">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.734043956927!2d-0.11962398420067154!3d51.5033248172715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603552f4166c5%3A0x546fa1d057d1fc51!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1649167102841!5m2!1sen!2suk"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>



   
  );
}

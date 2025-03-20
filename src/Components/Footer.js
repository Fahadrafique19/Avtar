export default function Footer() {
    return (
      <footer className=" text-white py-12 relative bg-no-repeat mt-32" style={{ backgroundImage: "url('/bgphoto.png')" }}>
        {/* Popcorn Logo */}
        <div className="absolute top-0 left-2/4 transform -translate-x-1/2 -translate-y-28">
          <img src="/boxpopcon.png" alt="Popcorn Logo" className="w-9/12" />
        </div>
  
        <div className="container w-11/12 m-auto mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold border-b-2  border-white inline-block pb-1">About us</h3>
            <p className="mt-4 w-9/12 text-sm">
              Atiframe is one of the best website builders that let you make a
              stunning website without coding knowledge. 20 design versions
              available to install in 1 click!
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full">
              <img src="/facebook.png" alt=""  />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full">
              <img src="/linkedin.png" alt=""  />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full">
              <img src="/twitter.png" alt=""  />
              </a>
            </div>
          </div>
  
          {/* Map Image in Center */}
          <div className="flex justify-center items-center">
            <img src="/map.png" alt="World Map" className="w-auto opacity-80" />
          </div>
          
          <div className="flex gap-10 items-center">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold border-b-2 border-white inline-block pb-1">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-400">What We Do</a></li>
                <li><a href="#" className="hover:text-gray-400">Our Core Values</a></li>
                <li><a href="#" className="hover:text-gray-400">Services</a></li>
                <li><a href="#" className="hover:text-gray-400">Testimonials</a></li>
                <li><a href="#" className="hover:text-gray-400">Recent News</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold border-b-2 border-white inline-block pb-1">Useful</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-400">Support</a></li>
                <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-400">Live chat</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
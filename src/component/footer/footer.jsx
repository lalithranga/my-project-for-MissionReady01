export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm">
              We are committed to creating a sustainable future by promoting eco-friendly practices and spreading environmental awareness.
            </p>
          </div>
   
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Our Mission</li>
              <li className="hover:text-green-400 cursor-pointer">Projects</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p>Email: contact@ecosupport.org</p>
            <p>Phone: +64 456 7890</p>
            <p>Location: 48 Radley street, Woolston, Auckland</p>
          </div>
   
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <span className="hover:text-green-400 cursor-pointer">Facebook</span>
              <span className="hover:text-green-400 cursor-pointer">Twitter</span>
              <span className="hover:text-green-400 cursor-pointer">Instagram</span>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Green Future. All Rights Reserved.
        </div>
      </footer>
    );
  }
  
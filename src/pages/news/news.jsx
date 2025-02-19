export default function NewsPage() {
    return (
      <div className="bg-gray-100 min-h-screen py-10 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest Environmental News</h1>
          <div className="space-y-6">
            <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:underline">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">New Zealand Moves Towards 100% Renewable Energy</h2>
              <p className="text-gray-700">The government has announced a new initiative to transition to 100% renewable energy by 2035, investing in solar and wind farms across the country.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:underline">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Marine Conservation Efforts Strengthened</h2>
              <p className="text-gray-700">New Zealand is expanding marine protected areas to safeguard endangered species and promote biodiversity in coastal regions.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:underline">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Breakthrough in Sustainable Agriculture</h2>
              <p className="text-gray-700">Researchers have developed a new method to reduce methane emissions from livestock, helping the dairy industry become more eco-friendly.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:underline">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Plastic-Free Initiative Gains Momentum</h2>
              <p className="text-gray-700">Auckland introduces new regulations to phase out single-use plastics, encouraging businesses to adopt sustainable packaging alternatives.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
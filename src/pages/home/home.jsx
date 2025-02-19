import './cover.css';

export default function Home() {
    return (
        <div className="relative h-screen w-full">
            {/* Cover Section */}
            <div className="cover flex items-center justify-center text-center px-6">
                <h2 className="text-white text-4xl font-bold z-10">
                    Protecting Nature, Preserving the Future
                </h2>
            </div>
            <p className="absolute bottom-50 w-full text-center text-white text-lg px-6">
                New Zealand Central Environment is dedicated to promoting sustainable practices, protecting biodiversity, and leading the way towards a cleaner, greener future for generations to come.
            </p>
        </div>
    );
}

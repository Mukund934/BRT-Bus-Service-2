import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteCard from "@/components/RouteCard";
import heroBus from "@/assets/hero-bus.jpg";

const rotatingTexts = [
  "Experience the Best BRT Service",
  "Plan Your Commute with Ease",
  "Stay Informed About Routes & Fares",
  "Welcome to the Bus Tracker",
];

const busStops = "Balco, Sector 27, IIIM, Indrawati Bhawan, Telibandha, Railway Station";

const buses = [
  "BUS 1 - 7:25 AM Departure",
  "BUS 2 - 7:55 AM Departure",
  "BUS 3 - 8:25 AM Departure",
  "BUS 4 - 8:55 AM Departure",
  "BUS 5 - 9:25 AM Departure",
  "BUS 6 - 9:55 AM Departure",
  "BUS 7 - 10:25 AM Departure",
  "BUS 8 - 10:55 AM Departure",
  "BUS 9 - 11:25 AM Departure",
  "BUS 10 - 11:55 AM Departure",
  "BUS 11 - 12:25 PM Departure",
  "BUS 12 - 12:55 PM Departure",
  "BUS 13 - 1:25 PM Departure",
  "BUS 14 - 1:55 PM Departure",
  "BUS 15 - 2:25 PM Departure",
  "BUS 16 - 2:55 PM Departure",
  "BUS 17 - 3:25 PM Departure",
  "BUS 18 - 3:55 PM Departure",
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Show Map", to: "/map" },
  { label: "Bus Fares", to: "/fares" },
  { label: "Driver Page", to: "/driver" },
  { label: "Contact", to: "/contact" },
  { label: "Time Table", to: "/timetable" },
  { label: "Login Page", to: "/login" },
];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [startSearch, setStartSearch] = useState("");
  const [endSearch, setEndSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      setAnimKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!startSearch.trim()) {
      alert("Please enter a starting point.");
    } else {
      alert(`Searching route: ${startSearch}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="BRT Bus Service" navLinks={navLinks} />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src={heroBus}
          alt="BRT Bus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
          <h2
            key={animKey}
            className="text-primary-foreground text-3xl md:text-4xl font-bold text-center px-4 overlay-text-animate"
          >
            {rotatingTexts[textIndex]}
          </h2>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="brt-section-title">Search Your Buses</h2>
        <div className="brt-search-card">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="route-search-start"
              type="text"
              placeholder="Enter your starting point"
              value={startSearch}
              onChange={(e) => setStartSearch(e.target.value)}
              className="brt-input flex-1"
            />
            <input
              id="route-search-end"
              type="text"
              placeholder="Choose destination..."
              value={endSearch}
              onChange={(e) => setEndSearch(e.target.value)}
              className="brt-input flex-1"
            />
            <button onClick={handleSearch} className="brt-button">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Bus Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="brt-section-title">Buses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <RouteCard key={bus} title={bus} stops={busStops} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

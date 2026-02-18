import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navLinks = [{ label: "Home", to: "/" }];
const API_URL = "https://location-backend-aqvu.onrender.com/api/location";

interface LocationData {
  latitude: number;
  longitude: number;
  busNumber: string;
  timestamp: string;
}

const MapPage = () => {
  const [busNumber, setBusNumber] = useState("");
  const [locationInfo, setLocationInfo] = useState<string>("Loading...");
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const fetchLocation = async () => {
    try {
      const res = await fetch(API_URL);
      const data: LocationData = await res.json();
      if (data && data.latitude && data.longitude) {
        const pos = { lat: data.latitude, lng: data.longitude };
        setLocationInfo(
          `Bus Number: ${data.busNumber}\nLatitude: ${data.latitude}\nLongitude: ${data.longitude}\nTimestamp: ${new Date(data.timestamp).toLocaleString()}`
        );
        if (googleMapRef.current) {
          googleMapRef.current.setCenter(pos);
          if (markerRef.current) {
            markerRef.current.setPosition(pos);
          }
        }
      }
    } catch {
      setLocationInfo("Could not fetch location data.");
    }
  };

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      (window as any).initMap = () => initMap();
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (!mapRef.current) return;
      const g = (window as any).google;
      if (!g) return;
      const defaultPos = { lat: 20.5937, lng: 78.9629 };
      const map = new g.maps.Map(mapRef.current, {
        center: defaultPos,
        zoom: 5,
      });
      googleMapRef.current = map;

      const marker = new g.maps.Marker({
        position: defaultPos,
        map,
        icon: {
          url: "https://cdn-icons-png.freepik.com/512/1719/1719609.png",
          scaledSize: new g.maps.Size(40, 40),
        },
      });
      markerRef.current = marker;
    }

    fetchLocation();
  }, []);

  const handleSearch = () => {
    fetchLocation();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="BRT Bus Service" navLinks={navLinks} />

      <main className="py-10 px-4">
        <div className="brt-container">
          <h2 className="brt-section-title">Search Your Bus</h2>
          <div className="flex gap-3 mb-6 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Enter Bus Number ..."
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
              className="brt-input flex-1"
            />
            <button onClick={handleSearch} className="brt-button">
              Search
            </button>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">Latest Saved Location</h3>
          <pre className="bg-secondary text-foreground p-4 rounded-xl text-sm mb-6 whitespace-pre-wrap">
            {locationInfo}
          </pre>

          <div ref={mapRef} className="w-full h-[400px] rounded-xl overflow-hidden border border-border" />
        </div>
      </main>

      <Footer text="© project by Mukund, Dharmendra, and Ayush" />
    </div>
  );
};

export default MapPage;

import { useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navLinks = [{ label: "Home", to: "/" }];
const API_URL = "https://location-backend-aqvu.onrender.com/api/location";

const Driver = () => {
  const [busNumber, setBusNumber] = useState("");
  const [status, setStatus] = useState("");
  const intervalRef = useRef<number | null>(null);

  const saveLocation = useCallback(() => {
    if (!busNumber.trim()) {
      setStatus("Please enter a bus number.");
      return;
    }

    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser.");
      return;
    }

    setStatus("Fetching location...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          await fetch(API_URL, { method: "DELETE" });
          await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latitude, longitude, busNumber }),
          });
          setStatus(
            `Location saved successfully!\n\nBus Number: ${busNumber}\nLatitude: ${latitude}\nLongitude: ${longitude}\n\nView Saved Location`
          );
        } catch {
          setStatus("Error saving location.");
        }
      },
      () => setStatus("Unable to retrieve your location.")
    );
  }, [busNumber]);

  const startSharing = () => {
    saveLocation();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(saveLocation, 5000);
  };

  const stopSharing = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setStatus("Location sharing stopped.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="BRT Bus Service" navLinks={navLinks} />

      <main className="py-10 px-4">
        <div className="brt-container max-w-xl text-center">
          <h2 className="brt-section-title">Driver Location Sharing</h2>

          <input
            type="text"
            placeholder="Enter Bus Number ..."
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            className="brt-input mb-4"
          />

          <div className="flex gap-4 justify-center mb-6">
            <button onClick={startSharing} className="brt-button">
              Share Location
            </button>
            <button
              onClick={stopSharing}
              className="px-6 py-3 bg-destructive text-destructive-foreground rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.96]"
            >
              Stop Sharing
            </button>
          </div>

          {status && (
            <pre className="bg-secondary text-foreground p-4 rounded-xl text-sm text-left whitespace-pre-wrap">
              {status}
            </pre>
          )}
        </div>
      </main>

      <Footer text="© project by Mukund, Dharmendra, and Ayush" />
    </div>
  );
};

export default Driver;

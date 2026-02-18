import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Time Table", to: "/timetable" },
];

const fares = [
  {
    destination: "Balco Medical Centre, Sector 30, Sector 29, Sector 27, and South Block:",
    price: "₹ 5 /-",
  },
  {
    destination: "Indravati Bhawan, Mahanadi Bhawan, North Block, Ekatm Path, CBD, Sector 15:",
    price: "₹ 10 /-",
  },
  {
    destination: "Telibandha:",
    price: "₹ 30 /-",
  },
  {
    destination: "DKS Bhawan and Railway Station:",
    price: "₹ 40 /-",
  },
];

const Fares = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Bus Fare Structure" navLinks={navLinks} />

      <main className="py-10 px-4">
        <div className="brt-container">
          <h2 className="brt-section-title">Fare Details</h2>
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Explore the affordable bus fares from HNLU to various destinations. Enjoy a comfortable and convenient travel experience!
          </p>

          <div className="brt-card border border-transparent hover:border-primary/20 group">
            <h3 className="text-xl font-bold text-foreground pb-3 mb-4 border-b border-border tracking-tight">
              From HNLU to:
            </h3>
            <ul className="space-y-1">
              {fares.map((fare, i) => (
                <li key={i} className="fare-row-alt flex justify-between items-start gap-4">
                  <span className="text-foreground">{fare.destination}</span>
                  <span className="font-bold text-primary whitespace-nowrap">{fare.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Fares;

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="login-font min-h-screen" style={{ background: "linear-gradient(to right, hsl(284, 33%, 92%), hsl(284, 33%, 98%))" }}>
      {/* Top Nav */}
      <nav className="bg-primary text-primary-foreground flex justify-center gap-6 py-3">
        <Link to="/" className="text-primary-foreground no-underline hover:opacity-80 transition-opacity">Home</Link>
        <Link to="/contact" className="text-primary-foreground no-underline hover:opacity-80 transition-opacity">Contact</Link>
      </nav>

      {/* Login Container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-48px)] px-4">
        <div
          className="relative bg-card rounded-[30px] overflow-hidden w-full max-w-[768px] min-h-[480px]"
          style={{ boxShadow: "0 8px 32px hsla(284,33%,30%,0.12), 0 16px 48px hsla(284,33%,30%,0.08)" }}
        >
          {/* Sign Up Form */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isActive ? "translate-x-full opacity-100 z-[5]" : "opacity-0 z-[1]"
            }`}
          >
            <h1 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Create Account</h1>
            <div className="flex gap-3 my-3">
              <span className="social-icon">G</span>
              <span className="social-icon">f</span>
              <span className="social-icon">GH</span>
              <span className="social-icon">in</span>
            </div>
            <span className="text-xs text-muted-foreground mb-3">or use your email for registeration</span>
            <input type="text" placeholder="Name" className="w-full bg-secondary text-foreground border-none rounded-lg px-4 py-2.5 mb-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/30" />
            <input type="email" placeholder="Email" className="w-full bg-secondary text-foreground border-none rounded-lg px-4 py-2.5 mb-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/30" />
            <input type="password" placeholder="Password" className="w-full bg-secondary text-foreground border-none rounded-lg px-4 py-2.5 mb-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/30" />
            <button className="bg-primary text-primary-foreground px-10 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.96]">
              Sign Up
            </button>
          </div>

          {/* Sign In Form */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[2] ${
              isActive ? "-translate-x-full" : ""
            }`}
          >
            <h1 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Sign In</h1>
            <div className="flex gap-3 my-3">
              <span className="social-icon">G</span>
              <span className="social-icon">f</span>
              <span className="social-icon">GH</span>
              <span className="social-icon">in</span>
            </div>
            <span className="text-xs text-muted-foreground mb-3">or use your email password</span>
            <input type="email" placeholder="Email" className="w-full bg-secondary text-foreground border-none rounded-lg px-4 py-2.5 mb-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/30" />
            <input type="password" placeholder="Password" className="w-full bg-secondary text-foreground border-none rounded-lg px-4 py-2.5 mb-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/30" />
            <a href="#" className="text-xs text-muted-foreground mb-3 hover:text-primary transition-colors">Forget Your Password?</a>
            <button className="bg-primary text-primary-foreground px-10 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.96]">
              Sign In
            </button>
          </div>

          {/* Toggle Panel */}
          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-l-[150px] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[100] ${
              isActive ? "-translate-x-full rounded-l-none rounded-r-[150px]" : ""
            }`}
          >
            <div
              className="h-full flex items-center justify-center px-8 text-center text-primary-foreground"
              style={{ background: "linear-gradient(to right, hsl(284, 33%, 52%), hsl(284, 33%, 42%))" }}
            >
              {!isActive ? (
                <div>
                  <h1 className="text-2xl font-bold mb-3 tracking-tight">Hello, Friend!</h1>
                  <p className="text-sm mb-5 leading-relaxed opacity-90">Register with your personal details to use all site features</p>
                  <button
                    onClick={() => setIsActive(true)}
                    className="border border-primary-foreground text-primary-foreground bg-transparent px-10 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.96]"
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl font-bold mb-3 tracking-tight">Welcome Back!</h1>
                  <p className="text-sm mb-5 leading-relaxed opacity-90">Enter your personal details to use all of site features</p>
                  <button
                    onClick={() => setIsActive(false)}
                    className="border border-primary-foreground text-primary-foreground bg-transparent px-10 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.96]"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

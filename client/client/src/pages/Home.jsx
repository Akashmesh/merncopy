import { NavLink } from "react-router-dom";
import { Analytics } from "../componets/Analytics";

export const Home = () => {
  return (
    <>
      <main className="page page--home">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-tagline">We are the World Best IT Company</p>
            <h1 className="hero-title">Welcome to Thapa Technical</h1>
            <p className="hero-text">
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="hero-actions">
              <NavLink to="/contact">
                <button className="btn btn--primary">connect now</button>
              </NavLink>
              <NavLink to="/service">
                <button className="btn btn--secondary">learn more</button>
              </NavLink>
            </div>
          </div>
        </section>
      </main>
      <Analytics />

      {/* CTA SECTION */}
      <section className="section cta">
        <div className="cta-container">
          <div className="cta-content">
            <p className="cta-tagline">We are here to help you</p>
            <h2 className="cta-title">Get Started Today</h2>
            <p className="cta-text">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="cta-actions">
              <NavLink to="/contact">
                <button className="btn btn--primary">connect now</button>
              </NavLink>
              <NavLink to="/service">
                <button className="btn btn--ghost">learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
import { NavLink } from "react-router-dom";
import { Analytics } from "../componets/Analytics";

export const About = () => {
  return (
    <>
      <main className="page page--about">
        <section className="about-section">
          <div className="about-card">
            <div className="about-content">

              <h1 className="about-title">Why Choose Us?</h1>

              <p className="about-text">
                <strong>Expertise:</strong> Our team consists of experienced IT professionals who
                stay updated with the latest industry trends.
              </p>

              <p className="about-text">
                <strong>Customization:</strong> Every business is unique; our solutions are tailored to your needs.
              </p>

              <p className="about-text">
                <strong>Customer-Centric:</strong> We prioritize your satisfaction with top-notch support.
              </p>

              <p className="about-text">
                <strong>Affordability:</strong> Competitive pricing without compromising quality.
              </p>

              <p className="about-text">
                <strong>Reliability:</strong> Count on us 24/7 for stable and available IT systems.
              </p>

              <div className="about-actions">
                <NavLink to="/contact">
                  <button className="btn btn--primary">Connect Now</button>
                </NavLink>
                <button className="btn btn--secondary">Learn More</button>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};

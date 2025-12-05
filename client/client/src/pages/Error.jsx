import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <section className="error-page">
      <div className="error-card">
        <h2 className="error-code">404</h2>
        <h4 className="error-title">Sorry! Page not found</h4>
        <p className="error-text">
          Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it and we'll
          look into it.
        </p>

        <div className="error-actions">
          <NavLink to="/" className="btn btn--primary">Return Home</NavLink>
          <NavLink to="/contact" className="btn btn--secondary">Report Problem</NavLink>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <section>
        <h3>Effects</h3>
        <ul>
          <li>
            <Link to="paper-effect">Paper Effect</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navigation;

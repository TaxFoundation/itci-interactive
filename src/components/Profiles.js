import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

const Profiles = ({ profiles }) => (
  <div>
    <h3>Strengths</h3>
    <ul>
      {range(3).map(n => (
        <li key={`strength-${n + 1}`}>{profiles[`strength_${n + 1}`]}</li>
      ))}
    </ul>
    <h3>Weaknesses</h3>
    <ul>
      {range(3).map(n => (
        <li key={`weakness-${n + 1}`}>{profiles[`weakness_${n + 1}`]}</li>
      ))}
    </ul>
  </div>
);

Profiles.propTypes = {
  profiles: PropTypes.object,
};

export default Profiles;

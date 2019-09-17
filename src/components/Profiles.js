import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { range } from 'lodash';

const ProfilesContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

const ProfileHeading = styled.h3`
  font-size: 1.4em;
  font-weight: 700;
`;

const ProfileList = styled.ul`
  list-style: none;
  padding-left: 1.4rem;

  li::before {
    content: '•';
    color: ${props => (props.positive ? 'green' : 'red')};
    display: inline-block;
    font-size: 1.4rem;
    margin-left: -1.4rem;
    width: 1.4rem;
  }
`;

const Profiles = ({ profiles }) => (
  <ProfilesContainer>
    <section>
      <ProfileHeading>Strengths</ProfileHeading>
      <ProfileList positive>
        {range(3).map(n => (
          <li key={`strength-${n + 1}`}>{profiles[`strength_${n + 1}`]}</li>
        ))}
      </ProfileList>
    </section>
    <section>
      <ProfileHeading>Weaknesses</ProfileHeading>
      <ProfileList>
        {range(3).map(n => (
          <li key={`weakness-${n + 1}`}>{profiles[`weakness_${n + 1}`]}</li>
        ))}
      </ProfileList>
    </section>
  </ProfilesContainer>
);

Profiles.propTypes = {
  profiles: PropTypes.object,
};

export default Profiles;

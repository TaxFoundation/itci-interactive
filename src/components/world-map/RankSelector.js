import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RankTypeSelector = styled.div`
  display: none;
  font-size: calc(0.45rem + 0.45vw);

  @media screen and (min-width: 800px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const RankTypeSelectorRank = styled.div`
  background-color: ${props =>
    props.active ? props.theme.lightOrange : props.theme.white};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  border-left: 1px solid ${props => props.theme.borderColor};
  border-top: 3px solid ${props => props.theme[props.rank]};
  color: ${props => props.theme.color};
  cursor: pointer;
  flex: 1 0 auto;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out background-color;

  &:last-child {
    border-right: 1px solid ${props => props.theme.borderColor};
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${props => props.theme.lightOrange};
    color: ${props => props.theme.color};
  }
`;

const RankSelector = ({ ranks, activeRank, setRanking }) => (
  <RankTypeSelector>
    {ranks.map(rank => (
      <RankTypeSelectorRank
        key={`rank-selector-${rank.id}`}
        rank={rank.id}
        active={`${rank.id}_rank` === activeRank}
        onClick={() => {
          setRanking(`${rank.id}_rank`);
        }}
      >
        {rank.name}
      </RankTypeSelectorRank>
    ))}
  </RankTypeSelector>
);

RankSelector.propTypes = {
  activeRank: PropTypes.string.isRequired,
  ranks: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRanking: PropTypes.func.isRequired,
};

export default RankSelector;

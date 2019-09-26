import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RankTypeSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: calc(0.45rem + 0.45vw);

  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
  }
`;

const RankTypeSelectorRank = styled.div`
  background-color: ${props =>
    props.active ? props.theme.lightOrange : props.theme.white};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  border-left: 1px solid ${props => props.theme.borderColor};
  border-right: 1px solid ${props => props.theme.borderColor};
  border-top: 3px solid ${props => props.theme[props.rank]};
  color: ${props => props.theme.color};
  cursor: pointer;
  flex: 1 0 auto;
  font-weight: ${props => (props.active ? 700 : 400)};
  margin: 0.5rem 0.25rem 0;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out background-color;

  @media screen and (min-width: 700px) {
    border-left: 1px solid ${props => props.theme.borderColor};
    border-right: none;
    margin: 1rem 0 0;
    padding: 1rem;

    &:last-child {
      border-right: 1px solid ${props => props.theme.borderColor};
    }
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

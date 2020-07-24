import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { votesState } from '../state/voteState';

const MAX_SELECTED = 2;

export default ({ options }) => {
  const votes = useRecoilValue(votesState);
  const setVotes = useSetRecoilState(votesState);
  const [mapOptions, setMapOptions] = useState(
    options.map(({ id, label }) => ({ id, label, isSelected: false }))
  );
  const selectedQuantity = mapOptions.filter(({ isSelected }) => isSelected)
    .length;
  const addVote = (label) => [...votes, label];
  const removeVote = (label) => [
    ...votes.slice(0, votes.indexOf(label)),
    ...votes.slice(votes.indexOf(label) + 1, votes.length)
  ];
  const toggleSelect = (label) => {
    const currentCheckbox = mapOptions.find(
      (checkbox) => checkbox.label === label
    );
    setMapOptions([
      ...mapOptions.slice(0, mapOptions.indexOf(currentCheckbox)),
      { ...currentCheckbox, isSelected: !currentCheckbox.isSelected },
      ...mapOptions.slice(
        mapOptions.indexOf(currentCheckbox) + 1,
        mapOptions.length
      )
    ]);
    setVotes(currentCheckbox.isSelected ? removeVote(label) : addVote(label));
  };
  const list = mapOptions.map(({ id, label, isSelected }) => (
    <Checkbox
      key={id}
      label={label}
      isSelected={isSelected}
      disabled={!isSelected && selectedQuantity >= MAX_SELECTED}
      onCheckboxChange={() => toggleSelect(label)}
    />
  ));
  return (
    <div>
      <div>Selected: {selectedQuantity}</div>
      {list}
    </div>
  );
};

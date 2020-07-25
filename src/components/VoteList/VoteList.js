import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { votesState } from 'state/voteState';
import Checkbox from 'components/Checkbox';

export default ({ options, maxSelectable }) => {
  const votes = useRecoilValue(votesState);
  const setVotes = useSetRecoilState(votesState);
  const [mapOptions, setMapOptions] = useState(
    options.map(({ id, label }) => ({ id, label, isSelected: false }))
  );
  const selectedQuantity = mapOptions.filter(({ isSelected }) => isSelected)
    .length;
  const addVote = (vote) => [...votes, vote];
  const removeVote = (id) => {
    const currentVote = votes.find((vote) => vote.id === id);
    return [
      ...votes.slice(0, votes.indexOf(currentVote)),
      ...votes.slice(votes.indexOf(currentVote) + 1, votes.length)
    ];
  };

  const toggleSelect = (id, label) => {
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
    setVotes(
      currentCheckbox.isSelected ? removeVote(id) : addVote({ id, text: label })
    );
  };
  const list = mapOptions.map(({ id, label, isSelected }) => (
    <Checkbox
      key={id}
      label={label}
      isSelected={isSelected}
      disabled={!isSelected && selectedQuantity >= maxSelectable}
      onCheckboxChange={() => toggleSelect(id, label)}
    />
  ));
  return (
    <div>
      <div>Selected: {selectedQuantity}</div>
      {list}
    </div>
  );
};

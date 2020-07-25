import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { votesState } from 'state/voteState';

const useVotes = () => {
  const [votes, setVotes] = useRecoilState(votesState);

  const addVote = (vote) => setVotes([...votes, vote]);

  const removeVote = (id) => {
    const currentVote = votes.find((vote) => vote.id === id);
    return setVotes([
      ...votes.slice(0, votes.indexOf(currentVote)),
      ...votes.slice(votes.indexOf(currentVote) + 1, votes.length)
    ]);
  };

  return [addVote, removeVote];
};

export const useOptions = (options) => {
  const [addVote, removeVote] = useVotes();

  const [mapOptions, setMapOptions] = useState(
    options.map((option) => ({ ...option, isSelected: false }))
  );

  const selectedOptions = mapOptions.filter(({ isSelected }) => isSelected);
  const selectedQuantity = selectedOptions.length;

  const toggleSelect = (id, label) => {
    const currentCheckbox = mapOptions.find((checkbox) => checkbox.id === id);
    const currentCheckboxIndex = mapOptions.indexOf(currentCheckbox);
    setMapOptions([
      ...mapOptions.slice(0, currentCheckboxIndex),
      { ...currentCheckbox, isSelected: !currentCheckbox.isSelected },
      ...mapOptions.slice(currentCheckboxIndex + 1, mapOptions.length)
    ]);
    if (currentCheckbox.isSelected) {
      removeVote(id);
    } else {
      addVote({ id, text: label });
    }
  };

  return [{ mapOptions, selectedQuantity }, toggleSelect];
};

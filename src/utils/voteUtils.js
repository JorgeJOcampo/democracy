export const formatOptions = (options) =>
  options.map(({ id, text }) => ({ id, label: text, total: 0 }));

export const getResults = (poll, allVotes) =>
  console.log('vote sss', allVotes) || poll
    ? allVotes
        .reduce((res, { votes }) => {
          console.log('poll sss', poll);

          console.log('votes sss', votes);
          votes.forEach((label) => {
            console.log('label', label);
            const currentVote = res.find(
              (vote) => console.log('vote', vote) || vote.label === label
            );
            console.log('currentVote', currentVote);
            res = [
              ...res.slice(0, res.indexOf(currentVote)),
              {
                ...currentVote,
                total: currentVote.total ? currentVote.total + 1 : 1
              },
              ...res.slice(res.indexOf(currentVote) + 1, res.length)
            ];
          });
          return res;
        }, formatOptions(poll.options))
        .sort((a, b) => b.total - a.total)
    : null;

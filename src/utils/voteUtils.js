export const formatOptions = (options) =>
  options.map(({ id, text }) => ({ id, label: text, total: 0 }));

export const getResults = (poll, allVotes) =>
  poll
    ? allVotes
        .reduce((res, { votes }) => {
          votes.forEach((vote) => {
            const currentVote = res.find(({ id }) => vote.id === id);
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

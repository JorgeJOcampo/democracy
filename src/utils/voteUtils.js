export const formatOptions = (options) =>
  options.map((label, id) => ({ id, label, total: 0 }));

export const getResults = (poll, votes) =>
  poll
    ? votes
        .reduce((res, { votes }) => {
          votes.forEach((label) => {
            const currentVote = res.find((vote) => vote.label === label);
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

import { database } from '../firebase';

export default {
  getOptions: () => [
    { id: 0, label: 'op0', total: 0 },
    { id: 1, label: 'op1', total: 0 },
    { id: 2, label: 'op2', total: 0 },
    { id: 3, label: 'op3', total: 0 },
    { id: 4, label: 'op4', total: 0 },
    { id: 5, label: 'op5', total: 0 }
  ],
  getVotes: () =>
    database
      .collection('votes')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .catch((err) => {
        console.log('Error getting documents', err);
      })
};

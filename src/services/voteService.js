import { database } from '../firebase';

export default {
  createVote: (doc) => database.collection('polls').doc().set(doc),
  getPolls: () =>
    database
      .collection('polls')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
      .catch((err) => {
        console.log('Error getting documents', err);
      }),
  getPoll: (id) =>
    database
      .collection('polls')
      .doc(id)
      .get()
      .then((doc) => (doc.exists ? doc.data() : {}))
      .catch((err) => {
        console.log('Error getting documents', err);
      }),
  getOptions: () => [
    { id: 0, label: 'op0', total: 0 },
    { id: 1, label: 'op1', total: 0 },
    { id: 2, label: 'op2', total: 0 },
    { id: 3, label: 'op3', total: 0 },
    { id: 4, label: 'op4', total: 0 },
    { id: 5, label: 'op5', total: 0 }
  ],
  formatOptions: (options) =>
    options.map((label, id) => ({ id, label, total: 0 })),
  getVotes: () =>
    database
      .collection('votes')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .catch((err) => {
        console.log('Error getting documents', err);
      }),
  onChange: (callback) =>
    database
      .collection('votes')
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => doc.data()))
      )
};

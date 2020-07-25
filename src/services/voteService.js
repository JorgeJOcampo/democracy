import { database } from '../firebase';

export default {
  createPoll: (doc) => database.collection('polls').doc().set(doc),
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
  formatOptions: (options) =>
    options.map(({ id, text }) => ({ id, label: text, total: 0 })),
  createVote: (vote) => database.collection('votes').add(vote),
  getVotes: () =>
    database
      .collection('votes')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .catch((err) => {
        console.log('Error getting documents', err);
      }),
  onChange: (id, callback) =>
    database
      .collection('votes')
      .where('poll_id', '==', id)
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
};

import { database } from '../firebase';

export default {
  getVotes: () =>
    database
      .collection('votes')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .catch((err) => {
        console.log('Error getting documents', err);
      })
};

import firebase from "firebase";

class Fire {
  // constructor() {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  //   //firebase.initializeApp(firebaseConfig);
  // }

  addPost = async ({ text, localUri, location }) => {
    const remoteUri = await this.uploadPhotoAsync(localUri);
    //alert(remoteUri);
    return new Promise((res, rej) => {
      this.firestore
        .collection("posts")
        .add({
          text,
          location,
          uid: this.uid,
          timestamp: this.timestamp,
          image: remoteUri,
        })
        .then((ref) => {
          res(ref);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  uploadPhotoAsync = async (uri) => {
    let datetime = this.timestamp;
    const path = `photos/${this.uid}/${datetime}.jpg`;

    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = firebase.storage().ref(path).put(file);
      //alert(path);
      res(path);
      // upload.on(
      //   "state_change",
      //   (snapshot) => {},
      //   (err) => {
      //     rej(err);
      //   },
      //   async () => {
      //     const url = await upload.snapshot.ref.getDownloadURL();
      //     res(url);
      //   }
      // );
    });
  };
  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();

export default Fire;

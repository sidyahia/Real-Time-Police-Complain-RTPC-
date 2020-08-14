import firebase from "firebase";

class Fire {
  // constructor() {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  //   //firebase.initializeApp(firebaseConfig);
  // }
  state = {
    //profileImageUrl: null,
  };
  addPost = async ({ text, localUri, location }) => {
    const remoteUri = await this.uploadPhotoAsync(localUri);
    // let val = "";

    //alert(remoteUri);
    //const ref = await firebase.storage().ref(remoteUri);

    //****Error */

    // const url = await firebase
    //   .storage()
    //   .ref("/" + remoteUri)
    //   .getDownloadURL();

    //**Error */
    //const url = await ref.getDownloadURL();
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
      //res(path);
      //alert(path);
      //const url = await upload.snapshot.ref.getDownloadURL();

      //alert(url);
      // let imageRef = await firebase.storage().ref("/" + remoteUri);
      // imageRef
      //   .getDownloadURL()
      //   .then((url) => {
      //     res(url);
      //   })
      //   .catch((e) => console.log("getting downloadURL of image error => ", e));

      // upload.on(
      //   "state_change",
      //   (snapshot) => {},
      //   (err) => {
      //     rej(err);
      //   },
      //   async () => {

      //const url = await upload.snapshot.ref.getDownloadURL();
      res(path);
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

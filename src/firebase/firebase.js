import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBXfmK5ba8kkfqZtYB8EcD33HZsndN6jTE",
  authDomain: "web-project-3cf62.firebaseapp.com",
  projectId: "web-project-3cf62",
  storageBucket: "web-project-3cf62.appspot.com",
  messagingSenderId: "308218257202",
  appId: "1:308218257202:web:76518b9d7b6b39bd2e012b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getfollow() {
  const citiesCol = collection(db, "from");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function getstory() {
  const citiesCol = collection(db, "story");
  const citySnapshot = await getDocs(citiesCol);
  const storyList = citySnapshot.docs.map((doc) => doc.data());
  return storyList;
}

export async function getpost() {
  const citiesCol = collection(db, "post");
  const citySnapshot = await getDocs(citiesCol);
  const storyList = citySnapshot.docs.map((doc) => doc.data());
  return storyList;
}

export async function getnews() {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const storyList = citySnapshot.docs.map((doc) => doc.data());
  return storyList;
}

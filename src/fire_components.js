import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
apiKey: "AIzaSyBdHsus0FJAb1dtdVe_bowon53L4gzRwtI",
authDomain: "webpro-a5853.firebaseapp.com",
projectId: "webpro-a5853",
storageBucket: "webpro-a5853.appspot.com",
messagingSenderId: "300627181757",
appId: "1:300627181757:web:b7100a4f41cabba3c0f7d4",
measurementId: "G-6JBBXQY6YJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function getNews(db) {
    const citiesCol = collection(db, "News");
    const citySnapshot = await getDocs(citiesCol);
    const newsList = citySnapshot.docs.map((doc) => doc.data());
    return newsList;
}

export async function getStory(db) {
    const citiesCol = collection(db, "story");
    const citySnapshot = await getDocs(citiesCol);
    const storyList = citySnapshot.docs.map((doc) => doc.data());
    return storyList;
}

export async function getprofileMenu(db) {
    const citiesCol = collection(db, "/profile");
    const citySnapshot = await getDocs(citiesCol);
    const fromList = citySnapshot.docs.map((doc) => doc.data());
    return fromList;
}
import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPap_2XBwhRNU7ejE4ZRbcxyMotEN7xGI",
  authDomain: "tormenta-3582c.firebaseapp.com",
  projectId: "tormenta-3582c",
  storageBucket: "tormenta-3582c.appspot.com",
  messagingSenderId: "508691522674",
  appId: "1:508691522674:web:b3b6f251c8cffed9130eeb",
  measurementId: "G-YL6K5SZXRP",
};

// Incializando o Firebase
const firebase = initializeApp(firebaseConfig);

const dataBase = getFirestore(firebase);
const userCollectionRef = collection(dataBase, "users");

// Receber Usuarios
export const getUsers = async (setUser) => {
  const data = await getDocs(userCollectionRef);
  await setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export const regUser = async (setDoc, name, email, sheets) => {
  await setDoc(userCollectionRef, {
    name,
    email,
    sheets,
  });
};

export const deleteUser = async (id) => {
  const userDoc = doc(dataBase, "users", id);
  await deleteDoc(userDoc);
  getUsers();
};

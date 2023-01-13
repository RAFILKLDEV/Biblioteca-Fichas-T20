import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
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

// Firebase Serviços
export const dataBase = getFirestore(firebase);
export const storage = getStorage(firebase);
export const userCollectionRef = collection(dataBase, "users");

// Auth Firebase
export const auth = getAuth(firebase);

// Receber Informações dos Usuários do Firebase Store
export const getUsers = async (setUser) => {
  const data = await getDocs(userCollectionRef);
  await setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

// Receber Informações de um Usuário do Firebase Store
export const getOneUser = async (setUser, id) => {
  const user = doc(dataBase, "users", id);
  try {
    const data = await getDoc(user);
    setUser(data.data());
  } catch (error) {
    console.log(error);
  }
};

// Registrar Informações do Usuário no Firebase Store
export const regUser = async (setDoc, name, email, sheets) => {
  await setDoc(userCollectionRef, {
    name,
    email,
    sheets,
  });
};

// Deletar Informações do Usuário no Firebase Store
export const deleteUser = async (id) => {
  const userDoc = doc(dataBase, "users", id);
  await deleteDoc(userDoc);
  getUsers();
};

// Firebase FICHAS

// Registrar Informações da ficha no Usuario
export const regSheet = async (id, sheet) => {
  await updateDoc(doc(userCollectionRef, id), {
    sheet,
  });
};

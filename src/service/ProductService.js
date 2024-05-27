import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

const productCollection = collection(db, 'products');

export const addProduct = async (product) => {
  await addDoc(productCollection, product);
};

export const getProducts = async () => {
  const productsSnapshot = await getDocs(productCollection);
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateProduct = async (id, updatedProduct) => {
  const productDoc = doc(db, 'products', id);
  await updateDoc(productDoc, updatedProduct);
};

export const deleteProduct = async (id) => {
  const productDoc = doc(db, 'products', id);
  await deleteDoc(productDoc);
};

export const searchProductByBarcode = async (barcode) => {
  const q = query(productCollection, where('barcode', '==', barcode));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Esta variable de entorno permite resguardar los datos sensibles de nuestra base de datos de Firebase
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Llama a la base de datos
const dataBase = getFirestore(app);


//Esta funcion llama a los productos
export async function getProducts(){
    //En get docs debemos especificar que queremos acceder a la base de datos, péro tambien a la coleccion, llamando a la db y luego colocando el nombre de la coleccion que se encuentra dentro.
    const response = await getDocs(collection(dataBase,"products"));
    
     //response es un QuerySnapShot - es iterable
    const listaProductos=[];
    response.forEach((documentos) => listaProductos.push({id: documentos.id,  ...documentos.data()}));
 //Este forEach trae toda la informacion haciendo un push al array de listaProductos, en firebase el id esta aparte de la coleccion, asi que traemos primero el id y luego los demas datos con un spread operator.
    return listaProductos;
}


//Funcion que itera los productos dependiendo su categoria.
export async function getCategory(category){
    const response = await getDocs(collection(dataBase,"products"));
    const listaProductos=[];
    response.forEach((documentos) => {
        if (documentos.data().category === category) {
            listaProductos.push({id: documentos.id,  ...documentos.data()});
        }
    });
    return listaProductos;
}

//Funcion que permite agregar datos a la base de datos de firebase.
export async function addOrder(order){
    const ordersCollections = collection(dataBase, "orders");
    const docRef = await addDoc(ordersCollections, order);
    console.log("Doc ref generado:" +docRef);
    console.log("id generado: " +docRef.id);
    return docRef.id;
}
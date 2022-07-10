import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export async function atualizaPerfil(novoNome,novaBio,novaFoto,username,callback){
    if(novaFoto == null) return "Imagem vazia!";

    let file = novaFoto;
    
    const storageRef = ref(storage, `images/${username}`);
    const uploadTask = uploadBytesResumable(storageRef,file);

    return await uploadTask.on("state_changed", 
      snapshot => {},
      error => {
        callback(error,null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then( url => {
          callback(null,url);
        })
      }
    )
}
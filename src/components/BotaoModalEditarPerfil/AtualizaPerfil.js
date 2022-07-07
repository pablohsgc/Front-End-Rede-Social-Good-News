import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export async function atualizaPerfil(novoNome,novaBio,novaFoto){
    if(novaFoto == null) return "Imagem vazia!";

    let file = novaFoto;
    
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,file);

    return await uploadTask.on("state_changed", 
      snapshot => {},
      error => {
        return error;
      },
      async () => {
        return await getDownloadURL(uploadTask.snapshot.ref).then( url => {
          return url;
        })
      }
    )
}
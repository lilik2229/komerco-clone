import { Observable, of } from "rxjs";

import { MockArticles } from '../shared/models/article/articles.mock';

export class AngularFireAuthStubService {
  auth = {
    currentUser:"currentUser",
    
    signInWithEmailAndPassword(email:string,password:string):Promise<boolean>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1);

        setTimeout(() => {
          reject(false);
        }, 1);
      }); 
    },

    signOut(): void{},

    onAuthStateChanged(): void{}    
  };
}

import { Observable , of } from 'rxjs';

export class AuthStubService {
  public logout(): void {}

  public isLogin(): boolean {
    return true;
  }

  public setOnAuthStateChanged(): void {
  }
}

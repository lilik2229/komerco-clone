import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/apis/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.logout();
    // ログイン/ログアウト時の動作を設定
    this.authService.setOnAuthStateChanged();
  }

  login(email: string, password: string): void {
    this.authService
      .login(email, password)
      .then(
        // ログイン後,コンポーネントに実施させる処理はここに書く
        // ログイン失敗時も実行される
        // ページ遷移はsetOnAuthStateChangedで実施されるので、ここには不要
      );
  }

  logout(): void {
    this.authService.logout();
  }
}

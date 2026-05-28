import {Page} from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }
}
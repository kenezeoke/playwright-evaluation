import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { OnBoardPage } from '../pages/OnBoardPage';
import testCases from '../data/testCases.json';


test.describe('Data Driven Task Validation', () => {

for (const testCase of testCases) {


test(`Validate task "${testCase.task}" in ${testCase.project}`, async ({ page }) => {

  const loginPage = new LoginPage(page);
  const onboardPage = new OnBoardPage(page);

  // Navigate to app
  await loginPage.goto();

  // Login
  await loginPage.login('admin', 'password123');

  //Login with hidden credentials
  // await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);

  // Open project
  await onboardPage.openProject(testCase.project);

  // Validate task + column + tags
  await onboardPage.verifyTaskInColumn(testCase.task, testCase.column, testCase.tags);
});

}

});

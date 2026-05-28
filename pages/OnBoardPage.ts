import {expect, Page} from '@playwright/test';

export class OnBoardPage {
  constructor(public page: Page) {}

  async openProject(projectName: string) {
    await this.page.getByRole('button', { name: projectName }).click();
  }

    async verifyTaskInColumn(taskName: string, columnName: string, tags: string[]) {
        const column = this.page.locator( 'div.flex.flex-col.w-80', { has: this.page.locator('h2', { hasText: columnName }) });
        const taskCard = column.locator('div.bg-white', { has: this.page.locator('h3', { hasText: taskName }) });

        await expect(taskCard).toBeVisible();
        
        for (const tag of tags) {
            await expect(taskCard.locator('span', { hasText: tag })).toBeVisible();
        }
    }

}
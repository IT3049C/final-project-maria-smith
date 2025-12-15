import { test, expect } from '@playwright/test';

test.describe('Rock Paper Scissors', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/#/?showModal=true');
    await page.locator('#playerName').fill('TestPlayer');
    await page.getByText('Save').click();
    
    await page.goto('/#/rps');
  });

  test('should display game settings modal on load', async ({ page }) => {
    await expect(page.locator('.modal-header h3')).toHaveText('Game Settings');
    await expect(page.locator('#difficulty')).toBeVisible();
  });

  test('should change difficulty setting', async ({ page }) => {
    const dropdown = page.locator('#difficulty');
    await dropdown.selectOption('hard');
    
    await expect(dropdown).toHaveValue('hard');
  });

  test('should start game when clicking Start button', async ({ page }) => {
    await page.getByText('Start').click();
    
    await expect(page.locator('.moves-container')).toBeVisible();
    await expect(page.getByText('ROCK', { exact: true })).toBeVisible();
    await expect(page.getByText('PAPER', { exact: true })).toBeVisible();
    await expect(page.getByText('SCISSORS', { exact: true })).toBeVisible();
  });

  test('should navigate home when clicking Quit', async ({ page }) => {
    await page.getByText('Quit').click();
    
    await expect(page).toHaveURL('#/');
  });

  test('should display player name on scoreboard', async ({ page }) => {
    await page.getByText('Start').click();
    
    await expect(page.getByText('TestPlayer')).toBeVisible();
  });

  test('should play a round when clicking a move', async ({ page }) => {
    await page.getByText('Start').click();
    await page.getByText('ROCK', { exact: true }).click();
    
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 1' })).toBeVisible();
  });

  test('should update score after playing a round', async ({ page }) => {
    await page.getByText('Start').click();
    
    const initialPlayerScore = await page.locator('.scoreboard').textContent();
    await page.getByText('PAPER', { exact: true }).click();
    
    // Wait for score to update
    await page.waitForTimeout(500);
    const updatedScore = await page.locator('.scoreboard').textContent();
    
    expect(initialPlayerScore).not.toEqual(updatedScore);
  });

  test('should display both player and CPU moves', async ({ page }) => {
    await page.getByText('Start').click();
    await page.getByText('SCISSORS', { exact: true }).click();
    
    await expect(page.getByRole('img', { name: 'scissors icon' })).toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test.describe('Rock Paper Scissors', () => {
  test.beforeEach(async ({ page, context }) => {
    // Set player name in localStorage
    await context.addInitScript(() => {
      localStorage.setItem('gameSettings', JSON.stringify({ 
        playerName: 'TestPlayer',
        games: { rps: { difficulty: 'normal' } }
      }));
    });
    await page.goto('/rps');
  });

  test('should display game settings modal on load', async ({ page }) => {
    await expect(page.locator('.modal-header h3')).toHaveText('Game Settings');
    await expect(page.locator('#difficulty')).toBeVisible();
  });

  test('should have difficulty dropdown with all options', async ({ page }) => {
    const dropdown = page.locator('#difficulty');
    
    await expect(dropdown).toBeVisible();
    await expect(dropdown.locator('option[value="easy"]')).toBeVisible();
    await expect(dropdown.locator('option[value="normal"]')).toBeVisible();
    await expect(dropdown.locator('option[value="hard"]')).toBeVisible();
  });

  test('should change difficulty setting', async ({ page }) => {
    const dropdown = page.locator('#difficulty');
    await dropdown.selectOption('hard');
    
    await expect(dropdown).toHaveValue('hard');
  });

  test('should start game when clicking Start button', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    
    await expect(page.locator('.moves-container')).toBeVisible();
    await expect(page.getByText('ROCK')).toBeVisible();
    await expect(page.getByText('PAPER')).toBeVisible();
    await expect(page.getByText('SCISSORS')).toBeVisible();
  });

  test('should navigate home when clicking Quit', async ({ page }) => {
    await page.getByRole('button', { name: 'Quit' }).click();
    
    await expect(page).toHaveURL('/');
  });

  test('should display player name on scoreboard', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    
    await expect(page.getByText('TestPlayer')).toBeVisible();
  });

  test('should play a round when clicking a move', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByText('ROCK').click();
    
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 1' })).toBeVisible();
    await expect(page.locator('.result-msg')).not.toBeEmpty();
  });

  test('should update score after playing a round', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    
    const initialPlayerScore = await page.locator('.scoreboard').textContent();
    await page.getByText('PAPER').click();
    
    // Wait for score to update
    await page.waitForTimeout(500);
    const updatedScore = await page.locator('.scoreboard').textContent();
    
    expect(initialPlayerScore).not.toEqual(updatedScore);
  });

  test('should display both player and CPU moves', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByText('SCISSORS').click();
    
    await expect(page.locator('.player-move img')).toBeVisible();
    await expect(page.locator('.cpu-move img')).toBeVisible();
  });

  test('should reset game when clicking Reset button', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByText('ROCK').click();
    await page.getByText('PAPER').click();
    
    await page.getByRole('button', { name: 'Reset' }).click();
    
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 0' })).toBeVisible();
  });

  test('should open settings dropdown when clicking gear icon', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.locator('.gear-container img').click();
    
    await expect(page.locator('.settings-dropdown')).toBeVisible();
    await expect(page.getByText('Difficulty')).toBeVisible();
    await expect(page.getByText('Return Home')).toBeVisible();
  });

  test('should close settings dropdown when clicking outside', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.locator('.gear-container img').click();
    
    await page.locator('.rps-container').click();
    await expect(page.locator('.settings-dropdown')).not.toBeVisible();
  });

  test('should open difficulty modal from settings dropdown', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.locator('.gear-container img').click();
    await page.locator('.settings-dropdown').getByText('Difficulty').click();
    
    await expect(page.locator('.modal-header h3')).toHaveText('Game Settings');
  });

  test('should navigate home from settings dropdown', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    await page.locator('.gear-container img').click();
    await page.locator('.settings-dropdown').getByText('Return Home').click();
    
    await expect(page).toHaveURL('/');
  });

  test('should display current difficulty level', async ({ page }) => {
    await page.locator('#difficulty').selectOption('easy');
    await page.getByRole('button', { name: 'Start' }).click();
    
    await expect(page.getByText('Difficulty: Easy')).toBeVisible();
  });

  test('should increment game count with each round', async ({ page }) => {
    await page.getByRole('button', { name: 'Start' }).click();
    
    await page.getByText('ROCK').click();
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 1' })).toBeVisible();
    
    await page.getByText('PAPER').click();
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 2' })).toBeVisible();
    
    await page.getByText('SCISSORS').click();
    await expect(page.locator('.game-count').filter({ hasText: 'Games: 3' })).toBeVisible();
  });
});

// Import the testing framework (e.g., Jest)
import { loadAnimalImage, handleKnowMoreClick } from '../assets/scripts/main';

// Test the loadAnimalImage function
test('loadAnimalImage with valid URL', () => {
  document.body.innerHTML = '<div class="layer"></div>';
  loadAnimalImage('assets/images/fennec.jpg');
  const layerDiv = document.querySelector('.layer');
  expect(layerDiv.style.backgroundImage).toContain('assets/images/fennec.jpg');
});

test('loadAnimalImage with invalid URL', () => {
  document.body.innerHTML = '<div class="layer"></div>';
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  loadAnimalImage('invalid-url.jpg');
  expect(consoleSpy).toHaveBeenCalled();
  consoleSpy.mockRestore();
});

// Test the handleKnowMoreClick function
test('handleKnowMoreClick with valid click event', () => {
  const mockEvent = { preventDefault: jest.fn() };
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  handleKnowMoreClick(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
  expect(consoleSpy).toHaveBeenCalledWith('Know more button clicked');
  consoleSpy.mockRestore();
});

test('handleKnowMoreClick with invalid event data', () => {
  const invalidEvent = {};
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  handleKnowMoreClick(invalidEvent);
  expect(consoleSpy).toHaveBeenCalled();
  consoleSpy.mockRestore();
});

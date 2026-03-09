import { getRandomIndex } from '../src/utils';
import { describe, expect, test } from 'vitest';

describe('getRandomIndex', () => {

  // --- Cas nominaux ---

  test('generer un nombre entre 0 et MAX', () => {
    const MAX = 10;
    const randomIndex = getRandomIndex(MAX);

    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThan(MAX);
  });

  test('retourne toujours 0 quand max vaut 1', () => {
    const result = getRandomIndex(1);
    expect(result).toBe(0);
  });

  test('retourne 0 quand max vaut 0', () => {
    const result = getRandomIndex(0);
    expect(result).toBe(0);
  });

  test('le resultat est toujours un entier', () => {
    for (let i = 0; i < 50; i++) {
      const result = getRandomIndex(100);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('le resultat reste dans les bornes sur 100 appels', () => {
    const MAX = 5;
    for (let i = 0; i < 100; i++) {
      const result = getRandomIndex(MAX);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(MAX);
    }
  });

  test('fonctionne avec un max decimal (1.5)', () => {
    for (let i = 0; i < 50; i++) {
      const result = getRandomIndex(1.5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(1.5);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('fonctionne avec un tres grand nombre', () => {
    const MAX = 1_000_000;
    const result = getRandomIndex(MAX);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(MAX);
  });

  // --- Cas limites / entrées invalides ---

  test('affiche une erreur si la valeur est une string', () => {
    const result = getRandomIndex('demo');
    expect(result).toBeNaN();
  });

  test('retourne NaN si aucun argument n\'est passe', () => {
    const result = getRandomIndex();
    expect(result).toBeNaN();
  });

  test('retourne NaN si la valeur est undefined', () => {
    const result = getRandomIndex(undefined);
    expect(result).toBeNaN();
  });

  test('retourne 0 si la valeur est null', () => {
    // null est converti en 0 par l'operateur *
    const result = getRandomIndex(null);
    expect(result).toBe(0);
  });

  test('retourne un nombre negatif ou 0 si max est negatif', () => {
    for (let i = 0; i < 50; i++) {
      const result = getRandomIndex(-10);
      expect(result).toBeLessThanOrEqual(0);
      expect(result).toBeGreaterThanOrEqual(-10);
    }
  });

  test('retourne NaN si la valeur est un objet', () => {
    const result = getRandomIndex({});
    expect(result).toBeNaN();
  });

  test('retourne 0 si la valeur est false (boolean)', () => {
    // false est converti en 0
    const result = getRandomIndex(false);
    expect(result).toBe(0);
  });

  test('retourne 0 si la valeur est true (boolean)', () => {
    // true est converti en 1 → Math.floor(rand * 1) = 0
    const result = getRandomIndex(true);
    expect(result).toBe(0);
  });

});
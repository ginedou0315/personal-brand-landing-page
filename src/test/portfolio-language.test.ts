import { describe, expect, it } from 'vitest';
import { languageSearch } from '@/lib/portfolio-copy';

describe('Portfolio language selection', () => {
  it.each(['en', 'de', 'fr', 'it'])('accepts the requested %s version', lang => {
    expect(languageSearch({ lang })).toEqual({ lang });
  });
  it('rejects unsupported language parameters', () => {
    expect(languageSearch({ lang: 'es' })).toEqual({});
    expect(languageSearch({ lang: 'constructor' })).toEqual({});
  });
  it('defaults a missing language without requiring search inputs', () => {
    expect(languageSearch({})).toEqual({});
  });
});
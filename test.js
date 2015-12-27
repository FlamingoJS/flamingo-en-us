import { expect } from 'chai';
import languages from './';

describe('index', () => {
  const expectedLanguages = ['enUS', 'ptBR'];

  it('should have the languages key', () => {
    expectedLanguages.map((language) => {
      expect(languages).to.have.property(language);
    });
  });

  it('the language should be an object', () => {
    expectedLanguages.map((language) => {
      expect(languages[language]).to.be.an('object');
    });
  });
});

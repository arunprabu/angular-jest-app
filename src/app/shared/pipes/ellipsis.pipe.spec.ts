import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('creates an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  // testing the pipe without param
  it(`transforms 'random text' into 'random text' when no params mentioned`, () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text');
    expect(transformedText).toBe('random text');
  });

  // testing the pipe with param
  it(`transforms 'random text' into 'random text...' when param mentioned`, () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text', 6);
    expect(transformedText).toBe('random...');
  });

  // negative test with empty string
  it(`should throw an error if empty string is passed to be transformed`, () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('');
    expect(transformedText).toBe('Invalid Input');
  });
});

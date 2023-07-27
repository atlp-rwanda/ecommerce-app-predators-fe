import { add } from '../sample';

describe('Should pass', () => {
  it('should pass this test', (done) => {
    const ans = add(1, 2);
    expect(ans).toBe(3);
    done();
  });
});

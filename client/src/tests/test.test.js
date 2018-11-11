import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import {initual,c} from '../lib/forTesting';
import {sum,ac} from '../lib/forTesting1.js';
jest.mock('../lib/forTesting.js');
initual.mockImplementation(() => 1);
c.mockImplementation(() => 'c');


 describe('sum', () => {
    it('should return 4 for arguments 1 and 2', () => {
       expect(sum(1, 2)).toBe(4);
    });
 }); 

 describe('ac', () => {
    it(`should returt 'ac'`, () => {
       expect(ac()).toBe('ac');
    });
 }); 

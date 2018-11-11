import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import {initual} from '../lib/forTesting';
import {sum} from '../lib/forTesting1.js';
jest.mock('../lib/forTesting.js');
initual.mockImplementation(() => 1);


 describe('sum', () => {
    it('should return 4 for arguments 1 and 2', () => {
       expect(sum(1, 2)).toBe(4);
    });
 }); 

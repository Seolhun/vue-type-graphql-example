import { sequelize } from '../../../config/database';
import { logger } from '../../../config/logger';

import { DivisionRepository } from '../../../repository/division/DivisionRepository';

const divisionRepository = new DivisionRepository();
describe('#DivisionRepository', () => {
  test('Division FindOne By Email', () => {
    expect(divisionRepository.findOne({name: 'Dev'})).toBe({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});

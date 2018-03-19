import { sequelize } from '../../../config/database';
import { logger } from '../../../config/logger';

import { BookRepository } from '../../../repository/book/BookRepository';

const bookRepository = new BookRepository();
describe('#BookRepository', () => {
  test('Book FindOne By Name', () => {
    expect(bookRepository.findOne({name: ''})).toBe({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});

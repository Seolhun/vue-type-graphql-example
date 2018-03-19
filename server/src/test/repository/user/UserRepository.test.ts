import { UserRepository } from '../../../repository/user/UserRepository';

const userRepository = new UserRepository();
describe('#UserRepository', () => {

  test('User FindOne By Email', () => {
    expect(userRepository.findOne({email: 'shun10114@gmail.com', name: ''})).toBe({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});

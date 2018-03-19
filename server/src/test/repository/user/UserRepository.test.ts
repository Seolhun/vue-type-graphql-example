import { UserRepository } from '../../../repository/user/UserRepository';

const userRepository = new UserRepository();
describe('#UserRepository', () => {
  test('User findOne by UK', () => {
    expect(userRepository.findOne({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAll', () => {
    expect(userRepository.findAll().then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByIds', () => {
    expect(userRepository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByPaging', () => {
    expect(userRepository.findAllByPaging({email: 'shun10114@gmail.com', name: ''}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User create', () => {
    expect(userRepository.create({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User update', () => {
    expect(userRepository.update({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User delete', () => {
    expect(userRepository.delete({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});

interface AbstractRepository<T> {
  create(T);
  findOneById(T);
  findAllByIds(T);
  updateById(T);
  deleteById(T);
}

export default AbstractRepository;

enum Order {
  DESC = 'DESC',
  ASC = 'ASC',
}

interface AbstractRepository<T> {
  create(T);
  findOne(T);
  findAll(T, offset?: number, limit?: number, order?: Order);
  findAllByIds(ids: number[], order?: Order);
  updateById(T);
  deleteById(T);

  getUniqueCriteria(T);
}

export { AbstractRepository, Order };

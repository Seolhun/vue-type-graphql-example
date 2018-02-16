enum Order {
  DESC = 'DESC',
  ASC = 'ASC',
}

abstract class AbstractRepository<T> {
  abstract create(T);
  abstract findOne(T);
  abstract findAll(T, offset?: number, limit?: number, order?: Order);
  abstract findAllByIds(ids: number[], order?: Order);
  abstract update(T);
  abstract delete(T);

  getUniqueCriteria(T, args: string[]) {
    const data = {};
    args.forEach((arg) => {
      if (T[arg]) {
        return data[arg] = T[arg];
      }
    });
    return data;
  }
}

export { AbstractRepository, Order };

type Order = 'DESC' | 'ASC';

abstract class AbstractRepository<T> {
  abstract create(T);
  abstract findOne(T);
  abstract findAll(order?: Order);
  abstract findAllByPaging(T, offset?: number, limit?: number, order?: Order);
  abstract findAllByIds(ids: number[], order?: Order);
  abstract update(T);
  abstract delete(T);

  getUniqueCriteria(T, colums: string[]): any[] {
    const params: any[] = [];
    colums.forEach((colum) => {
      if (T[colum]) {
        const data = {};
        data[colum] = T[colum];
        params.push(data);
      }
    });
    return params;
  }
}

export { AbstractRepository, Order };

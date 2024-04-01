({
  async getById(id) {
    console.log('getById id', id);
    return await db('Account').read(id, ['login', 'accountId']);
  },
});

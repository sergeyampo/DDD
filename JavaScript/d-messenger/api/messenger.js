({
  async send([{ fromId, toId, message }]) {
    const doUsersExist = await Promise.all([
      api.account.getById(fromId),
      api.account.getById(toId)]
    ).then((r) => r.map(Boolean).every(Boolean));
    if (!doUsersExist) {
      return { status: 'error', message: 'no such user(s)' };
    }
    await api.messenger.saveMessage({ fromId, message });
    console.log(
      { method: 'messenger.send', fromId, toId, message }
    ); // No to Id
    return { status: 'ok' };
  },

  async readFromHistory({ offset, limit }) {
    console.log({ method: 'messenger.read', offset, limit });
    return { status: 'ok' };
  },

  async delete({ id }) {
    console.log({ method: 'messenger.delete', id });
    return { status: 'ok' };
  },

  async edit({ id, arg }) {
    console.log({ method: 'messenger.edit', id, arg });
    return { status: 'ok' };
  },

  async saveMessage({ fromId, message }) {
    await db('Message').create({ areaId: '1', fromId, text: message });
  },
});

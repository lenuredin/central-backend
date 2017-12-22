
module.exports = {
  getByBearerToken: (token) => ({ simply, Session }) =>
    simply.getOneWhere('sessions', [ { token }, [ 'expires', '>', 'now()' ] ], Session)
};

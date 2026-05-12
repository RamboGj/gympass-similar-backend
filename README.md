# App

Gympass style app.

## RFs (Requisitos funcionais)

- [ ] It must be possible to register;
- [ ] It must be possible to authenticate;
- [ ] It must be possible to GET authenticated user profile;
- [ ] It must be possible to GET number of check-ins from authenticated user;
- [ ] It must be possible to the user to GET his check-ins history;
- [ ] It must be possible to the user to GET near gyms;
- [ ] It must be possible to the user to GET gyms by their name;
- [ ] It must be possible to the user to perform check-in in a gym;
- [ ] It must be possible to validate an user's check-in;
- [ ] It must be possible to register a gym;

## RNs (Regras de negócio)

- [ ] User must not be able to register with a duplicated email;
- [ ] User must not be able to check-in twice in the same day;
- [ ] User must not be able to check-in if he's not near(100m) the gym;
- [ ] Check-in must be validate until 20 minutes after its creation;
- [ ] Check-in must be validated by admins only;
- [ ] Gym must be registered by admins only;

## RNFs (Requisitos não-funcionais)

- [ ] User password must be encripted;
- [ ] Data must be stored and persisted in a PostgreSQL database;
- [ ] All list must be paginated by 20 items per page;
- [ ] User must be identified by JWT;

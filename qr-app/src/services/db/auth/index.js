import { auth } from "../config";

export default {
  login: async (credentials, { onSuccess, onError }) => {
    switch (credentials.type) {
      case 'googleOAuth':
        return null;
      default:
        return await auth
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then((response) => onSuccess && onSuccess(response))
          .catch((e) => onError && onError());
    }
  },
  signUp: async (credentials, { onSuccess, onError }) => {
    switch (credentials.type) {
      case 'googleOAuth':
        return null;
      default:
        return await auth
          .createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
          )
          .then((response) => onSuccess && onSuccess(response))
          .catch((e) => onError && onError());
    }
  },
};

export default {
  environment: {
    ALLOWED_ORIGIN: "http://www.allowedorigin.com"
  },
  jwt: {
    SECRET_KEY:
      process.env.SECRET_KEY_JWT ||
      "vpztKX8qtDYA$PZ46Oaei!T&jZ4JtA%!cvO5Ov*K#53ZAIy7F4",
  },
};

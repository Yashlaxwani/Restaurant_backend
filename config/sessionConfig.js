const sessionConfig = {
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Note: In production, set secure to true if using HTTPS
  };

  export default sessionConfig;
  
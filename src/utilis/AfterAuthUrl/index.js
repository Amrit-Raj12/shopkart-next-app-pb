const isAfterAuth = (pathname) => {
  const authUrl = ["/auth/sign-in", "/auth/sign-up"];
  const isAfterAuth = authUrl.includes(pathname.toLowerCase().trim());
  return isAfterAuth;
};

export default isAfterAuth;

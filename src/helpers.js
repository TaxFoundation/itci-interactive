export const setCookie = (name, value, expDays) => {
  const date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const getCookie = name => {
  const cookieString = decodeURIComponent(document.cookie).split(';');
  const theCookie = cookieString.filter(cookie => cookie.indexOf(name) > -1)[0];
  return theCookie ? theCookie.split('=')[1] : null;
};

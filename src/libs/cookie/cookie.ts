import cookie from "js-cookie";

class Cookie {
  public getCookie(key: string): string | undefined {
    return cookie.get(key);
  }

  public setCookie(key: string, value: string, options?: { [key: string]: any }): void {
    cookie.set(key, value, options);
  }

  public removeCookie(key: string): void {
    cookie.remove(key);
  }
}

export default new Cookie();

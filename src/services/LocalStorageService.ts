class LocalStorageService {
  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static getItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  static setRegistration(registration: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('registration', registration);
    }
  }

  static getRegistration(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('registration') || "";
    }
    return "";
  }

  static setPostCode(postCode: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('postCode', postCode);
    }
  }

  static getPostcode(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('postCode') || "";
    }
    return "";
  }

  static resetRegistration() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('registration');
    }
  }

  static resetPostcode() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('postCode');
    }
  }

}

export default LocalStorageService;

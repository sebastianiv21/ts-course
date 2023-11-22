export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_UPPER = "Password must contain at least one uppercase letter",
  NO_LOWER = "Password must contain at least one lowercase letter",
  NO_NUMBER = "Password must contain at least one number",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.isShort(password, reasons);

    this.hasUpper(password, reasons);

    this.hasLower(password, reasons);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);

    this.hasNumber(password, basicCheck.reasons);

    return {
      valid: basicCheck.reasons.length > 0 ? false : true,
      reasons: basicCheck.reasons,
    }
  }

  private hasNumber(password: string, reasons: PasswordErrors[]) {
    const hasNumberRegExp = /\d/.test(password);
    if (!hasNumberRegExp) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private isShort(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private hasUpper(password: string, reasons: PasswordErrors[]) {
    if (password.toUpperCase() === password) {
      reasons.push(PasswordErrors.NO_LOWER);
    }
  }

  private hasLower(password: string, reasons: PasswordErrors[]) {
    if (password.toLowerCase() === password) {
      reasons.push(PasswordErrors.NO_UPPER);
    }
  }
}

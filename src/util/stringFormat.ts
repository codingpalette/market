
/**
 * 문자열 포맷팅 함수
 * console.log(isEmpty(''));        // true
 * console.log(isEmpty(' '));       // true
 * console.log(isEmpty([]));        // true
 * console.log(isEmpty({}));        // true
 * console.log(isEmpty(null));      // true
 * console.log(isEmpty(undefined)); // true
 * console.log(isEmpty(0));         // false
 * console.log(isEmpty(false));     // false
 * */
export function isEmpty(value: any): boolean {
  if (value == null) { // null 또는 undefined 체크
    return true;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}


export function isValidLoginId(loginId: any): boolean {
  if (loginId == null) { // null 또는 undefined 체크
    return false;
  }
  // 공백 제거
  const trimmedLoginId = loginId.trim();

  // 영문자와 숫자만 허용하고, 최소 4글자 이상인지 확인하는 정규 표현식
  const regex = /^[A-Za-z0-9]{4,}$/;

  return regex.test(trimmedLoginId);
}

export function isValidPassword(password: any): boolean {
  console.log('password', password)

  if (password == null) { // null 또는 undefined 체크
    return false;
  }
  // 6자 이상이면서 영문자, 숫자, 특수문자를 모두 포함하는 정규 표현식
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  console.log('password', password)

  return regex.test(password);
}

export function isValidNickname(nickname: any): boolean {
  // 한글, 영문, 숫자만 허용하고, 최소 2글자 이상인 정규 표현식
  const regex = /^[가-힣A-Za-z0-9]{2,}$/;

  return regex.test(nickname);

}

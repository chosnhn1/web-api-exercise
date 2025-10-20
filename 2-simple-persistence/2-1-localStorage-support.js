/**
 * Check availability of local storage.
 * @returns true when localStorage available, if not false
 */
function isLocalStorageAvailable() {
  try {
    // window.localStorage가 undefined인지 확인
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    // 사용자가 막은 경우에는 error가 발생함 (참조만 해도 접근금지예외)
    return false;
  }
}

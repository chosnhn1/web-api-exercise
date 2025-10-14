const currentUser = {
  username: 'sysadmin'
};

// 서버가 분석하고 싶은 데이터
const data = {
  user: currentUser.username,
  lastVisited: new Date()
};

// 사용자가 페이지를 떠나면 (visibilityState === hidden)
// 서버에 떠남을 기록하도록 해보자
// 사용자는 떠날 때 응답을 기다릴 필요가 없다
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/api/analytics', JSON.stringify(data));
  }
});
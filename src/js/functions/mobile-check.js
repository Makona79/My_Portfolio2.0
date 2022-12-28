import vars from '../_vars';

export const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.documentElement.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.documentElement.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};
//
//let getType = /Android|iPhone|iPad|IEMobile/i.test(window.navigator.userAgent) ? 'Mobile' : 'Desktop';

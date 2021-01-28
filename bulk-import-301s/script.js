var hostingContainer = document.getElementsByClassName('hosting-tab')[0];
var hostingController = angular.element(hostingContainer);
var scope = hostingController.scope();

var redirects = [
  {source: '/landing/communities/covid-19-pcr-fit-to-fly-test-for-travel-to-gran-canaria', target: '/community/covid-19-pcr-fit-to-fly-test-for-travel-to-gran-canaria'},
  {source: '/landing/communities/covid-19-antigen-test-test-for-travel-to-gran-canaria', target: '/community/covid-19-antigen-test-test-for-travel-to-gran-canaria'},
  {source: '/landing/communities/conscious-travel-covid-19-pcr-fit-to-fly-test-for-travel', target: '/community/conscious-travel-covid-19-pcr-fit-to-fly-test-for-travel'},
  {source: '/landing/communities/conscious-travel-covid-19-antigen-swab-test', target: '/community/conscious-travel-covid-19-antigen-swab-test'},
  {source: '/landing/communities/covid-19-pcr-fit-to-fly-test-for-travel-to-lanzarote', target: '/community/covid-19-pcr-fit-to-fly-test-for-travel-to-lanzarote'},
  {source: '/landing/communities/true-travel/covid-19-pcr-fit-to-fly-test-for-travel-true-travel', target: '/community/covid-19-pcr-fit-to-fly-test-for-travel-true-travel'},
  {source: '/landing/communities/true-travel/covid-19-antigen-swab-test-true-travel', target: '/community/covid-19-antigen-swab-test-true-travel'},
  {source: '/landing/communities/true-travel/covid-19-antibody-test-true-travel', target: '/community/covid-19-antibody-test-true-travel'}
];

redirects.forEach(function (rule) {
  scope.redirectPath = rule.source;
  scope.redirectTarget = rule.target;
  scope.addRedirect();
});
var hostingContainer = document.getElementsByClassName('hosting-tab')[0];
var hostingController = angular.element(hostingContainer);
var scope = hostingController.scope();

var redirects = [
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-uae', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-uae'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-dubai', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-dubai'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-italy', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-italy'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-japan', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-japan'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-gran-canaria', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-gran-canaria'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-cyprus', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-cyprus'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-taiwan', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-taiwan'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-germany', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-germany'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-hong-kong', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-hong-kong'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-fiji', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-fiji'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-india', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-india'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-tenerife', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-tenerife'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-china', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-china'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-singapore', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-singapore'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-indonesia', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-indonesia'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-fuerteventura', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-fuerteventura'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-thailand', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-thailand'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-saudi-arabia', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-saudi-arabia'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-vietnam', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-vietnam'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-morocco', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-morocco'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-pakistan', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-pakistan'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-russia', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-russia'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-lanzarote', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-lanzarote'},
  {source: '/landing/destinations/covid-19-pcr-fit-to-fly-test-for-travel-to-egypt', target: '/destination/covid-19-pcr-fit-to-fly-test-for-travel-to-egypt'},
  {source: '/landing/destinations/covid-19-antigen-swab-test-for-travel-to-italy', target: '/destination/covid-19-antigen-swab-test-for-travel-to-italy'},
  {source: '/landing/destinations/covid-19-antigen-swab-test-for-travel-to-germany', target: '/destination/covid-19-antigen-swab-test-for-travel-to-germany'},
];

redirects.forEach(function (rule) {
  scope.redirectPath = rule.source;
  scope.redirectTarget = rule.target;
  scope.addRedirect();
});
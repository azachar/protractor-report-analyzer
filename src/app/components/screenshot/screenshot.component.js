class ScreenshotController {
  constructor($scope) {
    'ngInject';
    this.show = true;

    this.$onInit = () => {
      $scope.$watch(() => this.spec.filtering.showScreenshots, (value) => {
        this.show = value;
      });
    }
  }
}

export let ScreenshotComponent = {
  bindings: {
    screenshots: '<model',
    htmls: '<model2'
  },
  require: {
    spec: '^spec'
  },
  templateUrl: 'app/components/screenshot/screenshot.html',
  controller: ScreenshotController
};

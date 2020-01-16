var dataArray = [
    {
        id: 1,
        text: "Animals",
        items: [
            {
                id: 2,
                text: "Cat",
                items: [
                    { id: 5, text: "Abyssinian" },
                    { id: 6, text: "Aegean cat" },
                    { id: 7, text: "Australian Mist" }
                ]
            },
            {
                id: 3,
                text: "Dog",
                items: [
                    { id: 8, text: "Affenpinscher" },
                    { id: 9, text: "Afghan Hound" },
                    { id: 10, text: "Airedale Terrier" },
                    { id: 11, text: "Akita Inu" }
                ]
            },
            {
                id: 4,
                text: "Cow"
            }
        ]
    },
    {
        id: 12,
        parentId: 0,
        text: "Birds",
        items: [
            { id: 13, text: "Akekee" },
            { id: 14, text: "Arizona Woodpecker" },
            { id: 15, text: "Black-chinned Sparrow" }
        ]
    }
];
var myViewModel = {
    treeViewData: dataArray,
    enableAnimation: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.treeViewData = dataArray;
    $scope.enableAnimation = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#demoBox").dxScrollView({
    showScrollbar: 'always'
});
$("#myTreeView").dxTreeView({
    dataSource: dataArray,
    width: "auto",
    animationEnabled: true
});
$("#animationSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myTreeView").dxTreeView("instance").option("animationEnabled", e.value);
    }
});
//<!--/@jQuery-->
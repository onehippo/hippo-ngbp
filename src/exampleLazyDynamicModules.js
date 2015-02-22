var json = [
{
  "name": "app",
  "abstract": true,
  "url": "",
  "views": {
    "root": {
      "templateUrl": "app/layout/views/tpl.layout.html",
      "controller": "LayoutCtrl as layout",
      "requiresAuthorization": true
    },
    "base@app": {
      "templateUrl": "app/layout/views/partials/tpl.base.html"
      // You can go wild and add controllers here and add them to
      // your dependencies below. Eg, My base has own modules different from root.
    },
    "header@app": {"templateUrl": "app/layout/views/partials/tpl.header.html"},
    "nav@app": {"templateUrl": "app/layout/views/partials/tpl.navigation.html"},
    "ribbon@app": {"templateUrl": "app/layout/views/partials/tpl.ribbon.html"}
  },
  "resolve": {},
  "dependencies": [
  {
    "module": "app.Layout",
    "files": [
    "app/layout/controllers/LayoutCtrl.js"
    // Don't put comments like this in your json, but I discovered that you
    // can list controllers/directives once in a base module and all children modules will
    // inherit. HOWEVER, that isn't the case for svcs; they must be loaded where/when needed
    // (all the needed controllers and directives for layout),
    // (all the css files needed for layout)
    ]
  },
  {
    "module": "app.Graphs",
    "files": [
    //Don't put comments like this in your json, but I loaded these graphs
    //in layout as they will be used in various modules, so don't need to load again in app
    "app/dashboards/graphs/directives/inline/sparklineContainer.js",
    "app/dashboards/graphs/directives/inline/easyPieChartContainer.js"
    ]
  }
  ]
},
{
  "name": "app.MyDashboard",
  "views": {
    "content@app": {
      "templateUrl": "app/dashboards/_mydashboard/myDb/views/tpl.my.html",
      "controller": "MyDashboardCtrl as myDb",
      "requiresAuthorization": true
    }
  },
  "resolve": {},
  "dependencies": [
  {
    "module": "app.MyDashboard",
    "files": ["app/dashboards/_mydashboard/myDb/controllers/MyDashboardCtrl.js"]
  },
  {
    "module": "app.ToDo",
    "files": [
    "app/dashboards/todo/controllers/TodoCtrl.js",
    "app/dashboards/todo/directives/todoList.js",
    // This svc needs to be loaded every where it is needed
    "app/dashboards/todo/services/ToDoSvc.js"
    ]
  }
  ]
}
];

app.run(function ($q, $rootScope, $state, $window, MenuSvc) {
  // Typical call to my factory, of course does not have to be json
  MenuSvc.all().success(function (states) {
    angular.forEach(states, function (state) {
      try {
        // This is where the magic occurs, so simple, but so hard
        // to find documentation. :(
          var result = [];
          angular.forEach(state.dependencies, function (dependency) {
            result.push({
              "name" : dependency.module,
              "files": dependency.files,
              // this means to load the dependencies in order & not parellel
              // especially important when you are loading css files dynamically
              "serie" : true,
              // cache in memory please
              "cache" : true
            })
          });
          // state.resolve is a function call of state ($stateProvider)
          // [state.resolve] is the property 'resolve' of object 'state' in my json
          state.resolve[state.resolve] = function ($ocLazyLoad) {
            return $ocLazyLoad.load(result)
          };
        } catch (e) {
          console.log('Error: ' + e.message);
        }
        //$stateProviderRef is a global variable I declared in app.config, eg:
        //$urlRouterProviderRef = $urlRouterProvider;
        //$stateProviderRef = $stateProvider;
        //Remember: providers must be instantiated in config
        $stateProviderRef.state(state.name, state);
      })
      // You must designate default state in a dynamic ui-router in the app.run. Must!!
      // but this does not have to be hard-coded. You can do an if statement on a property
      // called, eg 'startUp" above and pass that state name below as a variable
      // eg. $state.go(startUp) which is designated above in the for each
      $state.go('app.MyDashboard');
    });
});
});
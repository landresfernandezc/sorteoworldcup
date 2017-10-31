angular.module('userModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider
                    .when("/",{
                    	templateUrl:'index.html',
                        controller: 'mainController'
                    })
                    .when("/equipos",{
                        templateUrl:'components/equipos/equipos.html',
                        controller: 'equiposController'
                                             })
                    .when("/seleccion",{
                        templateUrl:'components/sorteos/seleccion.html',
                        controller: 'sorteosController'
                    }).when("/repechajes",{
                            templateUrl:'components/sorteos/repechajes.html',
                            controller: 'sorteosController'
                        }).when("/bombos",{
                            templateUrl:'components/sorteos/bombos.html',
                            controller: 'sorteosController'
                        })
			        .otherwise({
			            redirectTo: '/'
			        });
    }
]);
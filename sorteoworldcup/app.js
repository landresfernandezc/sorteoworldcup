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
                        controller: 'seleccionController'
                    }).when("/repechajes",{
                            templateUrl:'components/sorteos/repechajes.html',
                            controller: 'repechajesController'
                    }).when("/bombos",{
                            templateUrl:'components/sorteos/bombos.html',
                            controller: 'bombosController'
                    })
                    .when("/sorteos",{
                        templateUrl:'components/sorteos/sorteos.html',
                        controller: 'sorteosController'
                    })
                    .when("/grupos",{
                        templateUrl:'components/sorteos/sorteos.html',
                        controller: 'sorteosController'
                    })
			        .otherwise({
			            redirectTo: '/'
			        });
    }
]);
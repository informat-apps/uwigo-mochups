var randomScalingFactor = function() {
    return Math.round(Math.random()*10000000)
};


var dataChartBancos = {
  labels: ['Periodo #1', 'Periodo #2', 'Periodo #3', 'Periodo #4', 'Periodo #5', 'Periodo #6'],
  datasets: [
    {
      type: 'line',
      label: 'Saldo del Banco',
      borderColor: COLOR_BLUE,
      borderWidth: 2,
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ]
    },
    {
    label: 'Ingresos',
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    backgroundColor: COLOR_GREEN_TRANSPARENT_2,
    stack: 'PAGADO',
    data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
    ]
  }, {
    label: 'Facturas emitidas por cobrar',
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    backgroundColor: COLOR_GREEN_TRANSPARENT_7,
    stack: 'PAGADO',
    data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
    ]
  }, {
    label: 'Egresos',
    borderWidth: 2,
    borderColor: COLOR_RED,
    backgroundColor: COLOR_RED_TRANSPARENT_7,
    stack: 'DEUDA',
    data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
    ]
  },{
    label: 'Facturas recibidas por pagar',
    borderWidth: 2,
    borderColor: COLOR_RED,
    backgroundColor: COLOR_RED_TRANSPARENT_2,
    stack: 'DEUDA',
    data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
    ]
  }]
};

var handleSweetNotification = function() {
	$('[data-click="swal-primary"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'info',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Primary',
					value: true,
					visible: true,
					className: 'btn btn-primary',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-info"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'info',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Info',
					value: true,
					visible: true,
					className: 'btn btn-info',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-success"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'success',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Success',
					value: true,
					visible: true,
					className: 'btn btn-success',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-warning"]').click(function(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'warning',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Warning',
					value: true,
					visible: true,
					className: 'btn btn-warning',
					closeModal: true
				}
			}
		});
	});

	$('[data-click="swal-danger"]').click(function(e) {
		e.preventDefault();
		swal({
			title: '¿Esta seguro?',
			text: 'No podrás recuperar este información !',
			icon: 'error',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Aceptar',
					value: true,
					visible: true,
					className: 'btn btn-danger',
					closeModal: true
				}
			}
		});
	});
};

var handleChartJs = function() {

    var charts = document.getElementsByClassName('chart-bancos');

		for (var i = 0; i <charts.length; i++) {

			var Chart_1 = new Chart(charts[i].getContext('2d'), {
	        type: 'bar',
	        data: dataChartBancos,
	        options: {
	          maintainAspectRatio: false,
						tooltips: {
							mode: 'index',
							intersect: false
						},
						responsive: true,
						scales: {
							xAxes: [{
								stacked: true,
							}],
							yAxes: [{
								stacked: true
							}]
						}
					}
				});
		}


};


var Uwigo = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleSweetNotification();
						handleChartJs()
        }
    };
}();

















var permisos = {
"730": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "basico",
	"nombre": "listar comprobantes",
	"icono": "fa fa-list",
	},
"731": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "basico",
	"nombre": "nuevo comprobante",
	"icono": "fa fa-plus",
	},
"732": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "basico",
	"nombre": "editar comprobante",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "basico",
	"nombre": "visualizar comprobante",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "basico",
	"nombre": "imprimir comprobante",
	"icono": "fa fa-print",
	},
"734": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "Extra",
	"nombre": "Procesar Comprobante",
	"icono": "fa fa-cogs",
	},
"733": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "Extra",
	"nombre": "Anular Comprobante",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "Extra",
	"nombre": "Nuevo Proceso Masivo",
	"icono": "fa fa-cogs",
	},
"735": {
	"modulo": "Contabilidad",
	"submodulo": "Comprobantes",
	"tipo": "Extra",
	"nombre": "Nuevo Cambio Referencia",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Contabilidad",
	"submodulo": "Procesos Contables",
	"tipo": "Extra",
	"nombre": "Nueva Diferencia de Cambio",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Contabilidad",
	"submodulo": "Procesos Contables",
	"tipo": "Extra",
	"nombre": "Nuevo Proceso de Cierre",
	"icono": "fa fa-cogs",
	},
"884": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Cancelación",
	"tipo": "basico",
	"nombre": "listar cancelación",
	"icono": "fa fa-list",
	},
"885": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Cancelación",
	"tipo": "basico",
	"nombre": "nuevo cancelación",
	"icono": "fa fa-plus",
	},
"886": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Cancelación",
	"tipo": "basico",
	"nombre": "eliminar cancelación",
	"icono": "fa fa-trash",
	},
"887": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Cancelación",
	"tipo": "basico",
	"nombre": "visualizar cancelación",
	"icono": "fa fa-eye",
	},
"888": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Cancelación",
	"tipo": "basico",
	"nombre": "imprimir cancelación",
	"icono": "fa fa-print",
	},
"889": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Caja",
	"tipo": "basico",
	"nombre": "listar depositos de cajas",
	"icono": "fa fa-list",
	},
"890": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Caja",
	"tipo": "basico",
	"nombre": "nuevo deposito de caja",
	"icono": "fa fa-plus",
	},
"892": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Caja",
	"tipo": "basico",
	"nombre": "eliminar deposito de caja",
	"icono": "fa fa-trash",
	},
"893": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Caja",
	"tipo": "basico",
	"nombre": "visualizar deposito de caja",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Caja",
	"tipo": "basico",
	"nombre": "imprimir deposito de caja",
	"icono": "fa fa-print",
	},
"895": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Documento",
	"tipo": "basico",
	"nombre": "nuevo deposito de documento",
	"icono": "fa fa-plus",
	},
"897": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Documento",
	"tipo": "basico",
	"nombre": "eliminar deposito de documento",
	"icono": "fa fa-trash",
	},
"898": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Documento",
	"tipo": "basico",
	"nombre": "visualizar deposito de documento",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Deposito de Documento",
	"tipo": "basico",
	"nombre": "imprimir deposito de documento",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Tesorería - Ingresos",
	"submodulo": "Prorroga",
	"tipo": "Extra",
	"nombre": "Nueva Prorroga",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Programación Pagos",
	"tipo": "basico",
	"nombre": "nueva programación de pago",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Programación Pagos",
	"tipo": "basico",
	"nombre": "eliminar programación de pago",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Programación Pagos",
	"tipo": "basico",
	"nombre": "imprimir programación de pago",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Programación Pagos",
	"tipo": "basico",
	"nombre": "visualizar programación de pago",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Autorización Pago",
	"tipo": "basico",
	"nombre": "nueva autorización pago",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Autorización Pago",
	"tipo": "basico",
	"nombre": "eliminar autorización pago",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Autorización Pago",
	"tipo": "basico",
	"nombre": "imprimir autorización pago",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Autorización Pago",
	"tipo": "basico",
	"nombre": "visualizar autorización pago",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "basico",
	"nombre": "nueva emisión",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "basico",
	"nombre": "visualizar emisión",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "Extra",
	"nombre": "Anular emisión",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "Extra",
	"nombre": "Reemitir emisión",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "basico",
	"nombre": "imprimir emisión",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Tesorería - Egresos",
	"submodulo": "Emisión",
	"tipo": "Extra",
	"nombre": "Nuevo egreso directo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Cartolas",
	"tipo": "basico",
	"nombre": "nueva cartola",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Cartolas",
	"tipo": "basico",
	"nombre": "editar cartola",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Cartolas",
	"tipo": "basico",
	"nombre": "eliminar cartola",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Cartolas",
	"tipo": "basico",
	"nombre": "imprimir cartola",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Cartola Electrónica",
	"tipo": "Extra",
	"nombre": "Subir cartola electrónica",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Calce Manual",
	"tipo": "basico",
	"nombre": "nuevo calce manual",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Calce Manual",
	"tipo": "basico",
	"nombre": "visualizar calce manual",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Calce Manual",
	"tipo": "basico",
	"nombre": "editar calce manual",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Calce Manual",
	"tipo": "basico",
	"nombre": "eliminar calce manual",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Descalce",
	"tipo": "basico",
	"nombre": "nuevo descalce",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Anular Partidas Bancarias",
	"tipo": "Extra",
	"nombre": "Nuevo anular partidas contables",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Anular Partidas Contables",
	"tipo": "Extra",
	"nombre": "Nuevo anular partidas contables",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Documentos Caducos",
	"tipo": "basico",
	"nombre": "nuevo documentos caducos",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Tesorería - Bancos",
	"submodulo": "Documentos Caducos",
	"tipo": "basico",
	"nombre": "eliminar documentos caducos",
	"icono": "fa fa-trash",
	},
"946": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "basico",
	"nombre": "listar documentos",
	"icono": "fa fa-plus",
	},
"947": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "basico",
	"nombre": "nuevo documento",
	"icono": "fa fa-plus",
	},
"948": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "basico",
	"nombre": "editar documento",
	"icono": "fa fa-edit",
	},
"949": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "basico",
	"nombre": "eliminar documento",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "Extra",
	"nombre": "Anular Documento",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "Extra",
	"nombre": "Emitir Documento",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "Extra",
	"nombre": "Centralizar Documento",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "basico",
	"nombre": "visualizar documento",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Documentos",
	"submodulo": "Documento",
	"tipo": "Extra",
	"nombre": "Visualizar DTE",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos Proveedores",
	"submodulo": "Documentos Proveedores",
	"tipo": "Extra",
	"nombre": "Descargar Documentos Proveedores",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos Proveedores",
	"submodulo": "Documentos Proveedores",
	"tipo": "Extra",
	"nombre": "Aceptar Documentos Proveedores",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos Proveedores",
	"submodulo": "Documentos Proveedores",
	"tipo": "Extra",
	"nombre": "Rechazar Documentos Proveedores",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos Proveedores",
	"submodulo": "Documentos Proveedores",
	"tipo": "Extra",
	"nombre": "Centralizar Documentos Proveedores",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Documentos Proveedores",
	"submodulo": "Documentos Proveedores",
	"tipo": "Extra",
	"nombre": "Visualizar Documentos Proveedores",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Administración",
	"submodulo": "Contactos",
	"tipo": "basico",
	"nombre": "nuevo contacto",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Administración",
	"submodulo": "Contactos",
	"tipo": "basico",
	"nombre": "editar contacto",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Administración",
	"submodulo": "Contactos",
	"tipo": "basico",
	"nombre": "eliminar contacto",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Administración",
	"submodulo": "Contactos",
	"tipo": "basico",
	"nombre": "visualizar contacto",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Libros",
	"tipo": "Extra",
	"nombre": "Ver Libros Contables",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Libros",
	"tipo": "Extra",
	"nombre": "Ver Libro Mayor",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Libros",
	"tipo": "Extra",
	"nombre": "Ver Libro Diario",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Libros",
	"tipo": "Extra",
	"nombre": "Ver Hojas Timbradas",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Balances",
	"tipo": "Extra",
	"nombre": "Ver Ocho Columnas",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Balances",
	"tipo": "Extra",
	"nombre": "Ver Comprobacion y Saldo",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Balances",
	"tipo": "Extra",
	"nombre": "Ver Inventario Balance",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "Extra",
	"nombre": "Ver Mes Acumulado",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "Extra",
	"nombre": "Ver Doce Periodos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Cuentas Corrientes por Análsis",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Cuentas Corrientes por Cuenta",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Cuenta Selectiva",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Análisis de Vencimiento",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Cartolas",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Contabilidad",
	"submodulo": "Cuentas Corrientes",
	"tipo": "Extra",
	"nombre": "Ver Consulta Saldos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Demostrativo Conciliación",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Demostrativo Conciliación Automática",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Demostrativo Conciliación Manual",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Partidas Bancarias Nulas",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Partidas Contables Nulas",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Bancos",
	"tipo": "Extra",
	"nombre": "Documentos Caducos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Consulta Ingresos ",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Consulta Ingresos Cancelación",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Consulta Ingresos Bancos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Consulta Ingresos Cliente",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Aviso de Cobranza",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Ingresos",
	"tipo": "Extra",
	"nombre": "Circularización Saldos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Egresos",
	"tipo": "Extra",
	"nombre": "Cuentas por pagar",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Reportes - Tesorería",
	"submodulo": "Egresos",
	"tipo": "Extra",
	"nombre": "Cuentas Bancos",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Parámetro de proceso",
	"tipo": "basico",
	"nombre": "nuevo parámetro de proceso",
	"icono": "fa fa-plus",
	},
"726": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Agrupación de Cuentas",
	"tipo": "basico",
	"nombre": "listar agrupación de cuentas",
	"icono": "fa fa-list",
	},
"727": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Agrupación de Cuentas",
	"tipo": "basico",
	"nombre": "nueva agrupación de cuentas",
	"icono": "fa fa-plus",
	},
"728": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Agrupación de Cuentas",
	"tipo": "basico",
	"nombre": "editar agrupación de cuentas",
	"icono": "fa fa-edit",
	},
"729": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Agrupación de Cuentas",
	"tipo": "basico",
	"nombre": "eliminar agrupación de cuentas",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Comprobante ",
	"tipo": "basico",
	"nombre": "nuevo tipo comprobante",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Comprobante ",
	"tipo": "basico",
	"nombre": "editar tipo comprobante",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Comprobante ",
	"tipo": "basico",
	"nombre": "eliminar tipo comprobante",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Atributos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Atributos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tipo Atributos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Atributos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Atributos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Atributos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Ejercicios",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Ejercicios",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Ejercicios",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Ejercicios",
	"tipo": "basico",
	"nombre": "visualizar",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Libros Contables",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Libros Contables",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Libros Contables",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"718": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Plan de Cuenta",
	"tipo": "basico",
	"nombre": "listar plan de cuenta",
	"icono": "fa fa-list",
	},
"719": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Plan de Cuenta",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"720": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Plan de Cuenta",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"721": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Plan de Cuenta",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Definicion Libros",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Definicion Libros",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Definicion Libros",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Definicion Libros",
	"tipo": "basico",
	"nombre": "visualizar",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Definicion Libros",
	"tipo": "basico",
	"nombre": "imprimir",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Setup Proveedores",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Setup Proveedores",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Setup Proveedores",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Setup Proveedores",
	"tipo": "basico",
	"nombre": "imprimir",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Estados Financieros",
	"tipo": "basico",
	"nombre": "imprimir",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Tasas de Cambio",
	"tipo": "basico",
	"nombre": "visualizar tasas de cambio",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Cierres Logico",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Contabilidad",
	"submodulo": "Cierres Logico",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Párametros Bancos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Párametros Ingresos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Párametros Egresos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Párametros Egresos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Párametros Egresos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Bancos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Bancos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Bancos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Cuentas Bancarias",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Cuentas Bancarias",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Cuentas Bancarias",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Formato Cartas",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Formato Cartas",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Tesorería",
	"submodulo": "Formato Cartas",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Grupo Documentos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Grupo Documentos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Grupo Documentos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Unidades de medida",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Unidades de medida",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Unidades de medida",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Impuestos Especificos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Impuestos Especificos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Impuestos Especificos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Definicion Documentos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Definicion Documentos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Definicion Documentos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Definicion Documentos",
	"tipo": "basico",
	"nombre": "visualizar",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Definicion Documentos",
	"tipo": "basico",
	"nombre": "imprimir",
	"icono": "fa fa-print",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Formateador Documetos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Formateador Documetos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Formateador Documetos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"964": {
	"modulo": "Parametros Documentos",
	"submodulo": "Productos",
	"tipo": "basico",
	"nombre": "listar",
	"icono": "fa fa-list",
	},
"965": {
	"modulo": "Parametros Documentos",
	"submodulo": "Productos",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"966": {
	"modulo": "Parametros Documentos",
	"submodulo": "Productos",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"967": {
	"modulo": "Parametros Documentos",
	"submodulo": "Productos",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"968": {
	"modulo": "Parametros Documentos",
	"submodulo": "Productos",
	"tipo": "basico",
	"nombre": "visualizar",
	"icono": "fa fa-eye",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Condicion Compra/Venta",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Condicion Compra/Venta",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Condicion Compra/Venta",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Carga Folio",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Carga Folio",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Carga Caf",
	"tipo": "basico",
	"nombre": "nuevo",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Carga Caf",
	"tipo": "basico",
	"nombre": "autorizar",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Carga Caf",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Conexion IDTE",
	"tipo": "basico",
	"nombre": "nueva",
	"icono": "fa fa-plus",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Conexion IDTE",
	"tipo": "basico",
	"nombre": "editar",
	"icono": "fa fa-edit",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Conexion IDTE",
	"tipo": "basico",
	"nombre": "eliminar",
	"icono": "fa fa-trash",
	},
"0": {
	"modulo": "Parametros Documentos",
	"submodulo": "Conexion IDTE",
	"tipo": "basico",
	"nombre": "desactivar",
	"icono": "fa fa-cogs",
	},
"0": {
	"modulo": "Importadores Datos",
	"submodulo": "Carga Masiva",
	"tipo": "basico",
	"nombre": "listar cargas masivas",
	"icono": "fa fa-list",
	}
}

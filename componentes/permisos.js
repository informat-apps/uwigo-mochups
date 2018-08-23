var handlePermisos = function() {

  var permisos_base = {
    "730": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "basico",
    	"nombre": "Listar Comprobantes",
    	"icono": "fa fa-list",
    },
    "731": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "basico",
    	"nombre": "Nuevo Comprobante",
    	"icono": "fa fa-plus",
    },
    "732": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "basico",
    	"nombre": "Editar Comprobante",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "basico",
    	"nombre": "Visualizar Comprobante",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "basico",
    	"nombre": "Imprimir Comprobante",
    	"icono": "fa fa-print",
    },
    "734": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "extra",
    	"nombre": "Procesar Comprobante",
    	"icono": "fa fa-check-circle",
    },
    "733": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "extra",
    	"nombre": "Anular Comprobante",
    	"icono": "fa fa-ban",
    },
    "0": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "extra",
    	"nombre": "Nuevo Proceso Masivo",
    	"icono": "fa fa-cogs",
    },
    "735": {
    	"modulo": "Contabilidad",
    	"submodulo": "Comprobantes",
    	"tipo": "extra",
    	"nombre": "Nuevo Cambio Referencia",
    	"icono": "fa fa-plus",
    },
    "751": {
    	"modulo": "Contabilidad",
    	"submodulo": "Procesos Contables",
    	"tipo": "extra",
    	"nombre": "Nueva Diferencia de Cambio",
    	"icono": "fa fa-plus",
    },
    "752": {
    	"modulo": "Contabilidad",
    	"submodulo": "Procesos Contables",
    	"tipo": "extra",
    	"nombre": "Nuevo Proceso de Cierre",
    	"icono": "fa fa-cogs",
    },
    "884": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Cancelación",
    	"tipo": "basico",
    	"nombre": "Listar Cancelación",
    	"icono": "fa fa-list",
    },
    "885": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Cancelación",
    	"tipo": "basico",
    	"nombre": "Nuevo Cancelación",
    	"icono": "fa fa-plus",
    },
    "886": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Cancelación",
    	"tipo": "basico",
    	"nombre": "Eliminar Cancelación",
    	"icono": "fa fa-trash",
    },
    "887": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Cancelación",
    	"tipo": "basico",
    	"nombre": "Visualizar Cancelación",
    	"icono": "fa fa-eye",
    },
    "888": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Cancelación",
    	"tipo": "basico",
    	"nombre": "Imprimir Cancelación",
    	"icono": "fa fa-print",
    },
    "889": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Caja",
    	"tipo": "basico",
    	"nombre": "Listar depositos de cajas",
    	"icono": "fa fa-list",
    },
    "890": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Caja",
    	"tipo": "basico",
    	"nombre": "Nuevo Deposito de Caja",
    	"icono": "fa fa-plus",
    },
    "892": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Caja",
    	"tipo": "basico",
    	"nombre": "Eliminar Deposito de Caja",
    	"icono": "fa fa-trash",
    },
    "893": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Caja",
    	"tipo": "basico",
    	"nombre": "Visualizar Deposito de Caja",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Caja",
    	"tipo": "basico",
    	"nombre": "Imprimir Deposito de Caja",
    	"icono": "fa fa-print",
    },
    "894": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Listar depositos de documentos",
    	"icono": "fa fa-list",
    },
    "895": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Nuevo Deposito de Documento",
    	"icono": "fa fa-plus",
    },
    "896": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Editar deposito de documento",
    	"icono": "fa fa-edit",
    },
    "897": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Eliminar Deposito de Documento",
    	"icono": "fa fa-trash",
    },
    "898": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Visualizar Deposito de Documento",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Deposito de Documento",
    	"tipo": "basico",
    	"nombre": "Imprimir Deposito de Documento",
    	"icono": "fa fa-print",
    },
    "899": {
    	"modulo": "Tesorería - Ingresos",
    	"submodulo": "Prorroga",
    	"tipo": "extra",
    	"nombre": "Nueva Prorroga",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Programación Pagos",
    	"tipo": "basico",
    	"nombre": "Nueva Programación de Pago",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Programación Pagos",
    	"tipo": "basico",
    	"nombre": "Eliminar programación de pago",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Programación Pagos",
    	"tipo": "basico",
    	"nombre": "Imprimir Programación de Pago",
    	"icono": "fa fa-print",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Programación Pagos",
    	"tipo": "basico",
    	"nombre": "Visualizar Programación de Pago",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Autorización Pago",
    	"tipo": "basico",
    	"nombre": "Nueva autorización pago",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Autorización Pago",
    	"tipo": "basico",
    	"nombre": "Eliminar autorización pago",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Autorización Pago",
    	"tipo": "basico",
    	"nombre": "Imprimir autorización pago",
    	"icono": "fa fa-print",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Autorización Pago",
    	"tipo": "basico",
    	"nombre": "Visualizar autorización pago",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "basico",
    	"nombre": "Nueva emisión",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "basico",
    	"nombre": "Visualizar emisión",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "extra",
    	"nombre": "Anular emisión",
    	"icono": "fa fa-ban",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "extra",
    	"nombre": "Reemitir emisión",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "basico",
    	"nombre": "Imprimir emisión",
    	"icono": "fa fa-print",
    },
    "0": {
    	"modulo": "Tesorería - Egresos",
    	"submodulo": "Emisión",
    	"tipo": "extra",
    	"nombre": "Nuevo egreso directo",
    	"icono": "fa fa-plus",
    },
    "854": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartolas",
    	"tipo": "basico",
    	"nombre": "Listar cartolas",
    	"icono": "fa fa-list",
    },
    "855": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartolas",
    	"tipo": "basico",
    	"nombre": "Nueva cartola",
    	"icono": "fa fa-plus",
    },
    "856": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartolas",
    	"tipo": "basico",
    	"nombre": "Editar cartola",
    	"icono": "fa fa-edit",
    },
    "857": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartolas",
    	"tipo": "basico",
    	"nombre": "Eliminar cartola",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartolas",
    	"tipo": "basico",
    	"nombre": "Imprimir cartola",
    	"icono": "fa fa-print",
    },
    "858": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Cartola Electrónica",
    	"tipo": "extra",
    	"nombre": "Subir cartola electrónica",
    	"icono": "fa fa-upload",
    },
    "861": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Calce Manual",
    	"tipo": "basico",
    	"nombre": "Listar calces manuales",
    	"icono": "fa fa-list",
    },
    "862": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Calce Manual",
    	"tipo": "basico",
    	"nombre": "Nuevo calce manual",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Calce Manual",
    	"tipo": "basico",
    	"nombre": "Visualizar calce manual",
    	"icono": "fa fa-eye",
    },
    "863": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Calce Manual",
    	"tipo": "basico",
    	"nombre": "Editar calce manual",
    	"icono": "fa fa-edit",
    },
    "864": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Calce Manual",
    	"tipo": "basico",
    	"nombre": "Eliminar calce manual",
    	"icono": "fa fa-trash",
    },
    "865": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Descalce",
    	"tipo": "basico",
    	"nombre": "Nuevo descalce",
    	"icono": "fa fa-plus",
    },
    "866": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Anular Partidas Bancarias",
    	"tipo": "extra",
    	"nombre": "Nuevo anular partidas contables",
    	"icono": "fa fa-ban",
    },
    "867": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Anular Partidas Contables",
    	"tipo": "extra",
    	"nombre": "Nuevo anular partidas contables",
    	"icono": "fa fa-ban",
    },
    "0": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Documentos Caducos",
    	"tipo": "basico",
    	"nombre": "Nuevo documentos caducos",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Tesorería - Bancos",
    	"submodulo": "Documentos Caducos",
    	"tipo": "basico",
    	"nombre": "Eliminar documentos caducos",
    	"icono": "fa fa-trash",
    },
    "946": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "basico",
    	"nombre": "Listar Documentos",
    	"icono": "fa fa-plus",
    },
    "947": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "basico",
    	"nombre": "Nuevo Documento",
    	"icono": "fa fa-plus",
    },
    "948": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "basico",
    	"nombre": "Editar Documento",
    	"icono": "fa fa-edit",
    },
    "949": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "basico",
    	"nombre": "Eliminar Documento",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "extra",
    	"nombre": "Anular Documento",
    	"icono": "fa fa-ban",
    },
    "0": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "extra",
    	"nombre": "Emitir Documento",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "extra",
    	"nombre": "Centralizar Documento",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "basico",
    	"nombre": "Visualizar Documento",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Documentos",
    	"submodulo": "Documento",
    	"tipo": "extra",
    	"nombre": "Visualizar DTE",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos Proveedores",
    	"submodulo": "Documentos Proveedores",
    	"tipo": "extra",
    	"nombre": "Descargar Documentos Proveedores",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos Proveedores",
    	"submodulo": "Documentos Proveedores",
    	"tipo": "extra",
    	"nombre": "Aceptar Documentos Proveedores",
    	"icono": "fa fa-check-circle",
    },
    "0": {
    	"modulo": "Documentos Proveedores",
    	"submodulo": "Documentos Proveedores",
    	"tipo": "extra",
    	"nombre": "Rechazar Documentos Proveedores",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos Proveedores",
    	"submodulo": "Documentos Proveedores",
    	"tipo": "extra",
    	"nombre": "Centralizar Documentos Proveedores",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Documentos Proveedores",
    	"submodulo": "Documentos Proveedores",
    	"tipo": "extra",
    	"nombre": "Visualizar Documentos Proveedores",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Administración",
    	"submodulo": "Contactos",
    	"tipo": "basico",
    	"nombre": "Nuevo Contacto",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Administración",
    	"submodulo": "Contactos",
    	"tipo": "basico",
    	"nombre": "Editar Contacto",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Administración",
    	"submodulo": "Contactos",
    	"tipo": "basico",
    	"nombre": "Eliminar Contacto",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Administración",
    	"submodulo": "Contactos",
    	"tipo": "basico",
    	"nombre": "Visualizar Contacto",
    	"icono": "fa fa-cogs",
    },
    "747": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Libros",
    	"tipo": "extra",
    	"nombre": "Ver Libros Contables",
    	"icono": "fa fa-book",
    },
    "749": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Libros",
    	"tipo": "extra",
    	"nombre": "Ver Libro Mayor",
    	"icono": "fa fa-book",
    },
    "748": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Libros",
    	"tipo": "extra",
    	"nombre": "Ver Libro Diario",
    	"icono": "fa fa-book",
    },
    "750": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Libros",
    	"tipo": "extra",
    	"nombre": "Ver Hojas Timbradas",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Balances",
    	"tipo": "extra",
    	"nombre": "Ver Ocho Columnas",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Balances",
    	"tipo": "extra",
    	"nombre": "Ver Comprobacion y Saldo",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Balances",
    	"tipo": "extra",
    	"nombre": "Ver Inventario Balance",
    	"icono": "fa fa-cogs",
    },
    "739": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "extra",
    	"nombre": "Ver Mes Acumulado",
    	"icono": "fa fa-calendar",
    },
    "740": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "extra",
    	"nombre": "Ver Doce Periodos",
    	"icono": "fa fa-calendar",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Cuentas Corrientes por Análsis",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Cuentas Corrientes por Cuenta",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Cuenta Selectiva",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Análisis de Vencimiento",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Cartolas",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Contabilidad",
    	"submodulo": "Cuentas Corrientes",
    	"tipo": "extra",
    	"nombre": "Ver Consulta Saldos",
    	"icono": "fa fa-cogs",
    },
    "870": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Demostrativo Conciliación",
    	"icono": "fa fa-cogs",
    },
    "871": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Demostrativo Conciliación Automática",
    	"icono": "fa fa-cogs",
    },
    "872": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Demostrativo Conciliación Manual",
    	"icono": "fa fa-cogs",
    },
    "873": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Partidas Bancarias Nulas",
    	"icono": "fa fa-cogs",
    },
    "874": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Partidas Contables Nulas",
    	"icono": "fa fa-cogs",
    },
    "875": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "extra",
    	"nombre": "Documentos Caducos",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Consulta Ingresos ",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Consulta Ingresos Cancelación",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Consulta Ingresos Bancos",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Consulta Ingresos Cliente",
    	"icono": "fa fa-cogs",
    },
    "900": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Aviso de Cobranza",
    	"icono": "fa fa-exclamation-circle",
    },
    "901": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Ingresos",
    	"tipo": "extra",
    	"nombre": "Circularización Saldos",
    	"icono": "fa fa-cogs",
    },
    "902": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Egresos",
    	"tipo": "extra",
    	"nombre": "Cuentas por pagar",
    	"icono": "fa fa-cogs",
    },
    "": {
    	"modulo": "Reportes - Tesorería",
    	"submodulo": "Egresos",
    	"tipo": "extra",
    	"nombre": "Cuentas Bancos",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Parámetro de proceso",
    	"tipo": "basico",
    	"nombre": "Nuevo Parámetro de proceso",
    	"icono": "fa fa-plus",
    },
    "726": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Agrupación de Cuentas",
    	"tipo": "basico",
    	"nombre": "Listar agrupación de cuentas",
    	"icono": "fa fa-list",
    },
    "727": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Agrupación de Cuentas",
    	"tipo": "basico",
    	"nombre": "Nueva Agrupación de cuentas",
    	"icono": "fa fa-plus",
    },
    "728": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Agrupación de Cuentas",
    	"tipo": "basico",
    	"nombre": "Editar Agrupación de cuentas",
    	"icono": "fa fa-edit",
    },
    "729": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Agrupación de Cuentas",
    	"tipo": "basico",
    	"nombre": "Eliminar Agrupación de cuentas",
    	"icono": "fa fa-trash",
    },
    "773": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Comprobante ",
    	"tipo": "basico",
    	"nombre": "Listar tipos de comprobantes",
    	"icono": "fa fa-list",
    },
    "774": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Comprobante ",
    	"tipo": "basico",
    	"nombre": "Nuevo Tipo comprobante",
    	"icono": "fa fa-plus",
    },
    "775": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Comprobante ",
    	"tipo": "basico",
    	"nombre": "Editar Tipo comprobante",
    	"icono": "fa fa-edit",
    },
    "776": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Comprobante ",
    	"tipo": "basico",
    	"nombre": "Eliminar Tipo comprobante",
    	"icono": "fa fa-trash",
    },
    "761": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Atributos",
    	"tipo": "basico",
    	"nombre": "Listar tipos de atributos",
    	"icono": "fa fa-list",
    },
    "762": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Atributos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "763": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Atributos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "764": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tipo Atributos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "765": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Atributos",
    	"tipo": "basico",
    	"nombre": "Listar atributos",
    	"icono": "fa fa-list",
    },
    "766": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Atributos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "767": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Atributos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "768": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Atributos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "769": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Ejercicios",
    	"tipo": "basico",
    	"nombre": "Listar ejercicios contables",
    	"icono": "fa fa-list",
    },
    "770": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Ejercicios",
    	"tipo": "basico",
    	"nombre": "Nuevo ejercicio contable",
    	"icono": "fa fa-plus",
    },
    "771": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Ejercicios",
    	"tipo": "basico",
    	"nombre": "Editar ejercicio contable",
    	"icono": "fa fa-edit",
    },
    "772": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Ejercicios",
    	"tipo": "basico",
    	"nombre": "Eliminar ejercicio contable",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Ejercicios",
    	"tipo": "basico",
    	"nombre": "Visualizar ejercicio contable",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Libros Contables",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Libros Contables",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Libros Contables",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "718": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Plan de Cuenta",
    	"tipo": "basico",
    	"nombre": "Listar plan de cuenta",
    	"icono": "fa fa-list",
    },
    "719": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Plan de Cuenta",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "720": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Plan de Cuenta",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "721": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Plan de Cuenta",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Definicion Libros",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Definicion Libros",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Definicion Libros",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Definicion Libros",
    	"tipo": "basico",
    	"nombre": "Visualizar",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Definicion Libros",
    	"tipo": "basico",
    	"nombre": "Imprimir",
    	"icono": "fa fa-print",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Setup Proveedores",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Setup Proveedores",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Setup Proveedores",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Setup Proveedores",
    	"tipo": "basico",
    	"nombre": "Imprimir",
    	"icono": "fa fa-print",
    },
    "777": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "basico",
    	"nombre": "Listar estados financieros",
    	"icono": "fa fa-list",
    },
    "778": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "779": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "780": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Estados Financieros",
    	"tipo": "basico",
    	"nombre": "Imprimir",
    	"icono": "fa fa-print",
    },
    "0": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Tasas de Cambio",
    	"tipo": "basico",
    	"nombre": "Visualizar tasas de cambio",
    	"icono": "fa fa-eye",
    },
    "1400": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Cierres Logico",
    	"tipo": "basico",
    	"nombre": "Listar cierres lógicos",
    	"icono": "fa fa-list",
    },
    "1401": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Cierres Logico",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "1402": {
    	"modulo": "Parametros Contabilidad",
    	"submodulo": "Cierres Logico",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Párametros Bancos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Párametros Ingresos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Párametros Egresos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Párametros Egresos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Párametros Egresos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "922": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "basico",
    	"nombre": "Listar bancos",
    	"icono": "fa fa-list",
    },
    "923": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "924": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "925": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Bancos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Cuentas Bancarias",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Cuentas Bancarias",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Cuentas Bancarias",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "938": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Formato Cartas",
    	"tipo": "basico",
    	"nombre": "Listar formatos de cartolas",
    	"icono": "fa fa-list",
    },
    "939": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Formato Cartas",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "940": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Formato Cartas",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "941": {
    	"modulo": "Parametros Tesorería",
    	"submodulo": "Formato Cartas",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "974": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Grupo Documentos",
    	"tipo": "basico",
    	"nombre": "Listar grupos de documentos",
    	"icono": "fa fa-list",
    },
    "975": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Grupo Documentos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "976": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Grupo Documentos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "977": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Grupo Documentos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "990": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Unidades de medida",
    	"tipo": "basico",
    	"nombre": "Listar unidades de medidas",
    	"icono": "fa fa-list",
    },
    "991": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Unidades de medida",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "992": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Unidades de medida",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "993": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Unidades de medida",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Impuestos Especificos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Impuestos Especificos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Impuestos Especificos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Definicion Documentos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Definicion Documentos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Definicion Documentos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Definicion Documentos",
    	"tipo": "basico",
    	"nombre": "Visualizar",
    	"icono": "fa fa-eye",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Definicion Documentos",
    	"tipo": "basico",
    	"nombre": "Imprimir",
    	"icono": "fa fa-print",
    },
    "951": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Formateador Documetos",
    	"tipo": "basico",
    	"nombre": "Listar formatos de documentos",
    	"icono": "fa fa-list",
    },
    "952": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Formateador Documetos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "954": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Formateador Documetos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "953": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Formateador Documetos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "964": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Productos",
    	"tipo": "basico",
    	"nombre": "Listar",
    	"icono": "fa fa-list",
    },
    "965": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Productos",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "966": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Productos",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "967": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Productos",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "968": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Productos",
    	"tipo": "basico",
    	"nombre": "Visualizar",
    	"icono": "fa fa-eye",
    },
    "905": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Condicion Compra/Venta",
    	"tipo": "basico",
    	"nombre": "Listar condiciones de compras/ventas",
    	"icono": "fa fa-list",
    },
    "906": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Condicion Compra/Venta",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "908": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Condicion Compra/Venta",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "907": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Condicion Compra/Venta",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "957": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Folio",
    	"tipo": "basico",
    	"nombre": "Listar cargas de folios",
    	"icono": "fa fa-list",
    },
    "958": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Folio",
    	"tipo": "basico",
    	"nombre": "Nuevo",
    	"icono": "fa fa-plus",
    },
    "959": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Folio",
    	"tipo": "basico",
    	"nombre": "Editar carga de folio",
    	"icono": "fa fa-edit",
    },
    "960": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Folio",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "961": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Caf",
    	"tipo": "basico",
    	"nombre": "Listar cargas de caf",
    	"icono": "fa fa-list",
    },
    "962": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Caf",
    	"tipo": "basico",
    	"nombre": "Nueva carga de caf",
    	"icono": "fa fa-plus",
    },
    "963": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Caf",
    	"tipo": "extra",
    	"nombre": "Autorizar",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Carga Caf",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Conexion IDTE",
    	"tipo": "basico",
    	"nombre": "Nueva",
    	"icono": "fa fa-plus",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Conexion IDTE",
    	"tipo": "basico",
    	"nombre": "Editar",
    	"icono": "fa fa-edit",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Conexion IDTE",
    	"tipo": "basico",
    	"nombre": "Eliminar",
    	"icono": "fa fa-trash",
    },
    "0": {
    	"modulo": "Parametros Documentos",
    	"submodulo": "Conexion IDTE",
    	"tipo": "basico",
    	"nombre": "Desactivar",
    	"icono": "fa fa-cogs",
    },
    "0": {
    	"modulo": "Importadores Datos",
    	"submodulo": "Carga Masiva",
    	"tipo": "basico",
    	"nombre": "Listar Cargas Masivas",
    	"icono": "fa fa-list",
    },
  }

  $('.app-permisos').html('')

  var temp = ''

  temp += '<div class="col-md-12">'
  temp += '<div class="row">'
  temp += '<div class="form-group col-md-3">'
  temp += '<label for="">Perfiles</label>'
  temp += '<select class="form-control permisos-grupos" multiple="multiple"></select>'
  temp += '</div>'
  temp += '<div class="form-group col-md-3">'
  temp += '<label for="">Buscar</label>'
  temp += '<input type="text" id="buscar" class="form-control" placeholder="Buscar">'
  temp += '</div>'
  temp += '</div>'
  temp += '</div>'
  temp += '<div class="col-md-12 mt-3 mb-2">'
  temp += '<a href="javascript:;" class="btn btn-xs btn-permission" style="color: #FFFFFF;background: #31b5b9; border: 1px solid #c1c1c1; padding: 2px 8px !important;">'
  temp += '<i class="fa fa-info"></i>'
  temp += '</a> = Permiso Activo'
  temp += '<a href="javascript:;" class="btn btn-xs btn-permission ml-4" style="color: #45b5ba;background: #fafbfc; border: 1px solid #c1c1c1; padding: 2px 8px !important;">'
  temp += '<i class="fa fa-info"></i>'
  temp += '</a> = Permiso Inactivo'
  temp += '</div>'
  temp += '<div class="col-md-6">'
  temp += '<table class="table table-striped table-bordered table-permisos" data-tipo="basico">'
  temp += '<thead>'
  temp += '<tr>'
  temp += '<th colspan="3" class="text-center">Permisos Básicos</th>'
  temp += '</tr>'
  temp += '<tr>'
  temp += '<th>Modulo</th>'
  temp += '<th>Entidad</th>'
  temp += '<th>Permisos</th>'
  temp += '</tr>'
  temp += '</thead>'
  temp += '<tbody></tbody>'
  temp += '</table></div><div class="col-md-6">'
  temp += '<table class="table table-striped table-bordered table-permisos" data-tipo="extra">'
  temp += '<thead>'
  temp += '<tr>'
  temp += '<th colspan="3" class="text-center">Permisos Transaccionales</th>'
  temp += '</tr>'
  temp += '<tr>'
  temp += '<th>Modulo</th>'
  temp += '<th>Entidad</th>'
  temp += '<th>Permisos</th>'
  temp += '</tr>'
  temp += '</thead>'
  temp += '<tbody></tbody>'
  temp += '</table></div>'

  $('.app-permisos').append(temp)

  permisos = $('#id_permissions option')

  for (var i = 0; i < permisos.length; i++) {

    var id = permisos[i].value

    if (permisos_base[id]) {

      var tipo       = permisos_base[id]['tipo']
      var modulo     = permisos_base[id]['modulo']
      var submodulo  = permisos_base[id]['submodulo']
      var icon       = permisos_base[id]['icono']
      var nombre     = permisos_base[id]['nombre']
      var estado     = $(permisos[i]).prop('selected')

      var table   = $('.table-permisos[data-tipo="'+tipo+'"]')
      var tr      = table.find('tr[data-module="'+modulo+'"][data-submodule="'+submodulo+'"]')

      if(tr.length == 0){

        var temp = '';
        temp += '<tr data-module="@module-name" data-submodule="@submodule-name">'
        temp += '<td>@module-name</td>'
        temp += '<td>@submodule-name</td>'
        temp += '<td data-tipo="permiso">'
        temp += '<input type="checkbox" class="check-permiso">'
        temp += '</td>'
        temp += '</tr>'

        temp = temp.replace(/@module-name/g, modulo);
        temp = temp.replace(/@submodule-name/g, submodulo);

        table.find('tbody').append(temp)

      }

      icono = ''
      icono += '<a href="javascript:;" class="btn btn-xs btn-permission @permiso-estado ml-1" data-id="@permiso-id" data-toggle="tooltip" data-placement="top" title="@permission-name">'
      icono += '<i class="@permission-icon"></i>'
      icono += '</a>'

      icono = icono.replace(/@permiso-id/g, id);
      icono = icono.replace(/@permiso-estado/g, estado ? 'btn-primary' : 'btn-grey');
      icono = icono.replace(/@permission-icon/g, icon);
      icono = icono.replace(/@permission-name/g, nombre);

      table.find('tr[data-module="'+modulo+'"][data-submodule="'+submodulo+'"] td[data-tipo="permiso"]').append(icono)
    }

  }

  $('[data-toggle="tooltip"]').tooltip()

  $('.btn-permission').click(function(){
    var id = $(this).data('id')
    if ($(this).hasClass("btn-primary")){
      $('#id_permissions option[value='+id+']').attr('selected', false);
      $(this).removeClass("btn-primary")
      $(this).addClass("btn-grey")
      $(this).closest('td').find('.check-permiso').prop('checked', false)
    } else{
      $('#id_permissions option[value='+id+']').attr('selected', true);
      $(this).addClass("btn-primary")
      $(this).removeClass("btn-grey")
      if ($(this).closest('td').find('.btn-grey').length == 0) {
        $(this).closest('td').find('.check-permiso').prop('checked', true)
      }
    }
  })

  $('.check-permiso').click(function(){
    if($(this).is(':checked')){
      $(this).parent().find('.btn-permission').addClass("btn-primary")
      $(this).parent().find('.btn-permission').removeClass("btn-grey")
    } else{
      $(this).parent().find('.btn-permission').removeClass("btn-primary")
      $(this).parent().find('.btn-permission').addClass("btn-grey")
    }
  })

  $('.check-permiso').click(function(){
    if($(this).is(':checked')){
      $(this).parent().find('.btn-permission').addClass("btn-primary")
      $(this).parent().find('.btn-permission').removeClass("btn-grey")
      $(this).parent().find('.btn-permission').each(function(index) {
        $('#id_permissions option[value='+$(this).data('id')+']').attr('selected', true);
      });
    } else{
      $(this).parent().find('.btn-permission').removeClass("btn-primary")
      $(this).parent().find('.btn-permission').addClass("btn-grey")
      $(this).parent().find('.btn-permission').each(function( index ) {
        $('#id_permissions option[value='+$(this).data('id')+']').attr('selected', false);
      });
    }
  })

  $('.table-permisos td[data-tipo="permiso"]').each(function(index) {
    if ($(this).find('.btn-grey').length == 0) {
      $(this).find('.check-permiso').prop('checked', true)
    }
  })

  $(".app-permisos #buscar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".table-permisos tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  var $options = $("#id_groups > option").clone();
  $('.permisos-grupos').append($options);
  $('.permisos-grupos').selectpicker()
  $('.permisos-grupos').on('changed.bs.select', function (e) {
    $('#id_groups').val($('.permisos-grupos').selectpicker('val'))


    $.ajax({
			url: 'get/permisos',
			type: 'post',
			dataType: 'json',
			data: {
				grupos : $('#permisos-grupos').selectpicker('val'),
			},
			success: function (response) {

        var permisos = [1,2]

        $('#id_permissions').val()
        $('.btn-permission').removeClass('btn-grey')
        $('.btn-permission').removeClass('btn-primary')
        $('.btn-permission').addClass('btn-grey')
        $('.check-permiso').prop('checked', false)

        for (var i = 0; i < permisos.length; i++) {

          $('.btn-permission[data-id="'+permisos[i]+'"]').addClass('btn-primary')
          $('#id_permissions option[value='+permisos[i]+']').attr('selected', true);
        }

			},
		});

  });

};

var Permisos = function () {
  "use strict";
    return {
        //main function
        init: function () {
            handlePermisos();
        }
    };
}();

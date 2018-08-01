/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.1/admin/
*/

var handleDataTableDefault = function() {
	"use strict";

	var table_language = {
	  // 'decimal': ',',
	  "decimal": "-",
	  "thousands": ".",
	  'emptyTable': 'Sin Datos',
	  'info': 'mostranto _END_ de _TOTAL_ registros',
	  'infoEmpty': '0-0 de 0',
	  'infoFiltered': '',
	  'infoPostFix': '',
	  'lengthMenu': '_MENU_',
	  'loadingRecords': 'Cargando...',
	  'processing': 'Procesando...',
	  'search': '',
	  'searchPlaceholder': 'Buscar',
	  'zeroRecords': 'No se encontraron registros',
	  'paginate': {
	    'first': 'Primero',
	    'last': 'Último',
	    'next': 'Próximo',
	    'previous': 'Anterior'
	  }
	};

    if ($('#data-table-default').length !== 0) {
        $('#data-table-default').DataTable({
						language: table_language,
            responsive: true,
						searching: false,
						bLengthChange: false,
        });
    }

		if ($('.data-table-default').length !== 0) {
        $('.data-table-default').DataTable({
						language: table_language,
            responsive: true,
						searching: false,
						bLengthChange: false,
        });
    }
};

var TableManageDefault = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleDataTableDefault();
        }
    };
}();

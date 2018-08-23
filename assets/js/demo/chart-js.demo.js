/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.1/admin/
*/

Chart.defaults.global.defaultFontColor = COLOR_BLACK;
Chart.defaults.global.defaultFontFamily = FONT_FAMILY;
Chart.defaults.global.defaultFontStyle = FONT_WEIGHT;

var randomScalingFactor = function() {
    return Math.round(Math.random()*10000000)
};

var lineChartDataFlujo = {
  labels: ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
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
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
    ]
  }]
};

var barChartDataVentas = {
    labels: ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
        label: 'Ventas',
        borderWidth: 2,
        borderColor: COLOR_BLUE,
        backgroundColor: COLOR_BLACK_TRANSPARENT_2,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }]
};

var barChartDataCompras = {
    labels: ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
        label: 'Compras',
        borderWidth: 2,
        borderColor: COLOR_RED,
        backgroundColor: COLOR_RED_TRANSPARENT_2,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }]
};

var pieChartDataProductos = {
    labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
    datasets: [{
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        backgroundColor: [COLOR_RED_TRANSPARENT_7, COLOR_ORANGE_TRANSPARENT_7, COLOR_SILVER_TRANSPARENT_7, COLOR_GREY_TRANSPARENT_7, COLOR_BLACK_TRANSPARENT_7],
        borderColor: [COLOR_RED, COLOR_ORANGE, COLOR_SILVER_DARKER, COLOR_GREY, COLOR_BLACK],
        borderWidth: 2,
        label: 'My dataset'
    }]
};

var handleChartJs = function() {

    var ctx1 = document.getElementById('chart-flujo-caja').getContext('2d');
    var Chart1 = new Chart(ctx1, {
        type: 'bar',
        data: lineChartDataFlujo,
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

    // var ctx2 = document.getElementById('chart-ventas').getContext('2d');
    // var Chart2 = new Chart(ctx2, {
    //     type: 'bar',
    //     data: barChartDataVentas,
    //     options: {
    //       maintainAspectRatio: false,
    //     }
    // });
    //
    // var ctx3 = document.getElementById('chart-compras').getContext('2d');
    // var Chart3 = new Chart(ctx3, {
    //     type: 'bar',
    //     data: barChartDataCompras,
    //     options: {
    //       maintainAspectRatio: false,
    //     }
    // });
    //
    // var ctx4 = document.getElementById('chart-ventas-productos').getContext('2d');
    // var Chart4 = new Chart(ctx4, {
    //     type: 'pie',
    //     data: pieChartDataProductos,
    //     options: {
    //       maintainAspectRatio: false,
    //     }
    // });

};

var ChartJs = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleChartJs();
        }
    };
}();

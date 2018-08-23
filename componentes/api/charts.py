import random

def months_bettewn_dates(date_start, date_end):

    data = list()

    while date_start <= date_end:

        data.append({
            'start' : first_day(date_start),
            'end'   : last_day(date_start),
            })

        date_start = add_months(date_start, 1)

    return data

def get_data_compras(request):

    status  = True
    error   = None
    data    = dict()

    try:

        chart_data      = list()
        chart_labels    = list()
        data_get        = request.GET.copy()
        f_inicio        = datetime.strptime(data_get['f_inicio'], "%d/%m/%Y").date()
        f_termino       = datetime.strptime(data_get['f_termino'], "%d/%m/%Y").date()
        periodos        = months_bettewn_dates(f_inicio, f_termino)

        for periodo in periodos:


            chart_data.append(random.randrange(1000000, 10000000))
            chart_labels.append(periodo['start'].strftime('%m/%Y'))

        data = {
            'chart_data': chart_data,
            'chart_labels': chart_labels,
            }

    except Exception as msg:

        status = False
        error = str(msg)

    response = {
        'status': status,
        'error': error,
        'data': data
        }

    return JsonResponse(response, safe=False)

def get_data_ventas(request):

    status  = True
    error   = None
    data    = dict()

    try:

        chart_data      = list()
        chart_labels    = list()
        data_get        = request.GET.copy()
        f_inicio        = datetime.strptime(data_get['f_inicio'], "%d/%m/%Y").date()
        f_termino       = datetime.strptime(data_get['f_termino'], "%d/%m/%Y").date()
        periodos        = months_bettewn_dates(f_inicio, f_termino)

        for periodo in periodos:


            chart_data.append(random.randrange(1000000, 10000000))
            chart_labels.append(periodo['start'].strftime('%m/%Y'))

        data = {
            'chart_data': chart_data,
            'chart_labels': chart_labels,
            }

    except Exception as msg:

        status = False
        error = str(msg)

    response = {
        'status': status,
        'error': error,
        'data': data
        }

    return JsonResponse(response, safe=False)

def get_data_ingresos_egresos(request):

    status  = True
    error   = None
    data    = dict()

    try:

        chart_ingresos  = list()
        chart_egresos   = list()
        chart_labels    = list()
        data_get        = request.GET.copy()
        f_inicio        = datetime.strptime(data_get['f_inicio'], "%d/%m/%Y").date()
        f_termino       = datetime.strptime(data_get['f_termino'], "%d/%m/%Y").date()
        periodos        = months_bettewn_dates(f_inicio, f_termino)

        for periodo in periodos:

            chart_ingresos.append(random.randrange(1000000, 10000000))
            chart_egresos.append(random.randrange(1000000, 10000000))
            chart_labels.append(periodo['start'].strftime('%m/%Y'))

        data = {
            'chart_labels': chart_labels,
            'chart_data': {
                'ingresos': chart_ingresos,
                'egresos': chart_egresos,
                }
            }

    except Exception as msg:

        status = False
        error = str(msg)

    response = {
        'status': status,
        'error': error,
        'data': data
        }

    return JsonResponse(response, safe=False)

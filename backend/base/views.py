from operator import imod
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .RentHomes_data import rentHomes


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/rent',
        'api/rent/create',
        'api/rent/upload',

        'api/rent/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def getRentHomes(requst):
    return Response(rentHomes)


@api_view(['GET'])
def getRentHome(requst, pk):
    rentHome = None
    for i in rentHomes:
        if i['_id'] == pk:
            rentHome = i
            break
    return Response(rentHome)

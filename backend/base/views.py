from operator import imod
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import RentHome, SellHome

from .RentHomes_data import rentHomes

from .serializers import RentHomeSerializer, SellHomeSerializer


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/rent',

        'api/rent/create',
        'api/rent/upload',
        'api/rent/<id>',

        'api/buy',
        'api/sell/<id>',

    ]
    return Response(routes)


@api_view(['GET'])
def getRentHomes(requst):
    # rentHomes = RentHome.objects.get(_id=1)
    rentHomes = RentHome.objects.all()
    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(rentHomes)
    serializer = RentHomeSerializer(rentHomes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRentHome(requst, pk):
    rentHome = None
    rentHome = RentHome.objects.get(_id=pk)
    # for i in sellHomes:
    #     if i['_id'] == pk:
    #         sellHome = i
    #         break

    serializer = RentHomeSerializer(rentHome, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getSellHomes(requst):
    # rentHomes = RentHome.objects.get(_id=1)
    sellHomes = SellHome.objects.all()
    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(sellHomes)
    serializer = SellHomeSerializer(sellHomes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSellHome(requst, pk):
    sellHome = None
    sellHome = SellHome.objects.get(_id=pk)
    # for i in sellHomes:
    #     if i['_id'] == pk:
    #         sellHome = i
    #         break

    serializer = SellHomeSerializer(sellHome, many=False)
    return Response(serializer.data)

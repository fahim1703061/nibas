from operator import imod
from turtle import title
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import Notification, RentHome, SellHome

from .RentHomes_data import rentHomes

from .serializers import NotificationSerializer, RentHomeSerializer, SellHomeSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status


from matplotlib import pyplot as plt
import numpy as np
# plt.use('Agg')

# user view


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# views for register


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['username'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    # user.username = data['username']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    str = 'User was deleted' + pk
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response(str)


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
    query = requst.query_params.get('keyword')
    # print(query)
    if query == None:
        query = ''
    rentHomes = RentHome.objects.filter(address__icontains=query)

    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(rentHomes)
    serializer = RentHomeSerializer(rentHomes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRentHome(requst, pk):
    rentHome = None
    query = requst.query_params.get('keyword')
    print(query)
    rentHome = RentHome.objects.get(_id=pk)
    # for i in sellHomes:
    #     if i['_id'] == pk:
    #         sellHome = i
    #         break

    serializer = RentHomeSerializer(rentHome, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rentOut(request):
    data = request.data
    user = request.user
    try:
        homeRentOut = RentHome.objects.create(
            title=data['title'],
            description=data['description'],
            address=data['address'],
            no_bedrooms=(data['no_bedrooms']),
            no_bathrooms=(data['no_bathrooms']),
            no_kitchens=data['no_kitchens'],
            no_parkings=data['no_parkings'],
            square_footage=data['square_footage'],
            owner=user,
            pricePerDuration=data['pricePerDuration'],
            duration=data['duration'],
            contact_no=data['contact_no'],
            contact_email=data['contact_email'],
            image=request.FILES.get('image'),


        )

        notification = Notification.objects.create(
            user=user,
            title='Rentout Home',
            text='Your home is added to rentlist',
        )

        message = {'detail': 'Your home is added to rent list'}
        return Response(message)
    except:
        message = {'detail': 'failed to add to list'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyRentOutList(requst):

    user = requst.user
    rentHomes = RentHome.objects.filter(owner=user)

    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(rentHomes)
    serializer = RentHomeSerializer(rentHomes, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteRentHome(request, pk):
    str = 'Home was deleted' + pk
    homeForDeletion = RentHome.objects.get(_id=pk)
    homeForDeletion.delete()
    return Response(str)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sellHome(request):
    data = request.data
    user = request.user
    try:
        homeSell = SellHome.objects.create(
            title=data['title'],
            description=data['description'],
            address=data['address'],
            no_bedrooms=(data['no_bedrooms']),
            no_bathrooms=(data['no_bathrooms']),
            no_kitchens=data['no_kitchens'],
            no_parkings=data['no_parkings'],
            square_footage=data['square_footage'],
            owner=user,
            price=data['price'],
            contact_no=data['contact_no'],
            contact_email=data['contact_email'],
            image=request.FILES.get('image'),


        )

        notification = Notification.objects.create(
            user=user,
            title='Sell Home',
            text='Your home is added to sell list',
        )

        message = {'detail': 'Your home is added to sell list'}
        return Response(message)
    except:
        message = {'detail': 'failed to add to list'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getSellHomes(requst):
    # rentHomes = RentHome.objects.get(_id=1)
    query = requst.query_params.get('keyword')
    # print(query)
    if query == None:
        query = ''
    sellHomes = SellHome.objects.filter(address__icontains=query)
    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(sellHomes)
    serializer = SellHomeSerializer(sellHomes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMySellList(requst):
    # rentHomes = RentHome.objects.get(_id=1)
    user = requst.user
    sellHomes = SellHome.objects.filter(owner=user)
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


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteSellHome(request, pk):
    str = 'Home was deleted' + pk
    homeForDeletion = SellHome.objects.get(_id=pk)
    homeForDeletion.delete()
    return Response(str)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotification(requst):
    # rentHomes = RentHome.objects.get(_id=1)
    user = requst.user
    notification = Notification.objects.filter(
        user=user).order_by('-createdAt')
    # homes = Home.objects.get
    # serializer = HomeSerializer(rentHomes, many=True)
    print(notification)
    serializer = NotificationSerializer(notification, many=True)

    # stat
    # plt.switch_backend('AGG')
    # objects = ['Rent Home Listing', 'Sell Home listings']
    # y_pos = np.arange(len(objects))
    # qty = [0, 0]
    # qty[0] = RentHome.objects.all().count()
    # qty[1] = SellHome.objects.all().count()
    # barlist = plt.bar(y_pos, qty, align='center')
    # barlist[0].set_color('g')
    # barlist[1].set_color('b')
    # plt.xticks(y_pos, objects)
    # plt.ylabel('Number of Homes')
    # plt.title('Home Listings')
    # plt.tight_layout()
    # plt.savefig('./static/insights/images/ListingBarchart.png')

    # qty2 = RentHome.objects.order_by('user__id').distinct('user__id')
    # print('-------------', qty2)
    return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getInsight(requst):

    # stat

    plt.switch_backend('AGG')

    # ----freq rent and sell--------

    objects = ['Rent Home Listing', 'Sell Home listings']
    y_pos = np.arange(len(objects))
    qty = [0, 0]
    qty[0] = RentHome.objects.all().count()
    qty[1] = SellHome.objects.all().count()
    barlist = plt.bar(y_pos, qty, align='center', width=0.3)
    barlist[0].set_color('g')
    barlist[1].set_color('b')
    plt.xticks(y_pos, objects)
    plt.ylabel('Number of Homes')
    plt.title('Home Listings')
    plt.tight_layout()
    plt.savefig('./static/images/insights/images/ListingBarchart.jpg')
    plt.clf()

    # ----users in  registered vs rentout vs sell--------

    qtyUsers = User.objects.all().count()
    qtyUsersRentOut = RentHome.objects.values('owner__id').distinct().count()
    qtyUsersSell = SellHome.objects.values('owner__id').distinct().count()

    objects = ['Registered', 'Rentout', 'Sell']
    y_pos = np.arange(len(objects))
    qty = [qtyUsers, qtyUsersRentOut, qtyUsersSell]
    barlist = plt.bar(y_pos, qty, align='center', width=0.2)
    barlist[0].set_color('g')
    barlist[1].set_color('b')
    barlist[2].set_color('r')
    plt.xticks(y_pos, objects)
    plt.ylabel('Users')
    plt.title('Insight about users')
    plt.tight_layout()
    plt.savefig('./static/images/insights/images/UsersBarchart.jpg')
    # print('-------------', qty)

    # ------data return-------

    data = {
        'ListingFig': '/images/insights/images/ListingBarchart.jpg',
        'UsersFig': '/images/insights/images/UsersBarchart.jpg',
    }
    return Response(data)

from django.shortcuts import render

from .models import Faqs

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import FaqsSerializer


# Create your views here.


@api_view(['GET'])
def getFaqs(request):
    users = Faqs.objects.all()
    serializer = FaqsSerializer(users, many=True)
    return Response(serializer.data)

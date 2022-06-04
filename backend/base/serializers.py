
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import RentHome, SellHome


class RentHomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentHome
        fields = '__all__'


class SellHomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = SellHome
        fields = '__all__'


"""

class HomeSerializer(serializers.ModelSerializer):
    rentHome = RentHomeSerializer(many=True)

    class Meta:
        model = Home
        fields = '__all__'

    # class Meta:
    #     model = RentHome
    #     fields = '__all__'
    
"""

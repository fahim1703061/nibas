
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import ContactUs, RentHome, SellHome, Notification
from datetime import date
from datetime import datetime
from django.utils import timezone


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class RentHomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentHome
        fields = '__all__'


class SellHomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = SellHome
        fields = '__all__'


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactUs
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    time = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Notification
        fields = ['_id', 'user', 'title', 'text',
                  'link', 'checked', 'createdAt', 'time']

    def get_createdAt(self, obj):
        now = date.today()
        print(obj.createdAt)
        return '234'

    def get_time(self, obj):
        time = ''
        now = datetime.now()
        date_from_db = obj.createdAt.strftime("%Y-%m-%d %H:%M:%S")
        # local_dt = timezone.localtime(
        #     date_from_db) if date_from_db is not None else None
        print(now.strftime("%Y-%m-%d %H:%M:%S"))

        if now.strftime("%Y-%m-%d %H:%M") == obj.createdAt.strftime("%Y-%m-%d %H:%M"):
            time = 'just now'

        elif now.strftime("%Y-%m-%d %H") == obj.createdAt.strftime("%Y-%m-%d %H"):
            time = 'few minutes ago'

        elif now.strftime("%Y-%m-%d") == obj.createdAt.strftime("%Y-%m-%d"):
            time = 'few hours ago'

        else:
            time = obj.createdAt.strftime("%Y-%m-%d %H:%M")
        # print(convert_to_localtime(date_from_db))
        print(date_from_db)

        print()
        return time


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

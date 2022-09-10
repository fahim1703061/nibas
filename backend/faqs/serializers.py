
from .models import Faqs
from rest_framework import serializers


class FaqsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Faqs
        fields = '__all__'

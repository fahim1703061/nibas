from unicodedata import name
from django.urls import path

from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('rent/', views.getRentHomes, name='rentHomes'),
    path('rent/<str:pk>', views.getRentHome, name='rentHome'),
]

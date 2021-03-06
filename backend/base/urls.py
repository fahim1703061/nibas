from unicodedata import name
from django.conf import settings
from django.urls import path


from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('rent/', views.getRentHomes, name='rentHomes'),
    path('rent/<str:pk>', views.getRentHome, name='rentHome'),

    path('buy/', views.getSellHomes, name='sellHomes'),
    path('buy/<str:pk>', views.getSellHome, name='sellHome'),

]

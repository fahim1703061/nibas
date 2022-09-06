from unicodedata import name
from django.conf import settings
from django.urls import path


from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),


    path('users/register/', views.registerUser, name='registerUser'),
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('users/profile/update/', views.updateUserProfile,
         name="user-profile-update"),
    path('users/delete/<str:pk>/', views.deleteUser, name='user-delete'),
    path('users/', views.getUsers, name='user'),
    path('users/<str:pk>/', views.getUserById, name='user'),
    path('', views.getRoutes, name='routes'),
    path('rent/', views.getRentHomes, name='rentHomes'),
    path('rentout/', views.rentOut, name='rentOut'),
    path('rent/<str:pk>', views.getRentHome, name='rentHome'),
    path('sell/', views.sellHome, name='sellHome'),
    path('buy/', views.getSellHomes, name='buyHomes'),
    path('buy/<str:pk>', views.getSellHome, name='buyHome'),

]

from django.contrib import admin
from .models import BuyerHome, RentHome, RenterHome, SellHome

# Register your models here.

# admin.site.register(Home)
admin.site.register(RentHome)
admin.site.register(RenterHome)
admin.site.register(SellHome)
admin.site.register(BuyerHome)

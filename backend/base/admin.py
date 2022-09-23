from django.contrib import admin
from .models import BuyerHome, ContactUs, RentHome, RenterHome, SellHome, Notification

# Register your models here.

# admin.site.register(Home)
admin.site.register(RentHome)
admin.site.register(RenterHome)
admin.site.register(SellHome)
admin.site.register(BuyerHome)
admin.site.register(ContactUs)
admin.site.register(Notification)


from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# deo to complexity of Rest Framework Home model is not used
"""
class Home(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=600, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    no_badrooms = models.IntegerField(default=0, null=True, blank=True)
    no_bathrooms = models.IntegerField(default=0, null=True, blank=True)
    no_kitchens = models.IntegerField(default=0, null=True, blank=True)
    no_parkings = models.IntegerField(default=0, null=True, blank=True)
    square_footage = models.IntegerField(default=0, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.title

"""


class RentHome(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=600, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    no_bedrooms = models.IntegerField(default=0, null=True, blank=True)
    no_bathrooms = models.IntegerField(default=0, null=True, blank=True)
    no_kitchens = models.IntegerField(default=0, null=True, blank=True)
    no_parkings = models.IntegerField(default=0, null=True, blank=True)
    square_footage = models.IntegerField(default=0, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, null=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    pricePerDuration = models.FloatField(default=0, null=True, blank=True)
    duration = models.CharField(max_length=200, null=True, blank=True)
    contact_no = models.CharField(max_length=200, null=True, blank=True)
    contact_email = models.EmailField(max_length=600, null=True, blank=True)

    def __str__(self):
        return str(self.title)

    def __unicode__(self):
        return self._id


class RenterHome(models.Model):
    renter = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    rentHome = models.ForeignKey(
        RentHome, on_delete=models.SET_NULL, null=True)
    requestDate = models.DateTimeField(auto_now_add=True)
    confirmDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.renter

    def __unicode__(self):
        return


class SellHome(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=600, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    no_bedrooms = models.IntegerField(default=0, null=True, blank=True)
    no_bathrooms = models.IntegerField(default=0, null=True, blank=True)
    no_kitchens = models.IntegerField(default=0, null=True, blank=True)
    no_parkings = models.IntegerField(default=0, null=True, blank=True)
    square_footage = models.IntegerField(default=0, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, null=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    price = models.FloatField(default=0, null=True, blank=True)
    contact_no = models.CharField(max_length=200, null=True, blank=True)
    contact_email = models.EmailField(max_length=600, null=True, blank=True)

    def __str__(self):
        return str(self.title)

    def __unicode__(self):
        return self._id


class BuyerHome(models.Model):
    buyer = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True)
    SellHome = models.ForeignKey(
        RentHome, on_delete=models.CASCADE, null=True)
    requestDate = models.DateTimeField(auto_now_add=True)
    confirmDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.buyer)

    def __unicode__(self):
        return


class ContactUs(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    contact_email = models.EmailField(max_length=600, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    reply = models.TextField(null=True, blank=True)
    checked = models.BooleanField(default=False)
    contact_no = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.contact_email)

    def __unicode__(self):
        return


class Notification(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=600, null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    link = models.CharField(max_length=600, null=True, blank=True)
    checked = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)

    def __unicode__(self):
        return

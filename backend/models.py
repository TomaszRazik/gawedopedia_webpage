from django.db import models
from authentication.models import User



# Create your models here.

class LandModel(models.Model):
    name = models.CharField(max_length=100)
    s_descr = models.CharField(max_length=300)
    l_descr = models.TextField()
    hashtags = models.CharField(max_length=200, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    added_by = models.ForeignKey(User, null=True, on_delete=models.SET('Deleted User'))


class CityModel(models.Model):
    name = models.CharField(max_length=100)
    s_descr = models.CharField(max_length=300)
    l_descr = models.TextField()
    hashtags = models.CharField(max_length=200, blank=True)
    land = models.ForeignKey(LandModel, null=True, on_delete=models.SET('Unknown'))
    date_added = models.DateTimeField(auto_now_add=True)
    added_by = models.ForeignKey(User, null=True, on_delete=models.SET('Deleted User'))
    

class NpcModel(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField(blank=True)
    s_descr = models.CharField(max_length=300)
    l_descr = models.TextField()
    city = models.ForeignKey(CityModel, null=True, on_delete=models.SET('Unknown'))
    hashtags = models.CharField(max_length=200, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    added_by = models.ForeignKey(User, null=True, on_delete=models.SET('Deleted User'))

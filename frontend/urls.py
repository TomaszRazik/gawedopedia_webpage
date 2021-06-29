from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('campain', index),
    path('npc', index),
    
]
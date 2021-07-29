from django.urls import path
from .views import *

urlpatterns = [
    path('lands/', land_model_list),
    path('lands/<int:pk>/', land_model_detail),
    path('npc/', npc_model_list),
    path('npc/<int:pk>/', npc_model_detail),
    path('city/', city_model_list),
    path('city/<int:pk>/', city_model_detail),

]
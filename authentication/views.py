from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def LoginView(request):
    return HttpResponse('Welcome in Login View!')
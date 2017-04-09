from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request) :
    return render(request, 'jejudaum/contents/index.html' , {})

def whatEat(request) :
    return render(request, 'jejudaum/contents/whateat.html' , {})

def houseNet(request) :
    return render(request, 'jejudaum/contents/housenet.html', {})

def houseItemClick(request) :
    return render(request, 'jejudaum/contents/house/houseitemclick.html', {})

def busLine(request) :
    return render(request, 'jejudaum/contents/busline.html', {})

def logIn(request) :
    return render(request, 'jejudaum/contents/log/login.html', {})

from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request) :
    return render(request, 'jejudaum/contents/index.html' , {})

def whatEat(request) :
    return render(request, 'jejudaum/contents/whateat.html' , {})

def houseNet(request) :
    return render(request, 'jejudaum/contents/housenet.html', {})

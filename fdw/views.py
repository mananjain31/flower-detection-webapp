from django.http import JsonResponse
from django.shortcuts import render
import json
import base64

# Create your views here.
def test(request):
    if request.method == 'GET':
        print('This is a Test')

def imgPost(request):
    if request.method == 'POST':
        jsonData = json.loads(request.body)
        return JsonResponse({ 
          "success":True,
          
         })
        

    
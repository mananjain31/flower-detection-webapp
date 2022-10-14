from django.shortcuts import render

# Create your views here.
def test(request):
    if request.method == 'GET':
        print('This is a Test')
    
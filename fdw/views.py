from django.http import JsonResponse
from django.shortcuts import render
import json
import base64
from django.views.decorators.csrf import csrf_exempt
import io
from PIL import Image
from skimage import transform
import numpy as np

# Create your views here.


def test(request):
    if request.method == 'GET':
        print('This is a Test')

@csrf_exempt
def imgPost(request):
    if request.method == 'POST':
        jsonData = json.loads(request.body)
        # ImgFinal = ImgBin2Numpy(jsonData['Image'])
        # print(ImgFinal)
        base64String = jsonData['Image']
        NumpyImage = ImgBin2Numpy(base64String)
        return JsonResponse({ 
          "success":True,
          "Image":str(NumpyImage)
         })


def ImgBin2Numpy(ImageBase64):
    Img = Image.open(io.BytesIO(base64.b64decode(ImageBase64)))
    np_image = Img
    np_image = np.array(np_image).astype('float32')/224
    np_image = transform.resize(np_image, (224, 224, 3))
    np_image = np.expand_dims(np_image, axis=0)
    return np_image

        

    
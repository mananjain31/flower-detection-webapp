import sys
from django.http import JsonResponse
from django.shortcuts import render
import json
import base64
from django.views.decorators.csrf import csrf_exempt
import io
from PIL import Image
from skimage import transform
import numpy as np
import tensorflow as tf
import pandas as pd

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
        base64String = jsonData['image']
        NumpyImage = ImgBin2Numpy(base64String)
        info, accuracy,  = Recognize(NumpyImage)
        return JsonResponse({
            "success": True,
            "accuracy": json.dumps(accuracy),
            "info": info
        })


def ImgBin2Numpy(ImageBase64):
    base64Bytes = bytes(ImageBase64, encoding='utf-8')
    np_image = Image.open(io.BytesIO(base64.b64decode(base64Bytes)))
    np_image = np.array(np_image).astype('float32')/224
    np_image = transform.resize(np_image, (224, 224, 3))
    np_image = np.expand_dims(np_image, axis=0)
    return np_image


def Recognize(NumpyImage):
    model = tf.keras.models.load_model('Model/mymodel(1).h5')
    predictions = model.predict(NumpyImage)
    # print(predictions)

    maxAcc = float(-(sys.maxsize - 1))
    pred = 'word'

    df = pd.read_csv(
        "C:/Programing/flower-detection-webapp/csv/Final_Flower_Table.csv")
    categories = df["Flower name"].to_list()
    categories.sort()
    i = 0
    for label in categories:
        if (predictions[0][i] > maxAcc):
            # print(label)
            pred = label
            maxAcc = predictions[0][i]
        i = i + 1
    # print("\t%s ==> %.2f Accuracy" % (pred, 100*maxAcc))
    info = df[df['Flower name'] == pred]
    info = info.squeeze().to_dict()
    return info, "{:.2f}".format(100*maxAcc)

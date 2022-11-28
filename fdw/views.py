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
        category, accuracy = Recognize(NumpyImage)
        return JsonResponse({
            "success": True,
            "name": category,
            "Accuracy": accuracy
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

    # categories = ['Apple', 'Dianthus', 'Cabbage', 'Hibiscus', 'Rose']
    categories = ["Apple (Malus pumila 'Braeburn')",
                  "Butterhead Lettuce (Lactuca sativa 'Tom Thumb')",
                  "Carrot (Daucus carota subsp. sativus 'Ultimate Hybrid')",
                  "Cauliflower (Brassica oleracea var. botrytis 'Steady')",
                  "Chinese Pear (Pyrus pyrifolia 'Shinseiki')",
                  "Common Fig (Ficus carica 'Violette de Bordeaux')",
                  'Coneflower (Echinacea Big Sky Sundown)',
                  'Corn (Zea mays subsp. mays)',
                  "Cucumber (Cucumis sativus 'Early Cluster')",
                  "Daylily (Hemerocallis 'Quoting Hemingway')",
                  'Dianthus',
                  "Eggplant (Solanum melongena 'Bride')",
                  "Greigii Tulip (Tulipa 'Fire of Love')",
                  'Hibiscus',
                  'Hostas (Hosta)',
                  "Hot Pepper (Capsicum annuum 'Petit Marseillais')",
                  "Italian Parsley (Petroselinum crispum 'Italian Flat Leaf')",
                  "Lily (Lilium 'Fusion')",
                  "Melon (Cucumis melo 'Kajari')",
                  'Mints (Mentha)',
                  "Nectarine (Prunus persica 'Arctic Glo')",
                  "Onion (Allium cepa 'Walla Walla Sweet')",
                  'Potatoes (Solanum tuberosum)',
                  "Pumpkin (Cucurbita moschata 'Musquee de Provence')",
                  "Radish (Raphanus sativus 'Early Scarlet Globe')",
                  "Rose (Rosa 'Sexy Rexy')",
                  "Snap Bean (String (Phaseolus vulgaris 'Wren's Egg')",
                  "Softneck Garlic (Allium sativum 'Inchelium Red')",
                  "Spinach (Spinacia oleracea 'Ashley')",
                  "Strawberry (Fragaria x ananassa 'Chandler')",
                  'Sweet Basil (Ocimum basilicum)',
                  "Sweet Cherry (Prunus avium 'Black Tatarian')",
                  'Sweet Potatoes (Ipomoea batatas)',
                  "Tomato (Solanum lycopersicum 'Pink Delicious')"]
    print(len(categories))
    i = 0
    for label in categories:
        if (predictions[0][i] > maxAcc):
            # print(label)
            pred = label
            maxAcc = predictions[0][i]
        i = i + 1
    print("\t%s ==> %.2f Accuracy" % (pred, 100*maxAcc))
    return pred, "{:.2f}".format(100*maxAcc)

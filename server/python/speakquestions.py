# from transformers import AutoTokenizer, AutoModelForSequenceClassification
# import torch
# import cv2
import time
import pyttsx3
# from deepface import DeepFace


# Getting the sentiment score from the user sentences


# def sentiment(text):
#   ##Tokenizes according to bert neural network
#   tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
#   ##Instantiates the pretrained model as one of the sequence classification
#   model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
#   tokens = tokenizer.encode('I did not have a bad day',  return_tensors='pt')
#   result = int(torch.argmax(model(tokens).logits)+1)
#   return result

# ##Converting images to Frame

# def videotoframe(path):
#   cam = cv2.VideoCapture(path)
#   fps = int(cam.get(cv2.CAP_PROP_FPS))


#   current_frame, count = 0,0
#   save_interval = 5

#   while (cam.isOpened()):
#     ret, frame = cam.read()
#     if ret:
#       current_frame += 1
#       if current_frame % (fps*save_interval) == 0:
#         name = f'./database/frame{str(current_frame)}.jpg'
#         ## The second box is the timestamp of the frame which we will be storing in the database to pinpoint the timing around which user had to improve
#         print(f"Creating {name} and the timestamp is {round(cam.get(cv2.CAP_PROP_POS_MSEC)/1000)}")
#         #print(f"Creating {name} and the timestamp is {round(cam.get(cv2.CAP_PROP_POS_MSEC)/1000)}")
#         #frame = cv2.rotate(frame, cv2.ROTATE_180)
#         cv2.imwrite(name, frame)
#         count += 1
#     else:
#       break
#   ## Closes the video file
#   cam.release()

# ##Getting the emotion from the user


# def emotion(imgpath):
#   ## Using deepface model to analyze the emotions of the frames
#     obj = DeepFace.analyze(img_path = imgpath, actions = ['emotion'])
#   ## Returning only the dominant emotion and not all the emotions detected
#     return obj['dominant_emotion']

def speak(audio):
  # Initializing the pyttsx3 engine
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 140)
    engine.setProperty('voice', voices[2].id)
    time.sleep(5)
    engine.say("Hello candidate welcome to the interview")
    engine.say("Congratulations on being selected for this job interview")
    for i in range(len(audio)):
        if i == len(audio):
            engine.say(audio[i])
            engine.runAndWait()
        else:
            engine.say(audio[i])
            engine.runAndWait()
            time.sleep(30)
            engine.say('The time for answering the question has expired')
            engine.runAndWait()


# speak(questions)

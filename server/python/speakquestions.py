from tabnanny import check

import time
import pyttsx3

import random as rand


def speak(audio):
    # Initializing the pyttsx3 engine
    expire = ['It is past the time for answering', 'The time for answering the question has expired',
              'Time has run out for answering the question', 'It is too late to answer the question', 'There is no more time to answer the question']
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 140)
    engine.setProperty('voice', voices[1].id)
    engine.say("Hello candidate welcome to the mock interview")
    engine.say("Hope you do well")
    engine.say('First we will begin with the soft skills round')
    engine.say('Please introduce yourself')
    for i in range(len(audio)):
        engine.say(audio[i])
        engine.runAndWait()
        time.sleep(10)
        engine.say(expire[rand.randint(0, len(expire)-1)])
        engine.runAndWait()
    return audio


def skills_question(data):
    technical_round()
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 140)
    engine.setProperty('voice', voices[1].id)
    questions = {
        'NLP': {0: 'What do you understand by Natural Language Processing?', 1: 'What are stop words?', 2: 'What is NLTK?', 3: 'What is Syntactic Analysis?'},
        'MySQL': {0: 'Define database.', 1: 'What is DBMS and RDBMS? Explain the difference between them.', 2: 'What is normalization and its types?', 3: 'What are Joins in SQL?'},
        'PostgreSQL': {0: 'Define database.', 1: 'What is DBMS and RDBMS? Explain the difference between them.', 2: 'What is normalization and its types?', 3: 'What are Joins in SQL?'},
        'Java': {0: 'What do you understand by Java?', 1: 'Differentiate between JDK, JRE, and JVM.', 2: 'Explain method overloading.', 3: 'Explain the creation of a thread-safe singleton in Java using double-checked locking.'}
    }

    for i in range(len(data)):
        checker = data[i] in questions
        print(checker)
        if checker == True:

            engine.say(f'Now you will be asked questions about {data[i]}')
            for j in range(4):
                # print(questions[data[i]][j])
                engine.say(questions[data[i]][j])
                engine.runAndWait()
                time.sleep(10)
        else:
            continue
    return data


def technical_round():
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 140)
    engine.setProperty('voice', voices[2].id)
    engine.say('Now you need to answer some technical questions orally')
    engine.say('Let us begin now')
    engine.runAndWait()

from spacy import displacy
import spacy
import sys
import random
from spacy.util import minibatch, compounding
from pathlib import Path
from spacy.training.example import Example


nlp = spacy.load('en_core_web_sm')
# print(nlp.pipe_names)
train = [
    ("Worked on an interactive game using UE4 that aims to teach financial literacy to individuals",
     {"entities": [(36, 39, "Skills and Technologies"), (13, 29, "Projects")]}),
    ("I used Tilemaps to create the UI of this action-adventure game and Reinforcement Learning to help train AI agents in the game which acted as enemies to the main character.",
     {"entities": [(7, 15, "Skills and Technologies"), (104, 106, "Skills and Technologies"), (67, 89, "Skills and Technologies"),
                   (41, 62, "Projects")]}),
    ("We created a web app to help users report complaints related to drug trafficking anonymously with the help of maps using Leaflet",
     {"entities": [(13, 20, "Skills and Technologies"), (121, 128, "Skills and Technologies")]}),
    ("Developed an android application using Java for segregating waste materials and selling reusable products using an auction technique",
     {"entities": [(13, 32, "Skills and Technologies"), (39, 43, "Skills and Technologies")]}),
    ("Developed an interactive visual tool to help students practice mock interviews and programming exercises",
     {"entities": [(10, 78, "Projects")]}),

]
ner = nlp.get_pipe("ner")

for _, annotations in train:
    for ent in annotations.get("entities"):
        ner.add_label(ent[2])

disable_pipes = [pipe for pipe in nlp.pipe_names if pipe != 'ner']


with nlp.disable_pipes(*disable_pipes):
    optimizer = nlp.resume_training()

    for iteration in range(100):

        random.shuffle(train)
        losses = {}

        batches = minibatch(train, size=compounding(1.0, 4.0, 1.001))
        for batch in batches:
            texts, annotations = zip(*batch)

        example = []
        # Update the model with iterating each text
        for i in range(len(texts)):
            doc = nlp.make_doc(texts[i])
            example.append(Example.from_dict(doc, annotations[i]))

        # Update the model
        nlp.update(example, drop=0.5, losses=losses)
        # print(losses)

for text, _ in train:
    doc = nlp(text)
    # print("Entities", [(ent.text, ent.label_) for ent in doc.ents])


def rp(txt):
    list = []
    doc = nlp(txt)
    for ent in doc.ents:
        # print(ent.text, ent.start_char, ent.end_char, ent.label_)
        t = ent.text
        list.append(t)

        # displacy.render(nlp(doc.text), style='ent', jupyter=True)
    # print(list)
    return list

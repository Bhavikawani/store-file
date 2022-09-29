import re


def extract():
    with open("../server/public/files/Output.txt", "r") as file:
        data = file.read().replace("\n", "")

    new_str = re.sub('[^a-zA-Z0-9\n\.]', ' ', data)
    open('../server/public/files/Outputa.txt', 'w').write(new_str)
    return data

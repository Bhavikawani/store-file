import aspose.words as aw


def ptt():
    doc = aw.Document(r"../server/public/files/testres.pdf")
    doc.save("../server/public/files/Output.txt")
    return doc
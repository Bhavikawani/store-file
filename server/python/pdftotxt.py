import aspose.words as aw

doc = aw.Document(r"../server/public/files/testres.pdf")
doc.save("../server/public/files/Output.txt")
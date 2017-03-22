# BiteIn:
# Translate the file word.txt into a json file in another language.
# This uses Bing Translate.
# @author Jedda Boyle <jeddaboyle@gmail.com>
# @author Taavi Kivisik <taavi.kivisik@gmail.com>


from microsofttranslator import Translator


client_id = #Add microsoft login details here 
client_secret = #Add microsoft password here. 
translator = Translator(client_id, client_secret)


lang = 'de'
f = open('words.txt', 'r')
print '{'
for line in f:
    try:
        word = line.strip().lower()
        translation = translator.translate(word, lang).lower()
        print '\t"%s":"%s",\n' % (word, translation)
    except:
        pass

print '}'

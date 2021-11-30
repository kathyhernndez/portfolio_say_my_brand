import numpy as np
import nltk
nltk.download('punkt')
from nltk.stem.porter import PorterStemmer


stemmer = PorterStemmer()

#dividing the sentences in words
def tokenize(sentence):
    return nltk.word_tokenize(sentence)

#finding the root of the words
def stem(word):    
    return stemmer.stem(word.lower())

#making the vectors
def bag_of_words(tokenized_sentence, words):
    
    sentence_words = [stem(word) for word in tokenized_sentence]
    
    bag = np.zeros(len(words), dtype=np.float32)
    for idx, w in enumerate(words):
        if w in sentence_words: 
            bag[idx] = 1

    return bag
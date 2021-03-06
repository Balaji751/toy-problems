class LRU:
    def __init__(self):
        self.cache = []
    
    def put(self, x):
        if x in self.cache:
            temp = self.cache.pop(self.cache.index(x))
            self.cache.append(temp)
        else:
            self.cache.append(x)
            if len(self.cache) > 5:
                self.cache.pop(0)

    def get(self, e):
        if e < len(self.cache):
            self.cache.pop(e)

    def get_cache(self):
        return self.cache

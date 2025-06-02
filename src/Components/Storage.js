

const Storage = {
  setStorage: function(key,value) {
        localStorage.setItem(key,JSON.stringify(value))
  },
  getStorage: function(key) {
        return JSON.parse(localStorage.getItem(key))
  },
   clearStorage: function(key) {
        localStorage.removeItem(key)
  }
};

export default Storage;
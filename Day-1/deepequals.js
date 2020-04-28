function deepEquals(obj1, obj2) {
    if (obj1 === obj2) {
      return true;
    }
    else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
      if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;
      for (var prop in obj1) {
        if (obj2.hasOwnProperty(prop))
        {  
          if (! deepEquals(obj1[prop], obj2[prop]))
            return false;
        }
        else
          return false;
      }
      return true;
    }
    else 
      return false;
  }
var1 = {name:"Balaji",rollno:101};
var2 = {name:"Balaji", rollno:101}
console.log(deepEquals(var1,var2))
console.log(deepEquals(2,"2"))
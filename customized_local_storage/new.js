class Local_Stg {
    constructor() {
      this.map = new Map();
    }
    set_Item(key, value) {
      if (typeof value !== "string") {
        return this.map.set(key, JSON.stringify(value));
      }
      this.map.set(key, value);
    }
    get_Item(key) {
      if (this.map.has(key)) {
        console.log(this.map.get(key));
      } else {
        console.log("key is not Defined");
      }
    }
    remove_Item(key) {
      if (this.map.has(key)) {
        this.map.delete(key);
        console.log("the element is delete");
      } else {
        console.log("This key not exist in localStorage");
      }
    }
    clear() {
      if (this.map.size) {
        this.map.clear();
      } else {
        console.log("Data not found");
      }
      console.log(this.map.size);
    }
    legth() {
      console.log('Localstorage : '+this.map.size+' Key Present in LocalStorage');
    }
  }
  let obj = new Local_Stg();
  obj.set_Item("name", "tt");
  obj.set_Item("age", 21);
  obj.get_Item("age");
  obj.legth();
  console.log(obj);
  obj.remove_Item("name");
  console.log(obj);
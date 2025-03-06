const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
    
    if(!item?.name || !item?.price)
        return;
    
    
    else if (parseFloat(item.price)) {
    
    this.items.push(item);
    
    this.total += parseFloat(item.price);
    }
    else{
      console.log("Invalid price.");
    
      return;
    }
    
    },
    
    getTotal() {
    
    return `Total: ${parseFloat(this.total).toFixed(2)}`
    }
};
    
    checkout.addItem({ name: "Coffee Maker", price: "99.95" });
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    
    console.log(checkout.getTotal()); // Expected issue !
// === online shoping system model ===

// === *** Class and Access Modifiers *** ===

// base class for product
class Product {
  // private properties (encapsulation)
  private _id: number;
  private _name: string;
  private _price: number;

  // constructor
  constructor(id: number, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  // public getter methods (encapsulation)
  public getId(): number {
    return this._id;
  }
  public getName(): string {
    return this._name;
  }
  public getPrice(): number {
    return this._price;
  }

  // public setter method (encapsulation)
  public setPrice(newPrice: number): void {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("Price must be positive.");
    }
  }
}

// === *** Inheritence *** ===

// Electronics class inherits from Product
class Electronics extends Product {
  private _warrantyPeriod: number; // in months

  constructor(id: number, name: string, price: number, warrantyPeriod: number) {
    super(id, name, price); // Call the parent class constructor
    this._warrantyPeriod = warrantyPeriod;
  }

  public getWarrantyPeriod(): number {
    return this._warrantyPeriod;
  }
}

// Clothing class inherits from Product
class Clothing extends Product {
  private _size: string;

  constructor(id: number, name: string, price: number, size: string) {
    super(id, name, price); // Call the parent class constructor
    this._size = size;
  }

  public getSize(): string {
    return this._size;
  }
}

// === *** Polymorphism *** ===

class Order {
  private _orderId: number;
  private _products: Product[] = [];

  constructor(orderId: number) {
    this._orderId = orderId;
  }

  // Method to add a product to the order
  public addProduct(product: Product): void {
    this._products.push(product);
  }

  // Method to calculate the total price of the order
  public calculateTotal(): number {
    return this._products.reduce(
      (total, product) => total + product.getPrice(),
      0
    );
  }

  // Polymorphic method to print order details
  public printOrderDetails(): void {
    console.log(`Order ID: ${this._orderId}`);
    console.log("Products in the order:");
    this._products.forEach((product) => {
      console.log(`- ${product.getName()} ($${product.getPrice()})`);
    });
    console.log(`Total Price: $${this.calculateTotal()}`);
  }
}

// === *** Abstraction *** ===

// Abstract base class
abstract class User {
  protected _username: string;
  protected _email: string;

  constructor(username: string, email: string) {
    this._username = username;
    this._email = email;
  }

  // Public getter for username
  public getUsername(): string {
    return this._username;
  }

  public abstract getRole(): string;
}

// Customer class inherits from User
class Customer extends User {
  private _customerId: number;

  constructor(username: string, email: string, customerId: number) {
    super(username, email);
    this._customerId = customerId;
  }

  public getCustomerId(): number {
    return this._customerId;
  }

  public getRole(): string {
    return "Customer";
  }
}

// Admin class inherits from User
class Admin extends User {
  private _adminId: number;

  constructor(username: string, email: string, adminId: number) {
    super(username, email);
    this._adminId = adminId;
  }

  public getAdminId(): number {
    return this._adminId;
  }

  public getRole(): string {
    return "Admin";
  }
}

// === *** Encapsulation *** ===

// Creating instances of products
const laptop = new Electronics(1, "Laptop", 1200, 24);
const tshirt = new Clothing(2, "T-Shirt", 20, "M");

// Creating an order and adding products to it
const order = new Order(101);
order.addProduct(laptop);
order.addProduct(tshirt);

// Printing order details (polymorphism in action)
order.printOrderDetails();

// Creating users
const customer = new Customer("john_doe", "john@example.com", 1001);
const admin = new Admin("admin_user", "admin@example.com", 5001);

// Display user roles (demonstrating abstraction and inheritance)
console.log(`${customer.getUsername()} is a ${customer.getRole()}`);
console.log(`${admin.getUsername()} is an ${admin.getRole()}`);

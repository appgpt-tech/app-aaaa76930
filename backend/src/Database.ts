//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { VendorsEntity } from './db/Vendors.entity';
import { CustomersEntity } from './db/Customers.entity';
import { InventoryEntity } from './db/Inventory.entity';
import { ProductsEntity } from './db/Products.entity';
import { ProductCategoriesEntity } from './db/ProductCategories.entity';
import { DiscountsEntity } from './db/Discounts.entity';
import { ShoppingCartEntity } from './db/ShoppingCart.entity';
import { OrdersEntity } from './db/Orders.entity';
import { OrderDetailsEntity } from './db/OrderDetails.entity';
import { PaymentsEntity } from './db/Payments.entity';
import { ReviewsEntity } from './db/Reviews.entity';
import { SupportTicketsEntity } from './db/SupportTickets.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      VendorsEntity,
      CustomersEntity,
      InventoryEntity,
      ProductsEntity,
      ProductCategoriesEntity,
      DiscountsEntity,
      ShoppingCartEntity,
      OrdersEntity,
      OrderDetailsEntity,
      PaymentsEntity,
      ReviewsEntity,
      SupportTicketsEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          username: 'username 1',
          email: 'email 1',
          password: 'password 1',
          role: 'role 1',
          id: 10,
        },
        {
          username: 'username 2',
          email: 'email 2',
          password: 'password 2',
          role: 'role 2',
          id: 63,
        },
        {
          username: 'username 3',
          email: 'email 3',
          password: 'password 3',
          role: 'role 3',
          id: 33,
        },
        {
          username: 'username 4',
          email: 'email 4',
          password: 'password 4',
          role: 'role 4',
          id: 41,
        },
        {
          username: 'username 5',
          email: 'email 5',
          password: 'password 5',
          role: 'role 5',
          id: 94,
        },
      ],
      Vendors: [
        {
          companyName: 'companyName 1',
          contactName: 'contactName 1',
          email: 'email 1',
          password: 'password 1',
          id: 62,
        },
        {
          companyName: 'companyName 2',
          contactName: 'contactName 2',
          email: 'email 2',
          password: 'password 2',
          id: 9,
        },
        {
          companyName: 'companyName 3',
          contactName: 'contactName 3',
          email: 'email 3',
          password: 'password 3',
          id: 92,
        },
        {
          companyName: 'companyName 4',
          contactName: 'contactName 4',
          email: 'email 4',
          password: 'password 4',
          id: 91,
        },
        {
          companyName: 'companyName 5',
          contactName: 'contactName 5',
          email: 'email 5',
          password: 'password 5',
          id: 16,
        },
      ],
      Customers: [
        {
          customerName: 'customerName 1',
          email: 'email 1',
          password: 'password 1',
          billingAddress: 'billingAddress 1',
          shippingAddress: 'shippingAddress 1',
          country: 'country 1',
          phone: 'phone 1',
          id: 2,
        },
        {
          customerName: 'customerName 2',
          email: 'email 2',
          password: 'password 2',
          billingAddress: 'billingAddress 2',
          shippingAddress: 'shippingAddress 2',
          country: 'country 2',
          phone: 'phone 2',
          id: 74,
        },
        {
          customerName: 'customerName 3',
          email: 'email 3',
          password: 'password 3',
          billingAddress: 'billingAddress 3',
          shippingAddress: 'shippingAddress 3',
          country: 'country 3',
          phone: 'phone 3',
          id: 38,
        },
        {
          customerName: 'customerName 4',
          email: 'email 4',
          password: 'password 4',
          billingAddress: 'billingAddress 4',
          shippingAddress: 'shippingAddress 4',
          country: 'country 4',
          phone: 'phone 4',
          id: 92,
        },
        {
          customerName: 'customerName 5',
          email: 'email 5',
          password: 'password 5',
          billingAddress: 'billingAddress 5',
          shippingAddress: 'shippingAddress 5',
          country: 'country 5',
          phone: 'phone 5',
          id: 83,
        },
      ],
      Inventory: [
        { product: 1, quantity: 1, lowStockThreshold: 1, id: 60 },
        { product: 2, quantity: 2, lowStockThreshold: 2, id: 49 },
        { product: 3, quantity: 3, lowStockThreshold: 3, id: 44 },
        { product: 4, quantity: 4, lowStockThreshold: 4, id: 31 },
        { product: 5, quantity: 5, lowStockThreshold: 5, id: 25 },
      ],
      Products: [
        {
          productName: 'productName 1',
          vendor: 1,
          price: 0.58,
          weight: 0.07,
          description: 'description 1',
          thumbnail: 'thumbnail 1',
          image: 'image 1',
          category: 1,
          creationDate: '2023-05-19T14:38:51.433Z',
          stock: 1,
          id: 32,
        },
        {
          productName: 'productName 2',
          vendor: 2,
          price: 0.32,
          weight: 0.69,
          description: 'description 2',
          thumbnail: 'thumbnail 2',
          image: 'image 2',
          category: 2,
          creationDate: '2024-09-18T11:50:39.135Z',
          stock: 2,
          id: 34,
        },
        {
          productName: 'productName 3',
          vendor: 3,
          price: 0.11,
          weight: 0.22,
          description: 'description 3',
          thumbnail: 'thumbnail 3',
          image: 'image 3',
          category: 3,
          creationDate: '2025-03-29T18:41:53.339Z',
          stock: 3,
          id: 75,
        },
        {
          productName: 'productName 4',
          vendor: 4,
          price: 0.78,
          weight: 0.73,
          description: 'description 4',
          thumbnail: 'thumbnail 4',
          image: 'image 4',
          category: 4,
          creationDate: '2024-07-14T01:58:15.431Z',
          stock: 4,
          id: 90,
        },
        {
          productName: 'productName 5',
          vendor: 5,
          price: 0.93,
          weight: 0.69,
          description: 'description 5',
          thumbnail: 'thumbnail 5',
          image: 'image 5',
          category: 5,
          creationDate: '2024-01-31T13:52:54.221Z',
          stock: 5,
          id: 3,
        },
      ],
      ProductCategories: [
        { category: 'category 1', id: 57 },
        { category: 'category 2', id: 0 },
        { category: 'category 3', id: 18 },
        { category: 'category 4', id: 25 },
        { category: 'category 5', id: 50 },
      ],
      Discounts: [
        {
          product: 1,
          discountType: 'discountType 1',
          description: 'description 1',
          discountAmount: 0.27,
          discountPercent: 0.91,
          id: 99,
        },
        {
          product: 2,
          discountType: 'discountType 2',
          description: 'description 2',
          discountAmount: 0.14,
          discountPercent: 0.61,
          id: 22,
        },
        {
          product: 3,
          discountType: 'discountType 3',
          description: 'description 3',
          discountAmount: 0.2,
          discountPercent: 0.96,
          id: 14,
        },
        {
          product: 4,
          discountType: 'discountType 4',
          description: 'description 4',
          discountAmount: 0.13,
          discountPercent: 0.86,
          id: 10,
        },
        {
          product: 5,
          discountType: 'discountType 5',
          description: 'description 5',
          discountAmount: 0.19,
          discountPercent: 0.5,
          id: 51,
        },
      ],
      ShoppingCart: [
        { customer: 1, product: 1, priceAtPurchase: 0.99, quantity: 1, id: 20 },
        { customer: 2, product: 2, priceAtPurchase: 0.6, quantity: 2, id: 14 },
        { customer: 3, product: 3, priceAtPurchase: 0.42, quantity: 3, id: 13 },
        { customer: 4, product: 4, priceAtPurchase: 0.69, quantity: 4, id: 79 },
        { customer: 5, product: 5, priceAtPurchase: 0.76, quantity: 5, id: 93 },
      ],
      Orders: [
        {
          orderNumber: 'orderNumber 1',
          customer: 1,
          totalAmount: 0.4,
          vat: 0.81,
          totalAmountWithVat: 0.73,
          shippingCost: 0.39,
          shippingAddress: 'shippingAddress 1',
          orderAddress: 'orderAddress 1',
          orderEmail: 'orderEmail 1',
          orderDate: '2025-01-24T02:05:10.333Z',
          orderStatus: 'orderStatus 1',
          trackingNo: 'trackingNo 1',
          id: 51,
        },
        {
          orderNumber: 'orderNumber 2',
          customer: 2,
          totalAmount: 0.03,
          vat: 0.04,
          totalAmountWithVat: 0.58,
          shippingCost: 0.01,
          shippingAddress: 'shippingAddress 2',
          orderAddress: 'orderAddress 2',
          orderEmail: 'orderEmail 2',
          orderDate: '2024-02-15T17:30:31.301Z',
          orderStatus: 'orderStatus 2',
          trackingNo: 'trackingNo 2',
          id: 60,
        },
        {
          orderNumber: 'orderNumber 3',
          customer: 3,
          totalAmount: 0.02,
          vat: 0.85,
          totalAmountWithVat: 0.34,
          shippingCost: 0.26,
          shippingAddress: 'shippingAddress 3',
          orderAddress: 'orderAddress 3',
          orderEmail: 'orderEmail 3',
          orderDate: '2024-01-12T01:42:51.668Z',
          orderStatus: 'orderStatus 3',
          trackingNo: 'trackingNo 3',
          id: 26,
        },
        {
          orderNumber: 'orderNumber 4',
          customer: 4,
          totalAmount: 0.08,
          vat: 0,
          totalAmountWithVat: 0.92,
          shippingCost: 0.29,
          shippingAddress: 'shippingAddress 4',
          orderAddress: 'orderAddress 4',
          orderEmail: 'orderEmail 4',
          orderDate: '2024-01-08T04:36:42.291Z',
          orderStatus: 'orderStatus 4',
          trackingNo: 'trackingNo 4',
          id: 71,
        },
        {
          orderNumber: 'orderNumber 5',
          customer: 5,
          totalAmount: 0.24,
          vat: 0.27,
          totalAmountWithVat: 0.94,
          shippingCost: 0.49,
          shippingAddress: 'shippingAddress 5',
          orderAddress: 'orderAddress 5',
          orderEmail: 'orderEmail 5',
          orderDate: '2023-08-25T13:20:56.276Z',
          orderStatus: 'orderStatus 5',
          trackingNo: 'trackingNo 5',
          id: 94,
        },
      ],
      OrderDetails: [
        {
          orderNumber: 1,
          line: 1,
          product: 1,
          price: 0.77,
          quantity: 1,
          id: 70,
        },
        {
          orderNumber: 2,
          line: 2,
          product: 2,
          price: 0.48,
          quantity: 2,
          id: 36,
        },
        {
          orderNumber: 3,
          line: 3,
          product: 3,
          price: 0.6,
          quantity: 3,
          id: 70,
        },
        {
          orderNumber: 4,
          line: 4,
          product: 4,
          price: 0.81,
          quantity: 4,
          id: 62,
        },
        {
          orderNumber: 5,
          line: 5,
          product: 5,
          price: 0.46,
          quantity: 5,
          id: 82,
        },
      ],
      Payments: [
        {
          orderNumber: 1,
          amount: 0.13,
          paymentMethod: 'paymentMethod 1',
          paymentDate: '2024-09-18T19:07:21.779Z',
          paymentStatus: 'paymentStatus 1',
          id: 81,
        },
        {
          orderNumber: 2,
          amount: 0.43,
          paymentMethod: 'paymentMethod 2',
          paymentDate: '2025-03-14T17:53:04.143Z',
          paymentStatus: 'paymentStatus 2',
          id: 31,
        },
        {
          orderNumber: 3,
          amount: 0.39,
          paymentMethod: 'paymentMethod 3',
          paymentDate: '2023-12-05T11:22:56.959Z',
          paymentStatus: 'paymentStatus 3',
          id: 71,
        },
        {
          orderNumber: 4,
          amount: 0.44,
          paymentMethod: 'paymentMethod 4',
          paymentDate: '2024-05-09T00:50:39.639Z',
          paymentStatus: 'paymentStatus 4',
          id: 72,
        },
        {
          orderNumber: 5,
          amount: 0.46,
          paymentMethod: 'paymentMethod 5',
          paymentDate: '2025-01-26T04:28:35.804Z',
          paymentStatus: 'paymentStatus 5',
          id: 95,
        },
      ],
      Reviews: [
        {
          product: 1,
          customer: 1,
          vendor: 1,
          rating: 0.32,
          reviewDetails: 'reviewDetails 1',
          date: '2024-08-14T06:54:14.789Z',
          id: 52,
        },
        {
          product: 2,
          customer: 2,
          vendor: 2,
          rating: 0.79,
          reviewDetails: 'reviewDetails 2',
          date: '2024-06-01T17:06:50.530Z',
          id: 45,
        },
        {
          product: 3,
          customer: 3,
          vendor: 3,
          rating: 0.73,
          reviewDetails: 'reviewDetails 3',
          date: '2024-01-12T15:58:47.970Z',
          id: 49,
        },
        {
          product: 4,
          customer: 4,
          vendor: 4,
          rating: 0.89,
          reviewDetails: 'reviewDetails 4',
          date: '2024-05-24T17:46:19.849Z',
          id: 5,
        },
        {
          product: 5,
          customer: 5,
          vendor: 5,
          rating: 0.2,
          reviewDetails: 'reviewDetails 5',
          date: '2023-05-03T12:15:46.109Z',
          id: 55,
        },
      ],
      SupportTickets: [
        {
          user: 1,
          customer: 1,
          description: 'description 1',
          status: 'status 1',
          creationDate: '2024-11-04T10:23:32.686Z',
          resolutionDate: '2024-06-13T05:38:47.159Z',
          id: 76,
        },
        {
          user: 2,
          customer: 2,
          description: 'description 2',
          status: 'status 2',
          creationDate: '2023-08-15T09:35:11.311Z',
          resolutionDate: '2024-02-25T19:55:43.551Z',
          id: 7,
        },
        {
          user: 3,
          customer: 3,
          description: 'description 3',
          status: 'status 3',
          creationDate: '2023-11-09T14:27:09.004Z',
          resolutionDate: '2023-04-22T03:37:16.196Z',
          id: 64,
        },
        {
          user: 4,
          customer: 4,
          description: 'description 4',
          status: 'status 4',
          creationDate: '2024-04-17T02:19:35.065Z',
          resolutionDate: '2024-12-19T06:47:56.690Z',
          id: 61,
        },
        {
          user: 5,
          customer: 5,
          description: 'description 5',
          status: 'status 5',
          creationDate: '2024-11-26T20:13:52.054Z',
          resolutionDate: '2024-02-02T12:11:49.488Z',
          id: 90,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('VendorsEntity', data.Vendors);
      await this.SeedResource('CustomersEntity', data.Customers);
      await this.SeedResource('InventoryEntity', data.Inventory);
      await this.SeedResource('ProductsEntity', data.Products);
      await this.SeedResource(
        'ProductCategoriesEntity',
        data.ProductCategories,
      );
      await this.SeedResource('DiscountsEntity', data.Discounts);
      await this.SeedResource('ShoppingCartEntity', data.ShoppingCart);
      await this.SeedResource('OrdersEntity', data.Orders);
      await this.SeedResource('OrderDetailsEntity', data.OrderDetails);
      await this.SeedResource('PaymentsEntity', data.Payments);
      await this.SeedResource('ReviewsEntity', data.Reviews);
      await this.SeedResource('SupportTicketsEntity', data.SupportTickets);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}

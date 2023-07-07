import { Card } from ".."

interface Product {
  id: number;
  name: string;
  price: string;
  description: string,
  category_id: number,
  instock: number,
  expiryDate: string,
  available: boolean,
  vendor_id: number,
  createdAt: string,
  updatedAt: string,
  picture_urls: string[];
}

export default function Popular() {
  const products: Product[] = [
    {
        "id": 1,
        "name": "Samsung Galaxy S21",
        "description": "Samsung Galaxy S21 is a smartphone that was tested with the Android 11 operating system. This model weighs 6.2 ounces, has a 6.2-inch touch screen display, 12-megapixel main camera, and 10-megapixel selfie camera. It comes with 8GB of RAM.",
        "category_id": 1,
        "price": "1000",
        "picture_urls": [
            "https://res.cloudinary.com/dck6gpxb9/image/upload/v1688228007/testing/images/gtbwetcfottjnngru48o.jpg"
        ],
        "instock": 10,
        "expiryDate": "2023-12-31T00:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-06-25T01:11:23.690Z",
        "updatedAt": "2023-06-25T01:11:23.690Z"
    },
    {
        "id": 3,
        "name": "Sumsang 1111TV 52 inch",
        "description": "New brand for sale",
        "category_id": 1,
        "price": "800",
        "picture_urls": [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 0,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T11:26:25.927Z",
        "updatedAt": "2023-05-08T11:46:05.856Z"
    },
    {
        "id": 4,
        "name": "Iphone1111 13 pro",
        "description": "New brand for sale",
        "category_id": 1,
        "price": "800",
        "picture_urls": [
            "https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1724&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 0,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T13:48:23.916Z",
        "updatedAt": "2023-05-08T14:11:33.373Z"
    },
    {
        "id": 5,
        "name": "Iphone 12",
        "description": "New brand ",
        "category_id": 1,
        "price": "120000",
        "picture_urls": [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 0,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T14:15:42.837Z",
        "updatedAt": "2023-05-08T14:57:01.656Z"
    },
    {
        "id": 6,
        "name": "logitech111 master",
        "description": "mouse",
        "category_id": 2,
        "price": "2000",
        "picture_urls": [
            "https://images.unsplash.com/photo-1567440648277-747037564d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 199,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T17:00:37.911Z",
        "updatedAt": "2023-05-08T17:10:42.770Z"
    },
    {
        "id": 2,
        "name": "iPhone 13",
        "description": "The iPhone 13 is the latest model of the Apple smartphone. It features a 6.1-inch Super Retina XDR display, A15 Bionic chip, 5G connectivity, and a dual-camera system. It comes with iOS 15 operating system and up to 1TB of storage.",
        "category_id": 1,
        "price": "1200",
        "picture_urls": [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-hero-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1631226031000"
        ],
        "instock": 4,
        "expiryDate": "2024-12-31T00:00:00.000Z",
        "available": false,
        "vendor_id": 2,
        "createdAt": "2023-06-25T01:11:23.690Z",
        "updatedAt": "2023-06-25T01:11:28.299Z"
    },
    {
        "id": 7,
        "name": "Test Prod",
        "description": "This is a test product",
        "category_id": 1,
        "price": "10.99",
        "picture_urls": [
            "https://images.unsplash.com/photo-1567440648277-747037564d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
        ],
        "instock": 50,
        "expiryDate": "2023-05-31T00:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-06-25T01:11:30.084Z",
        "updatedAt": "2023-06-25T01:11:30.084Z"
    },
    {
        "id": 5,
        "name": "Iphone 12",
        "description": "New brand ",
        "category_id": 1,
        "price": "120000",
        "picture_urls": [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 0,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T14:15:42.837Z",
        "updatedAt": "2023-05-08T14:57:01.656Z"
    },
    {
        "id": 6,
        "name": "logitech111 master",
        "description": "mouse",
        "category_id": 2,
        "price": "2000",
        "picture_urls": [
            "https://images.unsplash.com/photo-1567440648277-747037564d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            "https://example.com/picture2.jpg",
            "https://example.com/picture3.jpg",
            "https://example.com/picture4.jpg"
        ],
        "instock": 199,
        "expiryDate": "2000-11-30T22:00:00.000Z",
        "available": true,
        "vendor_id": 2,
        "createdAt": "2023-05-08T17:00:37.911Z",
        "updatedAt": "2023-05-08T17:10:42.770Z"
    },
    {
        "id": 2,
        "name": "iPhone 13",
        "description": "The iPhone 13 is the latest model of the Apple smartphone. It features a 6.1-inch Super Retina XDR display, A15 Bionic chip, 5G connectivity, and a dual-camera system. It comes with iOS 15 operating system and up to 1TB of storage.",
        "category_id": 1,
        "price": "1200",
        "picture_urls": [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-hero-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1631226031000"
        ],
        "instock": 4,
        "expiryDate": "2024-12-31T00:00:00.000Z",
        "available": false,
        "vendor_id": 2,
        "createdAt": "2023-06-25T01:11:23.690Z",
        "updatedAt": "2023-06-25T01:11:28.299Z"
    },
  ]

  return (
    <div className="px-[7%] mt-10 flex flex-col">
      <div className="flex max-[820px]:flex-col gap-5 justify-between font-Poppins">
        <p className="text-customBlue font-semibold text-2xl whitespace-nowrap">Popular products</p>
        <div className="flex gap-5 flex-wrap">
          <button type="button" className='px-5 py-1 h-[30px] rounded-3xl border border-customBlue hover:border-customBlue hover:text-white hover:bg-customBlue text-customBlue text-sm'>Cameras</button>
          <button type="button" className='px-5 py-1 h-[30px] rounded-3xl border border-customBlue hover:border-customBlue hover:text-white hover:bg-customBlue text-customBlue text-sm'>Laptops</button>
          <button type="button" className='px-5 py-1 h-[30px] rounded-3xl border border-customBlue hover:border-customBlue hover:text-white hover:bg-customBlue text-customBlue text-sm'>Tablets</button>
          <button type="button" className='px-5 py-1 h-[30px] rounded-3xl border border-customBlue hover:border-customBlue hover:text-white hover:bg-customBlue text-customBlue text-sm'>Mouse</button>
        </div>
      </div>
      <div className="flex gap-5 mt-8 justify-evenly flex-wrap">
        {
          products.map((product: Product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              picture_urls={product.picture_urls}
              id={product.id}
              rating={undefined}
            />
          ))}
      </div>
      <div className='Pagination flex gap-3 self-center mt-10'>
        <div className='h-3 w-3 rounded-full bg-tertiary cursor-pointer'></div>
        <div className='h-3 w-3 rounded-full border border-gray cursor-pointer'></div>
        <div className='h-3 w-3 rounded-full border border-gray cursor-pointer'></div>
        </div>
    </div>
  )
}

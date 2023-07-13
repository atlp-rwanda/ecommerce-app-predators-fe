export interface Product {
    [key: string]: any;
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

export function groupObjectsByProperty(array: Product[], property: string) {
    const groups: Product[][] = [];
  
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      const value = obj[property];
      let groupIndex = -1;
  
      for (let j = 0; j < groups.length; j++) {
        if (groups[j][0][property] === value) {
          groupIndex = j;
          break;
        }
      }
  
      if (groupIndex === -1) {
        groups.push([obj]);
      } else {
        groups[groupIndex].push(obj);
      }
    }
  
    return groups;
  }

  export const mapCategories = (word: number | string) => {
    switch(word) {
      case 1:
        return "Heaphones";
      case "Heaphones":
        return 1;
      case 2:
        return "Electronics";
      case "Electronics":
        return 2;
      case "Unkown":
        return 999;
      default:
        return "Unknown"
    }
  }
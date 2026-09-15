import store1 from "../assets/store-1.jpg";
import store2 from "../assets/store-2.jpg";
import store3 from "../assets/store-3.jpg";
import store4 from "../assets/store-4.jpg";

export interface StoreLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  pincode: string;
  phone: string;
  hours: string;
  image: string;
  mapQueryUrl: string;
}

export const STORES: StoreLocation[] = [
  {
    id: "coimbatore",
    city: "Coimbatore",
    name: "House of Thiraa — Race Course Road",
    address: "12 Race Course Road, Coimbatore 641018",
    pincode: "641018",
    phone: "+91 90000 00001",
    hours: "10:00 AM – 8:30 PM (Open Daily)",
    image: store1,
    mapQueryUrl: "https://maps.google.com/?q=Race+Course+Road+Coimbatore",
  },
  {
    id: "chennai",
    city: "Chennai",
    name: "House of Thiraa — Alwarpet",
    address: "48 Kasturi Rangan Road, Alwarpet, Chennai 600018",
    pincode: "600018",
    phone: "+91 90000 00002",
    hours: "10:30 AM – 9:00 PM (Open Daily)",
    image: store2,
    mapQueryUrl: "https://maps.google.com/?q=Kasturi+Rangan+Road+Alwarpet+Chennai",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    name: "House of Thiraa — Malleshwaram",
    address: "7 Sampige Road, Malleshwaram, Bengaluru 560003",
    pincode: "560003",
    phone: "+91 90000 00003",
    hours: "10:30 AM – 8:30 PM (Open Daily)",
    image: store3,
    mapQueryUrl: "https://maps.google.com/?q=Sampige+Road+Malleshwaram+Bengaluru",
  },
  {
    id: "kochi",
    city: "Kochi",
    name: "House of Thiraa — Mattancherry",
    address: "23 Bazaar Road, Mattancherry, Kochi 682002",
    pincode: "682002",
    phone: "+91 90000 00004",
    hours: "10:00 AM – 8:00 PM (Open Daily)",
    image: store4,
    mapQueryUrl: "https://maps.google.com/?q=Bazaar+Road+Mattancherry+Kochi",
  },
];

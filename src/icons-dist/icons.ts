export type IconsId =
  | "apartment"
  | "arrow"
  | "calculate"
  | "discord"
  | "facebook"
  | "favorite"
  | "filter"
  | "fullscreen"
  | "home"
  | "house"
  | "in"
  | "instagram"
  | "location"
  | "loupe"
  | "mail"
  | "map"
  | "office"
  | "phone"
  | "serch"
  | "twitter"
  | "villa";

export type IconsKey =
  | "Apartment"
  | "Arrow"
  | "Calculate"
  | "Discord"
  | "Facebook"
  | "Favorite"
  | "Filter"
  | "Fullscreen"
  | "Home"
  | "House"
  | "In"
  | "Instagram"
  | "Location"
  | "Loupe"
  | "Mail"
  | "Map"
  | "Office"
  | "Phone"
  | "Serch"
  | "Twitter"
  | "Villa";

export enum Icons {
  Apartment = "apartment",
  Arrow = "arrow",
  Calculate = "calculate",
  Discord = "discord",
  Facebook = "facebook",
  Favorite = "favorite",
  Filter = "filter",
  Fullscreen = "fullscreen",
  Home = "home",
  House = "house",
  In = "in",
  Instagram = "instagram",
  Location = "location",
  Loupe = "loupe",
  Mail = "mail",
  Map = "map",
  Office = "office",
  Phone = "phone",
  Serch = "serch",
  Twitter = "twitter",
  Villa = "villa",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Apartment]: "61697",
  [Icons.Arrow]: "61698",
  [Icons.Calculate]: "61699",
  [Icons.Discord]: "61700",
  [Icons.Facebook]: "61701",
  [Icons.Favorite]: "61702",
  [Icons.Filter]: "61703",
  [Icons.Fullscreen]: "61704",
  [Icons.Home]: "61705",
  [Icons.House]: "61706",
  [Icons.In]: "61707",
  [Icons.Instagram]: "61708",
  [Icons.Location]: "61709",
  [Icons.Loupe]: "61710",
  [Icons.Mail]: "61711",
  [Icons.Map]: "61712",
  [Icons.Office]: "61713",
  [Icons.Phone]: "61714",
  [Icons.Serch]: "61715",
  [Icons.Twitter]: "61716",
  [Icons.Villa]: "61717",
};

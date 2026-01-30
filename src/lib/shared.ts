export const phone = "+919876543210";
export const secondaryphone = "+918876543210";

export const email = "info@mojorealty.com";

export const officeAddress = [
  "9th Floor, Cabin 101",
  "ALT-F Coworking, Kapil Kavuri Hub",
  "No. 144, Nanakramguda Main Road",
  "Survey No. 37, Financial District",
  "Hyderabad, Rangareddy",
  "Telangana 500032",
];

export const officeAddressSingle =
  "9th Floor, Cabin 101, ALT-F Coworking, Kapil Kavuri Hub, No. 144, Nanakramguda Main Road, Survey No. 37, Financial District, Hyderabad, Rangareddy, Telangana 500032";

export const formatPhone = (num: string) => {
  return num.replace(/(\+91)(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
};

interface ICarData {
  Make: string;
  BuildYear: string;
  Model: string;
  tyreSizes: string[];
}

interface ChooseTyreSizeProps {
  carData: ICarData;
  postCode: string;
}


// export const ukRegPlatesRegex = new RegExp(/^([A-Z]{3}\s?(\d{3}|\d{2}|d{1})\s?[A-Z])|([A-Z]\s?(\d{3}|\d{2}|\d{1})\s?[A-Z]{3})|(([A-HK-PRSVWY][A-HJ-PR-Y])\s?([0][2-9]|[1-9][0-9])\s?[A-HJ-PR-Z]{3})$/);
export const ukRegPlatesRegex = /^[A-Za-z]{2}[0-9]{2}\s?[A-Za-z]{3}|[A-Za-z][0-9]{1,3}\s?[A-Za-z]{3}$/;
// export const ukRegPlatesRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/;


const ukPostCodeRegex = /^(gir ?0aa|[a-pr-uwyz]([0-9]{1,2}|([a-hk-y][0-9]|[a-hk-y][0-9]([0-9]|[abehmnprv-y]))|([0-9][a-hjks-uw])|([a-hk-y][0-9][abehmnprv-y])) ?[0-9][abd-hjlnp-uw-z]{2})$/;


export const validateRegPlates = (regPlates: string) => {
  return ukRegPlatesRegex.test(regPlates.toUpperCase());
}

export const validatePostCode = (postCode: string) => {
  return ukPostCodeRegex.test(postCode.toUpperCase());
}
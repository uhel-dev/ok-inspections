import { SparklesIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export interface OpeningDetails {
  day: string;
  open: string | Date;
  close: string | Date;
}

export interface ReviewStats {
  averageRating: number;
  numberOfReviews: number;
}

export interface Review {
  author: string;
  date: string | Date;
  rating: number;
  review: string;
}

export interface Product {
  name: string;
  description?: string;
  price?: string;
}

export interface OpeningHours {
  monday: OpeningDetails;
  tuesday: OpeningDetails;
  wednesday: OpeningDetails;
  thursday: OpeningDetails;
  friday: OpeningDetails;
  saturday: OpeningDetails;
  sunday: OpeningDetails;
}

export interface Business {
  businessName: string;
  businessType: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessOverview: string;
  // array of urls to images of the business
  businessPhotos: string[];
  openingHours: OpeningHours;
  reviewStats: ReviewStats;
  reviews: Review[];
  businessSlug: string;
  businessLogoImgUrl?: string;
  businessCoverImgUrl?: string;
  businessUniqueSellingPoints?: string[];
}

export interface Business {
  businessName: string;
  businessType: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  businessWebsite: string;
  businessOverview: string;
  // array of urls to images of the business
  businessPhotos: string[];
  openingHours: OpeningHours;
  reviewStats: ReviewStats;
  reviews: Review[];
  businessSlug: string;
  businessLogoImgUrl?: string;
  businessCoverImgUrl?: string;
  businessUniqueSellingPoints?: string[];
}

export interface BusinessCMS {
  businessSlug: string;
  businessAddress: string;
  businessAverageRating: number;
  businessEmail: string;
  businessName: string;
  businessNumberOfReviews: number;
  businessOpeningHours: OpeningDetails[];
  businessOverview: {
    raw: any;
  };
  businessPhone: string;
  businessPhotos: {
    url: string;
  }[];
  businessType: string;
  businessWebsite: string;
  businessReviews: {
    author: string;
    date: string;
    rating: number;
    review: string;
  }[];
  businessLogoImage?: {
    url: string;
  };
  businessPrices?: any[]
}



const positiveReviews: Review[] = [
  {
    "author": "Michael Thompson",
    "date": "2023-09-12",
    "rating": 5,
    "review": "Incredible service! The technician was there in a flash and handled everything with superb skill."
  },
  {
    "author": "Samantha Green",
    "date": "2023-04-18",
    "rating": 4,
    "review": "Very good experience. Quick response time and very courteous staff."
  },
  {
    "author": "Liam Brown",
    "date": "2023-08-07",
    "rating": 3,
    "review": "Good service overall, though a bit on the expensive side. But they get the job done!"
  },
  {
    "author": "Emma Wilson",
    "date": "2023-10-05",
    "rating": 5,
    "review": "Outstanding service! They came out to me in the middle of the night and were so professional."
  },
  {
    "author": "Noah Martinez",
    "date": "2023-06-21",
    "rating": 4,
    "review": "Really good service. Efficient and reliable. Would definitely use again."
  },
  {
    "author": "Olivia Garcia",
    "date": "2023-11-02",
    "rating": 3,
    "review": "Decent job, a bit slow but very thorough. Polite staff which was a plus."
  },
  {
    "author": "William Rodriguez",
    "date": "2023-05-16",
    "rating": 5,
    "review": "Fantastic! They saved me when I was stranded. Fast and very efficient."
  },
  {
    "author": "Ava Martinez",
    "date": "2023-07-30",
    "rating": 4,
    "review": "Great work, friendly technician. A little late but worth the wait."
  }
];


// export const firstBusiness: Business = {
//   businessName: "Yeading Lane Tyres",
//   businessType: "Tyre Shop",
//   businessAddress: "Yeading Lane, Hayes, London, UB4 0EL",
//   businessPhone: "020 3089 8352",
//   businessEmail: "info@yeadinglanetyres.co.uk",
//   businessWebsite: "https://yeadinglanetyres.co.uk",
//   businessOverview: "At Yeading Lane Tyres, we offer a wide selection of high-quality new and used tyres at competitive prices. Our experienced staff is dedicated to providing excellent customer service and helping you find the perfect tyres for your vehicle. We pride ourselves on our wide range of tyres suitable for all types of cars and vans, ensuring that you have a safe and comfortable ride.",
//   businessPhotos: [
//     "/businesses/ylt1.jpg",
//     "/businesses/ylt2.jpg",
//     "/businesses/ylt3.jpg",
//     "/businesses/ylt4.jpg",
//     "/businesses/ylt5.jpg",
//     "/businesses/ylt6.jpg",
//     "/businesses/ylt7.jpg",
//     "/businesses/ylt8.jpg",
//     "/businesses/ylt9.jpg"
//   ],
//   openingHours: {
//     "monday": {
//       "day": "Monday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     tuesday: {
//       "day": "Tuesday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     wednesday: {
//       "day": "Wednesday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     thursday: {
//       "day": "Thursday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     friday: {
//       "day": "Friday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     saturday: {
//       "day": "Saturday",
//       "open": "08:00",
//       "close": "18:00"
//     },
//     sunday: {
//       "day": "Sunday",
//       "open": "08:00",
//       "close": "18:00"
//     }
//   },
//   reviewStats: {
//     averageRating: 4,
//     numberOfReviews: 10
//   },
//   reviews: positiveReviews,
//   businessSlug: 'yeading-lane-tyres',
//   businessUniqueSellingPoints: []
// }

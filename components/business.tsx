import { SparklesIcon, StarIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Review, ReviewStats } from "../data/businesses/business";

export const HighestStandardUSP = () => {
  return (
    <div className={`flex justify-center items-center gap-2 font-uk-reg-plates text-lg`}>
      <SparklesIcon className={`w-10s h-10 text-24h-yellow`}/>
      <div>Highest Standards</div>
    </div>
  )
}

export const ReliableServicesUSP = () => {
  return (
    <div className={`flex justify-center items-center gap-2 font-uk-reg-plates text-lg`}>
      <CheckCircleIcon className={`w-10 h-10 text-24h-yellow`}/>
      <div>Reliable Services</div>
    </div>
  )
}

export const FullyQualifiedUSP = () => {
  return (
    <div className={`flex justify-center items-center gap-2 font-uk-reg-plates text-lg`}>
      <TrophyIcon className={`w-10 h-10 text-24h-yellow`}/>
      <div>Fully Qualified</div>
    </div>
  )
}

interface ReviewBoxProps {
  businessAverageRating: number;
  businessNumberOfReviews: number;
  reviews: Review[];
}

export const ReviewBox = ({ businessAverageRating, businessNumberOfReviews, reviews }: ReviewBoxProps) => {
  return (
    <div className={`grid gap-2`}>
      <div>Review Summary</div>
      <div className={`flex items-center gap-2`}>
        { Array(businessAverageRating).fill(0).map((_, i) => {
          return (
            <StarIcon key={i} className={`w-6 h-6 text-24h-yellow`}/>
          )
        })}
        <div className={`text-xl font-uk-reg-plates`}>{businessNumberOfReviews}</div>
      </div>
      <div>
        {
          [5,4,3,2,1].map((rating, i) => {
            const numberOfReviewsWithRating = reviews.filter(review => review.rating === rating).length
            const percentageOfReviewsWithRating = (numberOfReviewsWithRating / reviews.length * 100).toFixed(0)
            return (
              <div className={`flex gap-2 justify-center items-center`} key={i}>
                <div className={`w-6 flex justify-center items-center`}>{rating}</div>
                <StarIcon key={i} className={`w-6 h-6`}/>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className={`bg-blue-600 h-2.5 rounded-full`} style={{width: `${percentageOfReviewsWithRating}%`}}></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
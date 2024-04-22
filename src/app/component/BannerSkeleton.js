import { ShimmerSimpleGallery } from "react-shimmer-effects"


const BannerSkeleton = () => {
  return (
    <div>
       <ShimmerSimpleGallery 
        card 
        imageHeight={300}
        row={1}
        col={1}
        />
    </div>
  )
}

export default BannerSkeleton
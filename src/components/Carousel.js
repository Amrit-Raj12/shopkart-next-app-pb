import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const CarouselComponent = () => {
  return (
    <Carousel
      dynamicHeight={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={2000}
      showStatus={false}
      className="mt-2"
      renderIndicator={false}
    >
      <div>

        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fdbba696398723.5ead7fda36a50.jpg"
          alt="First Image"
          className="h-[150px] sm:h-[400px]"
        />
      </div>
      <div>

        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26272874884703.5c3d5dc92e10f.jpg"
          alt="First Image"
          className="h-[150px] sm:h-[400px]"
        />
      </div>
      <div>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/867c5085166225.5d737ca402162.jpg"
          alt="Second Image"
          className="h-[150px] sm:h-[400px]"
        />
      </div>

    </Carousel>
  )
}

export default CarouselComponent

import {Carousel} from "@mantine/carousel"
import { rem } from "@mantine/core"
import { MainProduct } from ".."



function Carousel_container() {
  return (
    <Carousel
    mx="auto"
    withIndicators
    withControls={false}
    styles={{
      control: {
        opacity: 0,
        cursor: "default"
      },
      indicator: {
        width: rem(12),
        height: rem(12),
        transition: 'width 250ms ease',
        border: `1px solid gray`,
        background: '#EDA415',
        '&[data-active]': {
          background: "#EDA415",
          border: "#EDA415"
        },
      },
    }}
    >
      <Carousel.Slide>
        <MainProduct/>
      </Carousel.Slide>
      <Carousel.Slide>
        <MainProduct/>
      </Carousel.Slide>
      <Carousel.Slide>
        <MainProduct/>
      </Carousel.Slide>
    </Carousel>
  )
}

export default Carousel_container
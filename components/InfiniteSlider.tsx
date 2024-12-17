import Marquee from "./ui/marquee"


const InfiniteSlider = () => {

    // const sliderItems = [
    //     { id: 1, text: "Transformation" },
    //     { id: 2, text: "Motivation" },
    //     { id: 3, text: "Progresss" },
    //     { id: 4, text: "Fitness" },
    //     { id: 5, text: "Transformation" },
    //     { id: 6, text: "Transformation" },
    //     { id: 7, text: "Transformation" },
    //     { id: 8, text: "Transformation" },
    //     { id: 9, text: "Transformation" },
    //     { id: 10, text: "Transformation" },
    //   ];
      

  return (
    <div className="h-64">
        <div className="slider">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">

                <Marquee className="[--duration:20s]">
                    <div className="item_a item1">Transformation</div>
                    <div className="item_a item2">/</div>
                    <div className="item_a item3">Motivation</div>
                    <div className="item_a item4">/</div>
                    <div className="item_a item5">Progress</div>
                    <div className="item_a item6">/</div>
                    <div className="item_a item7">Fitness</div>
                    <div className="item_a item8">/</div>
                </Marquee>
                <Marquee reverse className="[--duration:20s]">
                    <div className="item_b item1">Progress</div>
                    <div className="item_b item2">/</div>
                    <div className="item_b item3">WORK</div>
                    <div className="item_b item4">/</div>
                    <div className="item_b item5">Strength</div>
                    <div className="item_b item6">/</div>
                    <div className="item_b item7">Community</div>
                    <div className="item_b item8">/</div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}


export default InfiniteSlider






































                {/* { sliderItems.map((item) => (
                    <div key={item.id} className="item item1">{item.text}</div>
                ))
                
            } */}
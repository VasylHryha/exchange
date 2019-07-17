import React from "react";
import pc1 from '../../../image/picture slider/pc1.jpg'
import pc2 from '../../../image/picture slider/pc2.jpg'
import pc3 from '../../../image/picture slider/pc3.jpg'
import pc4 from '../../../image/picture slider/pc4.jpg'
import pc5 from '../../../image/picture slider/pc5.jpg'
import leftArrow from '../../../image/picture slider/leftArrow.PNG'
import rightArrow from '../../../image/picture slider/rightArrow.PNG'


class Slider extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [pc5, pc1, pc2, pc3, pc4, pc5, pc1],
            currentImagesIndex: 0,
            canGoPrev: false,
            canGoNext: true
        };

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide(e) {
        let newIndex = this.state.currentImagesIndex;
        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length - 1) {
                newIndex = this.state.currentImagesIndex + 1;
                this.state.canGoPrev = true;
            }
            if (newIndex === this.state.images.length - 1) {
                this.state.canGoNext = false;
            }

        } else {
            if (newIndex > 0) {
                newIndex = this.state.currentImagesIndex - 1;
                this.state.canGoNext = true;
            }
            if (newIndex === 0) {
                this.state.canGoPrev = false;
            }
        } if (this.state.currentImagesIndex === 5) {
            newIndex = this.state.currentImagesIndex = 1 ;
            this.state.canGoNext = true;
        } 

    //зробити слайди назад бескінечні
        this.setState({ currentImagesIndex: newIndex });


    };


    render() {
        return (
            <div className="sliderConteiner">
                <div className="carusel-conteiner">
                    <div className="carusel-slider">
                        {/* <img id="lastClone" src={pc5} alt="" className="slide"/>
                <img src={pc1} alt="" className="slide"/>
                <img src={pc2} alt="" className="slide"/>
                <img src={pc3} alt="" className="slide"/>
                <img src={pc4} alt="" className="slide"/>
                <img src={pc5} alt="" className="slide"/>
                <img id="firstClone" src={pc1} alt="" className="slide"/> */}
                        <img src={this.state.images[this.state.currentImagesIndex]} alt="" className="slide" />

                    </div>
                    <div className="btn-conteiner">
                        <button disabled={!this.state.canGoPrev} className="btn btnLeft" id="prev" data-direction="prev" onClick={this.nextSlide.bind(this)}><img src={leftArrow} class="arrow" /></button>
                        <button disabled={!this.state.canGoNext} className="btn btnRight" id="next" data-direction="next" onClick={this.nextSlide.bind(this)}><img src={rightArrow} class="arrow" /></button>
                    </div>
                    {this.state.currentImagesIndex}
                </div>
            </div>

        );
    }
}

export default Slider;


import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../../../PreviewCompatibleImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const config = {
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CustomerSlider = ({ images }) => {
  const items = images.map((image, index) => {
    return (
      <div className="company-item">
        <PreviewCompatibleImage imageInfo={image.node} />
      </div>
    );
  });

  return (
    <Slider className="container companies-container" {...config}>
      {items}
    </Slider>
  );
};

const ImageSlider = () => {
  return (
    <StaticQuery
      query={graphql`
        query AssetsPhotos {
          allFile(filter: { sourceInstanceName: { eq: "customer" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 234, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data);
        return (
          <div class="about-companies">
            <CustomerSlider images={data.allFile.edges} />
          </div>
        );
      }}
    />
  );
};

export default ImageSlider;

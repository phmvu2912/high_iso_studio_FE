import { Carousel } from 'antd';

// css cpn Carousel
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselClient = () => {
  return (
    <div className="bg-amber-100 h-full">
      <Carousel arrows dotPosition="left" infinite={false}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselClient
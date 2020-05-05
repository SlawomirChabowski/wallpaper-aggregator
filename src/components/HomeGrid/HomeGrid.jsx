import React, { PureComponent } from 'react';
import './HomeGrid.scss';
import ImageService from '../../services/ImageService';
import { Container } from 'shards-react';
import Thumbnail from '../Thumbnail/Thumbnail';

class HomeGrid extends PureComponent {
  constructor() {
    super();
    this.imgService = new ImageService();
    this.state = { images: [] };
  }

  componentDidMount() {
    this.getImages();
  }

  async getImages(page = 1) {
    this.setState({ images: await this.imgService.getImages(page) });
  }

  render() {
    return <>
      <Container fluid className="pl-5 pt-5 pb-3">
        <h3>Trending wallpapers</h3>
      </Container>
      <div className="main-view-container mx-1 mx-md-4">
        {this.state.images.map((img, idx) => <Thumbnail image={img} key={idx} />)}
      </div>
    </>;
  }
}

export default HomeGrid;

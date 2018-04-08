// @flow
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import { Divider, Grid, Header, Menu, Segment } from 'semantic-ui-react';

const portfolioImages = [{
  src: 'images/system_control_panel.png',
  thumbnail: 'images/system_control_panel.png',
  thumbnailWidth: 370,
  thumbnailHeight: 240,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'NeoGIG - Control Panel'
}, {
  src: 'images/neogig_start_page.png',
  thumbnail: 'images/neogig_start_page.png',
  thumbnailWidth: 370,
  thumbnailHeight: 240,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'NeoGIG - Start Page'
}, {
  src: 'images/neogig.png',
  thumbnail: 'images/neogig.png',
  thumbnailWidth: 370,
  thumbnailHeight: 240,
  tags: [{ value: 'mockup', title: 'mockup' }],
  caption: 'NeoGIG - Stores Layer'
}, {
  src: 'images/neodash_dashboard_project.png',
  thumbnail: 'images/neodash_dashboard_project.png',
  thumbnailWidth: 370,
  thumbnailHeight: 240,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'NeoDash - Reports overview'
}, {
  src: 'images/neodash_upload.png',
  thumbnail: 'images/neodash_upload.png',
  thumbnailWidth: 370,
  thumbnailHeight: 240,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'NeoDash - Files Upload'
}, {
  src: 'images/evenths_mobile_ui_1.png',
  thumbnail: 'images/evenths_mobile_ui_1.png',
  thumbnailWidth: 200,
  thumbnailHeight: 360,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'Evenths - Navigation'
}, {
  src: 'images/evenths_mobile_ui_2.png',
  thumbnail: 'images/evenths_mobile_ui_2.png',
  thumbnailWidth: 200,
  thumbnailHeight: 360,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'Evenths - Events'
}, {
  src: 'images/evenths_mobile_ui_3.png',
  thumbnail: 'images/evenths_mobile_ui_3.png',
  thumbnailWidth: 200,
  thumbnailHeight: 360,
  tags: [{ value: 'wireframe', title: 'wireframe' }],
  caption: 'Evenths - Notifications'
}, {
  src: 'images/obsis_sisbra.png',
  thumbnail: 'images/obsis_sisbra.png',
  thumbnailWidth: 260,
  thumbnailHeight: 370,
  tags: [{ value: 'site', title: 'site' }],
  caption: 'Sisbra - Observatório Sismológico de Brasília - http://obsis.unb.br/sisbra'
}, {
  src: 'images/cn_events_entrance.png',
  thumbnail: 'images/cn_events_entrance.png',
  thumbnailWidth: 260,
  thumbnailHeight: 420,
  tags: [{ value: 'site', title: 'site' }],
  caption: 'CN Kids - Entrance'
}, {
  src: 'images/cn_events_report.png',
  thumbnail: 'images/cn_events_report.png',
  thumbnailWidth: 260,
  thumbnailHeight: 420,
  tags: [{ value: 'site', title: 'site' }],
  caption: 'CN Kids - Report'
}];

const portfolioTagStyle = {
  fontSize: '0.78571429rem',
  verticalAlign: 'baseline',
  backgroundColor: '#E8E8E8',
  backgroundImage: 'none',
  padding: '0.5833em 0.833em',
  color: 'rgba(0, 0, 0, 0.6)',
  textTransform: 'none',
  fontWeight: 'bold',
  border: '0px solid transparent',
  transition: 'background 0.1s ease',
  lineHeight: '1.75rem'
};

interface IProfile {
  id: string;
}

export class Profile extends Component <IProfile> {
  state = {
    active: 'all'
  };

  _setCurrentActive (name) {
    this.setState({ active: name });
  }

  render () {
    return (
      <Segment id={this.props.id} vertical textAlign="center" className="stripe feature">
        <Header size="large">
          PROFILE / RECENT WORK
          <Header sub>
            <cite>"If you can dream it you can do it." - Walt Disney</cite>
          </Header>
        </Header>
        <Divider hidden section/>
        <Grid stackable textAlign="left" centered className="container">
          <Grid.Row>
            <Grid.Column width="16">
              <Menu secondary>
                <Menu.Item name='All' active={this.state.active === 'all'}
                           onClick={() => this._setCurrentActive('all')}/>
                <Menu.Item name='Sites' active={this.state.active === 'site'}
                           onClick={() => this._setCurrentActive('site')}/>
                <Menu.Item name='Mockups' active={this.state.active === 'mockup'}
                           onClick={() => this._setCurrentActive('mockup')}/>
                <Menu.Item name='Wireframes' active={this.state.active === 'wireframe'}
                           onClick={() => this._setCurrentActive('wireframe')}/>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="14">
              <Gallery
                images={this.state.active === 'all' ? portfolioImages : portfolioImages.filter(i => i.tags.some(t => t.value === this.state.active))}
                enableImageSelection={false} tagStyle={portfolioTagStyle}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default connect()(Profile);

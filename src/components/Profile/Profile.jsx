import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Divider, Grid, Header, Menu, Segment } from 'semantic-ui-react';
import Gallery from '../Galery/Galery';

const portfolioImages = [
  {
    src: 'images/neogig_start_page.png',
    thumbnail: 'images/neogig_start_page.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'NeoGIG - Start Page'
  },
  {
    src: 'images/system_control_panel.png',
    thumbnail: 'images/system_control_panel.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'NeoGIG - Control Panel'
  },
  {
    src: 'images/neogig.png',
    thumbnail: 'images/neogig.png',
    tags: [{ value: 'mockup', title: 'mockup' }],
    caption: 'NeoGIG - Stores Layer'
  },
  {
    src: 'images/neodash_dashboard_project.png',
    thumbnail: 'images/neodash_dashboard_project.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'NeoDash - Reports overview'
  },
  {
    src: 'images/neodash_upload.png',
    thumbnail: 'images/neodash_upload.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'NeoDash - Files Upload'
  },
  {
    src: 'images/neodash_dap.png',
    thumbnail: 'images/neodash_dap.png',
    tags: [{ value: 'mockup', title: 'mockup' }],
    caption: 'NeoDash - DAP'
  },
  {
    src: 'images/neodash_direct_sales.png',
    thumbnail: 'images/neodash_direct_sales.png',
    tags: [{ value: 'mockup', title: 'mockup' }],
    caption: 'NeoDash - Direct Sales'
  },
  {
    src: 'images/ottoge_1.png',
    thumbnail: 'images/ottoge_1.png',
    tags: [{ value: 'mockup', title: 'mockup' }],
    caption: 'Ottoge - Main Window'
  },
  {
    src: 'images/ottoge_2.png',
    thumbnail: 'images/ottoge_2.png',
    tags: [{ value: 'mockup', title: 'mockup' }],
    caption: 'Ottoge - Events'
  },
  {
    src: 'images/cn_events_entrance_cards.png',
    thumbnail: 'images/cn_events_entrance_cards.png',
    tags: [{ value: 'site', title: 'site' }],
    caption: 'CN Kids - Entrance Cards'
  },
  {
    src: 'images/cn_events_report.png',
    thumbnail: 'images/cn_events_report.png',
    tags: [{ value: 'site', title: 'site' }],
    caption: 'CN Kids - Reports'
  },
  {
    src: 'images/obsis_sisbra.png',
    thumbnail: 'images/obsis_sisbra.png',
    tags: [{ value: 'site', title: 'site' }],
    caption: 'Sisbra - Observatório Sismológico de Brasília - http://obsis.unb.br/sisbra'
  },
  {
    src: 'images/nist_login.png',
    thumbnail: 'images/nist_login.png',
    tags: [{ value: 'site', title: 'site' }],
    caption: 'NIST GmbH - Login - https://nist.de'
  },
  {
    src: 'images/nist_overview.png',
    thumbnail: 'images/nist_overview.png',
    tags: [{ value: 'site', title: 'site' }],
    caption: 'NIST GmbH - Overview - https://nist.de'
  },
  {
    src: 'images/evenths_mobile_ui_1.png',
    thumbnail: 'images/evenths_mobile_ui_1.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'Evenths - Navigation'
  },
  {
    src: 'images/evenths_mobile_ui_2.png',
    thumbnail: 'images/evenths_mobile_ui_2.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'Evenths - Events'
  },
  {
    src: 'images/evenths_mobile_ui_3.png',
    thumbnail: 'images/evenths_mobile_ui_3.png',
    tags: [{ value: 'wireframe', title: 'wireframe' }],
    caption: 'Evenths - Notifications'
  }
];

export class Profile extends Component {
  state = {
    active: 'all'
  };

  _setCurrentActive(name) {
    this.setState({ active: name });
  }

  render() {
    return (
      <Segment id={this.props.id} vertical textAlign="center" className="stripe feature">
        <Header size="large">
          PROFILE / RECENT WORK
          <Header sub>
            <cite>&quot;If you can dream it you can do it.&quot; - Walt Disney</cite>
          </Header>
        </Header>
        <Divider hidden section />
        <Grid stackable textAlign="left" centered className="container">
          <Grid.Row>
            <Grid.Column width="16">
              <Menu secondary>
                <Menu.Item
                  name="All"
                  active={this.state.active === 'all'}
                  onClick={() => this._setCurrentActive('all')}
                />
                <Menu.Item
                  name="Sites"
                  active={this.state.active === 'site'}
                  onClick={() => this._setCurrentActive('site')}
                />
                <Menu.Item
                  name="Mockups"
                  active={this.state.active === 'mockup'}
                  onClick={() => this._setCurrentActive('mockup')}
                />
                <Menu.Item
                  name="Wireframes"
                  active={this.state.active === 'wireframe'}
                  onClick={() => this._setCurrentActive('wireframe')}
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="14" textAlign="center">
              <Gallery
                images={
                  this.state.active === 'all'
                    ? portfolioImages
                    : portfolioImages.filter(i => i.tags.some(t => t.value === this.state.active))
                }
                showThumbnails
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.string.isRequired
};

export default Profile;

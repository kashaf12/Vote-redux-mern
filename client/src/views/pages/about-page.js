import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';


class AboutPage extends Component {
  render() {
    const { appName } = this.props;
    return (
      <Grid className='grid-container' container
        direction='row'
        justify='center'
        alignItems='flex-start'
      >

        {/* Page Title Area */}
        <Grid className='grid-item' item xs={12} sm={12}>
          <Typography className='page-title' variant='title'>
            About
          </Typography>
        </Grid>

        <Grid className='grid-container' container
          alignItems='flex-start'
          justify='center'
        >
          {/* Left Side Area */}
          <Grid id='left' className='grid-item' item xs={12} sm={6}>
            <h3 className='section-header' style={{ textAlign:'center'}}>
              Project
            </h3>
            <div className='list-item' style={{ display:'flex', justifyContent:'center' }}>
              <Avatar
                alt={appName}
                src={this.props.logoImgUrl}
                style={{ width:100, height:100 }}
              />
            </div>
            <ul className='list-wrapper'>
              <li className='list-item author'>{appName}</li>
              <li className='list-item'>
                Using a tech stack of React + Node.js + Express + MongoDB.
              </li>
              <li className='list-item'>
                Other key framework/packages used including Material-ui, React Router(v4), Mongoose.
              </li>
            </ul>
          </Grid>

          {/* Right Side Area */}
          <Grid id='right' className='grid-item' item xs={12} sm={6}>
            <h3 className='section-header' style={{ textAlign:'center'}}>
              Project Members
            </h3>
            <div className='about-list-item' style={{ display:'flex', justifyContent:'center' }}>
              <Avatar
                alt={this.props.creatorName1}
                src={this.props.creatorImgUrl1}
                style={{ width:100, height:100 }}
              />
            </div>
            <div className='list-item author'>{this.props.creatorName1}</div>
            <div className='about-list-item' style={{ display:'flex', justifyContent:'center' }}>
              <Avatar
                alt={this.props.creatorName2}
                src={this.props.creatorImgUrl2}
                style={{ width:100, height:100 }}
              />
            </div>
            <div className='list-item author'>{this.props.creatorName2}</div>
            <div className='about-list-item' style={{ display:'flex', justifyContent:'center' }}>
              <Avatar
                alt={this.props.creatorName3}
                src={this.props.creatorImgUrl3}
                style={{ width:100, height:100 }}
              />
            </div>
            <div className='list-item author'>{this.props.creatorName3}</div>
            
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

AboutPage.contextTypes = {
  router: PropTypes.object
};

AboutPage.propTypes = {
  appName: PropTypes.string.isRequired,
  creatorName1: PropTypes.string.isRequired,
  creatorName2: PropTypes.string.isRequired,
  creatorName3: PropTypes.string.isRequired,
  logoImgUrl: PropTypes.string.isRequired,
  creatorImgUrl1: PropTypes.string.isRequired,
  creatorImgUrl2: PropTypes.string.isRequired,
  creatorImgUrl3: PropTypes.string.isRequired,
};

export default connect(null,null)(AboutPage);
